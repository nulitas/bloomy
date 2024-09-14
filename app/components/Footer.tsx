"use client";

import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
export function Footer() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "In all the heavens and the earth, I alone am the honored one",
    name: "Gojo Satoru",
    title: "Jujutsu Kaisen",
  },
  {
    quote: "Do you believe in gravity?",
    name: "Enrico Pucci",
    title: "Jojo's Bizarre Adventure",
  },
  {
    quote:
      "You will never be able to love anybody else until you love yourself.",
    name: "Lelouch Lamperouge",
    title: "Code Geass",
  },
  {
    quote: "It's Over 9000!",
    name: "Vegeta",
    title: "Dragon Ball",
  },
  {
    quote:
      "If I were to encounter such monsters, I would likely be eaten by them... because in truth, I am that monster.",
    name: "L Lawliet",
    title: "Death Note",
  },
];
