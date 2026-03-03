import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, MessageSquare } from 'lucide-react';

export function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    reason: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Appointment requested:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', date: '', time: '', reason: '' });
    }, 5000);
  };

  // Generate time slots from 9:30 AM to 11:00 PM
  const timeSlots = [];
  for (let hour = 9; hour <= 22; hour++) {
    for (let min of ['00', '30']) {
      if (hour === 9 && min === '00') continue; // Start at 9:30
      if (hour === 23 && min === '30') continue; // End at 11:00 PM (23:00)
      
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour > 12 ? hour - 12 : hour;
      timeSlots.push(`${displayHour}:${min} ${ampm}`);
    }
  }

  return (
    <section id="appointment" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50 rounded-l-[100px] -z-10 hidden lg:block"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Book a Visit</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Schedule Your Appointment
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Select a convenient time slot between 9:30 AM and 11:00 PM. You will receive an automated SMS/WhatsApp confirmation shortly after booking.
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h4>
                  <p className="text-gray-600">We will send a confirmation SMS/WhatsApp to {formData.phone} shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <User className="w-4 h-4 text-primary-500" /> Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary-500" /> Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary-500" /> Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="time" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary-500" /> Preferred Time
                      </label>
                      <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
                      >
                        <option value="" disabled>Select a time slot</option>
                        {timeSlots.map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="reason" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary-500" /> Reason for Visit (Optional)
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      rows={3}
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Briefly describe your symptoms or reason for visit..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                  >
                    Confirm Appointment Request
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl"
          >
            {/* Google Maps Embed for SVP Nagar, Andheri West */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15078.85303681491!2d72.8159846!3d19.1311414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61b41c073c5%3A0x82f2540b01f9c878!2sSVP%20Nagar%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709424000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '500px' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Polyclinic Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
