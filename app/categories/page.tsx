"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        id: "trees",
        title: "Trees",
        description: "Majestic giants that shape our ecosystems and regulate climate",
        imageSrc: "/images/trees.jpg",
        facts: [
            "A mature tree produces enough oxygen for 2 people per year",
            "Trees can live for thousands of years",
            "Forests cover 31% of Earth's land surface",
        ],
        examples: ["Oak", "Pine", "Redwood", "Maple", "Baobab"],
    },
    {
        id: "medicinal",
        title: "Medicinal Plants",
        description: "Nature's pharmacy providing healing and wellness for millennia",
        imageSrc: "/images/medicinal.jpg",
        facts: [
            "25% of modern medicines come from rainforest plants",
            "Humans have used medicinal plants for over 60,000 years",
            "70,000+ plant species are used in traditional medicine",
        ],
        examples: ["Aloe Vera", "Turmeric", "Ginseng", "Chamomile", "Echinacea"],
    },
    {
        id: "indoor",
        title: "Indoor Plants",
        description: "Bringing nature indoors for cleaner air and better wellbeing",
        imageSrc: "/images/indoor.jpg",
        facts: [
            "Indoor plants can remove up to 87% of air toxins in 24 hours",
            "They reduce stress and improve productivity by 15%",
            "Plants increase humidity levels, reducing respiratory issues",
        ],
        examples: ["Monstera", "Snake Plant", "Pothos", "Peace Lily", "Fiddle Leaf Fig"],
    },
    {
        id: "endangered",
        title: "Endangered Plants",
        description: "Rare species we must protect to preserve biodiversity",
        imageSrc: "/images/endangered.jpg",
        facts: [
            "1 in 5 plant species is threatened with extinction",
            "Plants are more threatened than mammals",
            "We lose 3 plant species to extinction every hour",
        ],
        examples: ["Venus Flytrap", "Rafflesia", "Monkey Puzzle", "Ghost Orchid", "Wollemi Pine"],
    },
];

export default function CategoriesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-b from-green-50 to-white pt-24 md:pt-32">
                <div className="container-custom">
                    <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
                        <h1 className="heading-lg text-gray-900 mb-6">Plant Categories</h1>
                        <p className="text-xl text-gray-600">
                            Explore the incredible diversity of plant life, from towering trees to delicate
                            medicinal herbs. Each category plays a vital role in our ecosystem.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="pb-24">
                <div className="container-custom space-y-24">
                    {categories.map((category, index) => (
                        <AnimatedSection key={category.id} delay={index * 0.1}>
                            <div
                                id={category.id}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Image */}
                                <div
                                    className={`relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group ${index % 2 === 1 ? "lg:order-2" : ""
                                        }`}
                                >
                                    <Image
                                        src={category.imageSrc}
                                        alt={category.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                                    <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                                        Category {index + 1}
                                    </div>
                                    <h2 className="heading-sm text-gray-900 mb-4">{category.title}</h2>
                                    <p className="text-lg text-gray-600 mb-6">{category.description}</p>

                                    {/* Facts */}
                                    <div className="space-y-3 mb-8">
                                        {category.facts.map((fact, factIndex) => (
                                            <div key={factIndex} className="flex items-start">
                                                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5 mr-3">
                                                    <svg
                                                        className="w-4 h-4 text-white"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-700">{fact}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Examples */}
                                    <div className="mb-8">
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                            Popular Examples
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {category.examples.map((example) => (
                                                <span
                                                    key={example}
                                                    className="px-4 py-2 bg-white border border-green-200 text-green-700 rounded-full text-sm font-medium hover:bg-green-50 transition-colors"
                                                >
                                                    {example}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <AnimatedSection className="section-padding bg-gradient-to-br from-green-600 to-emerald-700 text-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="heading-md mb-6">Plant Diversity Matters</h2>
                        <p className="text-xl text-white/90 mb-12">
                            Every plant species has a unique role in maintaining ecological balance
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                                <div className="text-5xl font-bold mb-2">300,000+</div>
                                <p className="text-white/90">Known Plant Species</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                                <div className="text-5xl font-bold mb-2">2,000+</div>
                                <p className="text-white/90">New Species Discovered Yearly</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                                <div className="text-5xl font-bold mb-2">21%</div>
                                <p className="text-white/90">Threatened with Extinction</p>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Link href="/climate">
                                <Button variant="secondary" size="lg">
                                    Learn About Climate Impact
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
}
