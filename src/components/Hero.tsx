'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '../data'
import GitHubCalendar from 'react-github-calendar'
import { useTheme } from "../contexts/ThemeContext";

const Hero = () => {
  // Extract GitHub username from URL
  const githubUsername = personalInfo.github.replace('https://github.com/', '').replace(/\/$/, '')
  const { theme } = useTheme()

  return (
    <section id="hero" className="relative flex h-screen max-h-[100vh] flex-col items-center justify-center overflow-hidden text-center scroll-mt-16 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="z-20 px-6">
        <h1 className="mb-4 text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-dark-text tracking-tight">
          {personalInfo.name}
        </h1>
        <h2 className="mb-10 text-xl md:text-2xl font-medium text-gray-500 dark:text-dark-text-secondary">
          {personalInfo.title}
        </h2>
        <div className="flex justify-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-dark-text border border-gray-200 dark:border-dark-border rounded-full hover:border-gray-400 dark:hover:border-gray-600 transition-colors duration-200"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-dark-text border border-gray-200 dark:border-dark-border rounded-full hover:border-gray-400 dark:hover:border-gray-600 transition-colors duration-200"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors duration-200"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
        </div>
        {/* GitHub Contributions Calendar */}
        <div className="mt-12 flex justify-center">
          <GitHubCalendar
            username={githubUsername}
            blockSize={12}
            blockMargin={3}
            colorScheme={theme === 'light' ? 'light' : 'dark'}
            fontSize={12}
          />
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-xs font-medium text-gray-400 dark:text-dark-text-secondary uppercase tracking-wider">
          Scroll
        </span>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 6 }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        >
          <ChevronDown className="h-5 w-5 text-gray-400 dark:text-dark-text-secondary" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero