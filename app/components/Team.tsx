"use client";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
import andra from "@/public/andra.jpg";
import heical from "@/public/cal.jpg";
import tito from "@/public/tito.jpg";
import sandhi from "@/public/sandhi.jpg";
import tiova from "@/public/tiova.jpg";
import bgadit from "@/public/bgadit.jpg";
import rin from "@/public/rin.jpg";
interface People {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export const people: People[] = [
  {
    id: 1,
    name: "Heical Chandra Syahputra",
    designation: "Software Engineer",
    image: heical.src,
  },
  {
    id: 2,
    name: "Andra Rizki Pratama",
    designation: "Software Engineer",
    image: andra.src,
  },
  {
    id: 3,
    name: "Novebri Tito",
    designation: "Software Engineer",
    image: tito.src,
  },
  {
    id: 4,
    name: "Sandhi",
    designation: "Mobile Developer",
    image: sandhi.src,
  },
  {
    id: 5,
    name: "Aditya Bayu Aji",
    designation: "Cloud Engineer",
    image: bgadit.src,
  },
  {
    id: 6,
    name: "Asrini Salsabila Putri",
    designation: "Product Engineer",
    image: rin.src,
  },
  {
    id: 7,
    name: "Ahmad Tiova Ian Avola",
    designation: "Mobile Developer",
    image: tiova.src,
  },
];

const Team = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-center mb-4 group-hover:bg-black">
        <span className="bg-[#2694ca] text-white">contri</span>butors
      </h1>

      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
};

export default Team;
