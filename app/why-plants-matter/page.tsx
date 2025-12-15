"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import GrowthAnimation from "@/components/GrowthAnimation";
import StatsCounter from "@/components/StatsCounter";
import Image from "next/image";
import Link from "next/link";

const impactAreas = [
    {
        icon: "🌍",
        title: "Climate Regulation",
        description:
            "Plants absorb billions of tons of CO₂ annually through photosynthesis, acting as Earth's natural carbon sinks and helping regulate global temperatures.",
        stat: "2.6B",
        statLabel: "tons of CO₂ absorbed yearly",
    },
    {
        icon: "💨",
        title: "Oxygen Production",
        description:
            "Photosynthesis by plants and algae produces virtually all the oxygen in our atmosphere, making it possible for animals and humans to breathe.",
        stat: "20",
        statLabel: "% of oxygen from plants",
    },
    {
        icon: "💧",
        title: "Water Cycle",
        description:
            "Plants play a crucial role in the water cycle through transpiration, releasing water vapor that forms clouds and creates rainfall patterns.",
        stat: "10",
        statLabel: "% of rainfall from plants",
    },
    {
        icon: "🌾",
        title: "Food Security",
        description:
            "Plants provide 80% of the food humans consume, either directly as crops or indirectly as feed for livestock. They are essential for global food security.",
        stat: "80",
        statLabel: "% of human food",
    },
    {
        icon: "🏔️",
        title: "Soil Protection",
        description:
            "Plant roots bind soil particles together, preventing erosion and landslides. They also improve soil quality by adding organic matter.",
        stat: "95",
        statLabel: "% less soil erosion",
    },
    {
        icon: "🦋",
        title: "Biodiversity",
        description:
            "Plants provide habitat and food for millions of species. They are the foundation of most terrestrial ecosystems and food webs.",
        stat: "80",
        statLabel: "% of terrestrial species",
    },
];

export default function WhyPlantsMatterPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/ecosystem.jpg"
                        alt="Plant ecosystem"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white" />
                </div>

                <div className="relative z-10 container-custom text-center">
                    <AnimatedSection>
                        <h1 className="heading-lg text-white mb-6">Why Plants Matter</h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            The foundation of all life on Earth. Essential for our survival and the health of our
                            planet.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Key Statistics */}
            <AnimatedSection className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="heading-md text-gray-900 mb-6">The Numbers Speak</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Plants are essential to life on Earth. Here&apos;s why they matter.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-green-50 rounded-3xl">
                            <div className="text-5xl font-bold text-green-600 mb-2">
                                <StatsCounter value={300000} suffix="+" />
                            </div>
                            <p className="text-gray-700 font-medium">Plant Species</p>
                        </div>

                        <div className="text-center p-6 bg-green-50 rounded-3xl">
                            <div className="text-5xl font-bold text-green-600 mb-2">
                                <StatsCounter value={28} suffix="%" />
                            </div>
                            <p className="text-gray-700 font-medium">of Earth Covered by Forests</p>
                        </div>

                        <div className="text-center p-6 bg-green-50 rounded-3xl">
                            <div className="text-5xl font-bold text-green-600 mb-2">
                                <StatsCounter value={80} suffix="%" />
                            </div>
                            <p className="text-gray-700 font-medium">of Biodiversity in Forests</p>
                        </div>

                        <div className="text-center p-6 bg-green-50 rounded-3xl">
                            <div className="text-5xl font-bold text-green-600 mb-2">
                                <StatsCounter value={25} suffix="%" />
                            </div>
                            <p className="text-gray-700 font-medium">of Medicines from Plants</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Impact Areas */}
            <section className="section-padding bg-gradient-to-b from-white to-green-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="heading-md text-gray-900 mb-6">Environmental Impact</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Plants are the silent heroes of our planet, working tirelessly to maintain the delicate
                            balance of Earth&apos;s ecosystems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {impactAreas.map((area, index) => (
                            <AnimatedSection key={area.title} delay={index * 0.1}>
                                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                                    <div className="text-5xl mb-4">{area.icon}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                                    <div className="pt-4 border-t border-gray-200">
                                        <div className="text-3xl font-bold text-green-600">{area.stat}+</div>
                                        <div className="text-sm text-gray-500 mt-1">{area.statLabel}</div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photosynthesis Explanation */}
            <AnimatedSection className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="heading-sm text-gray-900 mb-6">
                                    Photosynthesis: Nature&apos;s Miracle
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    Photosynthesis is the process by which plants convert sunlight, water, and carbon
                                    dioxide into glucose and oxygen. This remarkable process is the foundation of nearly
                                    all life on Earth.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                            <span className="text-green-600 font-bold">1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">Light Absorption</h4>
                                            <p className="text-gray-600">
                                                Chlorophyll in plant cells absorbs sunlight energy
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                            <span className="text-green-600 font-bold">2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">Carbon Capture</h4>
                                            <p className="text-gray-600">CO₂ from air combines with water from roots</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                            <span className="text-green-600 font-bold">3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">Energy Conversion</h4>
                                            <p className="text-gray-600">
                                                Creates glucose for plant growth and releases oxygen
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/hero-plants.jpg"
                                    alt="Photosynthesis in action"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Growth Process Animation */}
            <AnimatedSection className="section-padding bg-gradient-to-b from-green-50 to-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-md text-gray-900 mb-6">The Miracle of Growth</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            From a tiny seed to a magnificent tree, witness the journey of life that sustains our
                            planet.
                        </p>
                    </div>
                    <GrowthAnimation />
                </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection className="section-padding bg-gradient-to-br from-green-600 to-emerald-700 text-white">
                <div className="container-custom text-center">
                    <h2 className="heading-md mb-6">Ready to Make a Difference?</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Understanding plants is the first step. Learn how you can contribute to a greener future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/categories">
                            <Button variant="secondary" size="lg">
                                Explore Plant Types
                            </Button>
                        </Link>
                        <Link href="/climate">
                            <Button variant="ghost" size="lg" className="bg-white/10 hover:bg-white/20 text-white">
                                Climate Action
                            </Button>
                        </Link>
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
}
