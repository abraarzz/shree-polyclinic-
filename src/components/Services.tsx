import { motion } from 'motion/react';
import { Activity, Baby, Bone, HeartPulse, Home, Stethoscope, Syringe } from 'lucide-react';

const services = [
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "General Medicine",
    description: "Routine consultations, family health checkups, and comprehensive medical care for all ages."
  },
  {
    icon: <Bone className="w-8 h-8" />,
    title: "Orthopedics",
    description: "Specialized care for bone, joint, and muscle conditions, ensuring optimal mobility."
  },
  {
    icon: <Baby className="w-8 h-8" />,
    title: "Pediatrics",
    description: "Dedicated healthcare for infants, children, and adolescents with a gentle approach."
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Gynaecology",
    description: "Comprehensive women's health services, from routine screenings to specialized care."
  },
  {
    icon: <Syringe className="w-8 h-8" />,
    title: "Diagnostics",
    description: "In-house Pathology Lab for quick and accurate blood tests and essential screenings."
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Rehabilitation",
    description: "Expert physiotherapy and joint mobilization to aid recovery and improve strength."
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Emergency Care",
    description: "24/7-style availability for urgent medical needs, providing immediate attention."
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Home Visits",
    description: "Dedicated medical assistance at your doorstep in the Andheri and Versova areas."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Offerings</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Multi-Specialty Care
          </h3>
          <p className="text-lg text-gray-600">
            Shree Polyclinic provides a wide range of medical services under one roof, ensuring convenient and high-quality healthcare for our community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
