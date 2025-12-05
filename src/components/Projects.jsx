import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
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

const projectData = [
    {
        title: "FixItUp",
        description: "FixItUp is a community-driven platform where users can report local issues, contribute funds, and help resolve community problems together",
        image: "https://i.postimg.cc/YCBd3qWD/fixitup-(2).png",
        tech: ['React', 'Express Js', 'MongoDB', 'Firebase'],
        liveLink: "https://tangerine-platypus-2af136.netlify.app/",
        githubLink: "https://github.com/lahifkhan/Fix-it-up-client?tab=readme-ov-file"
    },
    {
        title: "SkillVerse",
        description: "SkillVerse is a modern learning platform designed to help users explore new skills and manage their learning journey efficiently.",
        image: "https://i.postimg.cc/J4x9GkgT/Skill-Verse.png",
        tech: ['React js', 'Firebase', 'swiper', 'Aos',],
        liveLink: "https://skill-verse-project.netlify.app/",
        githubLink: "https://github.com/lahifkhan/skill-varse"
    },
    {
        title: "Car Doctor",
        description: "Car Doctor is a web application that allows users to explore car services, browse products, and book appointments securely.",
        image: "https://i.postimg.cc/xd3pqk6T/car-doctor-2.png",
        tech: ['Next js', 'Node js', 'Express js', 'MongoDB', 'Firebase'],
        liveLink: "https://car-doctor-client-85y1.vercel.app/",
        githubLink: "https://github.com/lahifkhan/car-doctor-client"
    },
    {
        title: "Bright_Apps",
        description: "Bright_Apps is a platform-style UI where users can browse apps, view key insights (downloads, ratings, reviews), and visualize performance trends.",
        image: "https://i.postimg.cc/cHKDhDsg/Bright-Apps.png",
        tech: ['React', 'recharts', 'Vite'],
        liveLink: "https://assignment-bright-apps.netlify.app/",
        githubLink: "https://github.com/lahifkhan/Bright-Apps"
    }
];

const Projects = () => {
    return (
        <motion.section
            className="px-6 py-12 md:px-12 md:py-20 bg-background-light dark:bg-black/10 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="absolute -top-16 left-1/4 w-72 h-72 bg-purple-600/50 rounded-full mix-blend-screen filter blur-3xl opacity-10 dark:opacity-10 animate-pulse"></div>
            <div
                className="absolute -bottom-16 right-1/4 w-72 h-72 bg-blue-600/50 rounded-full mix-blend-screen filter blur-3xl opacity-10 dark:opacity-10 animate-delayed-pulse"
                style={{ animationDelay: "1000ms" }}
            ></div>
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 text-glow">
                        My Projects
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm">
                        Here are some of the projects I've worked on, showcasing my skills.
                    </motion.p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {projectData.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark p-4 rounded-lg transition-all duration-300 hover:border-purple-500/20 hover:shadow-xl hover:shadow-purple-600/10 active:scale-[0.98]"
                        >
                            <div className="relative mb-3 overflow-hidden rounded h-40">
                                <img
                                    alt={`${project.title} Thumbnail`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    src={project.image}
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-sm font-medium border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3 text-xs line-clamp-2">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="text-[10px] font-medium bg-primary/10 dark:bg-primary/20 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center space-x-3">
                                <a
                                    className="inline-flex items-center text-xs font-medium text-gray-700 dark:text-white hover:text-primary dark:hover:text-gray-300 transition-colors"
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaExternalLinkAlt className="mr-1 text-xs" />
                                    Live Demo
                                </a>
                                <a
                                    className="inline-flex items-center text-xs font-medium text-gray-700 dark:text-white hover:text-primary dark:hover:text-gray-300 transition-colors"
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="mr-1 text-xs" />
                                    GitHub
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
