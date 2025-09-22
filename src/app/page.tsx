'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import ProfileTabs from '../components/ProfileTabs'
import Projects from '../components/Projects'
import SustainabilityProjects from '../components/SustainabilityProjects'
import Articles from '../components/Articles'
// import Contact from '../components/Contact'
import Footer from '../components/Footer'
import LoadingScreen from '../components/LoadingScreen'


export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.main
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300"
        >
          <Navigation />
          <Hero />
          <ProfileTabs />
          <Projects />
          <SustainabilityProjects />
          <Articles />
          {/*<Contact />*/}
          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  )
}