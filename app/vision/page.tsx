"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Leaf, Lightbulb, ShieldCheck, Award, CheckCircle } from "lucide-react";

export default function Vision() {
  // Animation Variants (Fixed TypeScript Error by removing explicit 'ease' string type inference)
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <main className="bg-white min-h-screen font-sans text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* ==================== 1. HERO SECTION (EXISTING) ==================== */}
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

      {/* ==================== 2. VISION & MISSION CARDS (EXISTING) ==================== */}
      <section className="py-20 -mt-10 relative z-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-green-600 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
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
              className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-green-800 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
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

      {/* ==================== 3. NEW SECTION: BRAND IDENTITY (LOGO - UPDATED) ==================== */}
      <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text Content (Unchanged) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="space-y-8 order-2 md:order-1"
            >
              <div className="text-center md:text-left">
                <span className="text-green-600 font-bold uppercase tracking-widest text-sm bg-green-100 px-3 py-1 rounded-full">Our Identity</span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                  A Symbol of <span className="text-green-700">Pure Quality</span>
                </h2>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed text-center md:text-left">
                Our logo represents more than just a brand; it signifies our deep-rooted connection 
                to nature and our commitment to Sri Lankan craftsmanship. Every curve reflects the 
                flow of natural rubber sap and the comfort of our finished products.
              </p>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-transform">
                <p className="text-gray-800 font-medium italic text-center md:text-left">
                  "As leaders in the Natural Latex Foam industry, we stand by the purity of our materials. 
                  No synthetic fillers, no shortcuts—just 100% natural comfort."
                </p>
              </div>
            </motion.div>

            {/* Right: Logo Image (UPDATED - Tighter Circle) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="flex justify-center md:justify-end relative order-1 md:order-2"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/logo.png" 
                  alt="Natural Latex Foam Logo" 
                  width={400} 
                  height={400} 
                  className="object-contain w-full h-full drop-shadow-md"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==================== 4. TYPES OF LATEX (EXISTING) ==================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
               <span className="text-green-600 font-bold uppercase tracking-wider text-sm">Education</span>
               <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">The Different Types Of Latex</h2>
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="prose prose-lg text-gray-700 mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
            >
              <p className="mb-6">
                There are three different types which are used to populate a mattress's inner core. On the outset, 
                each type has similar characteristics such as the springy feel and firmness, but they differ greatly 
                in price, overall quality, and longevity.
              </p>

              <div className="flex flex-col md:flex-row items-start gap-4 mt-10 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-700 mx-auto md:mx-0">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-900 mb-3 text-center md:text-left">Natural (Organic)</h3>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== 5. NEW SECTION: 25 YEAR WARRANTY ==================== */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
        {/* Decorative Background Icon */}
        <ShieldCheck className="hidden md:block absolute top-0 right-0 text-green-100 w-[500px] h-[500px] -rotate-12 opacity-40 z-0 translate-x-1/3 -translate-y-1/4" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-16">
            
            {/* Left: Warranty Image/Certificate */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="relative group perspective-1000 w-full max-w-md">
                 <div className="relative z-10 bg-white p-3 rounded-xl shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-gray-100">
                    <Image 
                      src="/images/25-year-warranty.jpg" 
                      alt="25 Year Warranty Certificate" 
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    {/* Badge Overlay */}
                    <div className="absolute -top-5 -right-5 bg-yellow-400 text-yellow-900 w-20 h-20 rounded-full flex items-center justify-center font-bold text-center text-xs shadow-lg border-4 border-white animate-bounce-slow">
                       BEST IN CLASS
                    </div>
                 </div>
                 {/* Shadow element behind */}
                 <div className="absolute inset-0 bg-green-900 rounded-xl transform rotate-6 translate-y-4 opacity-10 -z-10"></div>
              </div>
            </motion.div>

            {/* Right: Content Details */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="w-full md:w-1/2 space-y-8 text-center md:text-left"
            >
               <div>
                 <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                   <Award className="text-yellow-500 w-8 h-8 fill-yellow-500" />
                   <span className="text-green-700 font-bold uppercase tracking-widest text-sm">Our Promise</span>
                 </div>
                 
                 <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-none">
                   25 Years <br/><span className="text-green-600">Warranty</span>
                 </h2>
               </div>
               
               <p className="text-gray-600 text-lg">
                 We are so confident in the durability and resilience of our natural latex foam that we back it up with an industry-leading warranty. This isn't just a number; it's our guarantee of quality.
               </p>

               <ul className="space-y-4 text-left">
                 <li className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                   <div className="bg-green-100 p-2 rounded-full flex-shrink-0"><Leaf className="w-5 h-5 text-green-600" /></div>
                   <div>
                      <h4 className="font-bold text-gray-900">Zero Sagging</h4>
                      <p className="text-sm text-gray-600">Maintains shape and support decade after decade.</p>
                   </div>
                 </li>
                 <li className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                   <div className="bg-green-100 p-2 rounded-full flex-shrink-0"><CheckCircle className="w-5 h-5 text-green-600" /></div>
                   <div>
                      <h4 className="font-bold text-gray-900">Natural Resilience</h4>
                      <p className="text-sm text-gray-600">100% organic structure that resists breakdown.</p>
                   </div>
                 </li>
               </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==================== 6. LARGE IMAGE SECTION (EXISTING) ==================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">From Nature to Your Home</h2>
              <p className="text-gray-500 mt-2 text-lg">The journey of pure rubber sap</p>
           </div>

           {/* Modified Image Container */}
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