"use client";
import React from "react";
import { Eye, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handlerRegister = async (data) => {
    const { email, name, password } = data;
    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      // image: "https://example.com/image.png",
      // callbackURL: "/",
    });
    console.log(res, error);

    if (error) {
      alert(error.message);
    }
    if (res) {
      await authClient.signIn.email({
        email,
        password,
      });
      router.push("/");

      alert("Registration Successful");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-112.5 rounded-xl p-8 md:p-10 shadow-sm border border-slate-100">
        <div className="text-center mb-10">
          <h1 className="flex items-center justify-center text-3xl font-extrabold text-slate-900 mb-5">
            Register Your Account
            <span className="text-[#4F46E5]">
              <GraduationCap size={40} />
            </span>
          </h1>
          <p className="text-slate-500 text-sm">
            Register to continue your learning journey.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(handlerRegister)}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 ml-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50/50 transition-all text-slate-600 placeholder:text-slate-300"
              {...register("name", { required: "Name field is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-[13px]">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 ml-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50/50 transition-all text-slate-600 placeholder:text-slate-300"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-[13px]">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-sm font-bold text-slate-800">
                Password
              </label>
              <a
                href="#"
                className="text-xs font-bold text-indigo-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50/50 transition-all text-slate-600 placeholder:text-slate-300"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-[13px]">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#6366F1] hover:bg-[#4F46E5] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-indigo-100 mt-4"
          >
            Register
          </button>
        </form>

        <div className="divider divider-info text-xs font-medium text-slate-400 uppercase my-8">
          or continue with
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
