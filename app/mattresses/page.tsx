"use client"; 

import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion"; // Note: This needs "use client" in component file usually, but metadata needs server component features. 
import { Moon, Check, ShieldCheck, Ruler, Leaf } from "lucide-react";

// --- PRODUCT SCHEMA (JSON-LD) ---
// This runs on the client side to help Google understand the page content
const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Natural Latex Mattress Collection",
  "image": [
    "https://naturallatexfoamsrilanka.lk/images/mattress-1.jpg",
    "https://naturallatexfoamsrilanka.lk/images/mattresses/mono-zone.jpg"
  ],
  "description": "100% Natural Latex Mattresses in Sri Lanka. Orthopedic support, 25-year warranty. Available in Mono, 5-Zone, and 7-Zone models.",
  "brand": {
    "@type": "Brand",
    "name": "Natural Latex Foam Lanka"
  },
  "offers": {
    "@type": "AggregateOffer",
    "url": "https://naturallatexfoamsrilanka.lk/mattresses",
    "priceCurrency": "LKR",
    "lowPrice": "35000",
    "highPrice": "180000", // Adjusted estimate
    "offerCount": "4",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "124"
  }
};

// Product Data extracted from PDF
const products = [
  {
    id: 1,
    name: "Natural Latex Mono Zone Mattress",
    image: "/images/mattresses/mono-zone.jpg",
    description: "Uniform density providing consistent support across the entire sleeping surface. Ideal for those who prefer a traditional, solid feel.",
    specs: ["All Standard Sizes", "Custom Sizes Available"],
    warranty: "25 Year Warranty",
    features: ["100% Natural", "Uniform Support", "Eco-Friendly"]
  },
  {
    id: 2,
    name: "Natural Latex 5 Zone Mattress",
    image: "/images/mattresses/latex-5-zone.jpg",
    description: "Engineered with 5 distinct pressure zones to support your head, shoulders, back, hips, and legs separately for better spinal alignment.",
    specs: ["All Standard Sizes", "Custom Sizes Available"],
    warranty: "25 Year Warranty",
    features: ["5 Pressure Zones", "Orthopedic Support", "Breathable"]
  },
  {
    id: 3,
    name: "Natural Latex 7 Zone Mattress",
    image: "/images/mattresses/latex-7-zone.jpg",
    description: "The ultimate luxury. 7 specialized zones provide the most precise contouring and pressure relief for every part of your body.",
    specs: ["All Standard Sizes", "Custom Sizes Available"],
    warranty: "25 Year Warranty",
    features: ["7 Precision Zones", "Maximum Comfort", "Zero Motion Transfer"]
  },
  {
    id: 4,
    name: "Natural Latex Foam Mattress",
    image: "/images/mattresses/foam-mattress.jpg",
    description: "Premium natural latex foam mattress featuring high-quality cotton inner and outer covers with a zipper. Available in Medium & Hard density options.",
    specs: ["All Standard Sizes", "Custom Sizes Available"],
    warranty: "25 Year Warranty",
    features: ["Medium/Hard Density", "Removable Cover", "100% Natural"]
  }
];

export default function Mattresses() {
  return (
    <main className="bg-white min-h-screen">
      {/* --- SEO SCHEMA INJECTION --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      <Navbar />

      {/* --- HERO SECTION --- */}
      {/* Responsive Height: 400px on mobile, 500px on desktop */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-green-950 text-white text-center px-4 overflow-hidden min-h-[400px] md:min-h-[500px] flex flex-col justify-center">
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
            <Moon size={16} /> Premium Sleep Solutions
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            Natural Sleep Mattresses
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed px-2"
          >
            The foundation of a healthy life. Best for back pain, durable, natural, and eco-friendly.
          </motion.p>
        </div>
      </section>

      {/* --- INTRO / BENEFITS --- */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                <span className="text-green-600 font-bold uppercase tracking-wider text-sm">Why Latex?</span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">Experience Pure Comfort</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                   In its simplest form, our latex foam mattress is manufactured using the collected and processed sap of a rubber tree. 
                   Instead of traditional bedding technology like springs, our mattresses are widely considered to be the best for back pain 
                   and are hypoallergenic, making them the healthiest option on the market.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[
                    { title: "Best for Back Pain", icon: <ShieldCheck className="w-8 h-8"/>, desc: "Naturally aligns the spine and relieves pressure." },
                    { title: "Eco-Friendly", icon: <Leaf className="w-8 h-8"/>, desc: "Made from 100% natural organic material." },
                    { title: "Custom Sizes", icon: <Ruler className="w-8 h-8"/>, desc: "Made to order as per your requirements." }
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
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

      {/* --- PRODUCT COLLECTION --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-green-950">Our Mattress Collection</h2>
               <p className="text-gray-500 mt-3">Designed for every type of sleeper</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                {products.map((product, idx) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-green-200 transition-all duration-300 flex flex-col"
                    >
                        {/* Image Container - FULLY RESPONSIVE */}
                        {/* h-[250px] on mobile -> h-[300px] on sm -> h-[350px] on md -> h-[400px] on lg */}
                        <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full bg-gray-50 overflow-hidden">
                            <Image 
                                src={product.image} 
                                alt={product.name} 
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-bold text-green-800 shadow-sm flex items-center gap-2">
                                <Leaf size={14} className="text-green-600"/> 100% Natural
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 flex-grow flex flex-col">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                                {product.description}
                            </p>
                            
                            <div className="mt-auto space-y-5">
                                {/* Specs Grid */}
                                <div className="grid grid-cols-2 gap-4 pb-6 border-b border-gray-100">
                                    <div>
                                        <span className="block text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Availability</span>
                                        <div className="text-gray-900 font-medium text-sm">
                                            {product.specs.map((s, i) => <div key={i}>{s}</div>)}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="block text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Warranty</span>
                                        <span className="inline-block bg-green-50 text-green-700 px-2 py-1 rounded text-xs md:text-sm font-bold">
                                            {product.warranty}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Features List */}
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {product.features.map((feature, i) => (
                                        <span key={i} className="flex items-center gap-1.5 text-xs md:text-sm text-gray-700 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                                            <Check className="w-3 md:w-3.5 h-3 md:h-3.5 text-green-500" /> {feature}
                                        </span>
                                    ))}
                                </div>
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