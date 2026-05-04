"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, Rocket } from "lucide-react";

const LearningTips = () => {
  const tips = [
    {
      id: 1,
      title: "Time Management",
      description: "Make a study schedule and stick to it.",
      icon: <Clock className="text-red-500" size={24} />,
      bgColor: "bg-red-50",
      iconBg: "bg-red-100",
    },
    {
      id: 2,
      title: "Consistent Practice",
      description: "Practice daily and build your skills.",
      icon: <Calendar className="text-green-500" size={24} />,
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
    },
    {
      id: 3,
      title: "Build Real Projects",
      description: "Apply your knowledge in real projects.",
      icon: <Rocket className="text-orange-500" size={24} />,
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-[#1a1a3d] mb-8">Learning Tips</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className={`flex items-center gap-4 p-6 rounded-2xl ${tip.bgColor} border border-transparent hover:shadow-md transition-all cursor-default`}
          >
            <div
              className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center ${tip.iconBg}`}
            >
              {tip.icon}
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800">{tip.title}</h3>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                {tip.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LearningTips;
