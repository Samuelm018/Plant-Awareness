import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "PlantLife - Plant Awareness & Sustainability",
    description:
        "Educating the world about plants, trees, ecosystems, climate impact, and sustainable living. Plants are life. Protect what sustains us.",
    keywords: ["plants", "sustainability", "environment", "climate", "nature", "ecology"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={inter.className}>
                <Navbar />
                <main className="pt-16 md:pt-20">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
