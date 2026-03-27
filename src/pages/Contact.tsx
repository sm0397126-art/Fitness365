import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Contact() {
  return (
    <div className="pt-24 pb-16 bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div className="max-w-3xl mx-auto text-center" {...fadeIn}>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have questions or ready to start your free trial? Reach out to us. We're here to help you begin your transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-8 uppercase">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Our Location</h4>
                      <p className="text-gray-400">sibsagar west, jomunaroad ,785640,Assam.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Phone Number</h4>
                      <p className="text-gray-400">+91 9181407647</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Email Address</h4>
                      <p className="text-gray-400">join@365fitness.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Operating Hours</h4>
                      <p className="text-gray-400">We are open 24/7, 365 days a year.</p>
                      <p className="text-gray-500 text-sm mt-1">Staffed hours: Mon-Fri 6AM - 10PM, Sat-Sun 8AM - 8PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="w-full h-64 bg-dark-card rounded-2xl border border-white/5 overflow-hidden relative mt-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1621531461060!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy"
                  className="grayscale invert opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-dark-card p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <h2 className="text-3xl font-display font-bold text-white mb-2 uppercase relative z-10">Send us a message</h2>
              <p className="text-gray-400 mb-8 relative z-10">Fill out the form below and our team will get back to you within 24 hours.</p>

              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input type="text" id="firstName" className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="John" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input type="text" id="lastName" className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Doe" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div>
                  <label htmlFor="goal" className="block text-sm font-medium text-gray-300 mb-2">Primary Goal</label>
                  <select id="goal" className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
                    <option value="trial">Start Free Trial</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" placeholder="How can we help you achieve your goals?"></textarea>
                </div>

                <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white font-display font-bold uppercase tracking-wider py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(230,57,70,0.3)]">
                  Send Message <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
