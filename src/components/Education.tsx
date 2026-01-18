'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, BookOpen } from 'lucide-react'
import { education } from '../data'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    { title: "Introducing Generative AI with AWS", issuer: "AWS" },
    { title: "Data Structures & Algorithms", issuer: "Coursera" },
    { title: "CSRD Fundamentals", issuer: "CSRD Institute" }
  ]

  return (
    <section id="education" className="py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h3 className='text-sm font-medium text-gray-400 dark:text-dark-text-secondary uppercase tracking-wider mb-3'>
              Background
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text">
              Education & Certifications
            </h2>
          </motion.div>

          {/* Education Items */}
          <div className="space-y-12 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-gray-100 dark:border-dark-border pb-8 last:border-0"
              >
                <div className="flex items-start gap-4 mb-4">
                  <GraduationCap className="w-5 h-5 text-primary dark:text-dark-text mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-600 dark:text-dark-text-secondary">{edu.field}</p>
                      </div>
                      {edu.gpa && (
                        <span className="text-sm font-medium text-gray-500 dark:text-dark-text-secondary">
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </div>

                    <p className="text-primary dark:text-gray-400 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-dark-text-secondary mb-4">
                      {new Date(edu.startDate).getFullYear()} – {new Date(edu.endDate).getFullYear()}
                    </p>

                    {edu.description && (
                      <p className="text-gray-600 dark:text-dark-text-secondary mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                    )}

                    {/* Coursework */}
                    {edu.coursework && (
                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-dark-text-secondary mb-2">
                          <BookOpen size={14} />
                          <span>Relevant Coursework</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-dark-text-secondary bg-gray-100 dark:bg-dark-surface rounded-full"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-primary dark:text-dark-text" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text">
                Certifications
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="py-4 border-b border-gray-100 dark:border-dark-border md:border-0"
                >
                  <h4 className="font-medium text-gray-900 dark:text-dark-text text-sm mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
                    {cert.issuer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
