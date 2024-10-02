// Requires framer motion
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function NavOne() {
    const tabs = ["Home", "Explore", "Feed", "Account", "Settings"];
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <nav className="isolate rounded-full drop-shadow-md flex justify-evenly bg-white px-8 py-4" aria-label="Tabs">
            {tabs.map((tab, index) => (
                <div key={tab} className="relative">
                    {activeTab === index && (
                        <motion.div
                            layoutId="active-tab"
                            className="absolute inset-0 bg-indigo-500 rounded-full"
                            transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        />
                    )}
                    <button
                        onClick={() => handleClick(index)}
                        className={`relative px-3 py-2 text-sm font-medium font-sans z-10 transition-colors duration-300 ${activeTab === index ? 'text-white' : 'text-gray-500 hover:text-gray-700'
                    }`}>
                        {tab}
                    </button>
                </div>
            ))}
        </nav>
    )
}
