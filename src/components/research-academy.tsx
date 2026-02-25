"use client";

import { ArrowRight, BookOpen, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const articles = [
    {
        title: "Securing Your Crypto: Essential Tips",
        category: "News, Updates",
        description: "Multi-level security strategies to keep your digital assets safe.",
        time: "5 hours ago",
        date: "May 15, 2024",
        image: "/Koinbasket/assets/smart-investing.png", // Using existing placeholder
        featured: true,
    },
    {
        title: "Understanding Crypto Market Cycles",
        category: "Education",
        description: "Learn how to spot and navigate bullish and bearish trends.",
        time: "6 hours ago",
        date: "May 14, 2024",
        image: "/Koinbasket/assets/easy-rebalancing.png",
        featured: false,
    },
    {
        title: "ETF Integration Explained",
        category: "Product",
        description: "Why our basket approach mirrors traditional ETF safety.",
        time: "10 hours ago",
        date: "May 13, 2024",
        image: "/Koinbasket/assets/save-time.png",
        featured: false,
    },
    {
        title: "Global Regulation Updates 2024",
        category: "News",
        description: "Navigating the new compliance frameworks worldwide.",
        time: "1 day ago",
        date: "May 12, 2024",
        image: "/Koinbasket/assets/bank-security.png",
        featured: false,
    }
];

export default function ResearchAcademy() {
    return (
        <section className="py-20 bg-brand-light">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-slate-900 mb-4 tracking-tight">
                        KoinBasket Research Academy
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl font-medium">
                        Stay ahead of the curve with our expert analysis, educational guides, and market updates.
                    </p>
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
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {/* Featured Article */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                        className="md:col-span-2 group cursor-pointer relative overflow-hidden rounded-3xl bg-brand-dark flex flex-col justify-end min-h-[460px] shadow-xl shadow-brand-dark/10"
                    >
                        <a href="https://www.koinbasket.com" className="absolute inset-0 z-30" />

                        {/* Abstract Background for featured */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                        <div className="absolute top-0 left-0 w-full h-full bg-slate-900 overflow-hidden">
                            <Image
                                src={articles[0].image}
                                alt={articles[0].title}
                                fill
                                className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>

                        <div className="relative z-20 p-8 flex flex-col items-center text-center md:items-start md:text-left">
                            <span className="inline-block px-4 py-1.5 bg-brand-lime text-brand-dark text-xs font-bold rounded-full mb-5 shadow-sm">
                                {articles[0].category}
                            </span>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 group-hover:text-brand-lime transition-colors tracking-tight">
                                {articles[0].title}
                            </h3>
                            <p className="text-white/80 line-clamp-2 mb-6 max-w-xl font-medium leading-relaxed">
                                {articles[0].description}
                            </p>
                            <div className="flex items-center gap-2 text-white/60 text-sm font-medium">
                                <BookOpen className="w-4 h-4" />
                                {articles[0].time}
                            </div>
                        </div>
                    </motion.div>

                    {/* Smaller Articles */}
                    <div className="flex flex-col gap-6">
                        {articles.slice(1, 3).map((article, idx) => (
                            <motion.div
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, x: 20 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
                                }}
                                className="group cursor-pointer bg-slate-50 border border-slate-200/60 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300 overflow-hidden flex flex-col h-full"
                            >
                                <a href="https://www.koinbasket.com" className="p-6 flex flex-col h-full">
                                    <div className="flex flex-col flex-grow">
                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 block">
                                            {article.category}
                                        </span>
                                        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-green tracking-tight line-clamp-2">
                                            {article.title}
                                        </h4>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                                            <BookOpen className="w-3 h-3" />
                                            {article.time}
                                        </div>
                                        <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-brand-green transition-colors" />
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="flex justify-center mt-12 w-full">
                    <a href="https://www.koinbasket.com" className="w-full sm:w-auto px-8 flex items-center justify-center gap-2 text-slate-900 border border-slate-200 py-4 rounded-xl font-bold hover:bg-slate-50 hover:shadow-sm hover:-translate-y-0.5 transition-all">
                        View All Research <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

            </div>
        </section>
    );
}
