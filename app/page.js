import Hero from "@/components/Home/Hero";
import Skill from "@/components/Home/Skill";
import Services from "@/components/Home/Services";
import Image from "next/image";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
    <Hero />
    <Skill />
    <Services />
    <Banner />
    </>
  );
}
