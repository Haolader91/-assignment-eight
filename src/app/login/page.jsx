"use client";
import React from "react";
import { Eye, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlerLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Login Successful");
    }
    console.log(res, error);
  };
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-112.5 rounded-xl p-8 md:p-10 shadow-sm border border-slate-100">
        <div className="text-center mb-10">
          <h1 className="flex items-center justify-center text-3xl font-extrabold text-slate-900 mb-5">
            Welcome Back
            <span className="text-[#4F46E5]">
              <GraduationCap size={40} />
            </span>
          </h1>
          <p className="text-slate-500 text-sm">
            Login to continue your learning journey.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(handlerLogin)}>
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

          <button className="w-full bg-[#6366F1] hover:bg-[#4F46E5] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-indigo-100 mt-4">
            Login
          </button>
        </form>

        <div className="divider divider-info text-xs font-medium text-slate-400 uppercase my-8">
          or continue with
        </div>

        <p className="text-center text-sm text-slate-500 mt-10">
          Don t have an account?
          <Link
            href="/register"
            className="text-indigo-600 font-bold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
