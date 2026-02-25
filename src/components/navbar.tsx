"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroSection = document.getElementById('hero-section');
            const scrollThreshold = heroSection ? (heroSection.offsetHeight - 80) : 500;

            // Determine if we've scrolled past the hero section
            const pastHero = currentScrollY > scrollThreshold;
            setIsScrolled(pastHero);

            // Determine visibility
            if (currentScrollY < 50) {
                // Always show at the very top
                setIsVisible(true);
            } else if (!pastHero) {
                // Hide if scrolling anywhere inside the hero section (except the very top)
                setIsVisible(false);
            } else {
                // Show if we're past the hero section
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "https://www.koinbasket.com" },
        { name: "Dashboard", href: "https://www.koinbasket.com" },
        { name: "News Room", href: "https://www.koinbasket.com" },
        { name: "Research Articles", href: "https://www.koinbasket.com" },
        { name: "FAQs", href: "https://www.koinbasket.com" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
                : "bg-transparent py-6"
                } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="https://www.koinbasket.com" className="flex items-center gap-3 cursor-pointer group shrink-0">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/Koinbasket/assets/logo-small.png"
                            alt="KoinBasket Logo"
                            width={isScrolled ? 24 : 26}
                            height={isScrolled ? 24 : 26}
                            className="group-hover:opacity-80 transition-all duration-300"
                            priority
                        />
                    </div>
                    <span className={`font-display font-bold text-2xl tracking-tight leading-none transition-colors duration-300 ${isScrolled ? "text-white group-hover:text-brand-lime" : "text-white group-hover:text-brand-lime"}`}>
                        KoinBasket
                    </span>
                </a>

                {/* Desktop Links (Absolutely Centered) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-md px-2 py-1 ${isScrolled ? "text-white/80 hover:text-white" : "text-white/80 hover:text-white"}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-6">
                        <a href="https://www.koinbasket.com" className={`text-sm font-semibold transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-md px-2 py-1 ${isScrolled ? "text-white/90 hover:text-white" : "text-white/90 hover:text-white"}`}>
                            Log in
                        </a>
                        <a href="https://www.koinbasket.com" className={`text-sm font-bold px-6 py-2.5 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-full ${isScrolled
                            ? "bg-brand-lime text-brand-dark hover:bg-[#a5db38] hover:shadow-[0_0_15px_rgba(187,240,75,0.4)]"
                            : "bg-brand-lime text-brand-dark hover:bg-[#a5db38] hover:shadow-[0_0_15px_rgba(187,240,75,0.4)]"
                            }`}>
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`md:hidden transition-colors duration-200 cursor-pointer ml-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-md p-1 flex items-center justify-center ${isScrolled ? "text-white/90 hover:text-brand-lime" : "text-white/90 hover:text-brand-lime"}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={24} className="block" /> : <Menu size={24} className="block" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col items-center gap-6 shadow-2xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-white/80 hover:text-brand-lime transition-colors duration-200 text-center w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-md py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="h-px w-full bg-white/10 my-2" />
                    <a href="https://www.koinbasket.com" className="w-full text-center text-base font-medium text-white/90 hover:text-brand-lime transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-md py-1">
                        Log in
                    </a>
                    <a href="https://www.koinbasket.com" className="w-full bg-brand-lime text-brand-dark text-base font-bold px-6 py-3 rounded-xl hover:bg-[#a5db38] transition-colors duration-300 shadow-lg flex justify-center items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark">
                        Get Started
                    </a>
                </div>
            )}
        </nav>
    );
}
