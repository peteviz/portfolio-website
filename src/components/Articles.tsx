'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence, inView } from 'framer-motion'
import { Calendar, Clock, ArrowRight, X, Maximize2 } from 'lucide-react'
import { articles, personalInfo } from '../data'
import { formatDate } from '../lib/utils'

export default function Articles() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <section id="articles" ref={ref} className="py-24 bg-gray-50 dark:bg-dark-surface scroll-mt-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h3 className='text-sm font-medium text-gray-400 dark:text-dark-text-secondary uppercase tracking-wider mb-3'>
              Research
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-4">
              Publications
            </h2>
            <p className="text-lg text-gray-500 dark:text-dark-text-secondary max-w-2xl">
              Academic research and contributions to sustainable construction technology.
            </p>
          </motion.div>

          {/* Publications List */}
          <div className="space-y-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row gap-6 py-6 border-b border-gray-200 dark:border-dark-border">
                  {/* Featured Image */}
                  {article.featuredImage && (
                    <div
                      className="w-full md:w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg cursor-pointer relative group/image"
                      onClick={() => setSelectedImage(article.featuredImage)}
                    >
                      <img
                        src={article.featuredImage}
                        alt={article.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      {/* Expand Indicator */}
                      <div className="absolute top-2 right-2 p-1.5 bg-black/50 rounded-full text-white backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover/image:opacity-100 transition-opacity duration-300">
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-dark-text-secondary mb-2">
                      <span className="font-medium uppercase tracking-wider">Research Paper</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{article.readingTime} min read</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 dark:text-dark-text-secondary mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-dark-text-secondary bg-gray-100 dark:bg-dark-bg rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {article.externalUrl ? (
                        <a
                          href={article.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-dark-text transition-colors"
                        >
                          <span>Read</span>
                          <ArrowRight size={14} />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-dark-text transition-colors cursor-pointer">
                          <span>Read</span>
                          <ArrowRight size={14} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA - Simple, no gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='flex flex-col sm:flex-row items-center justify-between py-8 border-t border-gray-100 dark:border-dark-border mt-16'
          >
            <div>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-dark-text mb-1'>
                Let's Build Something Together
              </h3>
              <p className='text-gray-500 dark:text-dark-text-secondary'>
                Open to collaborating on impactful projects.
              </p>
            </div>
            <div className='flex gap-3 mt-6 sm:mt-0'>
              <a
                href={`mailto:${personalInfo.email}`}
                className='inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors duration-200'
              >
                Get In Touch
                <ArrowRight className='w-4 h-4' />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Full size publication"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </>
  )
}