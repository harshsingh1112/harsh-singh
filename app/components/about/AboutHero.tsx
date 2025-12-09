'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutHero() {
    return (
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Column: Image with Glow */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto w-full max-w-sm lg:mr-auto lg:max-w-md"
            >
                {/* Glow Effect */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-2xl filter dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20" />

                <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-white/20 shadow-2xl backdrop-blur-sm dark:border-white/10">
                    <Image
                        src="/static/images/profile-new.jpg"
                        alt="Harsh Singh"
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        priority
                    />
                </div>
            </motion.div>

            {/* Right Column: Text Content */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 text-center lg:text-left"
            >
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                    About Me
                </h2>

                <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                    <p>
                        I’m <span className="font-semibold text-gray-900 dark:text-white">Harsh Singh</span>.
                        I build practical AI systems and create content that simplifies complex ideas.
                    </p>
                    <p>
                        I enjoy working with models, refining prompts, and turning data into useful products.
                        I also love producing clean, engaging content that connects with people and adds real value.
                    </p>
                </div>

                {/* Integrated Occupation/Role Badge */}
                <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                    <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                        AI Engineer
                    </div>
                    <div className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                        Content Creator
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
