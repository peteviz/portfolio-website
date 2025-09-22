'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '../data'
import GitHubCalendar from 'react-github-calendar'
import {useTheme} from "../contexts/ThemeContext";

const Hero = () => {
  // Extract GitHub username from URL
  const githubUsername = personalInfo.github.replace('https://github.com/', '').replace(/\/$/, '')
  const { theme, toggleTheme } = useTheme()

  return (
    <section id="hero" className="relative flex h-screen max-h-[100vh] flex-col items-center justify-center overflow-hidden text-center scroll-mt-16 bg-gradient-to-br from-gray-100 via-white to-blue-100 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg transition-colors duration-300">
      <div className="z-20">
        <h1 className="mb-4 text-5xl font-extrabold leading-tight text-gray-300 dark:text-dark-text font-montserrat">
          {personalInfo.name}
        </h1>
        <h2 className="mb-8 text-2xl font-semibold text-gray-300 dark:text-dark-text-secondary">
          {personalInfo.title}
        </h2>
        <div className="flex justify-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-gray-800 dark:bg-dark-surface px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-700 dark:hover:bg-dark-border"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
          <a
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-gray-800 dark:bg-dark-surface px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-700 dark:hover:bg-dark-border"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 rounded-lg bg-gray-800 dark:bg-dark-surface px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-700 dark:hover:bg-dark-border"
          >
            <Mail className="h-5 w-5" />
            Email
          </a>
        </div>
        {/* GitHub Contributions Calendar */}
        <div className="mt-8 flex justify-center">
          <GitHubCalendar
            username={githubUsername}
            blockSize={14}
            blockMargin={4}
            colorScheme={theme === 'light' ? 'light' : 'dark'}
            fontSize={14}
          />
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-400 dark:text-dark-text-secondary">
          Scroll Down
        </span>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        >
          <ChevronDown className="h-6 w-6 animate-bounce text-gray-300 dark:text-dark-text-secondary" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero