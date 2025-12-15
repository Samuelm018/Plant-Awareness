"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/why-plants-matter", label: "Why Plants Matter" },
    { href: "/categories", label: "Categories" },
    { href: "/climate", label: "Climate" },
    { href: "/learn", label: "Learn" },
    { href: "/developer", label: "Developer" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
    );

    const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <motion.nav
            style={{
                backgroundColor,
                backdropFilter: backdropBlur,
                WebkitBackdropFilter: backdropBlur,
            }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50"
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="text-2xl md:text-3xl font-bold">
                            <span className="text-green-600">🌱</span>
                            <span className="text-gray-900 ml-2 group-hover:text-green-600 transition-colors">
                                PlantLife
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors relative group",
                                    pathname === link.href
                                        ? "text-green-600"
                                        : "text-gray-700 hover:text-green-600"
                                )}
                            >
                                {link.label}
                                <span
                                    className={cn(
                                        "absolute -bottom-1 left-0 h-0.5 bg-green-600 transition-all duration-300",
                                        pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                                    )}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{ height: isMenuOpen ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50"
            >
                <div className="container-custom py-4 space-y-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "block px-4 py-2 rounded-lg text-base font-medium transition-colors",
                                pathname === link.href
                                    ? "bg-green-50 text-green-600"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </motion.nav>
    );
}
