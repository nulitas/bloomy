"use client";
import React from "react";
import { HeroParallax } from "@/app/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "1",
    link: "/",
    thumbnail:
      "https://images.unsplash.com/photo-1492589824053-2c91d773c463?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "2",
    link: "/",
    thumbnail:
      "https://images.unsplash.com/photo-1704080118559-4aa32c2f4e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "3",
    link: "/",
    thumbnail:
      "https://images.unsplash.com/photo-1543672159-758fb437bc78?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "4",
    link: "/",
    thumbnail:
      "https://images.unsplash.com/photo-1714913163210-f2ef311a8235?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "5",
    link: "/",
    thumbnail:
      "https://images.unsplash.com/photo-1720063674493-38267830153f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
