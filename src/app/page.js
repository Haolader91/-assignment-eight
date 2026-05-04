import HeroBanner from "@/components/Banner";
import Courses from "@/components/Courses";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructors";
import TrendingCourses from "@/components/TrendingCourses";
import React from "react";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Courses></Courses>
      <LearningTips />
      <TopInstructors />
      <TrendingCourses />
    </div>
  );
}
