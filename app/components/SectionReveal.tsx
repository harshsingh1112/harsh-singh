'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function SectionReveal({ children, className = '', id = '' }: Props) {
    return (
        <motion.section
            id={id}
            className={className}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // smooth ease-out
        >
            {children}
        </motion.section>
    );
}
