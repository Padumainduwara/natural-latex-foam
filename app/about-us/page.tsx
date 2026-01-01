"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Globe, Award, History, Leaf } from "lucide-react";

export default function AboutUs() {
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
            <Leaf size={16} /> Since 2009
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Our Story
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed"
          >
            From the heart of Sri Lanka to the world. <br className="hidden md:block" />
            The journey of 100% natural comfort.
          </motion.p>
        </div>
      </section>

      {/* --- FOUNDER & COMPANY ORIGIN --- */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Section */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="lg:w-1/2 w-full"
            >
              <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="/images/about-us/rubber-milk.jpg" 
                  alt="Collecting Rubber Milk" 
                  fill 
                  className="object-cover hover:scale-110 transition-transform duration-700" 
                />
                 {/* Floating Badge */}
                 <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-[200px]">
                    <p className="text-sm font-bold text-green-900">100% Sri Lankan</p>
                    <p className="text-xs text-gray-600">Pure natural resources</p>
                 </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="lg:w-1/2 w-full">
              <span className="text-green-600 font-bold uppercase tracking-wider text-sm">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-bold text-green-950 mt-2 mb-8">A Legacy of Excellence</h2>
              
              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
                <p>
                  Natural Latex Foam Enterprises was originally formed in 2009. Driven by a passion for innovation, 
                  our founder, <span className="font-bold text-green-800 bg-green-50 px-1 rounded">Mr. Lal Udalagama</span>, established 
                  <span className="font-bold text-green-800"> Natural Latex Foam Lanka Pvt Ltd</span> in 2014 after years of 
                  research into German technology.
                </p>
                <p>
                  Our mission was simple: to cater to a changing world looking for a chemical-free, healthier night's sleep. 
                  Today, we are proud to provide high-quality natural latex foam mattresses and pillows to international markets 
                  including South Korea and New Zealand.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex flex-col items-center justify-center p-6 bg-green-50 rounded-2xl border border-green-100 min-w-[120px] flex-1">
                   <Award className="text-green-600 w-8 h-8 mb-3"/>
                   <span className="font-bold text-gray-900 text-lg">25 Years</span>
                   <span className="text-sm text-gray-500">Warranty</span>
                </div>
                <div className="flex flex-col items-center justify-center p-6 bg-green-50 rounded-2xl border border-green-100 min-w-[120px] flex-1">
                   <Globe className="text-green-600 w-8 h-8 mb-3"/>
                   <span className="font-bold text-gray-900 text-lg">Global</span>
                   <span className="text-sm text-gray-500">Exports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HISTORY OF RUBBER (Timeline) --- */}
      <section className="py-24 bg-gray-50 relative">
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The History of Rubber</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Sri Lanka is a pioneer in rubber cultivation, being the first country to celebrate 100 years of Research & Development on Natural Rubber.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
               whileHover={{ y: -10 }}
               className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-500 relative"
            >
              <div className="absolute -top-6 left-8 bg-green-600 text-white px-4 py-1 rounded-full font-bold shadow-md">1876</div>
              <History className="w-10 h-10 text-green-600 mb-6 mt-4"/>
              <h3 className="text-xl font-bold mb-3 text-gray-900">The Beginning</h3>
              <p className="text-gray-600 leading-relaxed">
                Rubber seeds germinated by Hendry Wickham at Kew Gardens were sent to Sri Lanka, marking the start of the rubber industry in the region.
              </p>
            </motion.div>

            <motion.div 
               whileHover={{ y: -10 }}
               className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-500 relative"
            >
               <div className="absolute -top-6 left-8 bg-green-600 text-white px-4 py-1 rounded-full font-bold shadow-md">1926</div>
              <Award className="w-10 h-10 text-green-600 mb-6 mt-4"/>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                The process of Latex foam manufacturing was invented by Dunlop Rubber using the SSF (Sodium Silicofluoride) process.
              </p>
            </motion.div>

            <motion.div 
               whileHover={{ y: -10 }}
               className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-500 relative"
            >
              <div className="absolute -top-6 left-8 bg-green-600 text-white px-4 py-1 rounded-full font-bold shadow-md">Today</div>
              <Globe className="w-10 h-10 text-green-600 mb-6 mt-4"/>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Global Leader</h3>
              <p className="text-gray-600 leading-relaxed">
                Asian countries account for 95% of total global rubber production, with Sri Lanka producing some of the finest quality latex in the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MANUFACTURING PROCESS --- */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
             {/* Image Section */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-1/2 w-full"
            >
              <div className="relative h-[400px] md:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/about-us/manufacturing-process.jpg" 
                  alt="Latex Manufacturing Process" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-bold text-xl">Eco-Friendly Process</p>
                  <p className="text-gray-200 text-sm">Sustainable from start to finish</p>
                </div>
              </div>
            </motion.div>

            <div className="lg:w-1/2 w-full relative z-10 pl-0 lg:pl-10">
  {/* Header Section */}
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <span className="inline-block py-1 px-3 rounded-full bg-green-50 text-green-700 font-bold text-xs uppercase tracking-widest mb-4 border border-green-200">
      How It's Made
    </span>
    
    <h2 className="text-3xl md:text-5xl font-extrabold text-green-950 mt-2 mb-6 leading-tight">
      Our Manufacturing <span className="text-green-600">Process</span>
    </h2>
    
    <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-xl">
      We follow a rigorous, eco-friendly process to ensure the purity and comfort of every mattress we create.
    </p>
  </motion.div>

  <div className="space-y-6">
                {[
                  "Pure natural latex sap is tapped from rubber trees.",
                  "The blend is poured into latex moulds according to specifications.",
                  "Baked to perfection to set the foam structure.",
                  "Washed thoroughly to remove any proteins or residues.",
                  "Dried and treated for long-lasting durability."
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-medium pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}