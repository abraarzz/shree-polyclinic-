import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Patient",
    content: "Dr. Mahajan is incredibly soft-spoken and patient. He took the time to explain my condition thoroughly. The professional staff made the entire visit seamless.",
    rating: 5
  },
  {
    name: "Rahul Desai",
    role: "Patient",
    content: "I visited for a severe joint issue. The orthopedic consultation was top-notch, and the in-house physiotherapy helped me recover quickly. Highly recommend their proper guidance.",
    rating: 5
  },
  {
    name: "Anita Verma",
    role: "Mother of Patient",
    content: "Finding a good pediatrician is hard, but Dr. Mahajan's clinic is wonderful. They are open late, which is a lifesaver when kids fall sick at odd hours. Very professional staff.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Patient Reviews</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Patients Say
          </h3>
          <p className="text-lg text-gray-600">
            We pride ourselves on providing compassionate care and proper guidance. Read about the experiences of our valued patients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-100" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
