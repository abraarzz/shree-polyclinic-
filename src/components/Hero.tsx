import { motion } from 'motion/react';
import { Calendar, Phone, ShieldPlus } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-gray-100">
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Shree Polyclinic Exterior" 
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold tracking-wide uppercase mb-6">
              <ShieldPlus className="w-4 h-4" />
              Accepting New Patients
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
              Your Trusted Family Physician in <span className="text-primary-600">Andheri West</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl font-medium">
              Led by Dr. Ravindra Naval Mahajan, Shree Polyclinic provides comprehensive, compassionate, and practical healthcare for you and your family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#appointment" 
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-md hover:shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
              <a 
                href="tel:+918104690763" 
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-sm hover:shadow-md"
              >
                <Phone className="w-5 h-5 text-primary-600" />
                Call Now
              </a>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-600 font-semibold">
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Open 9:30 AM - 11:00 PM</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                <span>In-house Pathology Lab</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-primary-100 rounded-[2rem] transform rotate-3 scale-105 -z-10"></div>
            <img 
              src="/doctor.jpg" 
              alt="Dr. Ravindra Naval Mahajan" 
              className="rounded-[2rem] shadow-xl w-full object-cover aspect-[4/5] border-4 border-white"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-gray-100">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">20+ Years</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Experience</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 font-medium italic border-l-2 border-primary-200 pl-3">"Patient-centric, humble, and soft-spoken approach."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}