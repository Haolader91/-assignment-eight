import { Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CoursesCard = ({ data }) => {
  return (
    <div className="card bg-base-100 shadow-sm border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
      <figure className="relative h-48">
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
            {data?.category}
          </span>
        </div>

        {/* <div className="bg-slate-900 w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                NEXT.JS
                <Image src={data.image} height={150} width={100} />
              </div> */}
        <div className="relative w-full aspect-video">
          <Image
            src={data.image}
            alt="course image"
            fill
            className="rounded-lg"
          />
        </div>
      </figure>
      <div className="card-body p-5">
        <h3 className="card-title text-lg font-bold text-slate-800 leading-tight">
          {data.title}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <div className="avatar">
            <div className="w-6 rounded-full">
              <Image
                src={data.instructor_img}
                alt="author"
                width={80}
                height={80}
              />
            </div>
          </div>
          <span className="text-sm text-slate-500">{data.instructor}</span>
        </div>

        <div className="flex justify-between items-center mt-4 text-sm text-slate-600">
          <div className="flex items-center gap-1">
            <span className="text-orange-400 font-bold items-center flex gap-2">
              <Star size={20} />
              {data.rating}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={20} />
            <span>{data.duration}</span>
          </div>
        </div>

        <div className="card-actions mt-5">
          <Link href={`/coursesPage/${data.id}`}>
            <button className="btn btn-primary w-full bg-indigo-600 p-1 border-none hover:bg-indigo-700 text-white rounded-xl capitalize">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
