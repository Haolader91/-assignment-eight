import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center">
      <h1 className="text-6xl font-bold text-gray-800">Not Found</h1>

      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}
