"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, CheckCircle, Leaf, ShieldCheck, Zap, AlertTriangle, Layers } from "lucide-react";

export default function Advantages() {
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
            <Star size={16} /> Why Choose Us
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Why Natural Latex?
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the unmatched comfort and health benefits of sleeping on nature's finest material.
          </motion.p>
        </div>
      </section>

      {/* --- INTRO & HAPPY SLEEPING SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             {/* Image Section */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-1/2 w-full"
             >
                <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                  {/* Make sure this image exists at this path */}
                  <Image 
                    src="/images/about-us/happy-sleeping.jpg" 
                    alt="Happy Sleeping" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-lg">
                     <p className="font-bold text-green-900 text-lg">Pure Relaxation</p>
                     <div className="flex text-yellow-500 gap-1 mt-1">
                        {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                     </div>
                  </div>
                </div>
             </motion.div>

             {/* Content Section */}
             <div className="lg:w-1/2 w-full">
                <h2 className="text-3xl md:text-5xl font-bold text-green-950 mb-6">The Secret to Quality Sleep</h2>
                <div className="prose prose-lg text-gray-600 space-y-6">
                   <p>
                     Whenever we sleep, especially after a very tiring day, we would really want that relaxing feeling of comfort. 
                     Did you know that natural latex mattresses could give you that feeling? Not only would you enjoy comfort and relaxation, 
                     but natural latex mattresses also gives our bodies the proper support it needs throughout the entire length of our sleep.
                   </p>
                   <p>
                     When you wake up in the morning no matter how long the duration of our sleep is, if the kind of sleep you have is not quality sleep, 
                     you wouldn’t feel so much energized. Natural latex mattress is the type of mattress that could provide us with our much needed quality sleep.
                   </p>
                   <div className="p-6 bg-green-50 rounded-2xl border border-green-100 mt-6">
                      <h4 className="font-bold text-green-800 mb-2">Did you know?</h4>
                      <p className="text-sm">
                        The material used to make it comes from rubber trees, "Hevea Brasiliensis". 
                        The saps are carefully collected and processed to be made into natural latex.
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- TYPES OF LATEX COMPARISON --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <span className="text-green-600 font-bold uppercase tracking-wider text-sm">Knowledge Base</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">Understanding Latex Types</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Not all latex is created equal. Know what you are buying.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {/* Natural */}
              <motion.div 
                 whileHover={{ y: -10 }}
                 className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-green-500 flex flex-col"
              >
                 <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <Leaf size={28} />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Natural (Organic)</h3>
                 <p className="text-gray-600 flex-grow leading-relaxed">
                    Made of processed tree sap found in the rubber tree. It is collected by "tapping" the bark. 
                    Rare to find in retail outlets due to high extraction costs, but offers the best quality.
                 </p>
                 <div className="mt-6 pt-6 border-t border-gray-100">
                    <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">Best Quality</span>
                 </div>
              </motion.div>

              {/* Synthetic */}
              <motion.div 
                 whileHover={{ y: -10 }}
                 className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-red-400 flex flex-col"
              >
                 <div className="w-14 h-14 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-6">
                    <AlertTriangle size={28} />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Synthetic (Man Made)</h3>
                 <p className="text-gray-600 flex-grow leading-relaxed">
                    A man-made material made by polymerizing a monomer such as styrene. 
                    Behaves similarly to organic material but has shorter durability and is not as firm.
                 </p>
                 <div className="mt-6 pt-6 border-t border-gray-100">
                    <span className="text-sm font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">Shorter Life</span>
                 </div>
              </motion.div>

              {/* Blended */}
              <motion.div 
                 whileHover={{ y: -10 }}
                 className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-blue-400 flex flex-col"
              >
                 <div className="w-14 h-14 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-6">
                    <Layers size={28} />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Blended (Mixed)</h3>
                 <p className="text-gray-600 flex-grow leading-relaxed">
                    A mixture of organic and synthetic (usually 80% synthetic / 20% organic). 
                    Offers a balance of build quality and value for money, but beware of low natural content percentages.
                 </p>
                 <div className="mt-6 pt-6 border-t border-gray-100">
                    <span className="text-sm font-bold text-blue-500 bg-blue-50 px-3 py-1 rounded-full">Cost Effective</span>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* --- NLFL PROMISE SECTION --- */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center bg-green-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl relative">
               {/* Decorative Circle */}
               <div className="absolute -top-20 -right-20 w-80 h-80 bg-green-800 rounded-full opacity-50 blur-3xl"></div>
               
               <div className="md:w-1/2 relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">The NLFL Standard</h2>
                  <p className="text-green-200 text-lg mb-8">
                     We are committed to providing you with the healthiest sleep environment possible.
                  </p>
                  <div className="flex gap-4">
                     <div className="flex flex-col items-center bg-green-800/50 p-4 rounded-xl border border-green-700 backdrop-blur-sm">
                        <ShieldCheck size={32} className="text-green-400 mb-2" />
                        <span className="font-bold">25 Years</span>
                        <span className="text-xs text-green-300">Warranty</span>
                     </div>
                     <div className="flex flex-col items-center bg-green-800/50 p-4 rounded-xl border border-green-700 backdrop-blur-sm">
                        <Leaf size={32} className="text-green-400 mb-2" />
                        <span className="font-bold">Eco-Free</span>
                        <span className="text-xs text-green-300">Chemical Free</span>
                     </div>
                  </div>
               </div>

               <div className="md:w-1/2 mt-10 md:mt-0 relative z-10">
                  <ul className="space-y-4">
                     {[
                        "Made of 100% NATURAL LATEX",
                        "No poisonous chemicals inhalation",
                        "Cool during hot weather & warm during cold weather",
                        "Durable & Long Lasting",
                        "Comes with a 25 year warranty"
                     ].map((item, idx) => (
                        <motion.li 
                           key={idx}
                           initial={{ opacity: 0, x: 20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: idx * 0.1 }}
                           className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors"
                        >
                           <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                              <CheckCircle size={16} className="text-white" />
                           </div>
                           <span className="font-medium text-lg">{item}</span>
                        </motion.li>
                     ))}
                  </ul>
                  {/* Citations for above list: */}
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}