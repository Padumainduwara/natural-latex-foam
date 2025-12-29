"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Heart, Home, Smile } from "lucide-react";

export default function Vision() {
  const cards = [
    { title: "Comfort Your Life", icon: <Heart className="w-10 h-10 text-white"/>, text: "Enhancing your daily living through better sleep quality." },
    { title: "Comfort Your Family", icon: <Smile className="w-10 h-10 text-white"/>, text: "Safe, non-toxic products for your loved ones." },
    { title: "Comfort Your Home", icon: <Home className="w-10 h-10 text-white"/>, text: "Sustainable luxury that fits your lifestyle perfectly." },
    { title: "Comfort Your Dream", icon: <Target className="w-10 h-10 text-white"/>, text: "Turning your sleep into a rejuvenating experience." },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4 bg-green-950 text-white text-center">
        <div className="container mx-auto">
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Vision
          </motion.h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            To provide the most comfortable and healthy sleep experience using sustainable practices, 
            becoming the global standard for natural bedding.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 hover:border-green-500 transition-all text-center group"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:bg-green-700 transition-colors">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{card.title}</h3>
              <p className="text-gray-600">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}