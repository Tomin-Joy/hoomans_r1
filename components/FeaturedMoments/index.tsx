"use client";

import { useState, useRef, useEffect } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import MomentCard from "./MomentCard";
import { useIsVisible } from "@/hooks/isVisible";

interface Moment {
  id: number;
  title: string;
  description: string;
  image: string;
}

const moments: Moment[] = [
  {
    id: 1,
    title: "Overlanding Trips",
    description:
      "Overlanding is a form of slow travel. It's all about taking the road less travelled, camping across different terrains, and getting away from the tourist trail in overlanding trucks.",
    image:
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Mountain & Desert Camping",
    description:
      "We've found the perfect mountains and deserts to pitch your tent and roll out those sleeping bags for a date with the milky way. Want in?",
    image:
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Mountain Trekking",
    description:
      "Far away from the skyscrapers and beach clubs of Dubai, we've discovered a breathtaking array of mountains, deserts and lush green wadis waiting to be explored. So, let's go hiking!",
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Farm Stays",
    description:
      "If you're looking for a unique weekend getaway with amazing views and delicious local food, we've got just the place.",
    image:
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Cultural Immersions",
    description:
      "Dive deep into local traditions with authentic homestays, cooking classes, and craft workshops. Connect with communities and create lasting memories.",
    image:
      "https://images.unsplash.com/photo-1523539693385-e5e891eb4465?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Alpine Adventures",
    description:
      "Scale new heights with our curated mountain experiences. From beginner-friendly hikes to challenging peaks, discover the majesty of alpine landscapes.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    title: "Forest Therapy",
    description:
      "Reconnect with nature through guided forest bathing experiences. Let the healing power of ancient woodlands restore your mind, body, and spirit.",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    title: "Island Hopping",
    description:
      "Explore hidden paradises across multiple islands. From secluded beaches to local villages, experience the unique character of each destination.",
    image:
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    title: "Wellness Journeys",
    description:
      "Immerse yourself in holistic wellness retreats featuring yoga, meditation, spa treatments, and organic cuisine in breathtaking natural settings.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
  },
  {
    id: 10,
    title: "Adventure Sports",
    description:
      "Push your limits with expert-guided adventure sports. From rock climbing to white-water rafting, experience the ultimate adrenaline rush in safe hands.",
    image:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80",
  },
];

export default function FeaturedMoments() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isFirstVisible, first] = useIsVisible({ threshold: 0.5 });
  const [isEndVisible, end] = useIsVisible({ threshold: 0.5 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const handleNavigation = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth;
    const newScrollPosition =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="pt-20 m-h-[100dvh]">
      <div className="px-4 md:px-8 lg:px-16 max-w-[100dwh] mx-auto mb-6">
        <div className="flex justify-between items-end sm:items-center flex-col gap-3  sm:flex-row">
          <Header />
          <Navigation
            isStart={isFirstVisible}
            isEnd={isEndVisible}
            onPrevClick={() => handleNavigation("left")}
            onNextClick={() => handleNavigation("right")}
          />
        </div>
      </div>

      <div className="pl-2 lg:pl-10 pt-10 pb-10">
        <div
          ref={scrollContainerRef}
          className=" flex gap-6  overflow-x-auto overflow-y-hidden px-4 md:px-8 lg:px-16  pb-8 snap-x snap-mandatory "
        >
          <div ref={first} className="snap-start"></div>
          {moments.map((moment, index) => (
            <div
              key={moment.id}
              className="snap-start transition-all duration-300 ease-in-out hover-grow"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              <MomentCard
                title={moment.title}
                description={moment.description}
                image={moment.image}
                isActive={index === activeIndex}
                index={index}
              />
            </div>
          ))}
          <div ref={end} className="snap-start"></div>
        </div>
      </div>
    </section>
  );
}
