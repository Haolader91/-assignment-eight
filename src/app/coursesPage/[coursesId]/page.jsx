import BackButton from "@/components/BackButton";
import { Clock, PlayCircle, Star } from "lucide-react";
import Image from "next/image";

const courseDetails = async ({ params }) => {
  const { coursesId } = await params;
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();

  const dataFind = data.find((d) => d.id == coursesId);

  console.log(dataFind);
  return (
    <div className="max-w-6xl mx-auto min-h-screen bg-white py-12 px-4 md:px-10 lg:px-24">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-indigo-600">Course Details</h2>
        <BackButton />
      </div>

      <div className=" border border-slate-100 rounded-[40px] p-10 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="relative w-full lg:w-[450px] aspect-video rounded-3xl overflow-hidden shadow-lg group bg-slate-900">
            <Image
              src={dataFind.image}
              alt="Course Preview"
              fill
              className="object-cover opacity-60 transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-black text-slate-900 mb-4 leading-tight">
              {dataFind.title}
            </h1>
            <p className="text-slate-500 text-lg mb-6 leading-relaxed">
              {dataFind.description}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md">
                <Image
                  src={dataFind.instructor_img}
                  alt="Instructor"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-base">
                  {dataFind.instructor}
                </h4>
                <p className="text-sm text-slate-400">
                  {dataFind.instructor_role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 mb-10">
              <div className="flex items-center gap-2">
                <Star size={20} className="text-amber-400 fill-amber-400" />
                <span className="font-bold text-slate-800">
                  {dataFind.rating}
                </span>
                <span className="text-slate-400 text-sm">
                  {dataFind.reviews}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Clock size={20} />
                <span className="font-bold">{dataFind.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-12">
              <span className="text-5xl font-black text-slate-900">
                ${dataFind.price}
              </span>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-16 rounded-2xl transition-all shadow-xl shadow-indigo-100 active:scale-95 text-lg">
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-black text-slate-900 mb-8">
            Course Curriculum
          </h2>

          <div className="border border-slate-100 rounded-3xl ">
            {dataFind.curriculum.map((lesson, idx) => (
              <div
                key={idx}
                className="border-b border-slate-50 flex items-center justify-between p-6 hover:bg-slate-50 transition-colors cursor-pointer "
              >
                <div className="flex items-center gap-6">
                  <span className="text-slate-400 font-black text-lg">
                    {lesson.id}
                  </span>
                  <span className="text-slate-800 font-bold text-base md:text-lg">
                    {lesson.title}
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-slate-400 font-semibold">
                    {lesson.time}
                  </span>
                  <div className="bg-slate-100 p-2 rounded-full text-slate-400 hover:text-indigo-600 transition-colors">
                    <PlayCircle size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default courseDetails;
