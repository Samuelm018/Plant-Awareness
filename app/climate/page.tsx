"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const timelineEvents = [
    {
        year: "Today",
        title: "Climate Crisis",
        description:
            "Global temperatures have risen 1.1°C since pre-industrial times. Forests are disappearing at an alarming rate.",
        impact: "critical",
    },
    {
        year: "2030",
        title: "Critical Decade",
        description:
            "Scientists warn we must reduce emissions by 45% to limit warming to 1.5°C. Every tree planted today makes a difference.",
        impact: "urgent",
    },
    {
        year: "2050",
        title: "Net Zero Goal",
        description:
            "The world aims to achieve net-zero emissions. Plants and reforestation will play a crucial role in carbon capture.",
        impact: "hopeful",
    },
    {
        year: "Future",
        title: "A Greener Tomorrow",
        description:
            "With collective action and plant protection, we can restore ecosystems and create a sustainable future for all.",
        impact: "optimistic",
    },
];

const solutions = [
    {
        icon: "🌳",
        title: "Reforestation",
        description:
            "Planting billions of trees to restore degraded forests and create new carbon sinks that absorb CO₂.",
    },
    {
        icon: "🏙️",
        title: "Urban Greening",
        description:
            "Increasing green spaces in cities reduces heat islands, improves air quality, and enhances quality of life.",
    },
    {
        icon: "🌾",
        title: "Sustainable Agriculture",
        description:
            "Regenerative farming practices that work with plants to improve soil health and sequester carbon.",
    },
    {
        icon: "🔬",
        title: "Conservation Science",
        description:
            "Protecting existing forests and ecosystems through research, policy, and community engagement.",
    },
    {
        icon: "♻️",
        title: "Circular Economy",
        description:
            "Using plant-based materials sustainably and recycling resources to reduce our environmental footprint.",
    },
    {
        icon: "🌱",
        title: "Community Action",
        description:
            "Local initiatives, tree planting drives, and education programs that empower individuals to make a difference.",
    },
];

export default function ClimatePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/climate.jpg"
                        alt="Earth and climate"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white" />
                </div>

                <div className="relative z-10 container-custom text-center">
                    <AnimatedSection>
                        <h1 className="heading-lg text-white mb-6">Climate & Sustainability</h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            Plants are our most powerful allies in fighting climate change and building a
                            sustainable future.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Climate Impact */}
            <AnimatedSection className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="heading-md text-gray-900 mb-6">Plants & Climate Action</h2>
                        <p className="text-lg text-gray-600">
                            Plants are essential carbon sinks, absorbing CO₂ from the atmosphere and storing it in
                            their biomass and soil. Protecting and expanding plant life is one of the most effective
                            climate solutions available.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl">
                            <div className="text-5xl mb-4">🌍</div>
                            <div className="text-4xl font-bold text-green-600 mb-2">2.6B</div>
                            <p className="text-gray-700 font-medium">Tons of CO₂ absorbed by plants yearly</p>
                        </div>
                        <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl">
                            <div className="text-5xl mb-4">🌲</div>
                            <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
                            <p className="text-gray-700 font-medium">Of emissions offset by forests</p>
                        </div>
                        <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl">
                            <div className="text-5xl mb-4">🌡️</div>
                            <div className="text-4xl font-bold text-green-600 mb-2">2-8°C</div>
                            <p className="text-gray-700 font-medium">Urban cooling from tree canopy</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Timeline */}
            <section className="section-padding bg-gradient-to-b from-white to-green-50">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="heading-md text-gray-900 mb-6">Climate Timeline</h2>
                        <p className="text-lg text-gray-600">
                            Understanding where we are and where we need to go in the fight against climate change.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {timelineEvents.map((event, index) => (
                                <AnimatedSection key={event.year} delay={index * 0.15}>
                                    <div className="relative pl-8 md:pl-12 border-l-4 border-green-500">
                                        <div className="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg" />
                                        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                                <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                                                <span className="text-green-600 font-bold text-lg">{event.year}</span>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">{event.description}</p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <AnimatedSection className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="heading-md text-gray-900 mb-6">Plant-Based Solutions</h2>
                        <p className="text-lg text-gray-600">
                            Practical ways plants can help us combat climate change and build a sustainable future.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <AnimatedSection key={solution.title} delay={index * 0.1}>
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                                    <div className="text-5xl mb-4">{solution.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection className="section-padding bg-gradient-to-br from-green-600 to-emerald-700 text-white">
                <div className="container-custom text-center">
                    <h2 className="heading-md mb-6">Every Action Counts</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        The climate crisis is urgent, but together we can make a difference. Start learning and
                        taking action today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/learn">
                            <Button variant="secondary" size="lg">
                                Education Resources
                            </Button>
                        </Link>
                        <Link href="/categories">
                            <Button variant="ghost" size="lg" className="bg-white/10 hover:bg-white/20 text-white">
                                Explore Plants
                            </Button>
                        </Link>
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
}
