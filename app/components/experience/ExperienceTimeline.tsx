'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

const experiences = [
    {
        company: 'Janasys Technologies',
        role: 'Intern',
        location: 'Dubai',
        period: 'Dec 2025 - Jan 2025',
        isCurrent: true,
        details: [
            'Learned how enterprise servers and workstations are configured and assembled.',
            'Worked with components such as CPUs, memory, cooling systems, heatsinks, and ports based on client requirements.',
            'Understood the workflow of client requests, sales, order processing, and invoicing.',
            'Assisted in building custom servers, workstations, and laptops for delivery to clients.',
        ],
    },
    {
        company: 'INADEV',
        role: 'AI/ML Intern',
        location: 'Remote',
        period: 'June 2025 - Aug 2025',
        isCurrent: false,
        details: [
            'Worked with advanced Large Language Models (LLMs) including Claude 3.5 and OpenAI GPT-4o for automation and intelligence features.',
            'Applied computer vision techniques for document parsing, image understanding, and information extraction.',
            'Designed effective prompts and structured output formats to improve LLM accuracy and reliability.',
            'Built GenAI-driven KYC document extraction modules using OCR and LLM-based interpretation.',
            'Contributed to Video KYC solution components using GenAI frameworks for face, document, and behavior analysis.',
            'Supported deployment workflows, tested system performance, and assisted in MVP development cycles.',
        ],
    },
    {
        company: 'Aaruush',
        role: 'Organizer - National Level Techno-management Fest',
        location: 'SRM Chennai',
        period: 'Sept 2022 - Sept 2025',
        isCurrent: false,
        details: [
            'Coordinated with 50+ speakers, industry leaders, and artists to deliver impactful event experiences.',
            'Secured and managed brand partnerships, leading sponsorship campaigns that boosted youth engagement by 30%.',
            'Drove experiential marketing strategies, resulting in a 30% increase in event visibility across digital platforms and campus hotspots, with a reach of 10,000+ students.',
            'Orchestrated operational planning and cross-functional teamwork to ensure seamless execution of 80+ events.',
        ],
    },
];

export default function ExperienceTimeline() {
    return (
        <div className="relative ml-3 space-y-16 border-l border-gray-200 dark:border-gray-800 md:ml-6">
            {experiences.map((exp, index) => (
                <TimelineItem key={index} exp={exp} index={index} />
            ))}
        </div>
    );
}

function TimelineItem({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
    const isCurrent = exp.isCurrent;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Timeline Dot */}
            <span
                className={`absolute -left-[5px] top-6 h-3 w-3 rounded-full border border-white dark:border-gray-950 ${isCurrent
                    ? 'bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,1)]'
                    : 'bg-gray-300 dark:bg-gray-700'
                    }`}
            >
                {isCurrent && (
                    <span className="absolute -inset-1 animate-ping rounded-full bg-pink-500 opacity-75"></span>
                )}
            </span>

            {/* Card */}
            <motion.div
                layout // Enable layout animation for smooth height changes
                initial="rest"
                animate={isHovered ? 'hover' : 'rest'}
                variants={{
                    rest: {
                        scale: 1,
                        boxShadow: isCurrent
                            ? '0 0 30px rgba(236, 72, 153, 0.3)'
                            : '0 0 0 rgba(0,0,0,0)',
                        borderColor: isCurrent
                            ? 'rgba(236, 72, 153, 0.6)'
                            : 'rgba(229, 231, 235, 0.5)',
                    },
                    hover: {
                        scale: 1.02,
                        boxShadow: isCurrent
                            ? '0 0 40px rgba(236, 72, 153, 0.4)'
                            : '0 0 20px rgba(168, 85, 247, 0.15)',
                        borderColor: isCurrent
                            ? 'rgba(236, 72, 153, 0.8)'
                            : 'rgba(168, 85, 247, 0.4)',
                    },
                }}
                className={`
          group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-md transition-colors duration-300
          ${isCurrent
                        ? 'bg-white/10 dark:bg-gray-800/40'
                        : 'bg-white/5 dark:bg-gray-900/40'
                    }
        `}
            >
                {/* Ambient background glow */}
                <div
                    className={`absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[100px] transition-opacity duration-700 pointer-events-none
            ${isCurrent
                            ? 'bg-pink-500/20 opacity-100'
                            : 'bg-purple-500/10 opacity-0 group-hover:opacity-100'
                        }
          `}
                ></div>

                <div className="relative z-10">
                    <motion.div layout="position" className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <h3
                            className={`text-xl font-bold tracking-tight ${isCurrent
                                ? 'bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'
                                : 'text-gray-900 dark:text-gray-100'
                                }`}
                        >
                            {exp.company}
                        </h3>
                        <span
                            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${isCurrent
                                ? 'bg-pink-50 text-pink-700 ring-pink-600/20 dark:bg-pink-900/30 dark:text-pink-400 dark:ring-pink-400/30'
                                : 'bg-gray-50 text-gray-600 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20'
                                }`}
                        >
                            {exp.period}
                        </span>
                    </motion.div>

                    <motion.div layout="position" className="mb-4 text-lg font-medium text-pink-600 dark:text-pink-400">
                        {exp.role}
                    </motion.div>

                    <motion.div layout="position" className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <svg
                            className="mr-1.5 h-4 w-4 shrink-0 opacity-60"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        {exp.location}
                    </motion.div>

                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    {exp.details.map((detail, i) => (
                                        <li key={i} className="flex gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pink-500"></span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    );
}
