import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Shree Polyclinic Logo" 
                className="h-12 w-12 rounded-full object-cover bg-white p-0.5 shadow-sm"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none text-white">Shree Polyclinic</span>
                <span className="text-xs text-primary-400 font-medium tracking-wider uppercase">Multi-Specialty Care</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted family physician and multi-specialty care center in Andheri West, providing compassionate and comprehensive healthcare.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Dr. Mahajan</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Our Services</a></li>
              <li><a href="#features" className="hover:text-primary-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#appointment" className="hover:text-primary-400 transition-colors">Book Appointment</a></li>
              <li><a href="#testimonials" className="hover:text-primary-400 transition-colors">Patient Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-primary-400 transition-colors">General Medicine</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Orthopedics & Pediatrics</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Gynaecology</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Diagnostics & Pathology</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Physiotherapy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span>Ground Floor, Sandeep Sarovar Bldg, SV Patel Nagar, Mhada Road, Andheri West, Mumbai</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+918104690763" className="hover:text-primary-400 transition-colors">+91 81046 90763</a>
                  <a href="tel:+918788453956" className="hover:text-primary-400 transition-colors">+91 87884 53956</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span>Open Daily: 9:30 AM - 11:00 PM<br/>(Including Sundays)</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href="mailto:contact@shreepolyclinic.com" className="hover:text-primary-400 transition-colors">contact@shreepolyclinic.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-gray-800 text-sm text-center text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Shree Polyclinic. All rights reserved.</p>
          <p>Dr. Ravindra Mahajan Care Private Limited</p>
        </div>
      </div>
    </footer>
  );
}
