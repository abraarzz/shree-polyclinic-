import { motion } from 'motion/react';
import { Clock, CalendarDays, MapPin, PhoneCall } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="py-20 bg-primary-900 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-300 font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Accessible, Reliable, & Continuous Care
            </h3>
            <p className="text-lg text-primary-100 mb-10 leading-relaxed">
              We understand that health needs don't follow a strict schedule. That's why Shree Polyclinic is designed around your convenience and accessibility.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-800 flex items-center justify-center text-primary-300">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Extended Hours</h4>
                  <p className="text-primary-200">Open daily from 9:30 AM to 11:00 PM, ensuring you can get care after work or school.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-800 flex items-center justify-center text-primary-300">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Weekend Care</h4>
                  <p className="text-primary-200">Full availability on Sundays, because illnesses don't take the weekend off.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-800 flex items-center justify-center text-primary-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Easy Accessibility</h4>
                  <p className="text-primary-200">Convenient ground-floor facility located in Sandeep Sarovar Bldg, SV Patel Nagar, Mhada Road.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/clinic-exterior/800/600" 
                alt="Shree Polyclinic Exterior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-2xl shadow-xl max-w-sm flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                <PhoneCall className="w-7 h-7" />
              </div>
              <div>
                <p className="font-bold text-lg">Need Urgent Care?</p>
                <p className="text-sm text-gray-500 mb-1">Call us directly for immediate assistance</p>
                <a href="tel:+918104690763" className="text-primary-600 font-bold hover:underline">+91 81046 90763</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
