import { GraduationCap } from "lucide-react";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/coursesPage">Courses</Link>
      </li>
      <li>
        <Link href="/profile">My Profile</Link>
      </li>
    </>
  );
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold flex gap-2">
              <GraduationCap size={30} />
              <span className="text-[#6366F1]">Skill</span>Sphere
            </Link>
          </div>
          <div>
            <ul className="flex gap-10 text-gray-700 font-medium">{links}</ul>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-700 border border-gray-400 px-5 py-2 rounded-md  hover:text-[#6366F1] font-medium"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-[#6366F1] text-white px-5 py-2 rounded-md font-medium hover:bg-[#6366F1] transition"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
