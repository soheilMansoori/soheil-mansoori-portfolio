import Business from "@/components/Business";
import Education from "@/components/Education";
import Background from "@/components/Background";
import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soheil Mansoori",
};

export default async function HomePage() {
  return (
    <div>
      <main className="h-screen snap-y snap-mandatory overflow-y-scroll  [&::-webkit-scrollbar]:w-0 ">
        <Home />
        <Background />
        <Education />
        <Business />
      </main>
    </div>
  );
}
