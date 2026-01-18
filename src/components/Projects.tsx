'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data'

const Projects = () => {
	const ref = useRef<HTMLDivElement>(null)
	const inView = useInView(ref, { once: true })

	return (
		<section
			id='projects'
			className='py-24 bg-white dark:bg-dark-bg scroll-mt-16'
			ref={ref}
		>
			<div className='container mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.5 }}
					className='mb-16'
				>
					<h3 className='text-sm font-medium text-gray-400 dark:text-dark-text-secondary uppercase tracking-wider mb-3'>
						Work
					</h3>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text'>
						Featured Projects
					</h2>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{projects.map((project, i) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							className='group'
						>
							<div className='border-b border-gray-100 dark:border-dark-border pb-8'>
								<h3 className='text-xl font-semibold text-gray-900 dark:text-dark-text mb-2'>
									{project.title}
								</h3>
								<p className='text-gray-600 dark:text-dark-text-secondary mb-4 leading-relaxed'>
									{project.description}
								</p>

								<div className='flex flex-wrap gap-2 mb-4'>
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className='px-3 py-1 text-xs font-medium text-gray-600 dark:text-dark-text-secondary bg-gray-100 dark:bg-dark-surface rounded-full'
										>
											{tech}
										</span>
									))}
								</div>

								<div className='flex items-center gap-4'>
									{project.liveUrl && (
										<a
											href={project.liveUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-dark-text transition-colors'
										>
											<ExternalLink className='h-4 w-4' />
											Demo
										</a>
									)}
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-dark-text transition-colors'
										>
											<Github className='h-4 w-4' />
											Code
										</a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects