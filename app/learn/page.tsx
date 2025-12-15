"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Link from "next/link";

const articles = [
    {
        title: "Understanding Photosynthesis",
        category: "Science",
        readTime: "5 min read",
        description:
            "Dive deep into the miraculous process that powers all life on Earth. Learn how plants convert sunlight into energy.",
        image: "/images/hero-plants.jpg",
    },
    {
        title: "The Importance of Biodiversity",
        category: "Ecology",
        readTime: "7 min read",
        description:
            "Why plant diversity matters for ecosystem health, resilience, and human survival in a changing climate.",
        image: "/images/ecosystem.jpg",
    },
    {
        title: "Medicinal Plants Through History",
        category: "History",
        readTime: "6 min read",
        description:
            "From ancient civilizations to modern medicine, explore how plants have healed humanity for thousands of years.",
        image: "/images/medicinal.jpg",
    },
    {
        title: "Indoor Plants for Clean Air",
        category: "Lifestyle",
        readTime: "4 min read",
        description:
            "Discover which houseplants are best at purifying air and creating a healthier living environment.",
        image: "/images/indoor.jpg",
    },
    {
        title: "Protecting Endangered Species",
        category: "Conservation",
        readTime: "8 min read",
        description:
            "Learn about rare and endangered plant species and what we can do to prevent their extinction.",
        image: "/images/endangered.jpg",
    },
    {
        title: "Trees and Climate Change",
        category: "Climate",
        readTime: "6 min read",
        description:
            "How reforestation and forest protection are critical tools in the fight against global warming.",
        image: "/images/trees.jpg",
    },
];

const topics = [
    {
        icon: "🔬",
        title: "Plant Science",
        description: "Botany, genetics, and the fascinating world of plant biology",
    },
    {
        icon: "🌍",
        title: "Ecology & Environment",
        description: "Ecosystems, habitats, and the interconnected web of life",
    },
    {
        icon: "💊",
        title: "Medicinal Uses",
        description: "Traditional and modern medicine from plant sources",
    },
    {
        icon: "🌱",
        title: "Gardening & Care",
        description: "Practical tips for growing and caring for plants",
    },
    {
        icon: "🏛️",
        title: "History & Culture",
        description: "Plants in human civilization, mythology, and traditions",
    },
    {
        icon: "⚠️",
        title: "Conservation",
        description: "Protecting endangered species and habitats",
    },
];

export default function LearnPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-b from-green-50 to-white pt-24 md:pt-32">
                <div className="container-custom">
                    <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
                        <h1 className="heading-lg text-gray-900 mb-6">Learn & Awareness</h1>
                        <p className="text-xl text-gray-600">
                            Expand your knowledge about plants, ecology, sustainability, and how you can make a
                            positive impact on our planet.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Topics Grid */}
            <AnimatedSection className="pb-16">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
                        Explore Topics
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topics.map((topic, index) => (
                            <AnimatedSection key={topic.title} delay={index * 0.1}>
                                <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg cursor-pointer">
                                    <div className="text-4xl mb-3">{topic.icon}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{topic.title}</h3>
                                    <p className="text-gray-600 text-sm">{topic.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Articles Section */}
            <section className="section-padding bg-gradient-to-b from-white to-green-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-md text-gray-900 mb-4">Educational Articles</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Dive into our curated collection of articles about plants, nature, and sustainability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <AnimatedSection key={article.title} delay={index * 0.1}>
                                <Card imageSrc={article.image} imageAlt={article.title} className="h-full flex flex-col">
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                                                {article.category}
                                            </span>
                                            <span className="text-sm text-gray-500">{article.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">{article.description}</p>
                                    </div>
                                    <button className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center group">
                                        Read More
                                        <svg
                                            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <AnimatedSection className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-md text-gray-900 mb-12 text-center">Did You Know?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-lg">
                                <div className="text-4xl mb-4">🌳</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Ancient Giants</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    The oldest known living tree is a bristlecone pine named Methuselah, which is over
                                    4,800 years old. It was already ancient when the Egyptian pyramids were built!
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-lg">
                                <div className="text-4xl mb-4">🌿</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Plant Communication</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Plants can &quot;talk&quot; to each other! They use chemical signals through the air and
                                    underground fungal networks to warn neighbors about pests and share nutrients.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-lg">
                                <div className="text-4xl mb-4">🌺</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Rare Bloom</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    The corpse flower (Amorphophallus titanum) blooms only once every 7-10 years and
                                    emits a smell like rotting flesh to attract pollinators.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-lg">
                                <div className="text-4xl mb-4">🌲</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Oxygen Factories</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    A single mature tree can produce enough oxygen for two people for an entire year,
                                    while also absorbing 48 pounds of CO₂ annually.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection className="section-padding bg-gradient-to-br from-green-600 to-emerald-700 text-white">
                <div className="container-custom text-center">
                    <h2 className="heading-md mb-6">Keep Exploring</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        The more we learn about plants, the better we can protect and nurture our planet.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/why-plants-matter">
                            <Button variant="secondary" size="lg">
                                Why Plants Matter
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
