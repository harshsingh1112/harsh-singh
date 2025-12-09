'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

const education = [
    {
        institution: 'SRM Institute Of Science and Technology',
        location: 'Chennai',
        role: 'B.Tech in Computer Science',
        period: 'June 2022 - May 2026',
        isCurrent: true,
    },
    {
        institution: 'The Indian High School, Dubai',
        location: 'Dubai',
        role: 'High School',
        period: 'April 2008 - 2022',
        isCurrent: false,
    },
];

export default function EducationTimeline() {
    return (
        <div className="relative ml-3 space-y-16 border-l border-gray-200 dark:border-gray-800 md:ml-6">
            {education.map((edu, index) => (
                <TimelineItem key={index} edu={edu} index={index} />
            ))}
        </div>
    );
}

function TimelineItem({ edu, index }: { edu: (typeof education)[0]; index: number }) {
    const isCurrent = edu.isCurrent;
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
                    ? 'bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,1)]'
                    : 'bg-gray-300 dark:bg-gray-700'
                    }`}
            >
                {isCurrent && (
                    <span className="absolute -inset-1 animate-ping rounded-full bg-blue-500 opacity-75"></span>
                )}
            </span>

            {/* Card */}
            <motion.div
                layout
                initial="rest"
                animate={isHovered ? 'hover' : 'rest'}
                variants={{
                    rest: {
                        scale: 1,
                        boxShadow: isCurrent
                            ? '0 0 30px rgba(59, 130, 246, 0.3)'
                            : '0 0 0 rgba(0,0,0,0)',
                        borderColor: isCurrent
                            ? 'rgba(59, 130, 246, 0.6)'
                            : 'rgba(229, 231, 235, 0.5)',
                    },
                    hover: {
                        scale: 1.02,
                        boxShadow: isCurrent
                            ? '0 0 40px rgba(59, 130, 246, 0.4)'
                            : '0 0 20px rgba(168, 85, 247, 0.15)',
                        borderColor: isCurrent
                            ? 'rgba(59, 130, 246, 0.8)'
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
                            ? 'bg-blue-500/20 opacity-100'
                            : 'bg-purple-500/10 opacity-0 group-hover:opacity-100'
                        }
          `}
                ></div>

                <div className="relative z-10">
                    <motion.div layout="position" className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <h3
                            className={`text-xl font-bold tracking-tight ${isCurrent
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent'
                                : 'text-gray-900 dark:text-gray-100'
                                }`}
                        >
                            {edu.institution}
                        </h3>
                        <span
                            className={`text-sm font-medium ${isCurrent ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400'
                                }`}
                        >
                            {edu.period}
                        </span>
                    </motion.div>

                    <motion.div layout="position" className="mb-4 text-base font-medium text-gray-700 dark:text-gray-300">
                        {edu.role} • {edu.location}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
