import React from "react";
import CoursesCard from "./CoursesCard";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const Courses = async () => {
  const res = await fetch("https://haolader.vercel.app/data.json", {
    cache: "no-store",
  });
  const data = await res.json();

  // https://assignment-eight-2t62.vercel.app/data.json

  const topData = data.slice(0, 6);
  // console.log(topData);
  return (
    <section className="py-16 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
          Popular Courses
        </h2>

        <Link href="/coursesPage">
          <button className="text-indigo-600 font-semibold flex items-center gap-1 hover:underline">
            View All Courses <MoveRight />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topData.map((data) => (
          <CoursesCard key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
