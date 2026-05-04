"use client";
import React, { useState } from "react";
import { Eye, EyeIcon, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handlerRegister = async (data) => {
    const { email, name, password, image } = data;
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: image,
      // callbackURL: "/",
    });
    // console.log(res, error);

    if (error) {
      toast.error(error.message || "Registration failed!");
    }
    if (res) {
      await authClient.signIn.email({
        email,
        password,
      });
      router.push("/");

      toast.success("Registration Successful!");
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const [isShowPassword, setIsShowPassword] = useState(false);
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
            <label className="text-sm font-bold text-slate-800 ml-1">
              Image URL
            </label>
            <input
              type="text"
              placeholder="Enter your Image"
              className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50/50 transition-all text-slate-600 placeholder:text-slate-300"
              {...register("image", { required: "image field is required" })}
            />
            {errors.image && (
              <p className="text-red-500 text-[13px]">{errors.image.message}</p>
            )}
          </div>

          <div className="space-y-2 relative">
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
              type={isShowPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="  w-full px-5 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50/50 transition-all text-slate-600 placeholder:text-slate-300"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            <span
              className="absolute right-5 top-11 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? (
                <EyeIcon size={20} />
              ) : (
                <FaEyeSlash size={20} />
              )}
            </span>
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
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="w-full flex items-center cursor-pointer justify-center gap-3 bg-white border border-slate-200 text-slate-700 font-bold py-3.5 rounded-2xl hover:bg-slate-50 transition-all shadow-sm mt-2"
        >
          <FaGoogle className="text-red-500" />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
