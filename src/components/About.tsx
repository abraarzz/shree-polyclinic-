import { motion } from 'motion/react';
import { Award, Heart, ShieldCheck, Stethoscope } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:order-2"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-gray-50">
              <img 
                src="/doctor.jpg" 
                alt="Dr. Ravindra Naval Mahajan Consulting" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary-900 text-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs border border-primary-800">
              <h4 className="font-serif text-2xl font-bold mb-2">Director</h4>
              <p className="text-primary-100 text-sm leading-relaxed">
                Dr. Ravindra Mahajan Care Private Limited
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-bold tracking-wide uppercase mb-4">
              <ShieldCheck className="w-4 h-4" />
              Reg. No. I-73737-A
            </div>
            <h2 className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-3">About The Doctor</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
              Dr. Ravindra Naval Mahajan
            </h3>
            <p className="text-xl text-primary-700 mb-6 font-semibold">
              B.A.M.S., MD (EMS)
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              As a dedicated Family Physician & Surgeon, Dr. Mahajan brings decades of comprehensive medical experience to Andheri West. Known for his patient-centric, humble, and "soft-spoken" approach, he focuses on clear communication and practical, effective treatment plans tailored to each individual.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 border border-primary-100">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Family Physician & Surgeon</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">Comprehensive care for all age groups, focusing on holistic well-being and preventive medicine.</p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 border border-primary-100">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Specialized Certifications</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">Holding advanced certifications in Gynaecology and Obstetrics (CGO) and Child Health (CCH).</p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 border border-primary-100">
                  <Heart className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Patient-Centric Philosophy</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">A commitment to transparent communication, ensuring patients fully understand their health and treatment options.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}