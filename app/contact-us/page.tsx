"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User, AtSign, PenTool } from "lucide-react";
import { useState, useRef } from "react";
// EmailJS library eka import kala
import emailjs from '@emailjs/browser';

// --- LOCAL BUSINESS SCHEMA (JSON-LD) ---
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Natural Latex Foam Lanka Pvt Ltd",
  "image": "https://naturallatexfoamsrilanka.lk/images/hero-bg.jpg",
  "telephone": "+94777733074",
  "email": "naturallatexfoamlanka@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No 10E, Pirivena Road",
    "addressLocality": "Dehiwala-Mount Lavinia",
    "addressRegion": "Western Province",
    "postalCode": "10390",
    "addressCountry": "LK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.8306, 
    "longitude": 79.8708
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "url": "https://naturallatexfoamsrilanka.lk/contact-us"
};

export default function ContactUs() {
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error
  const form = useRef<HTMLFormElement>(null); // Form eka reference karanna

  // Function to handle form submission via EmailJS
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    if (form.current) {
      emailjs
        .sendForm(
          'service_f4mej28',   // Replace with your EmailJS Service ID
          'template_5c8hs8o',  // Replace with your EmailJS Template ID
          form.current,
          'iCNeXhX4jeIygJ-gN'    // Replace with your EmailJS Public Key
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormStatus("success");
            // Form eka clear karanna
            form.current?.reset();
            // Reset status after 3 seconds
            setTimeout(() => setFormStatus("idle"), 3000);
          },
          (error) => {
            console.log(error.text);
            setFormStatus("error"); // Error status ekak add kala
            setTimeout(() => setFormStatus("idle"), 3000);
          }
        );
    }
  };

  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden relative">
      {/* --- SEO SCHEMA INJECTION --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Navbar />

      {/* --- HERO SECTION --- */}
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
      <section className="py-20 bg-white -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center">
            
            {/* Address Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Showroom</h3>
              <p className="text-gray-600 text-sm">No. 10E, Pirivena Road,<br/> Dehiwala-Mount Lavinia</p>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-2 text-sm">Call us for inquiries</p>
              <a href="tel:+94777733074" className="text-lg font-bold text-green-700 hover:text-green-800 transition">
                +94 777 733 074
              </a>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full cursor-pointer group"
            >
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-green-200 shadow-lg group-hover:scale-110 transition-transform">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-2 text-sm">Chat with us instantly</p>
              <a 
                href="https://wa.me/94777342974" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-bold text-green-600 hover:text-green-800 transition"
              >
                0777 342 974
              </a>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-2 text-sm">Drop us a line anytime</p>
              <a href="mailto:naturallatexfoamlanka@gmail.com" className="text-green-700 font-medium hover:underline break-all text-sm">
                naturallatexfoamlanka@gmail.com
              </a>
            </motion.div>

            {/* Hours Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Opening Hours</h3>
              <p className="text-gray-600 text-sm">Mon - Sat: 9:00 AM – 6:00 PM</p>
              <p className="text-red-500 font-medium mt-1 text-sm">Sunday: Closed</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- FORM & MAP SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Contact Form */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-full lg:w-1/2"
            >
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
                <h2 className="text-3xl font-bold text-green-950 mb-2">Send us a Message</h2>
                <p className="text-gray-500 mb-8">Have a specific question? Fill out the form below and we'll get back to you shortly.</p>
                
                {/* ref={form} add kala */}
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">Your Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                        {/* name attribute add kala */}
                        <input type="text" name="user_name" placeholder="John Doe" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">Your Email</label>
                      <div className="relative">
                         <AtSign className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                         {/* name attribute add kala */}
                         <input type="email" name="user_email" placeholder="john@example.com" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" />
                      </div>
                    </div>
                  </div>

                  <div>
                     <label className="text-sm font-semibold text-gray-700 mb-2 block">Phone Number</label>
                     <div className="relative">
                        <Phone className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                        {/* name attribute add kala */}
                        <input type="tel" name="contact_number" placeholder="+94 77..." className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" />
                     </div>
                  </div>

                  <div>
                     <label className="text-sm font-semibold text-gray-700 mb-2 block">Message</label>
                     <div className="relative">
                        <PenTool className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                        {/* name attribute add kala */}
                        <textarea name="message" rows={4} placeholder="How can we help you?" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"></textarea>
                     </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    className={`w-full py-4 rounded-xl font-bold text-lg text-white flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-green-500/30 ${
                      formStatus === 'success' ? 'bg-green-700' : formStatus === 'error' ? 'bg-red-600' : 'bg-green-600 hover:bg-green-700'
                    }`}
                  >
                    {formStatus === 'submitting' ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : formStatus === 'success' ? (
                      <span>Message Sent Successfully!</span>
                    ) : formStatus === 'error' ? (
                      <span>Failed. Try again.</span>
                    ) : (
                      <>Send Message <Send size={20} /></>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-full lg:w-1/2 h-[500px] lg:h-[650px] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 order-first lg:order-last"
            >
               {/* Updated Google Maps Embed for 10E Pirivena Rd */}
               <iframe 
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=10E%20Pirivena%20Rd%2C%20Dehiwala-Mount%20Lavinia+(Natural%20Latex%20Foam%20Lanka%20Pvt%20Ltd)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
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