'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import { experiences } from '../data'
import { formatDate } from '../lib/utils'

const Experience = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="my-32 scroll-mt-24 flex flex-col gap-10"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-bold leading-tight">
          Experience
        </h2>
        <p className="text-lg text-muted-foreground">
          Here's a glimpse of my professional journey.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {experiences.map((experience) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col gap-4 p-6 rounded-lg border"
          >
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold">
                  {experience.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {experience?.company}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-lg font-medium">
                  {formatDate(experience.startDate)} -{' '}
                  {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {experience.location}
                </p>
              </div>
            </div>

            <ul className="list-disc pl-5 text-muted-foreground">
              {experience?.points?.map((point, index) => (
                <li key={index} className="text-base">
                  {point}
                </li>
              ))}
            </ul>

            {experience.website && (
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-6 top-6"
              >
                <ExternalLink className="h-5 w-5 text-muted-foreground" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
