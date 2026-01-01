"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { CloudMoon, Check, Star, ShieldCheck, Leaf } from "lucide-react";

// Product Data extracted from PDF
const products = [
  {
    id: 1,
    name: "Natural Latex Standard Pillows",
    image: "/images/pillows/standard-pillows.jpg",
    description: "Classic comfort with natural resilience. Perfect for any sleeping position.",
    size: "60 x 40 x 12.5 cm",
    warranty: "3 Year Warranty",
    features: ["100% Natural & Eco friendly", "Optimal Neck Support"]
  },
  {
    id: 2,
    name: "Contour Pillow",
    image: "/images/pillows/contour-pillows.jpg",
    description: "Ergonomically designed to support the natural curve of your neck and spine.",
    size: "60 x 40 x 12.5 cm",
    warranty: "3 Year Warranty",
    features: ["Orthopedic Design", "Reduces Neck Pain"]
  },
  {
    id: 3,
    name: "Natural Latex Knobby Pillows",
    image: "/images/pillows/knobby-pillows.jpg",
    description: "Features a textured surface that provides a gentle massage effect while you sleep.",
    size: "59.5 x 37.5 x 13.5 cm",
    warranty: "3 Year Warranty",
    features: ["Massage Effect", "Enhanced Airflow"]
  },
  {
    id: 4,
    name: "Natural Latex Kid Pillows",
    image: "/images/pillows/kids-pillows.jpg",
    description: "Specially sized for children to provide the right amount of support for growing bodies.",
    size: "50.5 x 24.5 x 7 cm",
    warranty: "3 Year Warranty",
    features: ["Gentle Support", "Hypoallergenic for Kids"]
  },
  {
    id: 5,
    name: "Natural Latex Neck Pillows",
    image: "/images/pillows/neck-pillows.jpg",
    description: "Compact support perfectly shaped for travel or targeted neck relief.",
    size: "25 x 25 x 10 cm",
    warranty: "3 Year Warranty",
    features: ["Travel Friendly", "Targeted Relief"]
  }
];

export default function Pillows() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* --- HERO SECTION (Consistent with Vision & About Us) --- */}
      <section className="relative pt-40 pb-24 bg-green-950 text-white text-center px-4 overflow-hidden min-h-[500px] flex flex-col justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <Image 
              src="/images/about-us/rubber-milk.jpg" 
              alt="Rubber Tree Background" 
              fill 
              className="object-cover opacity-20 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-green-950/90 to-green-950"></div>
        </div>

        <div className="container relative z-10 mx-auto">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             className="inline-flex items-center gap-2 bg-green-800/50 px-4 py-2 rounded-full text-green-300 text-sm font-semibold mb-6 border border-green-700 backdrop-blur-sm"
          >
            <CloudMoon size={16} /> Sleep Essentials
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Natural Latex Pillows
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed"
          >
            Support for your head and neck. Naturally hypoallergenic and anti-microbial.
          </motion.p>
        </div>
      </section>

      {/* --- INTRO / WHY CHOOSE US --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <span className="text-green-600 font-bold uppercase tracking-wider text-sm">Why Our Pillows?</span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">The Healthier Choice</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Latex is naturally hypoallergenic, anti-microbial, and prevents mold and mildew from thriving. 
                    Studies have shown that latex is 300% more resistant to dust mites than any other material. 
                    The inter-connected cell structure provides a natural ventilation system.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Hypoallergenic", icon: <ShieldCheck className="w-8 h-8"/>, desc: "Resistant to dust mites and bacteria." },
                    { title: "Breathable", icon: <Leaf className="w-8 h-8"/>, desc: "Natural ventilation keeps you cool." },
                    { title: "Durable", icon: <Star className="w-8 h-8"/>, desc: "Retains shape for years of comfort." }
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* --- PRODUCT GALLERY --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-green-950">Our Collection</h2>
               <p className="text-gray-500 mt-3">Find the perfect pillow for your sleep style</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map((product, idx) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-green-200 transition-all duration-300 flex flex-col"
                    >
                        {/* Image Container */}
                        <div className="relative h-[300px] w-full bg-gray-50 overflow-hidden">
                            <Image 
                                src={product.image} 
                                alt={product.name} 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-green-800 shadow-sm">
                                100% Natural
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex-grow flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                {product.description}
                            </p>
                            
                            <div className="mt-auto space-y-4">
                                {/* Specs */}
                                <div className="space-y-2 pb-6 border-b border-gray-100">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-500 font-medium">Size:</span>
                                        <span className="text-gray-900 font-bold">{product.size}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-500 font-medium">Warranty:</span>
                                        <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">{product.warranty}</span>
                                    </div>
                                </div>
                                
                                {/* Features List */}
                                <ul className="space-y-2">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                            <Check className="w-4 h-4 text-green-500" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}