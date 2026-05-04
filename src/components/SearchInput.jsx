"use client";

import { useState } from "react";
import CoursesCard from "./CoursesCard";
import { Search } from "lucide-react";

const SearchInput = ({ courses }) => {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mt-10">
      <div className="mb-8 relative">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
      </div>
      <h2 className="text-2xl font-bold mb-3 p-2">Course Page</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((data) => (
            <CoursesCard key={data.id} data={data} />
          ))
        ) : (
          <p className="text-red-500 font-medium">No courses found</p>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
