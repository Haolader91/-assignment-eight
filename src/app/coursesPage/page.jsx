import CoursesCard from "@/components/CoursesCard";
import SearchInput from "@/components/SearchInput";
import { Search } from "lucide-react";
// import React, { useState } from "react";

const CoursesPage = async () => {
  const res = await fetch("https://haolader.vercel.app/data.json", {
    cache: "no-store",
  });
  const data = await res.json();
  //   console.log(data);

  return (
    <div className="max-w-7xl mx-auto">
      <SearchInput courses={data} />

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((data) => (
          <CoursesCard key={data.id} data={data} />
        ))}
      </div> */}
    </div>
  );
};

export default CoursesPage;
