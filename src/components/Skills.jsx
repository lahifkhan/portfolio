import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

const progressVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
        width: width,
        transition: {
            duration: 1,
            ease: "easeOut",
            delay: 0.2
        }
    })
};

const SkillCategory = ({ title, skills }) => (
    <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {title}
        </h3>
        <div className="space-y-4">
            {skills.map((skill) => (
                <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                        </span>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            {skill.percentage}%
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                            custom={`${skill.percentage}%`}
                            variants={progressVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        ></motion.div>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const skillData = [
        {
            title: "MERN Stack",
            skills: [
                { name: "MongoDB", percentage: 85 },
                { name: "Express.js", percentage: 90 },
                { name: "React js", percentage: 95 },
                { name: "Next.js", percentage: 52 },
            ]
        },
        {
            title: "Frontend Technologies",
            skills: [
                { name: "HTML & CSS", percentage: 98 },
                { name: "JavaScript", percentage: 94 },
                { name: "Tailwind CSS", percentage: 96 },
                { name: "shadCn", percentage: 70 },
            ]
        },
        {
            title: "Tools & Other Tech",
            skills: [
                { name: "Git & GitHub", percentage: 95 },
                { name: "Vercel / Netlify", percentage: 80 },
                { name: "RESTful APIs", percentage: 88 },
                { name: "Postman", percentage: 75 },
            ]
        }
    ];

    return (
        <motion.section
            className="px-8 py-16 md:px-12 md:py-24 bg-background-light dark:bg-black/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="text-center mb-12">
                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 text-glow">
                    My Skills
                </motion.h2>
                <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    A showcase of my expertise in various technologies, from
                    front-end to back-end and essential development tools.
                </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillData.map((category) => (
                    <SkillCategory key={category.title} title={category.title} skills={category.skills} />
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;
