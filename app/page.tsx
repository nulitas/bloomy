// import { NavbarDemo } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import Team from "./components/Team";
import Technologies from "./components/Technologies";

export default function Home() {
  return (
    <>
      {/* <NavbarDemo /> */}
      <Hero />
      <Technologies />
      <Team />
      <Footer />
    </>
  );
}
