'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Leaf,
  Code,
  MapPin,
  Mail,
  Target,
  Users,
  ArrowRight
} from 'lucide-react'
import { personalInfo } from '../data'
import Image from 'next/image'

const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const values = [
    {
      icon: Leaf,
      title: "Sustainability First",
      description: "Creating technology solutions that promote environmental responsibility."
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Writing clean, efficient code with modern best practices."
    },
    {
      icon: Users,
      title: "Collaborative Innovation",
      description: "Teamwork to deliver impactful solutions that make a difference."
    },
    {
      icon: Target,
      title: "Purpose-Driven Development",
      description: "Building applications that solve real-world problems."
    }
  ]

  return (
    <section ref={ref} className='py-16 bg-white dark:bg-dark-bg transition-colors duration-300'>
      <div className='container mx-auto px-6'>
        {/* Main Content Grid */}
        <div className='grid lg:grid-cols-5 gap-16 mb-16'>
          {/* Profile Image & Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className='lg:col-span-2'
          >
            <div className='mb-8'>
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                width={280}
                height={280}
                className='rounded-2xl grayscale hover:grayscale-0 transition-all duration-500'
                priority
              />
            </div>

            {/* Contact Information */}
            <div className='space-y-3'>
              <div className='flex items-center gap-3 text-gray-600 dark:text-dark-text-secondary'>
                <MapPin className='w-4 h-4 text-gray-400' />
                <span className='text-sm'>{personalInfo.location}</span>
              </div>
              <div className='flex items-center gap-3 text-gray-600 dark:text-dark-text-secondary'>
                <Mail className='w-4 h-4 text-gray-400' />
                <span className='text-sm'>{personalInfo.email}</span>
              </div>
            </div>
          </motion.div>

          {/* Bio & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='lg:col-span-3'
          >
            {/* <h3 className='text-sm font-medium text-gray-400 dark:text-dark-text-secondary uppercase tracking-wider mb-3'>
              About
            </h3> */}
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-6'>
              {personalInfo.title}
            </h2>
            <p className='text-lg text-gray-600 dark:text-dark-text-secondary leading-relaxed mb-8'>
              {personalInfo.bio}
            </p>

            <div className='border-l-2 border-gray-200 dark:border-dark-border pl-6'>
              <p className='text-gray-600 dark:text-dark-text-secondary leading-relaxed italic'>
                "To leverage cutting-edge frontend technologies in creating sustainable,
                user-friendly applications that drive positive environmental impact in
                the construction industry."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values - Clean list instead of colored cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mb-8'
        >
          <h3 className='text-sm font-medium text-gray-400 dark:text-dark-text-secondary uppercase tracking-wider mb-8'>
            Core Values
          </h3>
          <div className='grid md:grid-cols-2 gap-x-16 gap-y-8'>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className='flex gap-4'
              >
                <div className='flex-shrink-0 mt-1'>
                  <value.icon className='w-5 h-5 text-primary dark:text-dark-text' />
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 dark:text-dark-text mb-1'>
                    {value.title}
                  </h4>
                  <p className='text-gray-500 dark:text-dark-text-secondary text-sm leading-relaxed'>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About