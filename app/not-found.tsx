import Link from "next/link";
import { Recycle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
      <div className="bg-green-50 p-6 rounded-full mb-6 animate-bounce">
        <Recycle className="w-16 h-16 text-green-600" />
      </div>
      
      <h1 className="text-6xl md:text-9xl font-bold text-green-950 mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mb-10 text-lg">
        Oops! The page you are looking for seems to have drifted away like a sweet dream.
      </p>

      <Link 
        href="/" 
        className="flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/30"
      >
        <Home size={20} /> Back to Home
      </Link>
      
      <div className="absolute bottom-10 text-sm text-gray-400">
        © Natural Latex Foam Lanka Pvt Ltd
      </div>
    </div>
  );
}