import Image from "next/image";
import { Speedtest } from "@/components/Speedtest";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white-700 ">
      <HeroSection/>
    </main>
  );
}
