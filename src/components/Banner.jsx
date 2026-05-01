import Image from "next/image";

import BannerImg from "../Asstes/banar-image.jpg";
import { GraduationCap, Rocket } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-10 lg:py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full font-medium text-sm">
            <span>
              <GraduationCap size={15} />
            </span>
            <p>
              Learning Today,
              <span className="text-blue-600">Leading Tomorrow</span>
            </p>
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
            Upgrade Your <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600">
              Skills Today
            </span>
            <span className="inline-block ml-2 text-red-500">
              <Rocket size={45} />
            </span>
          </h1>

          <p className="text-slate-500 text-lg max-w-lg mx-auto lg:mx-0">
            Learn from industry experts and gain practical skills to accelerate
            your career.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <button className="btn btn-primary bg-indigo-600 border-none hover:bg-indigo-700 text-white rounded-xl px-8 py-3">
              Explore Courses
            </button>
            <button className="btn btn-outline border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl px-8 py-3 capitalize">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center items-center w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100 rounded-full blur-3xl opacity-50 -z-10"></div>

          <div className="relative w-full max-w-125">
            <Image
              src={BannerImg}
              alt="Student learning on laptop"
              className="w-full h-auto drop-shadow-2xl"
              width={1200}
              height={600}
            />

            <div className="absolute -top-4 -left-4 bg-white p-3 rounded-2xl shadow-lg hidden md:block">
              <span className="text-indigo-600 font-bold">{"</>"}</span>
            </div>
            <div className="absolute bottom-10 -right-4 bg-white p-3 rounded-2xl shadow-lg hidden md:block">
              <span className="text-green-500">
                <GraduationCap size={30} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
