"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PARTNER_LOGOS = [
    { name: "Ripple", src: "/Koinbasket/assets/Ripple.png" },
    { name: "Stonks", src: "/Koinbasket/assets/Stonks.png" },
    { name: "Polygon", src: "/Koinbasket/assets/Polygon.png" },
    { name: "Google", src: "/Koinbasket/assets/Google logo.png" },
    { name: "Binance", src: "/Koinbasket/assets/Binance Logo.png" },
    { name: "Angellist", src: "/Koinbasket/assets/Angellist logo.png" },
];

export default function Companies() {
    return (
        <section className="py-12 bg-brand-light relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-8"
                >
                    <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                        Backed by prominent CXOs and VCs
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16">
                        {PARTNER_LOGOS.map((logo) => (
                            <motion.div
                                key={logo.name}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="relative h-8 md:h-10 w-auto flex items-center justify-center hover:scale-110 transition-all duration-300"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    width={150}
                                    height={50}
                                    className="h-full w-auto object-contain"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
