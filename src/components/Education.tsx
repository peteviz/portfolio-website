'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Download, BookOpen } from 'lucide-react'
import { education } from '../data'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="section-padding bg-gradient-to-br from-neutral/30 to-white dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg transition-colors duration-300">
      <div className="container" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-dark-text mb-6">
              Education & Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              My educational foundation combines environmental engineering with continuous learning
              in technology, providing a unique perspective on sustainable development.
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg dark:shadow-dark-border/50 p-8 hover:shadow-xl dark:hover:shadow-dark-border transition-all duration-300 border border-transparent dark:border-dark-border"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary dark:text-dark-text">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-600 dark:text-dark-text-secondary">{edu.field}</p>
                    </div>
                  </div>

                  {edu.gpa && (
                    <div className="text-right">
                      <div className="bg-secondary/10 dark:bg-secondary/20 px-3 py-1 rounded-full">
                        <span className="text-sm font-semibold text-secondary dark:text-secondary">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-charcoal dark:text-dark-text mb-2">
                    {edu.institution}
                  </h4>
                  <p className="text-gray-500 dark:text-dark-text-secondary text-sm mb-4">
                    {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
                  </p>
                </div>

                {edu.description && (
                  <p className="text-gray-600 dark:text-dark-text-secondary mb-6 leading-relaxed">
                    {edu.description}
                  </p>
                )}

                {/* Coursework */}
                {edu.coursework && (
                  <div className="mb-6">
                    <h5 className="text-md font-semibold text-primary dark:text-dark-text mb-3 flex items-center">
                      <BookOpen size={16} className="mr-2" />
                      Relevant Coursework
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <motion.span
                          key={course}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + courseIndex * 0.05 }}
                          className="px-2 py-1 bg-neutral/20 dark:bg-dark-border text-charcoal dark:text-dark-text rounded text-sm"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certificate Download */}
                {edu.certificateUrl && (
                  <motion.a
                    href={edu.certificateUrl}
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 text-primary dark:text-secondary hover:text-secondary dark:hover:text-secondary/80 transition-colors duration-200"
                  >
                    <Download size={16} />
                    <span className="text-sm font-medium">Download Certificate</span>
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Additional Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg dark:shadow-dark-border/50 p-8 border border-transparent dark:border-dark-border"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-dark-text mb-4">
                Continuous Learning & Development
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
                Beyond formal education, I actively pursue certifications and training programs
                to stay current with evolving technologies and sustainability practices.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "LEED Green Associate",
                  issuer: "USGBC",
                  status: "Certified",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "React Advanced Patterns",
                  issuer: "Epic React",
                  status: "Completed",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Web Performance Optimization",
                  issuer: "Google",
                  status: "Certified",
                  color: "from-orange-500 to-red-500"
                }
              ].map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-neutral/10 to-neutral/20 dark:from-dark-border/30 dark:to-dark-border/50 rounded-xl"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-charcoal dark:text-dark-text mb-2">{cert.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-dark-text-secondary mb-1">{cert.issuer}</p>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    cert.status === 'Certified' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                  }`}>
                    {cert.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
