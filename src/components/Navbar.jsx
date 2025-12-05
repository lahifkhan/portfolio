import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "#home" },
        { name: "About", path: "#about" },
        { name: "Skills", path: "#skills" },
        { name: "Projects", path: "#projects" },
        { name: "Contact", path: "#contact" },
    ];

    const handleScrollLink = (e, path) => {
        e.preventDefault();
        const element = document.querySelector(path);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg py-4"
                    : "bg-transparent py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-6xl mx-auto px-8 md:px-12 flex items-center justify-between">
                <a
                    className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white group"
                    href="#home"
                    onClick={(e) => handleScrollLink(e, "#home")}
                >
                    <span className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <FaCode className="text-primary" />
                    </span>
                    <span>Mr.Nuhath</span>
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className={`text-sm font-medium transition-colors hover:text-primary relative group ${scrolled
                                    ? "text-gray-700 dark:text-gray-300"
                                    : "text-gray-800 dark:text-gray-200"
                                }`}
                            onClick={(e) => handleScrollLink(e, link.path)}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-900 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed inset-0 top-[70px] bg-white/95 dark:bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8 z-40 border-t border-gray-100 dark:border-white/10"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.path}
                                    className="text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
                                    onClick={(e) => handleScrollLink(e, link.path)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Navbar;
