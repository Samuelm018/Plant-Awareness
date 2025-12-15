"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import Card from "@/components/Card";
import StatsCounter from "@/components/StatsCounter";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-plants.jpg"
                        alt="Lush green nature"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="heading-xl text-white mb-6 text-balance">
                            Plants Are Life.
                            <br />
                            <span className="text-green-400">Protect What Sustains Us.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto text-balance">
                            Discover the vital role of plants in our ecosystem and learn how we can create a
                            greener, more sustainable future together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/categories">
                                <Button size="lg">Explore Plants</Button>
                            </Link>
                            <Link href="/why-plants-matter">
                                <Button variant="secondary" size="lg">
                                    Why Plants Matter
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                >
                    <div className="text-white/80 text-sm mb-2 text-center">Scroll to explore</div>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2"
                    >
                        <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Quick Stats Section */}
            <AnimatedSection className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold text-green-600 mb-3">
                                <StatsCounter value={20} suffix="%" />
                            </div>
                            <p className="text-lg text-gray-600">
                                of Earth&apos;s oxygen produced by plants
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold text-green-600 mb-3">
                                <StatsCounter value={300000} suffix="+" />
                            </div>
                            <p className="text-lg text-gray-600">plant species on Earth</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold text-green-600 mb-3">
                                <StatsCounter value={80} suffix="%" />
                            </div>
                            <p className="text-lg text-gray-600">
                                of food comes from just 12 plant species
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Why Plants Matter Preview */}
            <AnimatedSection className="section-padding bg-gradient-to-b from-white to-green-50">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="heading-md text-gray-900 mb-6">
                            The Foundation of Life on Earth
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Plants are the primary producers of our planet, converting sunlight into energy,
                            producing oxygen, stabilizing soil, and providing food and habitat for countless
                            species. Without plants, life as we know it would not exist.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="text-center">
                            <div className="text-4xl mb-4">🌍</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Climate Regulation</h3>
                            <p className="text-gray-600">
                                Plants absorb CO₂ and help regulate Earth&apos;s temperature through photosynthesis
                                and transpiration.
                            </p>
                        </Card>

                        <Card className="text-center">
                            <div className="text-4xl mb-4">💨</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Oxygen Production</h3>
                            <p className="text-gray-600">
                                Through photosynthesis, plants produce the oxygen we breathe, essential for all
                                aerobic life.
                            </p>
                        </Card>

                        <Card className="text-center">
                            <div className="text-4xl mb-4">🌾</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Food & Resources</h3>
                            <p className="text-gray-600">
                                Plants provide food, medicine, shelter, and raw materials that sustain human
                                civilization.
                            </p>
                        </Card>
                    </div>

                    <div className="text-center mt-10">
                        <Link href="/why-plants-matter">
                            <Button variant="primary" size="lg">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </AnimatedSection>

            {/* Categories Preview */}
            <AnimatedSection className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="heading-md text-gray-900 mb-6">Explore Plant Categories</h2>
                        <p className="text-lg text-gray-600">
                            From towering trees to delicate medicinal herbs, discover the incredible diversity of
                            plant life.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Link href="/categories#trees" className="group">
                            <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <Image
                                    src="/images/trees.jpg"
                                    alt="Trees and forests"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <div className="p-8 text-white">
                                        <h3 className="text-3xl font-bold mb-2">Trees</h3>
                                        <p className="text-white/90">The giants that shape our ecosystems</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/categories#medicinal" className="group">
                            <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <Image
                                    src="/images/medicinal.jpg"
                                    alt="Medicinal plants"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <div className="p-8 text-white">
                                        <h3 className="text-3xl font-bold mb-2">Medicinal Plants</h3>
                                        <p className="text-white/90">Nature&apos;s pharmacy for healing</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="text-center mt-10">
                        <Link href="/categories">
                            <Button variant="primary" size="lg">
                                View All Categories
                            </Button>
                        </Link>
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection className="section-padding bg-gradient-to-br from-green-600 to-emerald-700 text-white">
                <div className="container-custom text-center">
                    <h2 className="heading-lg mb-6">Plant More. Live Better.</h2>
                    <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
                        Every plant makes a difference. Join the movement to create a greener, healthier planet
                        for future generations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/learn">
                            <Button variant="secondary" size="lg">
                                Start Learning
                            </Button>
                        </Link>
                        <Link href="/climate">
                            <Button variant="ghost" size="lg" className="bg-white/10 hover:bg-white/20 text-white">
                                Climate Impact
                            </Button>
                        </Link>
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
}
