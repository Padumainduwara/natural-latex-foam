"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  ShieldCheck, 
  Leaf, 
  Wind, 
  Recycle, 
  Heart, 
  Home as HomeIcon, 
  Smile, 
  Layers 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-bg.jpg" 
            alt="Natural Latex Mattress Factory" 
            fill 
            className="object-cover brightness-50"
            priority
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-green-950/90"></div>
        </div>

        <div className="container relative z-10 px-4 text-center mt-10 md:mt-0">
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-block mb-4 px-5 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-xs md:text-sm font-medium tracking-wider uppercase shadow-lg"
          >
             100% Sri Lankan Product
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Smarter Choice for <br/> <span className="text-green-400">The Environment</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed px-4"
          >
            Experience the purest sleep with our eco-friendly, hypoallergenic, and chemically safe natural latex products.
          </motion.p>

          {/* Hero Buttons - Custom Layout */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-center gap-5 w-full max-w-lg mx-auto"
          >
            {/* Row 1: Products */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Link href="/mattresses" className="flex-1 px-6 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/30">
                  Explore Mattresses <ArrowRight size={18} />
                </Link>
                <Link href="/pillows" className="flex-1 px-6 py-4 bg-white text-green-900 hover:bg-gray-100 rounded-full font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                  Explore Pillows <ArrowRight size={18} />
                </Link>
            </div>
            
            {/* Row 2: Contact */}
            <Link href="/contact-us" className="w-full sm:w-auto px-10 py-3 bg-white/10 backdrop-blur-md border border-white/50 text-white hover:bg-white hover:text-green-900 rounded-full font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
               Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="py-10 bg-green-950 text-white border-b border-green-900 relative z-20 -mt-2 shadow-2xl">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-green-800/30">
              {[
                { label: "Natural", value: "100%", icon: <Leaf size={20} className="text-green-400"/> },
                { label: "Warranty", value: "25 Years", icon: <ShieldCheck size={20} className="text-green-400"/> },
                { label: "Recyclable", value: "99%", icon: <Recycle size={20} className="text-green-400"/> },
                { label: "Toxic Free", value: "0%", icon: <Wind size={20} className="text-green-400"/> },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-2 group">
                   <div className="flex items-center gap-2 mb-1 opacity-80 text-xs md:text-sm font-medium uppercase tracking-wider group-hover:text-green-300 transition-colors">
                      {stat.icon} {stat.label}
                   </div>
                   <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- ABOUT INTRO --- */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* Image Side */}
              <div className="lg:w-1/2 relative w-full">
                 <div className="relative h-[350px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image src="/images/about-us/rubber-milk.jpg" alt="Rubber Tapping Process" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
                 </div>
                 {/* Floating Badge */}
                 <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 w-40 h-40 md:w-48 md:h-48 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-xl border-4 border-green-50 animate-float hidden md:flex">
                    <div className="text-center p-2">
                       <span className="block text-3xl md:text-4xl font-bold text-green-700">100%</span>
                       <span className="text-xs md:text-sm font-bold text-green-900 uppercase tracking-wide">Sri Lankan<br/>Origin</span>
                    </div>
                 </div>
              </div>

              {/* Text Side */}
              <div className="lg:w-1/2 text-center lg:text-left">
                 <span className="text-green-600 font-bold uppercase tracking-wider text-sm bg-green-50 px-3 py-1 rounded-full">Who We Are</span>
                 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">Nature's Gift to <br/>Your Sleep</h2>
                 <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Natural Latex Foam Lanka Pvt Ltd. (NLFL) is a premier 100% Sri Lankan company engaged in providing 
                    eco-friendly natural latex foam mattresses and pillows to global and local markets.
                 </p>
                 <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    We bring together all the health benefits of organic latex foam, ensuring weight is evenly distributed 
                    for optimal support. No chemical smell, no risk from off-gassing, and strictly zero indoor air pollution.
                 </p>
                 <div className="flex justify-center lg:justify-start">
                    <Link href="/about-us" className="text-white bg-green-900 px-8 py-3 rounded-full font-bold hover:bg-green-800 transition-all flex items-center gap-2 shadow-md hover:shadow-lg">
                        Read Our Story <ArrowRight size={18} />
                    </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- COMFORT VALUES --- */}
      <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Comfort for Everyone</h2>
               <p className="text-gray-500 mt-3 text-lg">Our promise extends beyond just a mattress.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { title: "Your Life", icon: <Heart className="w-8 h-8"/>, desc: "Enhancing daily living through better sleep quality." },
                 { title: "Your Family", icon: <Smile className="w-8 h-8"/>, desc: "Safe, non-toxic products for your loved ones." },
                 { title: "Your Home", icon: <HomeIcon className="w-8 h-8"/>, desc: "Sustainable luxury that fits your lifestyle perfectly." },
                 { title: "Your Dream", icon: <Star className="w-8 h-8"/>, desc: "Turning your sleep into a rejuvenating experience." },
               ].map((item, idx) => (
                 <motion.div 
                   key={idx}
                   whileHover={{ y: -10 }}
                   className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center group cursor-default"
                 >
                    <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                       {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Comfort {item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* --- PRODUCT SHOWCASE (Redesigned - Premium Cards) --- */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <span className="text-green-600 font-bold uppercase tracking-wider text-sm bg-white px-4 py-1 rounded-full shadow-sm border border-green-100">Our Collection</span>
             <h2 className="text-4xl md:text-5xl font-bold text-green-950 mt-4 mb-4">Crafted from Nature</h2>
             <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Explore our premium range of 100% natural latex solutions, designed for durability and comfort.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             
             {/* 1. Mattresses */}
             <motion.div 
               whileHover={{ y: -10 }}
               className="group bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 flex flex-col"
             >
                <div className="relative h-64 w-full overflow-hidden">
                   <Image src="/images/mattress-1.jpg" alt="Natural Mattresses" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                   {/* Floating Icon - Moved UP using bottom-4 */}
                   <div className="absolute bottom-4 right-6 w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg border-4 border-white group-hover:bg-green-700 transition-colors z-10">
                      <HomeIcon size={24} />
                   </div>
                </div>
                <div className="pt-6 px-6 pb-8 flex-grow flex flex-col"> {/* Added pt-6 adjusted padding */}
                   <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">Natural Mattresses</h3>
                   <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
                      Best for back pain with a 25-year warranty. Available in Mono, 5-zone, and 7-zone models for personalized support.
                   </p>
                   <div className="mt-auto">
                      <Link href="/mattresses" className="flex items-center justify-between w-full px-5 py-3 bg-gray-50 text-green-800 font-bold rounded-xl group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                          View Collection <ArrowRight size={18} />
                      </Link>
                   </div>
                </div>
             </motion.div>

             {/* 2. Pillows */}
             <motion.div 
               whileHover={{ y: -10 }}
               className="group bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 flex flex-col"
             >
                <div className="relative h-64 w-full overflow-hidden">
                   <Image src="/images/pillow-1.jpg" alt="Latex Pillows" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                   {/* Floating Icon - Moved UP */}
                   <div className="absolute bottom-4 right-6 w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg border-4 border-white group-hover:bg-green-700 transition-colors z-10">
                      <Smile size={24} />
                   </div>
                </div>
                <div className="pt-6 px-6 pb-8 flex-grow flex flex-col">
                   <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">Latex Pillows</h3>
                   <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
                      Naturally hypoallergenic, anti-microbial, and breathable. Choose from Contour, Knobby, or Standard shapes.
                   </p>
                   <div className="mt-auto">
                      <Link href="/pillows" className="flex items-center justify-between w-full px-5 py-3 bg-gray-50 text-green-800 font-bold rounded-xl group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                          View Collection <ArrowRight size={18} />
                      </Link>
                   </div>
                </div>
             </motion.div>

             {/* 3. Cushions */}
             <motion.div 
               whileHover={{ y: -10 }}
               className="group bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 flex flex-col"
             >
                <div className="relative h-64 w-full overflow-hidden">
                   <Image src="/images/mattresses/laminated-cushions.jpg" alt="Laminated Cushions" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                   {/* Floating Icon - Moved UP */}
                   <div className="absolute bottom-4 right-6 w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg border-4 border-white group-hover:bg-green-700 transition-colors z-10">
                      <Layers size={24} />
                   </div>
                </div>
                <div className="pt-6 px-6 pb-8 flex-grow flex flex-col">
                   <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">Laminated Cushions</h3>
                   <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
                      High-density natural latex for durable seating comfort. Standard 20x20 sizes or custom-made to fit your furniture.
                   </p>
                   <div className="mt-auto">
                      <Link href="/mattresses" className="flex items-center justify-between w-full px-5 py-3 bg-gray-50 text-green-800 font-bold rounded-xl group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                          View Details <ArrowRight size={18} />
                      </Link>
                   </div>
                </div>
             </motion.div>

             {/* 4. Sheets & Toppers */}
             <motion.div 
               whileHover={{ y: -10 }}
               className="group bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 flex flex-col"
             >
                <div className="relative h-64 w-full overflow-hidden">
                   <Image src="/images/about-us/manufacturing-process.jpg" alt="Sheets and Toppers" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                   {/* Floating Icon - Moved UP */}
                   <div className="absolute bottom-4 right-6 w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg border-4 border-white group-hover:bg-green-700 transition-colors z-10">
                      <Recycle size={24} />
                   </div>
                </div>
                <div className="pt-6 px-6 pb-8 flex-grow flex flex-col">
                   <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">Sheets & Toppers</h3>
                   <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
                      Premium raw latex sheets and soft toppers to upgrade your existing mattress. Industrial grade quality available.
                   </p>
                   <div className="mt-auto">
                      <Link href="/mattresses" className="flex items-center justify-between w-full px-5 py-3 bg-gray-50 text-green-800 font-bold rounded-xl group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                          View Details <ArrowRight size={18} />
                      </Link>
                   </div>
                </div>
             </motion.div>

          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-24 bg-green-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-green-950 mb-4">Why Natural Latex?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Discover the benefits of sleeping on nature's finest material.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Eco-Friendly", desc: "Made from 100% natural rubber sap, biodegradable and sustainable.", icon: <Leaf className="w-10 h-10 text-green-600"/> },
              { title: "Orthopedic Support", desc: "Aligns your spine perfectly, relieving back pain and pressure points.", icon: <ShieldCheck className="w-10 h-10 text-green-600"/> },
              { title: "Anti-Microbial", desc: "Naturally resistant to dust mites, mold, and bacteria. Perfect for allergies.", icon: <CheckCircle className="w-10 h-10 text-green-600"/> },
              { title: "No Air Pollution", desc: "No volatile organic compounds (VOCs). No chemical smell or off-gassing.", icon: <Wind className="w-10 h-10 text-green-600"/> },
              { title: "Recyclable", desc: "Unlike synthetic mattresses, natural latex is 100% recyclable.", icon: <Recycle className="w-10 h-10 text-green-600"/> },
              { title: "25 Year Warranty", desc: "We back our best rated organic mattress with the industry's top warranty.", icon: <Star className="w-10 h-10 text-green-600"/> },
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:border-green-300 transition-all flex flex-col items-center text-center"
              >
                <div className="mb-6 bg-green-50 w-20 h-20 rounded-full flex items-center justify-center">
                   {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION (Updated) --- */}
      <section className="py-16 md:py-24 bg-green-950 text-white text-center relative overflow-hidden flex flex-col justify-center items-center">
         {/* Background Elements */}
         <div className="absolute inset-0 opacity-10 z-0">
            <Image src="/images/about-us/rubber-milk.jpg" alt="Pattern" fill className="object-cover" />
         </div>
         <div className="absolute -top-24 -left-24 w-64 h-64 bg-green-500 rounded-full blur-3xl opacity-20 z-0"></div>
         <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-green-400 rounded-full blur-3xl opacity-20 z-0"></div>

         {/* Content Container */}
         <div className="container relative z-10 px-4 mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
               Ready for a Healthier Sleep?
            </h2>
            <p className="text-green-100 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed px-2">
               Join thousands of satisfied customers who have switched to 100% natural latex. 
               Sleep better, live better.
            </p>
            
            {/* Buttons: Stack on Mobile, Row on Desktop */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
               <Link href="/contact-us" className="px-10 py-4 bg-white text-green-950 rounded-full font-bold hover:bg-green-100 transition-colors shadow-lg text-lg w-full sm:w-auto flex justify-center items-center">
                  Get a Quote
               </Link>
               <Link href="/advantages" className="px-10 py-4 border-2 border-white/30 hover:bg-white/10 rounded-full font-bold transition-colors text-lg w-full sm:w-auto flex justify-center items-center">
                  Learn More
               </Link>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}