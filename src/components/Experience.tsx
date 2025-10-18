'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, ChevronDown, ChevronUp, Briefcase, Clock, Award, TrendingUp } from 'lucide-react'
import { experiences } from '../data'
import { formatDate, cn } from '../lib/utils'

const Experience = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.6
      }
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'development':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700'
      case 'sustainability':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700'
      case 'hybrid':
        return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800/30 dark:text-gray-300 dark:border-gray-700'
    }
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
      className="relative my-32 scroll-mt-24 flex flex-col gap-12"
    >
      {/* Animated background elements */}
      <motion.div
        style={{ y }}
        className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl opacity-20 -z-10"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-full blur-3xl opacity-20 -z-10"
      />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4 text-center md:text-left"
      >
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"
          >
            <Briefcase className="h-6 w-6 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
        </div>
        <p className="text-lg md:text-xl text-gray-600 dark:text-dark-text-secondary max-w-2xl">
          A journey through impactful roles where I've combined cutting-edge development
          with sustainable innovation to drive meaningful change.
        </p>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap gap-6 justify-center md:justify-start mt-4"
        >
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-dark-text-secondary">
            <Calendar className="h-4 w-4" />
            <span>{experiences.length} Positions</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-dark-text-secondary">
            <Clock className="h-4 w-4" />
            <span>4+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-dark-text-secondary">
            <TrendingUp className="h-4 w-4" />
            <span>Full-Stack & Sustainability Expert</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 dark:from-blue-800/50 dark:via-purple-800/50 dark:to-green-800/50" />

        <div className="flex flex-col gap-8">
          {experiences.map((experience, index) => {
            const isExpanded = expandedItems[experience.id]

            return (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="relative pl-20 md:pl-24"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.1 * index, type: "spring", stiffness: 200 }}
                  className="absolute left-6 md:left-10 top-6 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-dark-bg shadow-lg z-10"
                />

                {/* Experience Card */}
                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={cn(
                    "group relative bg-white dark:bg-dark-surface rounded-2xl border border-gray-200 dark:border-dark-border p-6 md:p-8",
                    "hover:border-blue-200 dark:hover:border-blue-700/50 transition-all duration-300",
                    "shadow-lg hover:shadow-xl dark:shadow-dark-border/50"
                  )}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-dark-text">
                          {experience.position}
                        </h3>
                        <span className={cn(
                          "px-3 py-1 rounded-full text-xs font-medium border",
                          getTypeColor(experience.type)
                        )}>
                          {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                        </span>
                      </div>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        {experience.company}
                      </p>
                      <p className="text-gray-600 dark:text-dark-text-secondary leading-relaxed">
                        {experience.description}
                      </p>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-2 text-right">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-dark-text">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {formatDate(experience.startDate)} - {' '}
                          {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-dark-text-secondary">
                        <Clock className="h-4 w-4" />
                        <span>{calculateDuration(experience.startDate, experience.endDate)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-dark-text mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.1 * index + 0.05 * techIndex }}
                          className="px-3 py-1.5 bg-neutral/20 dark:bg-dark-border text-gray-700 dark:text-dark-text text-sm font-medium rounded-lg border border-gray-200 dark:border-dark-border hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-dark-text flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Key Achievements
                      </h4>
                      <button
                        onClick={() => toggleExpanded(experience.id)}
                        className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            <span>Show Less</span>
                            <ChevronUp className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            <span>Show More</span>
                            <ChevronDown className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? "auto" : "120px",
                        opacity: 1
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden relative"
                    >
                      <ul className="space-y-3">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.1 * index + 0.1 * achievementIndex }}
                            className="flex items-start gap-3 text-gray-700 dark:text-dark-text-secondary leading-relaxed"
                          >
                            <div className="w-2 h-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm md:text-base">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {!isExpanded && experience.achievements.length > 2 && (
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-dark-surface to-transparent pointer-events-none" />
                      )}
                    </motion.div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-purple-50/0 dark:from-blue-900/0 dark:to-purple-900/0 group-hover:from-blue-50/30 group-hover:to-purple-50/30 dark:group-hover:from-blue-900/10 dark:group-hover:to-purple-900/10 transition-all duration-300 pointer-events-none" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/30"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-3">
          Ready to Collaborate?
        </h3>
        <p className="text-gray-600 dark:text-dark-text-secondary mb-6 max-w-2xl mx-auto">
          I'm always excited to take on new challenges that combine innovative technology
          with sustainable solutions. Let's build something amazing together.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Experience

