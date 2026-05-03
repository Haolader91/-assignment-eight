import HeroBanner from "@/components/Banner";
import Courses from "@/components/Courses";
import TopInstructors from "@/components/TopInstructors";
import React from "react";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Courses></Courses>
      <TopInstructors />
    </div>
  );
}
