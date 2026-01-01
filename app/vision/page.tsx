"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Leaf, Lightbulb } from "lucide-react";

export default function Vision() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* --- HERO SECTION (Enhanced) --- */}
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
            <Target size={16} /> Our Core Values
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Vision & Mission
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed"
          >
            An amazingly healthier & truly comfortable night's sleep.
          </motion.p>
        </div>
      </section>

      {/* --- VISION & MISSION CARDS --- */}
      <section className="py-20 -mt-10 relative z-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-green-600 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Leaf size={100} className="text-green-600"/>
              </div>
              <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
                <Leaf className="text-green-600" /> Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the most preferred & trusted provider in 100% natural eco-friendly latex foam mattresses, 
                pillows & cushions in the world with quality, originality & competitive pricing combined together 
                to offer all our valued customers & loved ones AN AMAZINGLY HEALTHIER & TRULY COMFORTABLE NIGHT'S SLEEP.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-green-800 relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target size={100} className="text-green-800"/>
              </div>
              <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
                <Target className="text-green-800" /> Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                The team NLFL's all strategies will be on line with our Vision. 
                We, "TEAM NLFL" will fully focus on making our vision a reality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TYPES OF LATEX CONTENT --- */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
               <span className="text-green-600 font-bold uppercase tracking-wider text-sm">Education</span>
               <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">The Different Types Of Latex</h2>
            </div>
            
            <div className="prose prose-lg text-gray-700 mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <p className="mb-6">
                There are three different types which are used to populate a mattress's inner core. On the outset, 
                each type has similar characteristics such as the springy feel and firmness, but they differ greatly 
                in price, overall quality, and longevity.
              </p>

              <div className="flex items-start gap-4 mt-10 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-700">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-900 mb-3">Natural (Organic)</h3>
                  <p className="leading-relaxed">
                    The organic latex mattress is basically made of processed tree sap, or serum, which is a sticky milky fluid 
                    found in the rubber tree. It is collected by a process called "tapping" which means incisions are made 
                    into the bark of the tree, the fluid then flows out and is collected ready to be refined using a chosen 
                    processing method.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    It is rare to find a 100% natural latex mattress for sale in retail outlets and showrooms because they are 
                    relatively expensive compared to other types due to the cost involved in extraction and manufacturing. 
                    If you're after a natural latex mattress, the ideal place to look is online as there will be much more choice 
                    and at much cheaper prices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LARGE IMAGE SECTION (16:9) --- */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">From Nature to Your Home</h2>
              <p className="text-gray-500 mt-2">The journey of pure rubber sap</p>
           </div>

           {/* Modified Image Container: Fixed Size, No Zoom, Full Visibility */}
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-gray-100"
           >
             <Image 
               src="/images/about-us/types-of-latex.jpg" 
               alt="Types of Latex and Manufacturing Process" 
               width={1200}
               height={800}
               className="w-full h-auto"
               priority
             />
           </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}