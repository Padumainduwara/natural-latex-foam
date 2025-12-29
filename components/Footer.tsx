import { Leaf, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 text-green-400 font-bold text-2xl mb-6">
            <Leaf className="w-8 h-8" /> Natural Latex Foam
          </div>
          <p className="text-gray-300 leading-relaxed">
            Sri Lanka's premier manufacturer of 100% natural latex mattresses and pillows.
            Experience the purest sleep with our eco-friendly products.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-6 text-green-400">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/mattresses" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Natural Mattresses</Link></li>
            <li><Link href="/pillows" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Latex Pillows</Link></li>
            <li><Link href="/vision" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Our Vision</Link></li>
            <li><Link href="/contact-us" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-green-400">Contact Info</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex gap-4 items-start"><MapPin className="text-green-500 shrink-0" /> No. 10E, Pirivena Road, Ratmalana</li>
            <li className="flex gap-4 items-center"><Phone className="text-green-500 shrink-0" /> +94 777 733 074</li>
            <li className="flex gap-4 items-center"><Mail className="text-green-500 shrink-0" /> info@naturallatex.lk</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-12 border-t border-green-900 pt-8 text-sm">
        © 2025 Natural Latex Foam Lanka Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}