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
      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark"></div>
          <div className="absolute inset-0 grid-lines opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div className="max-w-4xl" {...fadeIn}>
            <span className="text-primary font-bold text-xs uppercase tracking-ultra mb-6 block">Contact Us</span>
            <h1 className="text-7xl md:text-9xl font-display font-bold text-white mb-8 uppercase leading-[0.8] tracking-tighter">
              START YOUR <br />
              <span className="serif-italic text-primary lowercase tracking-normal">journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light max-w-2xl">
              Have questions or ready to start your free trial? Reach out to us. We're here to help you begin your transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-32 bg-darker border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5 max-w-7xl mx-auto">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-dark p-12 space-y-16"
            >
              <div>
                <span className="text-primary font-bold text-[10px] uppercase tracking-ultra mb-8 block">Information</span>
                <h2 className="text-4xl font-display font-bold text-white mb-12 uppercase tracking-tighter">Reach Out</h2>
                <div className="space-y-12">
                  <div className="flex items-start gap-6">
                    <div className="text-primary shrink-0 mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-white mb-2 uppercase tracking-ultra">Our Location</h4>
                      <p className="text-gray-400 text-sm font-light leading-relaxed uppercase tracking-widest">sibsagar west, jomunaroad ,785640,Assam.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="text-primary shrink-0 mt-1">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-white mb-2 uppercase tracking-ultra">Phone Number</h4>
                      <p className="text-gray-400 text-sm font-light leading-relaxed tracking-widest">+91 9181407647</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="text-primary shrink-0 mt-1">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-white mb-2 uppercase tracking-ultra">Email Address</h4>
                      <p className="text-gray-400 text-sm font-light leading-relaxed tracking-widest">join@365fitness.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="text-primary shrink-0 mt-1">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-white mb-2 uppercase tracking-ultra">Operating Hours</h4>
                      <p className="text-gray-400 text-sm font-light leading-relaxed tracking-widest">Open 24/7, 365 days a year.</p>
                      <p className="text-gray-600 text-[10px] mt-2 uppercase tracking-ultra">Staffed: Mon-Fri 6AM-10PM, Sat-Sun 8AM-8PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="w-full h-80 bg-darker border border-white/5 overflow-hidden relative grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.643242424242!2d94.6333333!3d26.9833333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU5JzAwLjAiTiA5NMKwMzgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1621531461060!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy"
                  className="invert"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-dark p-12 relative overflow-hidden"
            >
              <span className="text-primary font-bold text-[10px] uppercase tracking-ultra mb-8 block">Inquiry</span>
              <h2 className="text-4xl font-display font-bold text-white mb-4 uppercase tracking-tighter">Send Message</h2>
              <p className="text-gray-500 text-sm font-light mb-12 leading-relaxed">Fill out the form below and our team will get back to you within 24 hours.</p>

              <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-[10px] font-bold text-gray-500 uppercase tracking-ultra">First Name</label>
                    <input type="text" id="firstName" className="w-full bg-darker border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors text-sm font-light tracking-widest" placeholder="JOHN" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-[10px] font-bold text-gray-500 uppercase tracking-ultra">Last Name</label>
                    <input type="text" id="lastName" className="w-full bg-darker border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors text-sm font-light tracking-widest" placeholder="DOE" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-bold text-gray-500 uppercase tracking-ultra">Email Address</label>
                    <input type="email" id="email" className="w-full bg-darker border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors text-sm font-light tracking-widest" placeholder="HELLO@EXAMPLE.COM" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[10px] font-bold text-gray-500 uppercase tracking-ultra">Phone Number</label>
                    <input type="tel" id="phone" className="w-full bg-darker border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors text-sm font-light tracking-widest" placeholder="+91 00000 00000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="goal" className="text-[10px] font-bold text-gray-500 uppercase tracking-ultra">Primary Goal</label>
                  <select id="goal" className="w-full bg-darker border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none text-sm font-light tracking-widest uppercase">
                    <option value="trial">Start Free Trial</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-bold text-gray-500 uppercase tracking-ultra">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-darker border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none text-sm font-light tracking-widest" placeholder="HOW CAN WE HELP YOU?"></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-white font-display font-bold uppercase tracking-ultra text-xs py-6 rounded-sm transition-all transform hover:translate-y-[-4px] active:translate-y-0 shadow-[0_20px_40px_rgba(230,57,70,0.2)] flex items-center justify-center gap-3">
                  Send Message <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
