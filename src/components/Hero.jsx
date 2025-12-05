import React from "react";
import { motion } from "framer-motion";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

const Hero = () => {
    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-24 md:px-12 md:py-32">
            <motion.div
                className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 text-glow">
                    Nuhath Khan Lahif
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-400 mb-8">
                    MERN stack developer
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-600 dark:text-gray-400 mb-10">
                    <div className="flex items-center justify-center md:justify-start">
                        <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                        Birthday: 2 February 2002
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                        <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                        Age: 23
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                        <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                        City: Dhaka, Bangladesh
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                        <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                        Available for Work
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <a
                        href="https://drive.google.com/uc?export=download&id=1-WevyLrwYvOyjm-yPEMbYbP92AOmuhhC"
                        className="w-full sm:w-auto bg-primary text-white py-3 px-8 rounded-lg font-medium hover:bg-opacity-80 transition-colors text-center inline-block"
                    >
                        Download CV
                    </a>
                    <button
                        onClick={scrollToProjects}
                        className="w-full sm:w-auto bg-transparent text-gray-800 dark:text-white border border-gray-400 dark:border-gray-600 py-3 px-8 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                    >
                        View my work
                    </button>
                </div>

                <div>


                </div>
            </motion.div>
            <motion.div
                className="md:w-1/2 flex justify-center items-center relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                    <div className="absolute inset-0 blob-shape"></div>
                    <div className="absolute inset-0 p-2 blob-shape-inner">
                        <img
                            alt="Profile picture of Nuhath Khan Lahif"
                            className="w-full h-full object-cover rounded-full blob-shape-inner saturate-150"
                            src="https://i.postimg.cc/fLqWhPsW/Gemini_Generated_Image_ts9n9hts9n9hts9n.png"
                            style={{ filter: "contrast(1.1) brightness(0.9)" }}
                        />
                    </div>
                    <motion.div
                        className="absolute -top-4 -left-4 w-16 h-16 tech-icon rounded-full flex items-center justify-center shadow-lg"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <SiMongodb className="w-8 h-8 text-[#47A248]" />
                    </motion.div>
                    <motion.div
                        className="absolute top-1/4 -right-8 w-14 h-14 tech-icon rounded-full flex items-center justify-center shadow-lg"
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    >
                        <SiExpress className="w-8 h-8 text-black dark:text-white" />
                    </motion.div>
                    <motion.div
                        className="absolute -bottom-8 right-0 w-20 h-20 tech-icon rounded-full flex items-center justify-center shadow-lg"
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                        }}
                    >
                        <FaReact className="w-12 h-12 text-[#61DAFB]" />
                    </motion.div>
                    <motion.div
                        className="absolute bottom-8 -left-10 w-16 h-16 tech-icon  flex items-center rounded-full justify-center shadow-lg"
                        animate={{ y: [0, 12, 0] }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.5,
                        }}
                    >
                        <FaNodeJs className="w-9 h-9 text-[#339933]" />
                    </motion.div>
                </div>
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 dark:opacity-30 animate-pulse"></div>
                <div
                    className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 dark:opacity-30 animate-delayed-pulse"
                    style={{ animationDelay: "2000ms" }}
                ></div>
            </motion.div>
        </section>
    );
};

export default Hero;
