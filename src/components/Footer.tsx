'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
// import { personalInfo } from '@/data'
import { personalInfo } from '../data/index'
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Articles', href: '#articles' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Frontend Development',
    'React/Next.js Applications',
    'Sustainability Consulting',
    'LEED Certification Support',
    'Environmental Impact Analysis',
    'Green Building Solutions'
  ]

  return (
    <footer className="bg-gradient-to-br from-primary to-charcoal text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand & About */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Akinde Peter</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Frontend Developer & Sustainability Expert passionate about creating
                innovative web solutions that contribute to environmental conservation.
                Bridging the gap between cutting-edge technology and sustainable practices.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {personalInfo.socialLinks.map((link) => {
                const Icon = link.icon === 'github' ? Github : link.icon === 'linkedin' ? Linkedin : Mail
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-all duration-300"
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>

            {/* Contact Info */}
            <div className="text-sm text-gray-300 space-y-2">
              <p className="flex items-center">
                <Mail size={16} className="mr-2" />
                {personalInfo.email}
              </p>
              <p>{personalInfo.location}</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-300 text-sm flex items-center"
            >
              © {currentYear} Akinde Peter. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mx-1 text-red-400"
              >
                <Heart size={14} />
              </motion.span>
              for a sustainable future.
            </motion.p>

            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm"
              >
                Built with Next.js & Tailwind CSS
              </motion.p>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <ArrowUp size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </footer>
  )
}
