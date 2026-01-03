import { Recycle, MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        
        {/* Top Section: Grid Layout for Responsive Design */}
        {/* Mobile: 1 Column, Tablet: 2 Columns, Desktop: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 text-green-400 font-bold text-2xl">
              <Recycle className="w-8 h-8" /> 
              <span className="text-white">Natural Latex <span className="text-green-400">Foam</span></span>
            </Link>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-sm">
              Sri Lanka's premier manufacturer of 100% natural latex mattresses and pillows.
              Experience the purest sleep with our eco-friendly products.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://www.facebook.com/naturallatexfoamlankalk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-600 transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/naturallatexfoamlanka" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-600 transition-colors text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links - Centered on Desktop */}
          {/* Added 'lg:justify-self-center' to center this block in the middle column on large screens */}
          <div className="lg:justify-self-center">
            <h3 className="text-xl font-bold mb-6 text-green-400">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/about-us" className="hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/mattresses" className="hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block">
                  Natural Mattresses
                </Link>
              </li>
              <li>
                <Link href="/pillows" className="hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block">
                  Latex Pillows
                </Link>
              </li>
              <li>
                <Link href="/advantages" className="hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block">
                  Advantages
                </Link>
              </li>
              <li>
                <Link href="/vision" className="hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400">Contact Info</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-4 items-start group">
                <div className="mt-1 w-8 h-8 rounded-full bg-green-900 flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors">
                  <MapPin size={16} />
                </div>
                <span className="leading-relaxed">No. 10E, Pirivena Road, Ratmalana, Sri Lanka.</span>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors">
                   <Phone size={16} />
                </div>
                <a href="tel:+94777733074" className="hover:text-green-400 transition-colors">
                  +94 777 733 074
                </a>
              </li>
              
              {/* NEW WhatsApp Number */}
              <li className="flex gap-4 items-center group">
                <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors">
                   <MessageCircle size={16} />
                </div>
                <a href="https://wa.me/94777342974" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  +94 777 342 974
                </a>
              </li>

              <li className="flex gap-4 items-center group">
                 <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors">
                    <Mail size={16} />
                 </div>
                <a href="mailto:naturallatexfoamlanka@gmail.com" className="hover:text-green-400 transition-colors">
                  naturallatexfoamlanka@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-green-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Natural Latex Foam Lanka Pvt Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-green-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}