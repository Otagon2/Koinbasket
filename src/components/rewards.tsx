"use client";

import { motion } from "framer-motion";

export default function Rewards() {
    const rewards = [
        {
            title: "On Sign Up",
            description: "bitcoin on every friend's sign up",
            tokens: [
                { name: "Bitcoin", src: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=035" }
            ],
            color: "bg-orange-50 border-orange-200"
        },
        {
            title: "On Binance Connect",
            description: "etherium and xrp on every friend's Binance connect",
            tokens: [
                { name: "Ethereum", src: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=035" },
                { name: "XRP", src: "https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=035" }
            ],
            color: "bg-blue-50 border-blue-200"
        },
        {
            title: "On 1st Trade",
            description: "solana , doge, binance on every friends 1st trade",
            tokens: [
                { name: "Solana", src: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=035" },
                { name: "Dogecoin", src: "https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=035" },
                { name: "Binance", src: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=035" }
            ],
            color: "bg-green-50 border-green-200"
        }
    ];

    return (
        <section className="py-24 bg-white relative z-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-sans font-extrabold text-slate-900 tracking-tight"
                    >
                        Sure Shot rewards for you & friends
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto font-medium"
                    >
                        Earn crypto together when your friends join and trade on KoinBasket.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {rewards.map((reward, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`rounded-3xl border shadow-sm flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 ${reward.color}`}
                        >
                            <a href="https://www.koinbasket.com" className="p-8 w-full h-full flex flex-col items-center text-center">
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{reward.title}</h3>
                                <p className="text-slate-600 mb-8">{reward.description}</p>

                                <div className="mt-auto flex gap-4 items-center justify-center">
                                    {reward.tokens.map((token, i) => (
                                        <div key={i} className="w-12 h-12 rounded-full bg-white shadow-md p-2 flex items-center justify-center group relative cursor-help hover:scale-110 transition-transform">
                                            <img src={token.src} alt={token.name} className="w-8 h-8 object-contain" />
                                            {/* Tooltip */}
                                            <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-slate-800 text-white text-xs py-1 px-2 rounded font-medium whitespace-nowrap">
                                                {token.name}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 flex justify-center"
                >
                    <a href="https://www.koinbasket.com" className="bg-brand-dark hover:bg-slate-800 text-brand-lime font-bold text-lg py-4 px-12 rounded-full shadow-lg shadow-brand-dark/20 transition-all hover:-translate-y-1 hover:shadow-xl">
                        Refer Now!
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
