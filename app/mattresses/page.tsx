"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Mattresses() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16 bg-green-950 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Natural Sleep Mattresses</h1>
        <p className="mt-4 text-xl text-green-200">The foundation of a healthy life.</p>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Product 1 */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2 relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image src="/images/mattress-1.jpg" alt="Standard Latex Mattress" fill className="object-cover" />
          </motion.div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Standard Natural Latex</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Our standard mattresses are designed with air-cores for superior ventilation. 
              Manufactured using collected and processed sap of rubber trees, these mattresses 
              provide a unique balance of soft comfort and firm support.
            </p>
            <ul className="space-y-4 mb-8">
              {["25 Year Warranty", "No heat generation", "Dust-mite resistant", "Perfect Air Circulation"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Check size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2 relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image src="/images/mattress-1.jpg" alt="Orthopedic Mattress" fill className="object-cover" />
          </motion.div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Orthopedic Hybrid Block</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Specially designed for those with back pain. This mattress features a solid latex layer 
              combined with a soft latex sheet, allowing for dual-side usage (one side firm, one side soft).
            </p>
            <button className="px-8 py-4 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition shadow-lg hover:shadow-green-500/30">
              Contact for Pricing
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}