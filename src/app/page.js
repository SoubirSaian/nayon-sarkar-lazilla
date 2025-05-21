import About from "@/components/About";
import Blog from "@/components/Blog";
import Client from "@/components/Client";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NewsLetter from "@/components/NewsLetter";
import Service from "@/components/Service";
import Software from "@/components/Software";
import Testimonial from "@/components/Testimonial";
// import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <HeroSection/>
      <Client/>
      <About/>
      <Counter/>
      <Service/>
      <Testimonial/>
      <Software/>
      <Blog/>
      <NewsLetter/>
      <Footer/>
    </>
  );
}
