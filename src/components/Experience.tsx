'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, ChevronDown, ChevronUp, Briefcase } from 'lucide-react'
import { experiences } from '../data'
import { formatDate } from '../lib/utils'

const Experience = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  // Track collapsed items instead (default is expanded)
  const [collapsedItems, setCollapsedItems] = useState<Record<string, boolean>>({})

  const toggleExpanded = (id: string) => {
    setCollapsedItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate)
    const end = endDate ? new Date(endDate) : new Date()
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12

    if (years > 0 && remainingMonths > 0) {
      return `${years} yr${years > 1 ? 's' : ''} ${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`
    } else if (years > 0) {
      return `${years} yr${years > 1 ? 's' : ''}`
    } else {
      return `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`
    }
  }

  return (
    <section
      ref={ref}
      className="py-16 bg-white dark:bg-dark-bg scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="h-5 w-5 text-primary dark:text-dark-text" />
            <h3 className='text-sm font-medium text-gray-400 dark:text-dark-text-secondary uppercase tracking-wider'>
              Career
            </h3>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-500 dark:text-dark-text-secondary max-w-2xl">
            A journey through impactful roles combining development with sustainable innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-dark-border" />

          <div className="flex flex-col gap-12">
            {experiences.map((experience, index) => {
              // Default is expanded (not collapsed), so check if it's NOT in collapsedItems
              const isExpanded = !collapsedItems[experience.id]

              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 md:pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-4 top-2 w-2 h-2 bg-primary dark:bg-dark-text rounded-full -translate-x-1/2" />

                  {/* Experience Content */}
                  <div>
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text">
                          {experience.position}
                        </h3>
                        <p className="text-primary dark:text-gray-400 font-medium">
                          {experience.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-dark-text-secondary">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {formatDate(experience.startDate)} – {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                        </span>
                        <span className="text-gray-300 dark:text-dark-border">•</span>
                        <span>{calculateDuration(experience.startDate, experience.endDate)}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-dark-text-secondary mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-dark-text-secondary bg-gray-100 dark:bg-dark-surface rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div>
                      <button
                        onClick={() => toggleExpanded(experience.id)}
                        className="flex items-center gap-1 text-sm text-gray-500 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-dark-text font-medium transition-colors mb-3"
                      >
                        <span>Achievements</span>
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? "auto" : 0,
                          opacity: isExpanded ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-2 pl-4">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="text-gray-600 dark:text-dark-text-secondary text-sm leading-relaxed relative before:content-['–'] before:absolute before:-left-4 before:text-gray-400"
                            >
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

