import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display">
            <div className="min-h-screen p-4">
                <div className="relative w-full max-w-6xl mx-auto bg-background-light dark:bg-gradient-to-br from-[#12141D] to-[#0A0B0F] text-gray-800 dark:text-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <Navbar />
                    <main className="relative z-10 flex-grow">
                        <div id="home"><Hero /></div>
                        <div id="about"><About /></div>
                        <div id="skills"><Skills /></div>
                        <div id="projects"><Projects /></div>
                        <div id="contact"><Contact /></div>
                    </main>
                </div>
            </div>
            <ThemeToggle />
        </div>
    );
}

export default App;
