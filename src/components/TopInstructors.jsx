import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MoveRight, Star } from "lucide-react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const TopInstructors = async () => {
  const res = await fetch("https://haolader.vercel.app/topInstructors.json", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 font-sans">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold text-slate-800">Top Instructors</h2>
        <Link
          href="/instructors"
          className="flex items-center gap-1 text-primary font-semibold hover:underline"
        >
          View All Instructors <MoveRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((instructor) => (
          <div
            key={instructor.id}
            className="card bg-base-100 border border-slate-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="card-body items-center text-center p-2">
              <div className=" mb-2">
                <div className="w-28 h-28 block">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={200}
                    height={200}
                    className="w-full h-full rounded-full object-cover scale-[1]"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 leading-tight">
                {instructor.name}
              </h3>
              <p className="text-slate-500 text-sm mt-1">{instructor.role}</p>

              <div className="flex items-center gap-1 mt-2 mb-2">
                <span className="text-yellow-400">
                  <Star size={18} />
                </span>
                <span className="font-bold text-slate-700 text-sm">
                  {instructor.rating}
                </span>
                <span className="text-slate-400 text-sm">
                  ({instructor.reviews} reviews)
                </span>
              </div>

              <div className="card-actions justify-center gap-3">
                <button className="btn btn-circle btn-sm btn-ghost bg-blue-50 text-[#1DA1F2] hover:bg-blue-200 border-none">
                  <BsTwitter size={25} />
                </button>
                <button className="btn btn-circle btn-sm btn-ghost bg-blue-50 text-blue-600 hover:bg-blue-200 border-none">
                  <FaFacebook size={25} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopInstructors;
