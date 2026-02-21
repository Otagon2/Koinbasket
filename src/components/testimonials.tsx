"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Ryant Hinahon",
        role: "Android User",
        text: "KoinBasket is the best cryptocurrency platform in usa to buy and sell cryptocurrencies. The koinbasket interface is very user-friendly and there are many ways to purchase cryptocurrencies with ease.",
        rating: 5,
        avatar: "RH"
    },
    {
        name: "Femia Krenz",
        role: "Android User",
        text: "First of, this app has really made me re-think about my opinion for current crypto market. I'm a coinbase user. When I downloaded koinbasket, it never felt that I was on another crypto app. Just used my coinbase creds and voila....",
        rating: 5,
        avatar: "FK"
    },
    {
        name: "Jason Ross",
        role: "Android User",
        text: "Since I downloaded the app. Crypto currency trading has been very easy for me. All my favorite coins are in one basket. Customer support is also great. I highly recommend koinbasket to all my friends who are in passive investment. Kudos!",
        rating: 5,
        avatar: "JR"
    },
    {
        name: "Nihaan",
        role: "iOS User",
        text: "I'm loving the app. The demo feature helps alot if you're a beginner in crypto like me.",
        rating: 5,
        avatar: "N"
    },
    {
        name: "Yahya Sabo",
        role: "Android User",
        text: "They give 2usdt sign up bonus",
        rating: 5,
        avatar: "YS"
    },
    {
        name: "The Guy",
        role: "Android User",
        text: "This is an awesome idea! I'll be here for the long haul!",
        rating: 5,
        avatar: "TG"
    },
    {
        name: "Suryabhan Shinde",
        role: "Android User",
        text: "It's a great app especially if you're new to the crypto market. Definitely worth it.",
        rating: 5,
        avatar: "SS"
    },
    {
        name: "Mahar Nawab",
        role: "Android User",
        text: "Kmal ki app hai... 130$ earn kr chka ho is sy",
        rating: 5,
        avatar: "MN"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="py-20 bg-brand-light overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-lime/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="flex flex-col items-center text-center mb-16 gap-6">
                    <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-slate-900 tracking-tight">
                        User Testimonials
                    </h2>


                </div>

                {/* Carousel Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative"
                >
                    <div className="overflow-hidden p-4 -m-4">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, idx) => (
                                <div key={idx} className="w-full min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-4">
                                    <div className="bg-white shadow-xl shadow-slate-200/50 border border-slate-200/60 p-8 rounded-3xl h-full flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300">
                                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                            <div className="flex justify-center lg:justify-start gap-1.5 mb-6">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-sm" />
                                                ))}
                                            </div>
                                            <p className="text-slate-700 text-lg leading-relaxed mb-8 font-medium">
                                                &quot;{testimonial.text}&quot;
                                            </p>
                                        </div>
                                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 border-t border-slate-100 pt-6 text-center lg:text-left">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-green to-brand-dark text-brand-lime flex items-center justify-center font-bold text-xl shadow-md shrink-0">
                                                {testimonial.avatar}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 tracking-tight text-lg">{testimonial.name}</h4>
                                                <p className="text-sm text-slate-500 font-medium">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Navigation Arrows */}
                <div className="flex justify-center gap-4 mt-12">
                    <button
                        onClick={prevSlide}
                        className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-brand-green transition-all shadow-sm cursor-pointer"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-brand-green transition-all shadow-sm cursor-pointer"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

            </div>
        </section>
    );
}
