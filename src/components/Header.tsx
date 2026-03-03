import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="hidden bg-primary-900 text-white py-2 text-xs md:block font-medium tracking-wide">
        <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-primary-300" />
              <span>Open Daily: 9:30 AM - 11:00 PM (Sunday Open)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-primary-300" />
              <span>SVP Nagar, Mhada Road, Andheri West</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:drmahajan24@gmail.com" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>drmahajan24@gmail.com</span>
            </a>
            <a href="tel:+918104690763" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>+91 81046 90763</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Shree Polyclinic Logo" 
            className="h-14 w-14 rounded-full object-cover bg-white p-0.5 shadow-sm border border-gray-100"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-2xl leading-none text-primary-900 tracking-tight">Shree Polyclinic</span>
            <span className="text-[10px] text-primary-600 font-bold tracking-[0.2em] uppercase mt-1">Multi-Specialty Care</span>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm text-gray-600">
          <a href="#about" className="hover:text-primary-600 transition-colors">About Dr. Mahajan</a>
          <a href="#services" className="hover:text-primary-600 transition-colors">Services</a>
          <a href="#features" className="hover:text-primary-600 transition-colors">Why Us</a>
          <a href="#testimonials" className="hover:text-primary-600 transition-colors">Reviews</a>
        </nav>

        <a 
          href="#appointment" 
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          Book Appointment
        </a>
      </div>
    </header>
  );
}
