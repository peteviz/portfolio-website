'use client'

import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-primary flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col items-center"
        >
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-4"
          >
            <Image
              src='https://media.licdn.com/dms/image/v2/D4E03AQFmennV76E4Hg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728550256630?e=1761177600&v=beta&t=_webWKDsFO-WkEdW0ygePy6ZNsm0GuoXBmJhWSf-LS0'
              alt="Portrait"
              width={286}
              height={286}
              className="rounded-full shadow-lg border-4 border-secondary mx-auto"
              priority
            />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 min-h-[56px] font-montserrat">
            Akinde Peter
          </h1>
          <p className="text-xl text-neutral opacity-80 min-h-[32px] font-fira">
            <Typewriter
              words={["Innovation Meets Sustainability"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </p>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-secondary rounded-full max-w-xs mx-auto"
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="mt-8 w-12 h-12 border-3 border-white border-t-transparent rounded-full mx-auto"
        />
      </div>
    </motion.div>
  )
}