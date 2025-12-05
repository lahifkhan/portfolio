import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'Skills', path: '#skills' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#contact' },
    ];

    const handleScroll = (e, path) => {
        e.preventDefault();
        const element = document.querySelector(path);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <header className="absolute top-0 left-0 right-0 z-20 px-8 py-6 md:px-12">
            <nav className="flex items-center justify-between">
                <a
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                    href="#home"
                    onClick={(e) => handleScroll(e, '#home')}
                >
                    Mr.Nuhath
                </a>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-gray-900 dark:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>

                <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-background-light dark:bg-background-dark md:bg-transparent p-4 md:p-0 items-center space-y-4 md:space-y-0 md:space-x-8 shadow-lg md:shadow-none z-50`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="text-sm font-medium transition-colors text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white relative group"
                            onClick={(e) => handleScroll(e, link.path)}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
