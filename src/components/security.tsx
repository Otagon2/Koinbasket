"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Activity, Wallet } from "lucide-react";
import Image from "next/image";

export default function Security() {
    const features = [
        {
            title: "Bank-Grade Security",
            description: "Sha-256 rsa encryption",
            icon: Lock,
        },
        {
            title: "Secure Exchange Sync",
            description: "Login with existing exchange", // 'Login with' from prompt rounded out
            icon: Activity,
        },
        {
            title: "Trade Safely",
            description: "No withdrawal or transfer permissions",
            icon: Shield,
        },
        {
            title: "Your Control",
            description: "Funds and crypto stay with you",
            icon: Wallet,
        }
    ];

    return (
        <section className="py-24 bg-brand-dark relative z-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-lime/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left content: text & features grid */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-10">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-tight mb-4"
                            >
                                Powerful & Secure
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-slate-300 max-w-lg"
                            >
                                Your security is our highest priority. Connect your exchange with confidence using state-of-the-art protections.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (idx * 0.1) }}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-brand-lime/20 flex items-center justify-center mb-4">
                                        <feature.icon className="w-6 h-6 text-brand-lime" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right content: 3D or abstract image representation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto bg-gradient-to-br from-white/5 to-white/0 rounded-full border border-white/10 flex items-center justify-center overflow-visible">
                            {/* Decorative rings */}
                            <div className="absolute inset-4 rounded-full border border-brand-lime/20 animate-[spin_30s_linear_infinite]" />
                            <div className="absolute inset-12 rounded-full border border-brand-lime/40 animate-[spin_20s_linear_infinite_reverse]" />

                            {/* Gold Shield icon element without background */}
                            <div className="relative z-10 w-48 h-48 flex items-center justify-center -rotate-6 transform hover:rotate-0 hover:scale-110 transition-all duration-500 drop-shadow-[0_0_50px_rgba(250,204,21,0.4)]">
                                <svg width="0" height="0">
                                    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop stopColor="#FEF08A" offset="0%" />
                                        <stop stopColor="#FDE047" offset="30%" />
                                        <stop stopColor="#EAB308" offset="70%" />
                                        <stop stopColor="#A16207" offset="100%" />
                                    </linearGradient>
                                </svg>
                                <Shield className="w-40 h-40 drop-shadow-[0_0_20px_rgba(250,204,21,0.6)]" fill="url(#gold)" stroke="url(#gold)" strokeWidth={1} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
