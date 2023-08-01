import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/hero-section";
import Features from "@/components/features";
import RoomSection from "@/components/rooms-section";
import ChoiceSection from "@/components/choice-section";
import AboutSection from "@/components/about-section";
import ClassicSection from "@/components/classic-section";
import Testimonial from "@/components/testimonial";
import Footer from "@/components/footer";
import Sliding from "@/components/carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <RoomSection />
      <ChoiceSection />
      <AboutSection />
      <ClassicSection />
      <Testimonial />
    </div>
  );
}
