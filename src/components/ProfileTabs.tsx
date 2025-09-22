'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'

const tabs = [
	{ name: 'About', component: About },
	{ name: 'Skills', component: Skills },
	{ name: 'Experience', component: Experience },
	{ name: 'Education', component: Education },
]

export default function ProfileTabs() {
	const [selected, setSelected] = useState(0)

	const ActiveComponent = tabs[selected].component

	// Handle navigation to specific tabs via anchor
	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash
			const tabIndex = tabs.findIndex(tab =>
				`#${tab.name.toLowerCase()}` === hash
			)
			if (tabIndex !== -1) {
				setSelected(tabIndex)
			}
		}

		window.addEventListener('hashchange', handleHashChange)
		handleHashChange() // Check initial hash

		return () => {
			window.removeEventListener('hashchange', handleHashChange)
		}
	}, [])

	const handleTabClick = (index: number, tabName: string) => {
		setSelected(index)
		// Update URL hash without scrolling
		window.history.replaceState(null, '', `#${tabName.toLowerCase()}`)
	}

	return (
		<section id="about" className="w-full bg-gray-50 dark:bg-dark-surface scroll-mt-16 transition-colors duration-300">
			{/* Tab Buttons - Fixed Position */}
			<div className="w-full bg-white dark:bg-dark-bg shadow-sm border-b dark:border-dark-border top-16 z-10 transition-colors duration-300">
				<div className="container mx-auto px-4 py-6">
					<div className="flex justify-center">
						<div className="flex space-x-2 bg-gray-100 dark:bg-dark-surface rounded-xl p-1 transition-colors duration-300">
							{tabs.map((tab, idx) => (
								<button
									key={tab.name}
									onClick={() => handleTabClick(idx, tab.name)}
									className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50
                    ${selected === idx
											? 'bg-primary text-white shadow-md transform scale-105'
											: 'bg-transparent text-gray-600 dark:text-dark-text-secondary hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary'
										}`}
								>
									{tab.name}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Tab Content with Animation - Full Width */}
			<div className="w-full">
				<AnimatePresence mode="wait">
					<motion.div
						key={selected}
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{
							duration: 0.5,
							ease: "easeOut"
						}}
						className="w-full"
					>
						<div id={tabs[selected].name.toLowerCase()} className="w-full">
							<ActiveComponent />
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	)
}
