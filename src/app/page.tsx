import Image from "next/image";
import { Speedtest } from "@/components/Speedtest";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Speedtest/>
    </main>
  );
}
