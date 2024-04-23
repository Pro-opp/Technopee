import React from "react";
import HeroSection from "@/components/Home/HeroSection";
import Cards from "@/components/Home/Cards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white-700 ">
      <HeroSection/>
      <Cards/>
    </main>
  );
}
