'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface SocialPreviewProps {
    children: React.ReactNode;
    name: string;
    href: string;
    username: string;
    color: string;
    image?: string;
    buttonClassName?: string;
}

export default function SocialPreview({ children, name, href, username, color, image, buttonClassName }: SocialPreviewProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute bottom-full mb-4 z-50 w-64 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden ${image ? 'p-0' : ''}`}
                    >
                        {image ? (
                            <div className="relative w-full h-auto">
                                <div className="relative w-full aspect-[4/3]">
                                    <Image
                                        src={`/static/images/${image}`}
                                        alt={name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-3 bg-white dark:bg-gray-900">
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 ${buttonClassName || color.replace('text-', 'bg-').split(' ')[0]} shadow-lg`}
                                    >
                                        <span>Visit Profile</span>
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <>
                                {/* Header/Cover */}
                                <div className={`h-20 w-full ${color.replace('text-', 'bg-').split(' ')[0]} opacity-20 relative`}>
                                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-white/10 dark:to-black/10`} />
                                </div>

                                {/* Content */}
                                <div className="px-6 pb-6 -mt-8 relative">
                                    <div className={`w-16 h-16 rounded-full bg-white dark:bg-gray-800 p-1 shadow-lg flex items-center justify-center mx-auto mb-3 border-4 border-white dark:border-gray-950`}>
                                        {children}
                                    </div>

                                    <div className="text-center">
                                        <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg">{name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{username}</p>

                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 ${color.replace('text-', 'bg-').split(' ')[0]} shadow-lg`}
                                        >
                                            <span>Visit Profile</span>
                                            <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Arrow */}
                        <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 rotate-45 border-r border-b border-gray-200 dark:border-gray-800" />
                    </motion.div>
                )}
            </AnimatePresence>

            {children}
        </div>
    );
}
