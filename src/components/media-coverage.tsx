"use client";

import { motion } from "framer-motion";

const media = [
    {
        name: "Yahoo Finance",
        title: "KoinBasket raises US$2 min from global marquee investors",
        desc: "Khaleelulla Baig, CEO of KoinBasket, on the company's recent successful funding round.",
    },
    {
        name: "Investing.com",
        title: "Tremendous traction in web3 startups",
        desc: '"We are witnessing tremendous traction in web3 startups and all of them need the power of cloud computing & storage to build and scale their projects."',
    },
    {
        name: "CoinTelegraph",
        title: "Crypto markets are still in R&D phase",
        desc: '"We shouldn\'t be surprised to see a few more crypto projects going bust, especially those built around collateralization and leverage."',
    },
];

export default function MediaCoverage() {
    return (
        <section className="py-20 bg-brand-light">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-slate-900 tracking-tight">
                        Media Coverage
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
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {media.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                            className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                        >
                            <div className="h-44 bg-slate-900 rounded-2xl mb-8 flex items-center justify-center overflow-hidden relative shadow-inner">
                                {/* Placeholder for Media Image */}
                                <div className="absolute inset-0 opacity-50 mix-blend-overlay bg-gradient-to-br from-brand-green to-slate-900"></div>
                                <span className="text-white/20 font-sans font-extrabold text-5xl transform -rotate-12 group-hover:scale-110 transition-transform duration-500 tracking-tighter">
                                    {item.name}
                                </span>
                            </div>

                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-green transition-colors tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-base mb-8 line-clamp-2 font-medium">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-slate-100/80 flex items-center justify-center">
                                {/* Fake Logo Name */}
                                <span className="font-sans font-extrabold text-2xl text-slate-800 tracking-tighter">
                                    {item.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
