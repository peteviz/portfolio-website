'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Code,
  Settings,
  Leaf,
  Database,
  Star,
} from 'lucide-react'
import { skills } from '../data'

interface CategoryData {
  key: string
  label: string
  icon: any
  color: string
  skills: any[]
  averageLevel: number
}

const Skills = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { key: 'all', label: 'All Skills', icon: Star, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { key: 'frontend', label: 'Frontend', icon: Code, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { key: 'tools', label: 'Tools', icon: Settings, color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
    { key: 'sustainability', label: 'Sustainability', icon: Leaf, color: 'bg-gradient-to-r from-emerald-500 to-green-600' },
    { key: 'backend', label: 'Backend', icon: Database, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { key: 'GPLs', label: 'GPLs', icon: Database, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { key: 'ML/AI', label: 'ML/AI', icon: Database, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
  ]

  const getFilteredSkills = () => {
    if (selectedCategory === 'all') return skills
    return skills.filter(skill => skill.category === selectedCategory)
  }

  const getSkillIcon = (iconName: string) => {
    const iconMap: { [key: string]: string } = {
      react: '⚛️',
      nextjs: '▲',
      typescript: '📘',
      javascript: '🟨',
      html5: '🏗️',
      css3: '🎨',
      tailwind: '💨',
      sass: '💅',
      vue: '💚',
      git: '🔄',
      webpack: '📦',
      vite: '⚡',
      figma: '🎯',
      adobe: '🅰️',
      nodejs: '🟢',
      express: '🚄',
      leaf: '🌱',
      building: '🏢',
      earth: '🌍',
      recycle: '♻️',
    }
    return iconMap[iconName] || '🔧'
  }

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return 'bg-gradient-to-r from-emerald-400 to-green-500'
    if (level >= 80) return 'bg-gradient-to-r from-blue-400 to-cyan-500'
    if (level >= 70) return 'bg-gradient-to-r from-amber-400 to-orange-500'
    return 'bg-gradient-to-r from-slate-400 to-gray-500'
  }

  const getSkillsByCategory = () => {
    return categories.slice(1).reduce((acc, category) => {
      const categorySkills = skills.filter(skill => skill.category === category.key)
      if (categorySkills.length > 0) {
        acc[category.key] = {
          ...category,
          skills: categorySkills,
          averageLevel: Math.round(categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length)
        }
      }
      return acc
    }, {} as Record<string, CategoryData>)
  }

  const skillsByCategory = getSkillsByCategory()

  return (
    <section ref={ref} className="py-2 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-text mb-4">
            Skills & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto mb-6">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              onClick={() => setSelectedCategory(category.key)}
              className={`flex items-center gap-2 px-4 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.key
                  ? `${category.color} text-white shadow-lg scale-105`
                  : 'bg-white dark:bg-dark-surface text-gray-600 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-border shadow-md hover:shadow-lg'
              }`}
            >
              <category.icon size={18} />
              <span>{category.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                selectedCategory === category.key 
                  ? 'bg-white/20 text-white' 
                  : 'bg-gray-100 dark:bg-dark-border text-gray-600 dark:text-dark-text-secondary'
              }`}>
                {category.key === 'all' ? skills.length : skills.filter(s => s.category === category.key).length}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        {selectedCategory === 'all' ? (
          /* Grouped by Category View */
          <div className="space-y-8">
            {Object.entries(skillsByCategory).map(([categoryKey, categoryData], index) => {
              const typedData = categoryData as CategoryData
              return (
                <motion.div
                  key={categoryKey}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-dark-surface rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:border dark:border-dark-border"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 ${typedData.color} rounded-xl`}>
                      <typedData.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text">{typedData.label}</h3>
                      <p className="text-sm text-gray-600 dark:text-dark-text-secondary">
                        {typedData.skills.length} skills • {typedData.averageLevel}% average proficiency
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {typedData.skills.map((skill: any, skillIndex: number) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.4 + skillIndex * 0.05 }}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-dark-bg rounded-lg hover:bg-gray-100 dark:hover:bg-dark-border transition-colors duration-200"
                      >
                        <div className="text-2xl">{getSkillIcon(skill.icon)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-gray-800 dark:text-dark-text truncate">{skill.name}</h4>
                            <span className="text-sm font-bold text-gray-600 dark:text-dark-text-secondary ml-2">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 1.2, delay: 0.6 + skillIndex * 0.1, ease: "easeOut" }}
                              className={`h-full rounded-full ${getSkillLevelColor(skill.level)}`}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        ) : (
          /* Single Category View */
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-dark-surface rounded-2xl p-8 shadow-xl dark:border dark:border-dark-border"
          >
            {(() => {
              const categoryData = categories.find(cat => cat.key === selectedCategory)
              const filteredSkills = getFilteredSkills()

              return (
                <>
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 ${categoryData?.color} rounded-2xl`}>
                      {categoryData && <categoryData.icon className="w-8 h-8 text-white" />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text">{categoryData?.label} Skills</h3>
                      <p className="text-gray-600 dark:text-dark-text-secondary">{filteredSkills.length} technologies in this category</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-bg dark:to-dark-surface rounded-xl hover:from-gray-100 hover:to-gray-200 dark:hover:from-dark-surface dark:hover:to-dark-border transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-2xl">{getSkillIcon(skill.icon)}</div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-gray-800 dark:text-dark-text truncate">{skill.name}</h4>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-gray-600 dark:text-dark-text-secondary">{skill.level}%</span>
                              {skill.level >= 90 && <Star className="w-3 h-3 text-yellow-500 fill-current" />}
                            </div>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-3">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                            className={`h-full rounded-full ${getSkillLevelColor(skill.level)} relative overflow-hidden`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              )
            })()}
          </motion.div>
        )}

        {/* Compact Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{skills.filter(skill => skill.level >= 90).length}</div>
              <div className="text-sm opacity-90">Expert Level</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{skills.filter(skill => skill.category === 'frontend').length}</div>
              <div className="text-sm opacity-90">Frontend</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{skills.filter(skill => skill.category === 'sustainability').length}</div>
              <div className="text-sm opacity-90">Sustainability</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{skills.length}</div>
              <div className="text-sm opacity-90">Total Skills</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

