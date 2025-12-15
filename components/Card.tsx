import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    imageSrc?: string;
    imageAlt?: string;
    glass?: boolean;
    hover?: boolean;
}

export default function Card({
    children,
    className,
    imageSrc,
    imageAlt = "",
    glass = false,
    hover = true,
}: CardProps) {
    return (
        <div
            className={cn(
                "rounded-3xl overflow-hidden transition-all duration-300",
                glass ? "glass" : "bg-white shadow-lg",
                hover && "hover:shadow-2xl hover:scale-105 cursor-pointer",
                className
            )}
        >
            {imageSrc && (
                <div className="relative h-64 w-full overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                </div>
            )}
            <div className="p-6 md:p-8">{children}</div>
        </div>
    );
}
