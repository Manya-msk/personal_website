import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-6 md:px-20">
      {/* Left Section */}
      <div className="text-center md:text-left md:w-1/2 space-y-4">
        <h1 className={`${greatVibes.className} text-5xl md:text-6xl text-gray-900`}>
          Manya Sinvhal
        </h1>

        {/* Decorative line */}
        <div className="w-20 h-1 bg-blue-100 mx-auto md:mx-0"></div>

        <p className="text-gray-700 text-lg mt-4">
          UC Berkeley Electrical Engineering and Computer Science Student
        </p>
      </div>

      {/* Right Section - Image with background shapes */}
      <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center">
        {/* Abstract pastel shapes */}
        <div className="absolute -top-8 -right-10 w-48 h-48 bg-blue-100 rounded-full opacity-100"></div>
        <div className="absolute top-10 right-0 w-48 h-48 bg-purple-100 rounded-full opacity-100"></div>

        {/* Profile photo */}
        <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-md">
          <Image
            src = "headshot.JPG"
            alt="Manya Sinhval"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
