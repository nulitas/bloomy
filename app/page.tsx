// import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import About from "./components/About";
import Team from "./components/Team";
import Technologies from "./components/Technologies";
import Feature from "./components/Feature";
export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Feature />
      <Technologies />
      <Team />
      <Footer />
    </>
  );
}
