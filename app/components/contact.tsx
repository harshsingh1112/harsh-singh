'use client';

import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import SocialPreview from './contact/SocialPreview';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'harshsingh34418@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  interface SocialItem {
    name: string;
    icon: any;
    href: string;
    username: string;
    color: string;
    image?: string;
    buttonClassName?: string;
  }

  const socials: SocialItem[] = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/harshsingh11/', username: '@harshsingh11', color: 'text-blue-500', image: 'linkedin-preview.png', buttonClassName: 'bg-blue-600' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/harshsingh1112', username: '@harshsingh1112', color: 'text-gray-900 dark:text-white', image: 'github-preview.png', buttonClassName: 'bg-gray-900' },
    { name: 'X', icon: Twitter, href: 'https://x.com/darkisticharsh', username: '@darkisticharsh', color: 'text-blue-400', image: 'x-preview.png', buttonClassName: 'bg-black' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/darkisticharsh', username: '@darkisticharsh', color: 'text-pink-500', image: 'instagram-preview.png', buttonClassName: 'bg-pink-600' },
  ];

  return (
    <section id="contact" className="relative h-[80vh] w-full py-20 px-8 md:px-32 xl:px-36 dark:bg-black dark:text-white bg-white text-black flex flex-col justify-center items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center gap-12 text-center">

        {/* Creative Email Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="group relative cursor-pointer"
          onClick={copyEmail}
        >
          <h2 className="text-4xl md:text-6xl xl:text-8xl font-bold tracking-tighter bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
            {email}
          </h2>
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
            {copied ? 'Copied to clipboard!' : 'Click to copy'}
          </span>
        </motion.div>

        {/* Social Icons */}
        <div className="flex items-center gap-8 mt-8">
          {socials.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: 'spring' }}
            >
              <SocialPreview
                name={social.name}
                href={social.href}
                username={social.username}
                color={social.color}
                image={social.image}
                buttonClassName={social.buttonClassName}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-4 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group ${social.color}`}
                >
                  <social.icon size={32} className="group-hover:scale-110 transition-transform" />
                  <span className="sr-only">{social.name}</span>
                </a>
              </SocialPreview>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
