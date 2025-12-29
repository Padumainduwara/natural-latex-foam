"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-bg.jpg" 
            alt="Natural Latex Mattress" 
            fill 
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-green-900/30 mix-blend-multiply"></div>
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Experience the <br/><span className="text-green-400">Purest Sleep</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto"
          >
            100% Sri Lankan Natural Latex Mattresses & Pillows for a healthier, eco-friendly lifestyle.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Link href="/mattresses" className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2 justify-center shadow-lg hover:shadow-green-500/30">
              View Mattresses <ArrowRight size={20} />
            </Link>
            <Link href="/contact-us" className="px-8 py-4 bg-white hover:bg-gray-100 text-green-900 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Nature's Best Material</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover the benefits of sleeping on 100% natural latex.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Eco-Friendly", desc: "Made from 100% natural rubber sap, biodegradable and sustainable." },
              { title: "Orthopedic Support", desc: "Aligns your spine perfectly, relieving back pain and pressure points." },
              { title: "Anti-Microbial", desc: "Naturally resistant to dust mites, mold, and bacteria. Perfect for allergies." },
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-green-500"
              >
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-green-600 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRODUCT SHOWCASE --- */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image src="/images/mattress-1.jpg" alt="Latex Mattress" fill className="object-cover" />
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <span className="text-green-600 font-bold uppercase tracking-wider text-sm">Our Collection</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 mt-2">Natural Sleep Mattresses</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our mattresses are designed with air-cores for superior ventilation, keeping you cool in the tropical climate. 
                Whether you need a soft surface or firm orthopedic support, we have the perfect solution.
              </p>
              
              <div className="bg-green-50 p-6 rounded-xl mb-8 border border-green-100">
                 <h4 className="font-bold text-green-800 mb-3">Key Features:</h4>
                 <ul className="space-y-3">
                  {[
                    "100% Natural Latex", 
                    "No heat generation", 
                    "Dual-side usage (Soft/Firm)",
                    "25-Year Warranty"
                  ].map(pt => (
                    <li key={pt} className="flex items-center gap-3 text-gray-700">
                      <Star className="text-yellow-500 w-5 h-5 fill-current" /> {pt}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/mattresses" className="inline-flex items-center gap-2 text-white bg-green-600 px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-colors">
                Explore Collection <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}