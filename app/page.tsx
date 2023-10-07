import Image from "next/image";
import { HeroSection } from "@/components/main-page/hero";
import AboutUs from "@/components/main-page/about-us";
import Schedule from "@/components/main-page/schedule";
import { Divider } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <HeroSection />;
      <Divider />
      <Schedule />
      <Divider />
      <AboutUs />
    </>
  );
}
