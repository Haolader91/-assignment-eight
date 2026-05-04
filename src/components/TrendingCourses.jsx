"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const TrendingCourses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://haolader.vercel.app/data.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  const topData = data.slice(0, 5);
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#101035] rounded-3xl p-8 relative overflow-hidden"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
            Trending Courses
          </h2>
          <Link
            href="/coursesPage"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
          >
            View All <MoveRight size={18} />
          </Link>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto gap-4 no-scrollbar pb-4">
            {topData.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="min-w-50 md:min-w-60 group cursor-pointer"
              >
                <div className="relative aspect-16/10 rounded-xl overflow-hidden border-2 border-transparent group-hover:border-blue-500 transition-all duration-300">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrendingCourses;
