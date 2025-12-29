"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ShieldCheck, Leaf, Wind } from "lucide-react";

export default function Advantages() {
  const advantages = [
    { title: "100% Natural", desc: "Made from pure rubber sap, free from synthetic fillers.", icon: <Leaf/> },
    { title: "Orthopedic Support", desc: "Naturally aligns the spine and relieves pressure points.", icon: <ShieldCheck/> },
    { title: "Breathable", desc: "Open-cell structure allows air circulation, keeping you cool.", icon: <Wind/> },
    { title: "Hypoallergenic", desc: "Resistant to dust mites, mold, and bacteria naturally.", icon: <Check/> },
    { title: "Durable", desc: "Retains shape and elasticity for over 20 years.", icon: <ShieldCheck/> },
    { title: "Eco-Friendly", desc: "Biodegradable and sustainable manufacturing process.", icon: <Leaf/> },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16 bg-green-950 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Why Choose Natural Latex?</h1>
        <p className="mt-4 text-green-200">The benefits of sleeping on nature.</p>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-green-400 transition-all group">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                {adv.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{adv.title}</h3>
              <p className="text-gray-600 leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}