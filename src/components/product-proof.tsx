"use client";

import Image from "next/image";
import { ShieldCheck, Database, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Calculator from "./calculator";

export default function ProductProof() {
    return (
        <section className="py-20 bg-brand-light">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

                    {/* Left Chart/Calculator Card */}
                    <Calculator />

                    {/* Right Security Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-gradient-to-br from-brand-dark to-brand-green text-white rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[400px] shadow-xl shadow-brand-dark/10 group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Background elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime/10 blur-[80px] rounded-full pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left gap-6 max-w-sm">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-green to-brand-dark border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(178,240,66,0.15)] group-hover:shadow-[0_0_50px_rgba(178,240,66,0.25)] transition-shadow mb-2">
                                <ShieldCheck className="w-10 h-10 text-brand-lime drop-shadow-[0_0_15px_rgba(178,240,66,0.5)]" />
                            </div>

                            <h3 className="text-4xl font-sans font-extrabold tracking-tight mb-2">Enterprise-Grade Security</h3>
                            <ul className="text-white/80 font-medium leading-relaxed mb-4 space-y-2 text-sm mt-2">
                                <li>• <strong className="text-white">Bank-Grade Encryption</strong> – SHA-256 RSA encryption.</li>
                                <li>• <strong className="text-white">Secure Sync</strong> – Official Binance & Coinbase APIs.</li>
                                <li>• <strong className="text-white">Trade Safely</strong> – Zero withdrawal permissions.</li>
                                <li>• <strong className="text-white">100% Non-Custodial</strong> – Your funds stay with you.</li>
                            </ul>

                            <button className="bg-brand-lime text-brand-dark text-base font-bold px-8 py-3 rounded-full hover:bg-[#a5db38] transition-all duration-300 w-fit cursor-pointer shadow-[0_0_15px_rgba(178,240,66,0.3)] hover:shadow-[0_0_25px_rgba(178,240,66,0.5)]">
                                Connect Securely
                            </button>
                        </div>

                        {/* Mock 3D Shield Graphic on Right Edge */}
                        <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-64 h-64 flex justify-center items-center pointer-events-none opacity-20 sm:opacity-50 group-hover:scale-105 transition-transform duration-700">
                            <ShieldCheck className="w-full h-full text-brand-lime drop-shadow-[0_0_30px_rgba(178,240,66,0.5)]" strokeWidth={1} />
                        </div>
                    </motion.div>

                </div>

                {/* Secondary Trust Features */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 pt-8 mb-12 border-t border-slate-200/60"
                >
                    <div className="flex items-center gap-3 text-slate-600 font-medium">
                        <Lock className="w-5 h-5 text-emerald-600" />
                        <span>Encrypted Data</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 font-medium">
                        <Database className="w-5 h-5 text-emerald-600" />
                        <span>Cold Storage</span>
                    </div>
                </motion.div>

                {/* Primary Security Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="bg-white/40 backdrop-blur-sm rounded-[2rem] p-8 md:p-10 border border-white/60 shadow-2xl shadow-slate-200/50 flex flex-col items-center text-center group hover:bg-white/60 transition-all duration-500">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-lime/10 border border-brand-lime/20 text-brand-dark font-display font-bold text-[10px] uppercase tracking-[0.2em] mb-6 shadow-sm">
                            <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                            Institutional Grade Security
                        </div>

                        <h4 className="text-lg md:text-xl font-sans font-bold text-slate-800 mb-8">
                            Secured by the industry leaders
                        </h4>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                            <div className="relative group/logo flex items-center justify-center">
                                <Image
                                    src="/assets/Binance Logo.png"
                                    alt="Binance"
                                    width={240}
                                    height={60}
                                    className="h-8 md:h-10 w-auto object-contain transition-all duration-300 group-hover/logo:scale-105"
                                />
                            </div>

                            <div className="hidden md:block h-12 w-px bg-slate-200/80" />
                            <div className="md:hidden w-12 h-px bg-slate-200/80" />

                            <div className="relative group/logo flex items-center justify-center">
                                <Image
                                    src="/assets/Coinbase Logo.png"
                                    alt="Coinbase"
                                    width={240}
                                    height={60}
                                    className="h-8 md:h-10 w-auto object-contain transition-all duration-300 group-hover/logo:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
