'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { articles } from '../data'
import { formatDate } from '../lib/utils'

export default function Articles() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'sustainability':
        return 'from-green-500 to-emerald-500'
      case 'technology':
        return 'from-blue-500 to-cyan-500'
      case 'industry-insights':
        return 'from-purple-500 to-pink-500'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'sustainability':
        return 'Sustainability'
      case 'technology':
        return 'Technology'
      case 'industry-insights':
        return 'Industry Insights'
      default:
        return 'Article'
    }
  }

  return (
    <section id="articles" ref={ref} className="py-20 bg-white scroll-mt-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Latest <span className="text-primary">Articles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights and thoughts on technology, sustainability, and industry trends
          </p>
        </motion.div>

        {/* Featured Article */}
        {articles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Featured Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={articles[0].featuredImage}
                    alt={articles[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${getCategoryColor(articles[0].category)}`}>
                      Featured Article
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit bg-gradient-to-r ${getCategoryColor(articles[0].category)} text-white`}>
                    {getCategoryLabel(articles[0].category)}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {articles[0].title}
                  </h3>

                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {articles[0].excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={16} className="mr-2" />
                      <span>{formatDate(articles[0].publishedAt)}</span>
                      <Clock size={16} className="ml-4 mr-2" />
                      <span>{articles[0].readingTime} min read</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {articles[0].tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-neutral/20 text-charcoal rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-secondary transition-colors duration-200"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Articles */}
        {articles.length > 1 && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {articles.slice(1).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-white text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)}`}>
                      {getCategoryLabel(article.category)}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span className="mr-3">{formatDate(article.publishedAt)}</span>
                      <Clock size={14} className="mr-1" />
                      <span>{article.readingTime} min</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-neutral/20 text-charcoal rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center space-x-2 text-primary font-medium hover:text-secondary transition-colors duration-200"
                  >
                    <span>Read More</span>
                    <ArrowRight size={14} />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with My Latest Insights
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get notified when I publish new articles about sustainable technology,
              frontend development, and industry insights.
            </p>

            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-primary rounded-full font-semibold hover:bg-neutral transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}