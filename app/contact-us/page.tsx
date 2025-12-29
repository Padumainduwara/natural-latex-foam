"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactUs() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16 bg-green-950 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-green-200">We are here to help you sleep better.</p>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900">Showroom Address</h3>
                <p className="text-gray-600 mt-1">No. 10E, Pirivena Road, Ratmalana, Sri Lanka.</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-600">
                 <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900">Phone</h3>
                <p className="text-gray-600 mt-1">+94 777 733 074</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-600">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900">Email</h3>
                <p className="text-gray-600 mt-1">naturallatexfoamlanka@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-600">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900">Opening Hours</h3>
                <p className="text-gray-600 mt-1">Mon - Sat: 9:00 AM – 6:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[450px] w-full bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.082711679262!2d79.8784!3d6.8804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTInNDkuNCJOIDc5wrA1Mic0Mi4yIkU!5e0!3m2!1sen!2slk!4v1634567890123!5m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}