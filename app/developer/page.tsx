"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function DeveloperPage() {
    return (
        <>
            <section className="bg-gradient-to-b from-green-50 to-white pt-32 pb-20">
                <div className="container-custom">
                    <AnimatedSection>
                        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                            <div className="md:flex">
                                {/* Image Section */}
                                <div className="md:w-1/2 relative h-96 md:h-auto">
                                    <Image
                                        src="/images/mypic.jpg"
                                        alt="Samuel M - Developer and Designer"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-none" />
                                    <div className="absolute bottom-6 left-6 text-white md:hidden">
                                        <h1 className="text-3xl font-bold">Samuel M</h1>
                                        <p className="text-white/90 font-medium">Developed & Designed by</p>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                                    <div className="hidden md:block mb-6">
                                        <h1 className="text-4xl font-bold text-gray-900 mb-2">Samuel M</h1>
                                        <p className="text-xl text-green-600 font-medium">Developed & Designed by</p>
                                    </div>

                                    <div className="space-y-6">
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            Passionate about creating beautiful, sustainable digital experiences.
                                            Crafting user-centric interfaces with a focus on modern aesthetics and performance.
                                        </p>

                                        <div className="space-y-4 pt-4 border-t border-gray-100">
                                            <div className="flex items-center space-x-4 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors -ml-2">
                                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500 font-medium">Email</p>
                                                    <a href="mailto:samuelm99729.work@gmail.com" className="text-gray-900 font-medium hover:text-green-600 transition-colors">
                                                        samuelm99729.work@gmail.com
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-4 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors -ml-2">
                                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                                                    <a href="tel:+916382636384" className="text-gray-900 font-medium hover:text-green-600 transition-colors">
                                                        +91 6382636384
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10">
                                        <Link href="/">
                                            <Button variant="secondary" className="w-full justify-center">
                                                Back to Home
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
