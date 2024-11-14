"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface MomentCardProps {
  title: string;
  description: string;
  image: string;
  isActive: boolean;
  index: number;
}

export default function MomentCard({
  title,
  description,
  image,
  isActive,
  index,
}: MomentCardProps) {
  return (
    <div
      className={cn(
        "group cursor-pointer animate-fade-up flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px]",
        isActive && "lg:w-[420px] md:w-[340px] "
      )}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="relative overflow-hidden rounded-xl aspect-[3/2]">
        <Image
          fetchPriority="high"
          fill
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
      </div>
      <div
        className="mt-4 animate-fade-in"
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
        <p className={`text-sm text-gray-600 ${isActive || "line-clamp-2"}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
