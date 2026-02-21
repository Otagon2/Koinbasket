"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TIME_PERIODS = ["1M", "6M", "1Y", "3Y", "5Y"];

const ASSET_DATA = [
    {
        id: "gold",
        name: "Gold",
        symbol: "G",
        color: "yellow",
        rates: { "1M": 1.01, "6M": 1.05, "1Y": 1.12, "3Y": 1.35, "5Y": 1.62 }
    },
    {
        id: "microsoft",
        name: "Microsoft",
        symbol: "M",
        color: "blue",
        rates: { "1M": 1.03, "6M": 1.15, "1Y": 1.35, "3Y": 1.85, "5Y": 2.9441 }
    },
    {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "B",
        color: "orange",
        rates: { "1M": 1.10, "6M": 1.45, "1Y": 2.15, "3Y": 3.80, "5Y": 8.50 }
    }
];

export default function Calculator() {
    const [amount, setAmount] = useState<number>(1000);
    const [period, setPeriod] = useState<string>("5Y");

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawVal = e.target.value.replace(/,/g, "").replace(/\$/g, "");
        if (rawVal === "") {
            setAmount(0);
            return;
        }
        const val = parseInt(rawVal, 10);
        if (!isNaN(val)) {
            setAmount(val);
        }
    };

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);
    };

    const formatPercentage = (rate: number) => {
        const percentage = (rate - 1) * 100;
        return `+${percentage.toFixed(2)}%`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/60 flex flex-col min-h-[400px] overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
            <div className="p-8 pb-6 text-center sm:text-left flex-1">
                <h3 className="text-2xl font-sans font-bold text-slate-900 tracking-tight mb-2">Compare Crypto Against Traditional Assets</h3>
                <p className="text-sm font-medium text-slate-500 mb-8 max-w-sm">See the historical performance of top crypto assets versus traditional investments like stocks and gold.</p>

                {/* Comparator Rows */}
                <div className="flex flex-col gap-5 mb-8">
                    {ASSET_DATA.map((asset, idx) => {
                        const rate = asset.rates[period as keyof typeof asset.rates] || 1;
                        const finalValue = amount * rate;
                        const isLast = idx === ASSET_DATA.length - 1;

                        // Specific gradient colors since Tailwind dynamic class generation might miss them
                        let gradientFrom = "from-yellow-50";
                        let gradientTo = "to-yellow-100";
                        let textCol = "text-yellow-600";
                        let borderCol = "border-yellow-200/50";

                        if (asset.id === "microsoft") {
                            gradientFrom = "from-blue-50";
                            gradientTo = "to-blue-100";
                            textCol = "text-blue-600";
                            borderCol = "border-blue-200/50";
                        } else if (asset.id === "bitcoin") {
                            gradientFrom = "from-orange-50";
                            gradientTo = "to-orange-100";
                            textCol = "text-orange-500";
                            borderCol = "border-orange-200/50";
                        }

                        return (
                            <div key={asset.id} className={`flex items-center justify-between ${!isLast ? 'border-b border-slate-100/50 pb-4' : ''}`}>
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} border ${borderCol} flex items-center justify-center ${textCol} font-bold shadow-sm`}>
                                        {asset.symbol}
                                    </div>
                                    <span className="font-semibold text-slate-700">{asset.name}</span>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-slate-900">
                                        {amount ? formatCurrency(finalValue) : "$0"}
                                    </div>
                                    <div className="text-xs text-brand-green font-semibold mt-1 bg-brand-lime/20 px-2 py-0.5 rounded-full inline-block tracking-tight">
                                        {formatPercentage(rate)}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Calculator Input Area */}
                <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-100 flex flex-col gap-5">
                    <div className="flex flex-col sm:flex-row gap-5 justify-between sm:items-center">
                        <div className="w-full sm:w-1/2">
                            <label htmlFor="amount" className="text-sm text-slate-500 font-medium block mb-2">Had I invested</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-[45%] text-slate-400 font-bold">$</span>
                                <input
                                    id="amount"
                                    type="text"
                                    className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-8 pr-4 text-base font-bold text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-brand-lime transition-all"
                                    placeholder="Enter Amount"
                                    value={amount ? amount.toLocaleString() : ""}
                                    onChange={handleAmountChange}
                                />
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 flex flex-col items-start sm:items-end">
                            <span className="text-sm text-slate-500 font-medium block mb-2">Time Period</span>
                            <div className="flex items-center gap-1 bg-white rounded-xl border border-slate-200 p-1 shadow-sm w-full sm:w-auto">
                                {TIME_PERIODS.map(val => (
                                    <button
                                        key={val}
                                        onClick={() => setPeriod(val)}
                                        className={`flex-1 sm:flex-none px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 ${period === val
                                            ? 'bg-brand-lime text-brand-dark shadow-sm scale-100'
                                            : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50 scale-95 hover:scale-100'
                                            }`}
                                    >
                                        {val}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chart Area */}
            <div className="w-full h-32 sm:h-40 bg-gradient-to-t from-brand-lime/10 to-transparent relative mt-auto border-t border-slate-100/50 shrink-0">
                {/* SVG Chart Line */}
                <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full stroke-emerald-500 stroke-2 fill-none drop-shadow-[0_2px_4px_rgba(16,185,129,0.3)] absolute bottom-0">
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        d={
                            period === "1M" ? "M0 38 Q 20 35, 40 36 T 70 30 T 100 28" :
                                period === "6M" ? "M0 35 Q 20 30, 40 32 T 70 25 T 100 20" :
                                    period === "1Y" ? "M0 35 Q 15 30, 25 32 T 50 20 T 75 10 T 100 5" :
                                        period === "3Y" ? "M0 38 Q 20 25, 40 28 T 60 15 T 80 18 T 100 2" :
                                            "M0 38 Q 10 35, 20 30 T 40 25 T 60 15 T 80 10 T 100 0"
                        }
                        key={`line-${period}`}
                    />
                    <motion.path
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        d={
                            period === "1M" ? "M100 28 L100 40 L0 40 L0 38 Z" :
                                period === "6M" ? "M100 20 L100 40 L0 40 L0 35 Z" :
                                    period === "1Y" ? "M100 5 L100 40 L0 40 L0 35 Z" :
                                        period === "3Y" ? "M100 2 L100 40 L0 40 L0 38 Z" :
                                            "M100 0 L100 40 L0 40 L0 38 Z"
                        }
                        className="fill-brand-lime/20 stroke-none"
                        key={`fill-${period}`}
                    />
                </svg>
            </div>
        </motion.div>
    );
}
