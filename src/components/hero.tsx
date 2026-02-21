"use client";

import Image from "next/image";
import { AndroidLogo, AppleLogo } from "@/components/icons";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero-section" className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-brand-dark overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-brand-lime/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-brand-green/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 max-w-xl mx-auto lg:mx-0"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold text-white tracking-tighter leading-[1.05]"
                        >
                            Build a Smart<br />
                            Crypto Portfolio<br />
                            <span className="text-brand-lime">in Minutes</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-xl"
                        >
                            Skip the guesswork. Invest in expertly curated crypto baskets that work just like index funds—securely managed through your own exchange.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col items-center lg:items-start gap-6 w-full sm:w-auto"
                        >
                            <button className="w-fit bg-brand-lime text-brand-dark text-base font-bold px-8 py-4 rounded-full hover:bg-[#a5db38] hover:shadow-[0_0_30px_rgba(178,240,66,0.5)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(178,240,66,0.3)]">
                                Explore Curated Baskets
                            </button>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 border-t border-white/10 pt-4 w-fit md:border-none md:pt-0">
                                <span className="text-sm font-medium text-white/70 w-full lg:w-auto mb-2 lg:mb-0">Download App</span>
                                <div className="flex gap-3">
                                    <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors duration-200 px-4 py-2 rounded-2xl cursor-pointer group border border-white/10 shadow-sm backdrop-blur-sm">
                                        <AndroidLogo className="w-6 h-6 text-white" />
                                        <div className="text-left flex flex-col justify-center leading-tight">
                                            <span className="text-[9px] text-white/70 uppercase font-bold">Get it on</span>
                                            <span className="text-sm font-bold text-white tracking-tight">Google Play</span>
                                        </div>
                                    </button>
                                    <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors duration-200 px-4 py-2 rounded-2xl cursor-pointer group border border-white/10 shadow-sm backdrop-blur-sm">
                                        <AppleLogo className="w-6 h-6 text-white" />
                                        <div className="text-left flex flex-col justify-center leading-tight">
                                            <span className="text-[9px] text-white/70 uppercase font-bold">Download on the</span>
                                            <span className="text-sm font-bold text-white tracking-tight">App Store</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Phone Mockup */}
                    <div className="relative flex items-center justify-center lg:justify-end w-full min-h-[400px] md:min-h-[500px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="relative z-10 flex justify-center lg:justify-end w-full"
                        >
                            {/* Floating Motion Wrapper */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="relative flex justify-center lg:justify-end"
                            >
                                <Image
                                    src="/Koinbasket/assets/hero image.png"
                                    alt="KoinBasket App Experience"
                                    width={550}
                                    height={750}
                                    className="w-auto h-auto max-w-[300px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[550px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] mx-auto lg:ml-auto lg:mr-0"
                                    priority
                                />
                            </motion.div>

                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] max-w-[600px] bg-brand-lime/15 blur-[120px] rounded-full -z-10" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
