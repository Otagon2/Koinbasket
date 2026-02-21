"use client";

import { motion } from "framer-motion";
import { UserPlus, Link, ShoppingCart, MousePointerClick } from "lucide-react";
import { useState, useEffect } from "react";

export default function Steps() {
    const [activeIndex, setActiveIndex] = useState(0);

    const steps = [
        {
            number: "1",
            title: "Easy sign up no KYC instant approval",
            icon: UserPlus,
            color: "from-blue-500/20 to-cyan-400/20"
        },
        {
            number: "2",
            title: "Sync your binance or coinbase account",
            icon: Link,
            color: "from-brand-green/20 to-brand-lime/20"
        },
        {
            number: "3",
            title: "Add favorite coins & baskets to cart",
            icon: ShoppingCart,
            color: "from-purple-500/20 to-pink-500/20"
        },
        {
            number: "4",
            title: "Buy sell multiple coins & baskets in 1 click",
            icon: MousePointerClick,
            color: "from-orange-400/20 to-red-500/20"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % steps.length);
        }, 2000); // 2 seconds per step for a snappier pulse pace
        return () => clearInterval(interval);
    }, [steps.length]);

    return (
        <section className="py-24 bg-brand-lime relative z-20 overflow-hidden border-t border-brand-lime/80">
            {/* Brand Gradient Definition for Icons (Legacy fallback/hover) */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="brandIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0d3420" />
                        <stop offset="100%" stopColor="#b2f042" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-brand-dark tracking-tight"
                    >
                        Start Buying in 4 Easy Steps
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 lg:gap-12 relative">
                    {steps.map((step, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                animate={{ scale: isActive ? 1.1 : 1 }}
                                transition={{
                                    scale: { duration: 0.5, ease: "easeOut" },
                                    delay: index * 0.1
                                }}
                                className="relative flex flex-col items-center text-center group"
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                {/* Connection Lines */}
                                {index < steps.length - 1 && (
                                    <>
                                        {/* Desktop Line (Horizontal) */}
                                        <div className="hidden lg:block absolute top-[60px] left-[60%] w-full h-[2px] z-0">
                                            <div className="w-full h-full bg-gradient-to-r from-brand-dark/40 via-brand-dark/10 to-transparent" />
                                            <motion.div
                                                animate={{ x: [0, 200] }}
                                                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                                className="absolute top-[-3px] left-0 w-2 h-2 rounded-full bg-brand-dark shadow-[0_0_10px_#0d3420]"
                                            />
                                        </div>

                                        {/* Mobile/Tablet Line (Vertical) - Positioned below the text */}
                                        <div className="lg:hidden absolute top-[calc(100%+1rem)] left-1/2 -translate-x-1/2 w-[2px] h-[40px] z-0">
                                            <div className="w-full h-full bg-gradient-to-b from-brand-dark/40 via-brand-dark/10 to-transparent" />
                                            <motion.div
                                                animate={{ y: [0, 40] }}
                                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                                className="absolute top-0 left-[-3px] w-2 h-2 rounded-full bg-brand-dark shadow-[0_0_10px_#0d3420]"
                                            />
                                        </div>
                                    </>
                                )}

                                <div className="relative mb-8">
                                    {/* Decorative Pulsing Ring */}
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                                        className={`absolute -inset-4 rounded-full border-2 border-dashed ${isActive ? 'border-brand-dark/60' : 'border-brand-dark/30'} z-0 transition-colors duration-300`}
                                    />
                                    <motion.div
                                        animate={{ scale: isActive ? [1, 1.3, 1] : [1.2, 1, 1.2] }}
                                        transition={{ repeat: Infinity, duration: isActive ? 1.5 : 4, ease: "easeInOut" }}
                                        className={`absolute -inset-2 rounded-full ${isActive ? 'bg-brand-dark/20' : 'bg-brand-dark/5'} z-0 transition-colors duration-300`}
                                    />

                                    {/* Main Circle */}
                                    <div className={`w-28 h-28 rounded-full border-[3px] border-brand-dark relative z-10 flex items-center justify-center transition-all duration-500 overflow-hidden ${isActive ? 'bg-brand-dark scale-110 shadow-[0_20px_50px_rgba(13,52,32,0.5)]' : 'bg-transparent group-hover:bg-brand-dark group-hover:scale-110'} group-active:scale-95`}>
                                        {/* Icon Background Blur */}
                                        <div className={`absolute inset-4 rounded-full bg-gradient-to-br ${step.color} blur-xl opacity-50 ${isActive ? 'opacity-0' : 'group-hover:opacity-0'} transition-opacity duration-500`} />

                                        <step.icon
                                            className={`w-10 h-10 relative z-20 transition-all duration-500 ${isActive ? 'stroke-brand-lime rotate-6' : 'group-hover:rotate-12 group-hover:stroke-brand-lime'}`}
                                            stroke={isActive ? "#b2f042" : "#0d3420"}
                                        />
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className={`text-xl font-bold leading-tight mb-2 max-w-[200px] mx-auto transition-colors duration-300 ${isActive ? 'text-brand-dark' : 'text-brand-dark/80 group-hover:text-brand-dark'}`}>
                                        {step.title}
                                    </h3>
                                    <div className={`h-1 mx-auto rounded-full transition-all duration-300 ${isActive ? 'w-20 bg-brand-dark' : 'w-8 bg-brand-dark/20 group-hover:w-16 group-hover:bg-brand-dark/50'}`} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
