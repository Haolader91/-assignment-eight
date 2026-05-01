"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 active:scale-95 transition-all duration-200 shadow-md"
    >
      <ArrowLeft size={18} />
      Back to Courses
    </button>
  );
};

export default BackButton;
