'use client';

import { motion } from 'framer-motion';

interface SkillCategory {
    title: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        title: 'Programming & Frameworks',
        skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Streamlit', 'REST APIs'],
    },
    {
        title: 'AI & Data Science',
        skills: ['Machine Learning', 'Deep Learning', 'CNNs', 'RNNs', 'LSTMs', 'Transformers', 'Computer Vision', 'Generative AI'],
    },
    {
        title: 'Data Handling & Visualization',
        skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    },
    {
        title: 'Cloud & Deployments',
        skills: ['AWS', 'Docker'],
    },
    {
        title: 'Tools',
        skills: ['Git', 'Jupyter', 'VS Code', 'MySQL', 'MongoDB'],
    },
    {
        title: 'Soft Skills',
        skills: ['Communication', 'Problem-solving', 'Teamwork', 'Adaptability', 'Time management', 'Client handling'],
    },
    {
        title: 'Content Creation & Video Editing',
        skills: ['Short-form content creation', 'Video editing (Premiere Pro / CapCut)', 'Basic color correction', 'Motion graphics', 'Text animation', 'Audio cleanup', 'Thumbnail design'],
    },
    {
        title: 'Sales / Business',
        skills: ['Lead outreach and follow-ups', 'Negotiation', 'Customer relationship management', 'Presenting and explaining ideas'],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="w-full py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl mb-4">
                    Skills & Expertise
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    A comprehensive toolkit for building intelligent solutions.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`group relative overflow-hidden rounded-3xl border border-gray-200/50 bg-white/40 p-8 backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] dark:border-gray-800/50 dark:bg-gray-900/30 dark:hover:border-pink-500/30 dark:hover:shadow-[0_0_50px_rgba(236,72,153,0.2)] ${index === 6 || index === 7 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-500/5 via-violet-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors group-hover:text-pink-600 dark:group-hover:text-pink-400">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center rounded-lg bg-gray-100/80 dark:bg-gray-800/80 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors group-hover:bg-white dark:group-hover:bg-gray-800 group-hover:text-pink-600 dark:group-hover:text-pink-300 border border-transparent group-hover:border-pink-200 dark:group-hover:border-pink-900/50"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
