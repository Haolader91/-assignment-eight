"use client";
import UserUpdate from "@/components/UserUpdate";
import { authClient } from "@/lib/auth-client";
import { Mail, ShieldCheck, User } from "lucide-react";
import Image from "next/image";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="h-32 bg-linear-to-r from-indigo-500 to-purple-600"></div>

          <div className="px-8 pb-10">
            <div className="relative flex flex-col items-center -mt-16">
              <div className="relative">
                {user?.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={128}
                    height={128}
                    className="rounded-full border-4 border-white shadow-md object-cover w-32 h-32"
                  />
                ) : (
                  <div className="w-32 h-32 bg-slate-200 rounded-full border-4 border-white shadow-md flex items-center justify-center">
                    <User size={60} className="text-slate-400" />
                  </div>
                )}
                <div className="absolute bottom-2 right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
              </div>

              <div className="text-center mt-4">
                <h2 className="text-2xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
                  {user?.name || "Student Name"}
                  <ShieldCheck size={20} className="text-indigo-600" />
                </h2>
                <p className="text-slate-500 font-medium">
                  Front-end Developer Student
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 max-w-md mx-auto">
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-white p-2 rounded-lg shadow-sm text-indigo-600">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Full Name
                  </p>
                  <p className="text-slate-700 font-semibold">{user?.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-white p-2 rounded-lg shadow-sm text-indigo-600">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Email Address
                  </p>
                  <p className="text-slate-700 font-semibold">{user?.email}</p>
                </div>
              </div>
            </div>

            {/* <div className="mt-10 flex justify-center">
              <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-100">
                Edit Profile
              </button>
            </div> */}
            <div className="mt-10 flex justify-center"></div>
            <UserUpdate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
