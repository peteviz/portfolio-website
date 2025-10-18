'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { ExternalLink, Github, Filter, Eye } from 'lucide-react'
import { projects } from '../data'
import { Project } from '../types'

const Projects = () => {
	const [selected, setSelected] = useState(0)
	const ref = useRef<HTMLDivElement>(null)
	const inView = useInView(ref, { once: true })

	return (
		<section
			id='projects'
			className='min-h-screen py-24 lg:py-32 scroll-mt-16'
			ref={ref}
		>
			<div className='container'>
				<motion.h2
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6 }}
					className='mb-16 text-center'
				>
					<span className='text-4xl font-extrabold leading-tight text-primary dark:text-dark-text sm:text-5xl'>
						My Projects
					</span>
				</motion.h2>

				<div className='grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16'>
					{projects.map((project, i) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6 }}
							className='group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-100 dark:border-dark-border bg-white dark:bg-dark-surface shadow-md dark:shadow-zinc-900/30'
						>
							<div className='flex-1 p-8'>
								<h3 className='text-xl font-semibold text-zinc-900 dark:text-dark-text'>{project.title}</h3>
								<p className='mt-2 text-sm text-zinc-600 dark:text-dark-text-secondary'>
									{project.description}
								</p>

								<div className='mt-4 flex flex-wrap gap-2'>
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className='rounded-full bg-zinc-100 dark:bg-dark-bg px-3 py-1 text-xs font-medium text-zinc-700 dark:text-dark-text'
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							<div className='absolute inset-x-0 top-0 -translate-y-full transform-gpu overflow-hidden rounded-2xl opacity-90 transition-all duration-500 group-hover:translate-y-0'>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.6 }}
									className='flex h-full w-full items-center justify-center gap-4'
								>
									<a
										href={project.liveUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center gap-2 rounded-full bg-white dark:bg-dark-surface px-4 py-2 text-sm font-semibold text-primary dark:text-dark-text shadow-md transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-dark-border'
									>
										<ExternalLink className='h-5 w-5' />
										Live Demo
									</a>

									<a
										href={project.githubUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center gap-2 rounded-full bg-white dark:bg-dark-surface px-4 py-2 text-sm font-semibold text-primary dark:text-dark-text shadow-md transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-dark-border'
									>
										<Github className='h-5 w-5' />
										Github Repo
									</a>
								</motion.div>
							</div>

							{/*<div className='absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>*/}
							{/*	<motion.div*/}
							{/*		initial={{ y: 20, opacity: 0 }}*/}
							{/*		animate={{ y: 0, opacity: 1 }}*/}
							{/*		transition={{ duration: 0.6 }}*/}
							{/*		className='flex flex-col items-center gap-4'*/}
							{/*	>*/}
							{/*		/!*<span className='rounded-full bg-white dark:bg-dark-surface px-3 py-1 text-xs font-medium text-primary dark:text-dark-text shadow-md'>*!/*/}
							{/*		/!*	{project.category}*!/*/}
							{/*		/!*</span>*!/*/}

							{/*		<a*/}
							{/*			href={project.liveUrl}*/}
							{/*			target='_blank'*/}
							{/*			rel='noopener noreferrer'*/}
							{/*			className='flex items-center gap-2 rounded-full bg-primary  px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-charcoal '*/}
							{/*		>*/}
							{/*			<Eye className='h-5 w-5' />*/}
							{/*			View Project*/}
							{/*		</a>*/}
							{/*	</motion.div>*/}
							{/*</div>*/}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects