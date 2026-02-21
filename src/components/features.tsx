"use client";

import { BarChart3, Clock, RefreshCw, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Features() {

    return (
        <section className="py-20 bg-brand-light relative z-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-slate-900 tracking-tight">
                        Why Invest With KoinBasket?
                    </h2>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {/* Card 1: Smart Investing (Dark) */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        className="relative overflow-hidden rounded-3xl bg-brand-dark text-white p-8 md:p-10 shadow-xl shadow-brand-dark/10 transition-transform duration-300 hover:-translate-y-2 flex flex-col sm:flex-row items-center justify-between min-h-[240px] group"
                    >
                        <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left gap-6 w-full sm:w-1/2 mb-6 sm:mb-0">
                            <div className="w-16 h-16 rounded-2xl mx-auto sm:mx-0 bg-gradient-to-br from-brand-green to-brand-dark border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(178,240,66,0.15)] group-hover:shadow-[0_0_40px_rgba(178,240,66,0.25)] transition-shadow">
                                <BarChart3 className="w-8 h-8 text-brand-lime drop-shadow-[0_0_10px_rgba(178,240,66,0.5)]" />
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight">Invest with Confidence</h3>
                            <div className="opacity-80 leading-relaxed font-medium text-sm flex flex-col items-center sm:items-start gap-2 max-w-xs">
                                <p>Our algorithms filter out the noise, separating fundamentally strong projects from the rest so you can track emerging themes safely.</p>
                            </div>
                        </div>
                        <div className="relative w-full sm:w-1/2 flex items-center justify-center">
                            {/* Subtle Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-lime/20 blur-[50px] rounded-full" />
                            <Image src="/Koinbasket/assets/smart-investing.png" alt="Smart Investing" width={140} height={140} className="object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" />
                        </div>
                    </motion.div>

                    {/* Card 2: Easy Rebalancing (White) */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        className="relative overflow-hidden rounded-3xl bg-white text-slate-900 border border-slate-200/60 p-8 md:p-10 shadow-xl shadow-slate-200/50 transition-transform duration-300 hover:-translate-y-2 flex flex-col sm:flex-row items-center justify-between min-h-[240px] group"
                    >
                        <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left gap-6 w-full sm:w-1/2 mb-6 sm:mb-0">
                            <div className="w-16 h-16 rounded-2xl mx-auto sm:mx-0 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.05)] group-hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] transition-shadow">
                                <RefreshCw className="w-8 h-8 text-brand-dark drop-shadow-sm" />
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight">Radically Simple</h3>
                            <div className="text-slate-600 leading-relaxed font-medium text-sm flex flex-col items-center sm:items-start gap-2 max-w-xs">
                                <p>Buy readymade, expertly curated portfolios instantly, or easily build and manage your own custom index.</p>
                            </div>
                        </div>
                        <div className="relative w-full sm:w-1/2 flex items-center justify-center">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-100/50 blur-[50px] rounded-full" />
                            <Image src="/Koinbasket/assets/easy-rebalancing.png" alt="Easy" width={140} height={140} className="object-contain relative z-10 drop-shadow-xl group-hover:scale-110 transition-transform duration-500" />
                        </div>
                    </motion.div>

                    {/* Card 3: Save Time (White) */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        className="relative overflow-hidden rounded-3xl bg-white text-slate-900 border border-slate-200/60 p-8 md:p-10 shadow-xl shadow-slate-200/50 transition-transform duration-300 hover:-translate-y-2 flex flex-col-reverse sm:flex-row items-center justify-between min-h-[240px] group"
                    >
                        <div className="relative w-full sm:w-1/2 flex items-center justify-center mt-6 sm:mt-0">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-100/50 blur-[50px] rounded-full" />
                            <Image src="/Koinbasket/assets/save-time.png" alt="Save Time" width={140} height={140} className="object-contain relative z-10 drop-shadow-xl group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left gap-6 w-full sm:w-1/2 mb-6 sm:mb-0">
                            <div className="w-16 h-16 rounded-2xl mx-auto sm:mx-0 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.05)] group-hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] transition-shadow">
                                <Clock className="w-8 h-8 text-brand-dark drop-shadow-sm" />
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight">Save Hours of Research</h3>
                            <div className="text-slate-600 leading-relaxed font-medium text-sm flex flex-col items-center sm:items-start gap-2 max-w-xs">
                                <p>Stop analyzing individual coins. Buy up to 25 top-performing assets and rebalance your entire portfolio in one click.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4: Bank-Grade Security (Dark) */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        className="relative overflow-hidden rounded-3xl bg-brand-dark text-white p-8 md:p-10 shadow-xl shadow-brand-dark/10 transition-transform duration-300 hover:-translate-y-2 flex flex-col-reverse sm:flex-row items-center justify-between min-h-[240px] group"
                    >
                        <div className="relative w-full sm:w-1/2 flex items-center justify-center mt-6 sm:mt-0">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-lime/20 blur-[50px] rounded-full" />
                            <Image src="/Koinbasket/assets/bank-security.png" alt="Secure" width={140} height={140} className="object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left gap-6 w-full sm:w-1/2 mb-6 sm:mb-0">
                            <div className="w-16 h-16 rounded-2xl mx-auto sm:mx-0 bg-gradient-to-br from-brand-green to-brand-dark border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(178,240,66,0.15)] group-hover:shadow-[0_0_40px_rgba(178,240,66,0.25)] transition-shadow">
                                <ShieldCheck className="w-8 h-8 text-brand-lime drop-shadow-[0_0_10px_rgba(178,240,66,0.5)]" />
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight">Your Funds, Your Control</h3>
                            <div className="opacity-80 leading-relaxed font-medium text-sm flex flex-col items-center sm:items-start gap-2 max-w-xs">
                                <p>Trade securely through your existing exchange account. KoinBasket is 100% non-custodial—we never hold your assets.</p>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
