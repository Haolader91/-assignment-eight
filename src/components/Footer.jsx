import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 items-center md:items-start text-center md:text-left">
          <div className=" space-y-4">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                <GraduationCap size={24} />
              </div>
              <span className="text-xl font-bold tracking-tighter text-slate-900">
                SkillSphere
              </span>
            </div>
            <p className="text-slate-500 mx-auto text-sm leading-relaxed max-w-xs">
              Empowering learners around the world.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/coursesPage"
                  className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/contact"
                  className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6">Follow Us</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-sky-500 hover:text-sky-700">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-end items-center">
          <p className="text-slate-400 text-xs">
            © 2026 SkillSphere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
