import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-green-950 text-white py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
        <p className="mt-4 text-green-200">Our journey from nature to your bedroom.</p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl text-gray-800 font-medium mb-10 leading-relaxed text-center">
            Natural Latex Foam Lanka (Pvt) Ltd is a 100% Sri Lankan company dedicated to manufacturing 
            high-quality, eco-friendly sleep products.
          </p>

          <div className="prose prose-lg prose-green max-w-none text-gray-600">
            <h2 className="text-3xl font-bold text-green-900 mt-12 mb-6">Our History</h2>
            <p className="mb-8">
              Rubber was first introduced to Sri Lanka in 1876. Since then, we have mastered the art 
              of processing this natural gold into products that serve humanity. Our company has been 
              at the forefront of latex foam technology, ensuring that every mattress we produce 
              meets international standards of purity and durability.
            </p>

             {/* Factory Image */}
             <div className="my-12 rounded-3xl overflow-hidden shadow-2xl h-[400px] relative w-full">
               <Image src="/images/hero-bg.jpg" alt="Factory" fill className="object-cover" />
             </div>

            <h2 className="text-3xl font-bold text-green-900 mt-12 mb-6">Our Mission</h2>
            <p>
              To provide the most comfortable and healthy sleep experience using sustainable practices. 
              We believe that a good night's sleep is the foundation of a happy life, and we are 
              committed to making that accessible to everyone while protecting our environment.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}