"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Vision", href: "/vision" },
  { name: "About Us", href: "/about-us" },
  { name: "Mattresses", href: "/mattresses" },
  { name: "Pillows", href: "/pillows" },
  { name: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Logic Fix ---
  // Scrolled: Background White, Text Green
  // Not Scrolled (Top): Background Transparent, Text White (meeka dan hama page ekatama wadai)
  
  const textColorClass = scrolled ? "text-green-900" : "text-white";
  const iconColorClass = scrolled ? "text-green-600" : "text-green-400"; // Logo leaf color
  const subTextColorClass = scrolled ? "text-gray-600" : "text-gray-200"; // 'Foam' text part
  const bgClass = scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5";
  const hoverLineColor = scrolled ? "bg-green-600" : "bg-white"; // Underline hover color

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${bgClass}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className={`flex items-center gap-2 font-bold text-2xl transition-colors ${textColorClass}`}>
          <Leaf className={`w-8 h-8 ${iconColorClass}`} />
          <span>Natural Latex<span className={subTextColorClass}>Foam</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${textColorClass} font-medium transition-colors relative group hover:opacity-80`}
            >
              {link.name}
              <span className={`absolute left-0 bottom-0 w-0 h-0.5 ${hoverLineColor} transition-all group-hover:w-full`}></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className={`md:hidden ${textColorClass}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-green-600"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}