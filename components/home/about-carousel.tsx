"use client";

import Image from "next/image";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { aboutGallery } from "@/data/home";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function AboutCarousel() {
  const autoplay = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    })
  );

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[autoplay.current]}
      className="h-full"
    >
      <CarouselContent className="h-full">
        {aboutGallery.map((image) => (
          <CarouselItem key={image.src} className="h-full">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-surface">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 32vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/12 via-transparent to-transparent" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
