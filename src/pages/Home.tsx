import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Clock, Trophy, Users, Dumbbell } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="Gym interior with athletes working out"
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="h-[1px] w-12 bg-primary"></div>
                <span className="text-primary font-bold text-xs uppercase tracking-ultra">
                  The Ultimate Fitness Experience
                </span>
              </motion.div>

              <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-display font-bold text-white leading-[0.8] mb-12 uppercase tracking-tighter">
                <div className="reveal-text">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.4, duration: 1, ease: [0.33, 1, 0.68, 1] }}
                  >
                    TRANSFORM
                  </motion.div>
                </div>
                <div className="reveal-text">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.6, duration: 1, ease: [0.33, 1, 0.68, 1] }}
                    className="flex items-center gap-4"
                  >
                    YOUR <span className="serif-italic text-primary lowercase tracking-normal">body</span>
                  </motion.div>
                </div>
              </h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-lg md:text-2xl text-gray-400 mb-12 max-w-xl leading-relaxed font-light"
              >
                Join <span className="text-white font-medium">365Fitness</span> to unlock your true potential. Premium equipment, expert trainers, and a community that pushes you further.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Link
                  to="/contact"
                  className="bg-primary hover:bg-primary-hover text-white px-12 py-6 rounded-sm font-display font-bold uppercase tracking-ultra text-xs transition-all transform hover:translate-y-[-4px] active:translate-y-0 text-center flex items-center justify-center gap-3 group shadow-[0_20px_40px_rgba(230,57,70,0.2)]"
                >
                  Start Free Trial
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className="bg-transparent border border-white/20 hover:border-white text-white px-12 py-6 rounded-sm font-display font-bold uppercase tracking-ultra text-xs transition-all text-center"
                >
                  View Plans
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-ultra text-gray-500 rotate-90 origin-left translate-x-3">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <div className="py-12 bg-darker overflow-hidden border-y border-white/5">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="text-8xl md:text-[10rem] font-display font-bold text-white/5 uppercase tracking-tighter">365FITNESS</span>
              <div className="w-4 h-4 rounded-full bg-primary"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us - Refined with Grid */}
      <section className="py-32 bg-dark relative grid-lines">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div className="lg:col-span-5" {...fadeIn}>
              <span className="text-primary font-bold text-xs uppercase tracking-ultra mb-4 block">Our Philosophy</span>
              <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 uppercase leading-[0.85] tracking-tighter">
                Beyond <br />
                <span className="serif-italic text-primary lowercase tracking-normal">the gym</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
                We're more than just a gym. We're a comprehensive fitness ecosystem designed to guarantee your success through precision and passion.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-10">
                <div>
                  <div className="text-4xl font-display font-bold text-white mb-1">24/7</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500">Access</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-white mb-1">365</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500">Days</div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {[
                { icon: Dumbbell, title: "Premium Equipment", desc: "State-of-the-art machines and free weights for every muscle group." },
                { icon: Users, title: "Expert Trainers", desc: "Certified professionals dedicated to guiding your fitness journey." },
                { icon: Clock, title: "Smart Access", desc: "Train on your schedule. We're open 365 days a year, round the clock." },
                { icon: Trophy, title: "Proven Results", desc: "Data-driven programs that guarantee transformation in 90 days." }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-dark p-10 group hover:bg-dark-card transition-colors"
                >
                  <div className="text-primary mb-8 group-hover:scale-110 transition-transform origin-left">
                    <feature.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-4 uppercase tracking-wider">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview - Editorial Style */}
      <section className="py-32 bg-dark relative grid-lines">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-6">
            <motion.div className="max-w-2xl" {...fadeIn}>
              <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-4 uppercase leading-[0.85] tracking-tighter">
                Specialized <br />
                <span className="serif-italic text-primary lowercase tracking-normal">disciplines</span>
              </h2>
            </motion.div>
            <motion.div {...fadeIn}>
              <Link to="/programs" className="group text-white text-[10px] font-bold uppercase tracking-ultra flex items-center gap-3 hover:text-primary transition-colors">
                Explore All <div className="w-8 h-[1px] bg-white group-hover:bg-primary group-hover:w-12 transition-all"></div>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Weight Loss", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop", num: "01" },
              { title: "Muscle Gain", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop", num: "02" },
              { title: "Personal Training", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop", num: "03" }
            ].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-700">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute top-6 left-6 text-white font-display font-bold text-4xl opacity-20 group-hover:opacity-100 transition-opacity">{program.num}</div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-2 uppercase tracking-tighter flex items-center justify-between">
                  {program.title}
                  <ArrowRight size={24} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                </h3>
                <div className="h-[1px] w-full bg-white/10 group-hover:bg-primary transition-colors"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Defined Cards */}
      <section className="py-32 bg-darker border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div className="lg:col-span-4" {...fadeIn}>
              <h2 className="text-6xl font-display font-bold text-white mb-8 uppercase leading-[0.85] tracking-tighter">
                The <br />
                <span className="serif-italic text-primary lowercase tracking-normal">proof</span>
              </h2>
              <p className="text-gray-500 text-xl font-light mb-12 leading-relaxed">
                Real transformations from our dedicated community members.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex text-primary">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <span className="text-white font-bold text-xs tracking-ultra uppercase">4.9/5 Rating</span>
              </div>
            </motion.div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {[
                { name: "Sarah M.", result: "Lost 25 lbs", quote: "The trainers here pushed me past my limits. I've never felt stronger or more confident.", img: "https://images.unsplash.com/photo-1609899517235-c32e1f446182?q=80&w=1974&auto=format&fit=crop" },
                { name: "David K.", result: "Gained 15 lbs", quote: "The equipment is top-notch and the community is supportive. Best gym I've ever joined.", img: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=2070&auto=format&fit=crop" }
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="bg-dark p-12 group hover:bg-dark-card transition-colors"
                >
                  <div className="flex items-center gap-6 mb-10">
                    <div className="relative">
                      <img src={testimonial.img} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                      <div className="absolute -bottom-2 -right-2 bg-primary p-1.5 rounded-full">
                        <Star size={12} fill="white" className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-lg">{testimonial.name}</h4>
                      <p className="text-primary text-xs font-bold uppercase tracking-ultra">{testimonial.result}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 font-light italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Dramatic */}
      <section className="py-48 bg-dark relative text-center overflow-hidden grid-lines">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[160px] opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div className="max-w-4xl mx-auto" {...fadeIn}>
            <span className="text-primary font-bold text-xs uppercase tracking-ultra mb-12 block">Your Journey Starts Now</span>
            <h2 className="text-7xl md:text-[12rem] font-display font-bold text-white mb-16 uppercase leading-[0.8] tracking-tighter">
              READY FOR <br />
              <span className="serif-italic text-primary lowercase tracking-normal">change?</span>
            </h2>
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-hover text-white px-16 py-8 rounded-sm font-display font-bold uppercase tracking-ultra text-xs transition-all transform hover:scale-105 active:scale-95 inline-flex items-center gap-6 shadow-[0_30px_60px_rgba(230,57,70,0.3)] group"
            >
              Book Your Free Trial 
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

