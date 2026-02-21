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
        { name: "Home", href: "#" },
        { name: "Dashboard", href: "#" },
        { name: "News Room", href: "#" },
        { name: "Research Articles", href: "#" },
        { name: "FAQs", href: "#" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/50 py-3"
                : "bg-transparent py-6"
                } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <Image
                        src="/Koinbasket/assets/logo-small.png"
                        alt="KoinBasket Logo"
                        width={isScrolled ? 36 : 40}
                        height={isScrolled ? 36 : 40}
                        className="group-hover:opacity-80 transition-all duration-300"
                        priority
                    />
                    <span className={`font-display font-bold text-2xl tracking-tight transition-colors duration-300 ${isScrolled ? "text-brand-dark group-hover:text-brand-green" : "text-white group-hover:text-brand-lime"}`}>
                        KoinBasket
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-semibold transition-colors duration-200 ${isScrolled ? "text-slate-600 hover:text-brand-dark" : "text-white/80 hover:text-white"}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-6">
                        <button className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${isScrolled ? "text-slate-600 hover:text-brand-dark" : "text-white/90 hover:text-white"}`}>
                            Log in
                        </button>
                        <button className={`text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${isScrolled
                            ? "bg-brand-dark text-white hover:bg-brand-green hover:shadow-md"
                            : "bg-brand-lime text-brand-dark hover:bg-[#a5db38] hover:shadow-[0_0_15px_rgba(187,240,75,0.4)]"
                            }`}>
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`md:hidden transition-colors duration-200 cursor-pointer ml-2 ${isScrolled ? "text-brand-dark hover:text-brand-green" : "text-white/90 hover:text-brand-lime"}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
                            className="text-base font-medium text-white/80 hover:text-brand-lime transition-colors duration-200 text-center w-full"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="h-px w-full bg-white/10 my-2" />
                    <button className="w-full text-center text-base font-medium text-white/90 hover:text-brand-lime transition-colors duration-200">
                        Log in
                    </button>
                    <button className="w-full bg-brand-lime text-brand-dark text-base font-bold px-6 py-3 rounded-xl hover:bg-[#a5db38] transition-colors duration-300 shadow-lg flex justify-center items-center">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
}
