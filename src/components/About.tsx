'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Leaf, 
  Code, 
  Building2, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Download,
  Heart,
  Target,
  Lightbulb,
  Users
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
      description: "Committed to creating technology solutions that promote environmental responsibility and sustainable practices in every project.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Code,
      title: "Technical Excellence", 
      description: "Passionate about writing clean, efficient code and staying current with the latest frontend technologies and best practices.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Collaborative Innovation",
      description: "Believe in the power of teamwork and cross-functional collaboration to deliver impactful solutions that make a difference.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Target,
      title: "Purpose-Driven Development",
      description: "Focus on building applications that solve real-world problems and contribute positively to society and the environment.",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    }
  ]

  const highlights = [
    {
      icon: Building2,
      title: "Construction Tech Expert",
      description: "Bridging technology and construction industry needs"
    },
    {
      icon: Award,
      title: "Sustainability Advocate",
      description: "Promoting green practices through digital solutions"
    },
    {
      icon: Heart,
      title: "User-Centered Design",
      description: "Creating intuitive experiences that users love"
    },
    {
      icon: Lightbulb,
      title: "Innovation Mindset",
      description: "Always exploring new technologies and approaches"
    }
  ]

  return (
    <section ref={ref} className='py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg transition-colors duration-300'>
      <div className='container mx-auto px-6'>
        {/* Header Section */}
        {/*<motion.div*/}
        {/*  ref={ref}*/}
        {/*  initial={{ opacity: 0, y: 30 }}*/}
        {/*  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}*/}
        {/*  transition={{ duration: 0.6 }}*/}
        {/*  className='text-center mb-16'*/}
        {/*>*/}
        {/*  <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>*/}
        {/*    About <span className='text-primary'>Me</span>*/}
        {/*  </h2>*/}
        {/*  <div className='w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8'></div>*/}
        {/*</motion.div>*/}

        {/* Main Content Grid */}
        <div className='grid lg:grid-cols-2 gap-12  mb-20'>
          {/* Profile Image & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-center lg:text-left'
          >
            <div className='relative inline-block mb-6'>
              <Image
                src='https://media.licdn.com/dms/image/v2/D4E03AQFmennV76E4Hg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728550256630?e=1761177600&v=beta&t=_webWKDsFO-WkEdW0ygePy6ZNsm0GuoXBmJhWSf-LS0'
                alt={personalInfo.name}
                width={300}
                height={300}
                className='rounded-2xl shadow-xl'
                priority
              />
              <div className='absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center'>
                <Heart className='w-4 h-4 text-white' />
              </div>
            </div>

            {/* Contact Information */}
              <div className='space-y-3 mb-6'>
                  <div className='flex items-center justify-center lg:justify-start gap-3 text-gray-600 dark:text-dark-text'>
                      <MapPin className='w-5 h-5 text-primary dark:text-white' />
                      <span>{personalInfo.location}</span>
                  </div>
                  <div className='flex items-center justify-center lg:justify-start gap-3 text-gray-600 dark:text-dark-text'>
                      <Mail className='w-5 h-5 text-primary dark:text-white' />
                      <span>{personalInfo.email}</span>
                  </div>
                  {personalInfo.phone && (
                      <div className='flex items-center justify-center lg:justify-start gap-3 text-gray-600 dark:text-dark-text'>
                          <Phone className='w-5 h-5 text-primary dark:text-white' />
                          <span>{personalInfo.phone}</span>
                      </div>
                  )}
              </div>

            {/*/!* Download Resume Button *!/*/}
            {/*<motion.a*/}
            {/*  href={personalInfo.resumeUrl}*/}
            {/*  download*/}
            {/*  whileHover={{ scale: 1.05 }}*/}
            {/*  whileTap={{ scale: 0.95 }}*/}
            {/*  className='inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300'*/}
            {/*>*/}
            {/*  <Download className='w-5 h-5' />*/}
            {/*  Download Resume*/}
            {/*</motion.a>*/}
          </motion.div>

          {/* Bio & Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className='text-2xl font-bold text-gray-800 dark:text-dark-text mt-4 mb-4'>
              {personalInfo.title}
            </h3>
            <p className='text-lg text-gray-600 dark:text-dark-text-secondary leading-relaxed mb-6'>
              {personalInfo.bio}
            </p>
            
            <div className='bg-white dark:bg-dark-surface rounded-xl p-6 shadow-lg border border-gray-100 dark:border-dark-border transition-colors duration-300'>
              <h4 className='text-xl font-semibold text-gray-800 dark:text-dark-text mb-4'>My Mission</h4>
              <p className='text-gray-600 dark:text-dark-text-secondary leading-relaxed'>
                To leverage cutting-edge frontend technologies in creating sustainable,
                user-friendly applications that drive positive environmental impact in 
                the construction industry. I believe that every line of code is an 
                opportunity to build a better, more sustainable future.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='mb-20'
        >
          <h3 className='text-3xl font-bold text-center text-gray-800 dark:text-dark-text mb-12'>
            Core Values & Principles
          </h3>
          <div className='grid md:grid-cols-2 gap-8'>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className={`${value.bgColor} dark:bg-dark-surface rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group border dark:border-dark-border`}
              >
                <div className='flex items-start gap-4'>
                  <div className={`p-3 bg-white dark:bg-dark-bg rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`w-6 h-6 ${value.color}`} />
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-xl font-semibold text-gray-800 dark:text-dark-text mb-2'>
                      {value.title}
                    </h4>
                    <p className='text-gray-600 dark:text-dark-text-secondary leading-relaxed'>
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Highlights */}
        {/*<motion.div*/}
        {/*  initial={{ opacity: 0, y: 50 }}*/}
        {/*  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}*/}
        {/*  transition={{ duration: 0.6, delay: 1.0 }}*/}
        {/*>*/}
        {/*  <h3 className='text-3xl font-bold text-center text-gray-800 mb-12'>*/}
        {/*    Professional Highlights*/}
        {/*  </h3>*/}
        {/*  <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>*/}
        {/*    {highlights.map((highlight, index) => (*/}
        {/*      <motion.div*/}
        {/*        key={highlight.title}*/}
        {/*        initial={{ opacity: 0, scale: 0.9 }}*/}
        {/*        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}*/}
        {/*        transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}*/}
        {/*        whileHover={{ y: -5 }}*/}
        {/*        className='bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group'*/}
        {/*      >*/}
        {/*        <div className='inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl mb-4 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300'>*/}
        {/*          <highlight.icon className='w-6 h-6 text-primary' />*/}
        {/*        </div>*/}
        {/*        <h4 className='text-lg font-semibold text-gray-800 mb-2'>*/}
        {/*          {highlight.title}*/}
        {/*        </h4>*/}
        {/*        <p className='text-gray-600 text-sm'>*/}
        {/*          {highlight.description}*/}
        {/*        </p>*/}
        {/*      </motion.div>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</motion.div>*/}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className='text-center mt-20'
        >
          <div className='bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white'>
            <h3 className='text-2xl md:text-3xl font-bold mb-4'>
              Let's Build Something Amazing Together
            </h3>
            <p className='text-lg opacity-90 mb-6 max-w-2xl mx-auto'>
              I'm always excited to collaborate on projects that make a positive impact. 
              Whether it's a sustainable web application or an innovative frontend solution, 
              let's create something meaningful.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300'
              >
                <Mail className='w-5 h-5' />
                Get In Touch
              </motion.a>
              <motion.a
                href={personalInfo.github}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300'
              >
                <Code className='w-5 h-5' />
                View My Work
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About