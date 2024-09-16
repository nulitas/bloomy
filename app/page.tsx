import { NavbarDemo } from "./components/Navbar";
import { HeroParallax } from "./components/ui/hero-parallax";
import { Footer } from "./components/Footer";
import { products } from "./components/Hero";
import Team from "./components/Team";
import Technologies from "./components/Technologies";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <HeroParallax products={products} />
      <Technologies />
      <Team />
      <Footer />
    </>
  );
}
