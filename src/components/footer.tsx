import { Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#05160b] pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top CTA Section */}
                <div className="bg-brand-dark rounded-3xl p-10 md:p-16 mb-20 relative overflow-hidden flex flex-col items-center text-center shadow-2xl shadow-brand-dark/50 border border-brand-lime/10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-brand-lime/10 rounded-full blur-[100px] pointer-events-none" />

                    <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-white mb-6 relative z-10 tracking-tight">
                        Ready to Build Your Wealth?
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mb-10 relative z-10 leading-relaxed">
                        Join thousands of smart investors using KoinBasket to diversify and automate their crypto portfolios. Secure your financial future today.
                    </p>
                    <button className="bg-brand-lime text-brand-dark text-lg font-bold px-10 py-5 rounded-full hover:bg-[#a5db38] hover:shadow-[0_0_30px_rgba(178,240,66,0.5)] transition-all duration-300 cursor-pointer flex items-center gap-3 group relative z-10 shadow-[0_0_15px_rgba(178,240,66,0.3)]">
                        Create Your Free Account
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 border-b border-white/10 pb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
                        <div className="flex items-center gap-3 text-white font-display font-bold text-2xl tracking-tight">
                            <Image
                                src="/assets/logo-small.png"
                                alt="KoinBasket Logo"
                                width={40}
                                height={40}
                                className="rounded-xl shadow-[0_0_15px_rgba(178,240,66,0.3)]"
                            />
                            KoinBasket
                        </div>
                        <p className="text-white/60 text-sm font-medium leading-relaxed max-w-xs">
                            Discover smart, automated, and secure diversified crypto baskets for every investor.
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <ul className="flex flex-col gap-4">
                            <li><a href="#" className="text-white/70 font-medium hover:text-brand-lime transition-colors">Company</a></li>
                            <li><a href="#" className="text-white/70 font-medium hover:text-brand-lime transition-colors">News Room</a></li>
                            <li><a href="#" className="text-white/70 font-medium hover:text-brand-lime transition-colors">Research Articles</a></li>
                            <li><a href="#" className="text-white/70 font-medium hover:text-brand-lime transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <ul className="flex flex-col gap-4">
                            <li><a href="#" className="text-white/70 font-medium hover:text-brand-lime transition-colors">Privacy policy</a></li>
                            <li><a href="#" className="text-white/70 font-medium hover:text-brand-lime transition-colors">Terms & conditions</a></li>
                            <li><a href="#" className="text-white/70 font-medium hover:text-brand-lime transition-colors">Disclaimer</a></li>
                        </ul>
                    </div>

                    {/* Support & Social Column */}
                    <div className="lg:col-span-2 flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
                        <div className="flex flex-col items-center lg:items-start">
                            <h4 className="text-white/50 text-xs font-bold uppercase tracking-wider mb-3">Support</h4>
                            <a href="mailto:Support@koinbasket.com" className="text-white font-medium hover:text-brand-lime transition-colors word-break text-sm">Support@koinbasket.com</a>
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                            <h4 className="text-white/50 text-xs font-bold uppercase tracking-wider mb-4">Follow us</h4>
                            <div className="flex gap-3 justify-center lg:justify-start">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-brand-dark hover:bg-brand-lime hover:border-brand-lime transition-all shadow-sm">
                                    <Twitter className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-brand-dark hover:bg-brand-lime hover:border-brand-lime transition-all shadow-sm">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-brand-dark hover:bg-brand-lime hover:border-brand-lime transition-all shadow-sm">
                                    <Instagram className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex justify-center items-center">
                    <p className="text-white/40 text-sm font-medium">
                        &copy; {currentYear} KoinBasket, Inc. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}
