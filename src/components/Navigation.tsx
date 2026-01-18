'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { personalInfo } from '../data'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#articles' },
  ]

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId.replace('#', ''))
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false)
      }
    }

    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(`#${currentSection}`)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-sm border-b border-gray-100 dark:border-dark-border">
      <div className="text-lg font-semibold text-gray-900 dark:text-white">
        <a href="#hero" onClick={() => smoothScrollTo('#hero')}>
          {personalInfo.name.split(' ')[0]}
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault()
              smoothScrollTo(item.href)
            }}
            className={`text-sm font-medium transition-colors duration-200 ${activeSection === item.href
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-500 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-white'
              }`}
          >
            {item.name}
          </a>
        ))}
        <a
          href={personalInfo.resumeUrl}
          download
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors duration-200"
        >
          <Download className="w-4 h-4" />
          Resume
        </a>
        <ThemeToggle />
      </div>

      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-dark-border transition-colors"
        >
          {open ? <X className="w-5 h-5 text-gray-700 dark:text-dark-text" /> : <Menu className="w-5 h-5 text-gray-700 dark:text-dark-text" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-dark-bg border-b border-gray-100 dark:border-dark-border"
          >
            <div className="flex flex-col p-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo(item.href)
                  }}
                  className={`p-3 rounded-lg text-sm font-medium transition-colors ${activeSection === item.href
                      ? 'bg-gray-100 dark:bg-dark-surface text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-dark-text-secondary hover:bg-gray-50 dark:hover:bg-dark-surface'
                    }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href={personalInfo.resumeUrl}
                download
                className="flex items-center justify-center gap-2 p-3 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation