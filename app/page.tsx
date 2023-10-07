import Image from "next/image";
import { HeroSection } from "@/components/main-page/hero";
import AboutUs from "@/components/main-page/about-us";
import { Divider } from "@chakra-ui/react";
import Schedule from "@/components/main-page/schedule";
import { YTService } from "@/components/main-page/youtube-player";

export default function Home() {
  return (
    <>
      <HeroSection />;
      <YTService />
      <Schedule />
      <Divider />
      <AboutUs />
    </>
  );
}
