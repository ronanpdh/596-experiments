import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMusic, faCamera, faGhost, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const CircularNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(!isOpen);
    
    // Change the nav items array to update icons, labels and links
    const navItems = [
        { icon: faCamera, label: 'Camera', href: '/#'},
        { icon: faHouse, label: 'Home', href: '/#' },
        { icon: faGhost, label: 'Ghost', href: '/#' },
        { icon: faMusic, label: 'Music', href: '/#' },
        { icon: faEnvelope, label: 'Mail', href: '/#' },
    ];

    const buttonVariants = {
        open: { rotate: 90 },
        closed: { rotate: 0 },
    };

    const itemVariants = {
        open: (i:number) => ({
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', stiffness: 300, damping: 15 },
            y: Math.sin((i * 72) * (Math.PI / 180)) * 100,
            x: Math.cos((i * 72) * (Math.PI / 180)) * 100,
        }),
        closed: {
            opacity: 0,
            scale: 0.5,
            y: 0,
            x: 0,
            transition: { type: 'spring', stiffness: 250, damping: 15 },
        },
    };

    return (
        <div className="relative w-80 h-80 flex items-center justify-center">
            <motion.button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-slate-500 hover:bg-green-600 rounded-full text-white text-3xl flex items-center justify-center focus:outline-none"
                onClick={toggleNav}
                animate={isOpen ? 'open' : 'closed'}
                variants={buttonVariants}
            >
                {isOpen ? '×' : '+'}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        {navItems.map((item, i) => (
                            <motion.div
                                key={i}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                custom={i}
                                variants={itemVariants}
                            >
                                <a
                                    href={item.href}
                                    className="w-16 h-16 rounded-full bg-slate-800 flex flex-col items-center justify-center text-white transition-colors duration-300 hover:bg-green-600"
                                >
                                    <FontAwesomeIcon icon={item.icon} className="text-xl" />
                                    <span className="text-xs mt-1">{item.label}</span>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CircularNav;
