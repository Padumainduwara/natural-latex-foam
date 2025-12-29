"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Check } from "lucide-react";

export default function Pillows() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16 bg-green-950 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Natural Latex Pillows</h1>
        <p className="mt-4 text-xl text-green-200">Support for your head and neck.</p>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/images/pillow-1.jpg" alt="Latex Pillow" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why our pillows?</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Latex is naturally hypoallergenic, anti-microbial, and prevents mold and mildew. 
              Studies show latex is 300% more resistant to dust mites than any other material. 
              The inter-connected cell structure allows for amazing breathability.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-green-50 rounded-xl text-center border border-green-100">
                <span className="block text-3xl font-bold text-green-600 mb-1">100%</span>
                <span className="text-sm font-medium text-gray-600">Natural</span>
              </div>
              <div className="p-6 bg-green-50 rounded-xl text-center border border-green-100">
                <span className="block text-3xl font-bold text-green-600 mb-1">Cool</span>
                <span className="text-sm font-medium text-gray-600">Technology</span>
              </div>
            </div>

            <ul className="space-y-3">
               {["Neck Support", "Hypoallergenic", "Long Lasting"].map((pt) => (
                 <li key={pt} className="flex items-center gap-3 text-gray-700 font-medium">
                   <Check className="text-green-500" /> {pt}
                 </li>
               ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}