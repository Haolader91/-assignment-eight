"use client";
import { authClient } from "@/lib/auth-client";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import AvatarImage from "../Asstes/web Design and Developer.png";

import Link from "next/link";
import React, { use } from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;
  // console.log(session, "session");
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/coursesPage">Courses</Link>
      </li>
      <li>
        <Link href="/yyy">My Profile</Link>
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

          {user ? (
            <div className="flex items-center gap-3">
              <h2 className="uppercase"> Hi, {user?.name}</h2>
              <div>
                <Image
                  src={user?.image || AvatarImage}
                  alt="User avatar"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover border border-gray-200 cursor-pointer hover:ring-2 hover:ring-blue-400 transition-all"
                />
              </div>
              <button
                onClick={async () => await authClient.signOut()}
                className="bg-[#6366F1] text-white px-5 py-2 rounded-md font-medium hover:bg-[#6366F1] transition"
              >
                Log Out
              </button>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
