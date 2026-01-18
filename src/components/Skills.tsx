'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data'

const Skills = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  // Group skills by category
  const groupedSkills: Record<string, typeof skills> = skills.reduce((acc, skill) => {
    const category = skill.category || 'other'
    if (!acc[category]) acc[category] = []
    acc[category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  const categoryLabels: Record<string, string> = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    tools: 'Tools & DevOps',
    sustainability: 'Sustainability',
    programming: 'Programming Languages',
    'ML/AI': 'Machine Learning & AI'
  }

  const categoryOrder = ['frontend', 'backend', 'sustainability', 'ML/AI', 'tools', 'programming']

  return (
    <section ref={ref} className="py-16 bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className='text-sm font-medium text-gray-400 dark:text-dark-text-secondary uppercase tracking-wider mb-3'>
            Expertise
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-500 dark:text-dark-text-secondary max-w-2xl">
            A comprehensive toolkit spanning frontend development, sustainability expertise, and emerging technologies.
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="grid md:grid-cols-2 gap-8">
          {categoryOrder.map((categoryKey, categoryIndex) => {
            const categorySkills = groupedSkills[categoryKey]
            if (!categorySkills || categorySkills.length === 0) return null

            return (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-dark-bg rounded-xl p-6 border border-gray-100 dark:border-dark-border"
              >
                <h3 className="text-sm font-semibold text-primary dark:text-dark-text uppercase tracking-wider mb-6">
                  {categoryLabels[categoryKey] || categoryKey}
                </h3>

                <div className="space-y-4">
                  {categorySkills
                    .sort((a, b) => b.level - a.level)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium text-gray-900 dark:text-dark-text">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-dark-text-secondary">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 dark:bg-dark-border rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.1 + index * 0.05, ease: "easeOut" }}
                            className="h-full bg-primary dark:bg-gray-500 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 grid grid-cols-3 gap-8 max-w-xl mx-auto text-center"
        >
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-dark-text">
              {skills.filter(s => s.level >= 90).length}
            </div>
            <div className="text-sm text-gray-500 dark:text-dark-text-secondary mt-1">Expert</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-dark-text">
              {Object.keys(groupedSkills).length}
            </div>
            <div className="text-sm text-gray-500 dark:text-dark-text-secondary mt-1">Categories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-dark-text">
              {skills.length}
            </div>
            <div className="text-sm text-gray-500 dark:text-dark-text-secondary mt-1">Total</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
