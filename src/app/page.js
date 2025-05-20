import About from "@/components/About";
import Blog from "@/components/Blog";
import Client from "@/components/Client";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Service from "@/components/Service";
// import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <HeroSection/>
      <Client/>
      <About/>
      <Service/>
      <Blog/>
      <Footer/>
    </>
  );
}
