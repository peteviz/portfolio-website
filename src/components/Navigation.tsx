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
    // { name: 'Skills', href: '#skills' },
    // { name: 'Experience', href: '#experience' },
    // { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Articles', href: '#articles' },
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
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-md dark:shadow-dark-border/20">
      <div className="text-2xl font-bold text-primary dark:text-white">
        <a href="#hero" onClick={() => smoothScrollTo('#hero')}>
          {personalInfo.name.split(' ')[0]}
        </a>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault()
              smoothScrollTo(item.href)
            }}
            className={`transition-all duration-300 hover:text-primary dark:hover:text-secondary font-medium ${
              activeSection === item.href 
                ? 'text-primary dark:text-secondary border-b-2 border-primary dark:border-secondary' 
                : 'text-gray-700 dark:text-dark-text-secondary'
            }`}
          >
            {item.name}
          </a>
        ))}
        <a
          href={personalInfo.resumeUrl}
          download
          className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 dark:bg-secondary dark:hover:bg-secondary/90 text-white rounded-lg transition-all duration-300"
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
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 dark:hover:bg-dark-border transition-colors"
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
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md shadow-lg dark:shadow-dark-border/20"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo(item.href)
                  }}
                  className={`block p-3 rounded-md transition-colors ${
                    activeSection === item.href 
                      ? 'bg-primary dark:bg-secondary text-white' 
                      : 'hover:bg-gray-100 dark:hover:bg-dark-surface dark:text-dark-text'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href={personalInfo.resumeUrl}
                download
                className="flex items-center justify-center gap-2 p-3 text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
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