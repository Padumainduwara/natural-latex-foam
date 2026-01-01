"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactUs() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* --- HERO SECTION (Consistent with other pages) --- */}
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
            <MessageCircle size={16} /> Get in Touch
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Contact Us
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed"
          >
            We are here to help you sleep better. Reach out to us for any inquiries.
          </motion.p>
        </div>
      </section>

      {/* --- CONTACT INFO CARDS --- */}
      <section className="py-20 bg-gray-50 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Address Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Showroom</h3>
              <p className="text-gray-600">No. 10E, Pirivena Road,<br/> Ratmalana, Sri Lanka.</p>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Call us for inquiries</p>
              <a href="tel:+94777733074" className="text-lg font-bold text-green-700 hover:text-green-800 transition">
                +94 777 733 074
              </a>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Drop us a line anytime</p>
              <a href="mailto:naturallatexfoamlanka@gmail.com" className="text-green-700 font-medium hover:underline break-all">
                naturallatexfoamlanka@gmail.com
              </a>
            </motion.div>

            {/* Hours Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Opening Hours</h3>
              <p className="text-gray-600">Mon - Sat: 9:00 AM – 6:00 PM</p>
              <p className="text-red-500 font-medium mt-1">Sunday: Closed</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- MAP & FORM SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Map */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-full h-[500px] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
            >
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5727142145465!2d79.87780447587635!3d6.821731619623837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25ad360431309%3A0xc09249764516641!2sNatural%20Latex%20Foam%20Lanka%20Pvt%20Ltd!5e0!3m2!1sen!2slk!4v1708608851000!5m2!1sen!2slk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}