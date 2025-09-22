'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Leaf, TrendingUp, Users, Target } from 'lucide-react'
import { projects } from '../data'

export default function SustainabilityProjects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const sustainabilityProjects = projects.filter(project => project.category === 'sustainability')

    const impactStats = [
        {
            icon: Leaf,
            value: "25%",
            label: "Average Carbon Reduction",
            description: "Across all sustainability projects"
        },
        {
            icon: Users,
            value: "50+",
            label: "Companies Helped",
            description: "Construction firms using our solutions"
        },
        {
            icon: TrendingUp,
            value: "30%",
            label: "Efficiency Improvement",
            description: "In environmental monitoring"
        },
        {
            icon: Target,
            value: "15",
            label: "LEED Certifications",
            description: "Projects assisted to certification"
        }
    ]

    return (
        <section id="sustainability" ref={ref} className="py-20 bg-gradient-to-br from-green-50 to-blue-50 scroll-mt-16">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Sustainability <span className="text-green-600">Impact</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Driving environmental responsibility through innovative construction technology solutions
                    </p>
                </motion.div>

                {/* Impact Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {impactStats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            className="text-center bg-white rounded-xl p-6 shadow-lg"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4">
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-2">{stat.value}</h3>
                            <p className="font-semibold text-charcoal mb-1">{stat.label}</p>
                            <p className="text-sm text-gray-500">{stat.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Featured Sustainability Projects */}
                <div className="space-y-12">
                    {sustainabilityProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                            className={`grid lg:grid-cols-2 gap-12 items-center ${
                                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                            }`}
                        >
                            {/* Project Image */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                            >
                                <div className="aspect-video bg-white rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                    <Leaf className="w-4 h-4 text-white" />
                                </div>
                            </motion.div>

                            {/* Project Info */}
                            <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                                <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                                    Sustainability Focus
                                </div>

                                <h3 className="text-3xl font-bold text-primary mb-4">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                    {project.longDescription || project.description}
                                </p>

                                {/* Challenge, Solution, Impact */}
                                <div className="space-y-4 mb-6">
                                    {project.challenges && (
                                        <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                            <h4 className="font-semibold text-red-800 mb-2">Challenge</h4>
                                            <p className="text-red-700 text-sm">{project.challenges}</p>
                                        </div>
                                    )}

                                    {project.solution && (
                                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                            <h4 className="font-semibold text-blue-800 mb-2">Solution</h4>
                                            <p className="text-blue-700 text-sm">{project.solution}</p>
                                        </div>
                                    )}

                                    {project.impact && (
                                        <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                            <h4 className="font-semibold text-green-800 mb-2">Environmental Impact</h4>
                                            <p className="text-green-700 text-sm">{project.impact}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Technologies */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-charcoal mb-3">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-neutral/30 text-charcoal rounded-full text-sm"
                                            >
                          {tech}
                        </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Links */}
                                <div className="flex space-x-4">
                                    {project.liveUrl && (
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors duration-300"
                                        >
                                            View Project
                                        </motion.a>
                                    )}
                                    {project.githubUrl && (
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-3 border-2 border-green-500 text-green-500 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
                                        >
                                            View Code
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Building Technology for a Sustainable Tomorrow
                        </h3>
                        <p className="text-lg opacity-90 max-w-3xl mx-auto">
                            Every line of code, every user interface, and every optimization is an opportunity
                            to contribute to environmental conservation. My mission is to create digital solutions
                            that don't just solve business problems, but actively contribute to a more sustainable world.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}