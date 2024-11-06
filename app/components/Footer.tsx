"use client";

import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
export function Footer() {
  return (
    <>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
      </div>
      <div className="flex flex-col w-full bg-[#2694ca] p-20 text-white font-semibold">
        <span className="text-2xl font-bold">CH2-PS086</span>
        <span> Bloomy : Blue Economy</span>
      </div>
    </>
  );
}

const testimonials = [
  {
    quote:
      "This app helps me stay ahead of market trends and make smarter fish buying decisions.",
    name: "Marine Expert",
    title: "Fish Price Forecaster",
  },
  {
    quote:
      "Thanks to the freshness detection feature, I never have to worry about spoiled fish again.",
    name: "Sustainable Seafood Seller",
    title: "Freshness Predictor",
  },
  {
    quote:
      "I can predict the best times to set sail based on data. This app has changed the way we fish.",
    name: "Captain Joe",
    title: "Sailing Decision Predictor",
  },
  {
    quote:
      "It's like having an entire fish market in the palm of your hand. Amazing tool for e-commerce!",
    name: "E-commerce Manager",
    title: "Fish E-commerce Platform",
  },
  {
    quote:
      "The app's forecasting features help me make better purchasing decisions—saving time and money.",
    name: "Fish Vendor",
    title: "Fish Price Analyst",
  },
];
