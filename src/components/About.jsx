import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            className="px-8 py-16 md:px-12 md:py-24 bg-background-light dark:bg-black/10 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/50 rounded-full mix-blend-screen filter blur-3xl opacity-10 dark:opacity-10 animate-pulse"></div>
            <div
                className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/50 rounded-full mix-blend-screen filter blur-3xl opacity-10 dark:opacity-10 animate-delayed-pulse"
                style={{ animationDelay: "1000ms" }}
            ></div>
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 text-glow"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        A glimpse into my journey, philosophy, and what drives me as a
                        developer.
                    </motion.p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <motion.div
                            className="bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark p-6 rounded-lg transition-all duration-300 hover:border-purple-500/20 hover:shadow-lg hover:scale-105"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                My Journey
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Hello! I'm Nuhath Khan Lahif, a MERN stack developer with a
                                deep passion for creating elegant, efficient, and
                                user-friendly web applications. My journey into coding
                                began with a fascination for transforming ideas into
                                tangible digital experiences that can impact people
                                globally.
                            </p>
                        </motion.div>
                        <motion.div
                            className="bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark p-6 rounded-lg transition-all duration-300 hover:border-purple-500/20 hover:shadow-lg hover:scale-105"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                Core Philosophy
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                My philosophy is rooted in continuous learning and
                                creative problem-solving. I thrive on challenges and
                                believe the best solutions come from a blend of technical
                                expertise, creative thinking, and a user-centric approach.
                                I'm always exploring new technologies to broaden my
                                skillset.
                            </p>
                        </motion.div>
                    </div>
                    <div className="space-y-8 md:mt-16">
                        <motion.div
                            className="bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark p-6 rounded-lg transition-all duration-300 hover:border-purple-500/20 hover:shadow-lg hover:scale-105"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                Aspirations &amp; Interests
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Beyond coding, I'm an avid follower of tech trends, a
                                lover of minimalist design, and enjoy contributing to
                                open-source projects. My goal is to leverage my skills to
                                build applications that are not only functional and robust
                                but also provide a seamless and enjoyable experience. I'm
                                excited to be a part of shaping the future of the web.
                            </p>
                        </motion.div>
                        <motion.div
                            className="bg-card-dark/50 border border-border-dark/50 p-6 rounded-lg text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-lg text-white italic">
                                "Code is like humor. When you have to explain it, it’s bad."
                            </p>
                            <span className="mt-2 block text-sm text-white">
                                - Cory House
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
