import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface Tab {
    icon: IconDefinition;
    label: string;
    href: string;
}

interface StackedCardsProps {
    orientation: 'vertical' | 'horizontal';
}

export default function StackedTabs({ orientation }: StackedCardsProps) {
    const initialTabs: Tab[] = [
        { icon: faGhost, label: 'To Do', href: '' },
        { icon: faGhost, label: 'fix UI', href: '' },
        { icon: faGhost, label: 'please', href: '' },
        { icon: faGhost, label: 'Now', href: '' },
        { icon: faGhost, label: ':)', href: '' },
    ];

    const [isHovered, setIsHovered] = useState(false);
    const [isSeparated, setIsSeparated] = useState(false);
    const [tabs, setTabs] = useState(initialTabs);

    const cardVariants = {
        initial: (index: number) => ({
            x: index * 4,
            y: index * 4,
            rotate: index * 4,
            scale: 1 - index * 0.1,
            transition: { duration: 0.3 }
        }),
        hover: (index: number) => ({
            x: index * 8,
            y: index *16,
            rotate: index * 2,
            scale: 1 - index * 0.03,
            transition: { duration: 0.4 }
        }),
        verticalSeparated: (index: number) => ({
            x: 0,
            y: index * 70,
            rotate: 0,
            scale: 1,
            transition: { duration: 0.4, delay: index * 0.1 }
        }),
        horizontalSeparated: (index: number) => ({
            x: index * 260,
            y: 0,
            rotate: 0,
            scale: 1,
            transition: { duration: 0.4, delay: index * 0.1 }
        }),
    };

    const getAnimationState = () => {
        if (isSeparated) return orientation === 'vertical' ? "verticalSeparated" : "horizontalSeparated";
        return isHovered ? "hover" : "initial";
    };

    const handleTabClick = (index: number) => {
        if (index === 0) {
            if (isSeparated) {
                setIsSeparated(false);
                setTabs(tabs.map((tab, i) => 
                    i === 0 ? { ...tab, label: initialTabs[0].label } : tab
                ));
            } else {
                setIsSeparated(true);
                setTabs(tabs.map((tab, i) => 
                    i === 0 ? { ...tab, label: 'Close' } : tab
                ));
            }
        }
    };

    return (
        <div className="relative w-full flex items-center">
            <motion.div 
                className="relative"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                {tabs.map((tab, index) => (
                    <motion.div
                        key={tab.label}
                        custom={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={getAnimationState()}
                        className="absolute top-0 left-0 bg-indigo-400 shadow-xl rounded-xl p-4 w-64 cursor-pointer hover:bg-indigo-600 focus:border-cyan-100"
                        style={{ zIndex: isSeparated ? tabs.length : (tabs.length - index) }}
                        onClick={() => handleTabClick(index)}
                    >
                        <FontAwesomeIcon icon={tab.icon} className="mr-2" />
                        <span className="font-semibold">{tab.label}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
