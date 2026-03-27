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
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-bold text-sm uppercase tracking-wider mb-6 border border-primary/30">
                #1 Rated Gym in the City
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-6 uppercase">
                Transform Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
                  Body in 90 Days
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                Join 365Fitness to build strength, lose weight, and unlock your true potential. Premium equipment, expert trainers, and a community that pushes you further.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-md font-display font-bold uppercase tracking-wider text-lg transition-all transform hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(230,57,70,0.4)]"
                >
                  Start Free Trial
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-md font-display font-bold uppercase tracking-wider text-lg transition-all text-center"
                >
                  View Plans
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-4 text-sm text-gray-400 font-medium">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Member"
                      className="w-10 h-10 rounded-full border-2 border-dark object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-500 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p>Joined by 2,000+ members</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-darker relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
              Why Choose <span className="text-primary">365Fitness</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We're more than just a gym. We're a comprehensive fitness ecosystem designed to guarantee your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Dumbbell, title: "Premium Equipment", desc: "State-of-the-art machines and free weights for every muscle group." },
              { icon: Users, title: "Expert Trainers", desc: "Certified professionals dedicated to guiding your fitness journey." },
              { icon: Clock, title: "24/7 Access", desc: "Train on your schedule. We're open 365 days a year, round the clock." },
              { icon: Trophy, title: "Proven Results", desc: "Data-driven programs that guarantee transformation in 90 days." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-dark-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3 uppercase">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 bg-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div className="max-w-2xl" {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
                Programs Built <span className="text-primary">For You</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Whether you're looking to shed pounds, build muscle, or improve overall health, we have a specialized program.
              </p>
            </motion.div>
            <motion.div {...fadeIn}>
              <Link to="/programs" className="text-primary font-bold uppercase tracking-wider flex items-center gap-2 hover:text-white transition-colors">
                View All Programs <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Weight Loss", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop", desc: "High-intensity cardio and tailored nutrition plans to burn fat fast." },
              { title: "Muscle Gain", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop", desc: "Hypertrophy-focused lifting programs to build lean muscle mass." },
              { title: "Personal Training", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop", desc: "1-on-1 coaching for maximum accountability and personalized programming." }
            ].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5]"
              >
                <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-display font-bold text-white mb-3 uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform">{program.title}</h3>
                  <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{program.desc}</p>
                  <Link to="/programs" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations / Social Proof */}
      <section className="py-24 bg-darker">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
              Real People. <span className="text-primary">Real Results.</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Don't just take our word for it. See the transformations our members have achieved in just 90 days.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Sarah M.", result: "Lost 25 lbs in 3 months", quote: "The trainers here pushed me past my limits. I've never felt stronger or more confident.", img: "https://images.unsplash.com/photo-1609899517235-c32e1f446182?q=80&w=1974&auto=format&fit=crop" },
              { name: "David K.", result: "Gained 15 lbs of muscle", quote: "The equipment is top-notch and the community is incredibly supportive. Best gym I've ever joined.", img: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=2070&auto=format&fit=crop" }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-dark-card p-8 rounded-2xl border border-white/5 flex flex-col sm:flex-row gap-6 items-center"
              >
                <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border-4 border-primary/20">
                  <img src={testimonial.img} alt={testimonial.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="flex text-primary mb-3">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-primary font-medium text-sm uppercase tracking-wider">{testimonial.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Time Offer Banner */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 uppercase">
                Join Today & Get 20% Off
              </h2>
              <p className="text-white/90 text-lg md:text-xl font-medium">
                Plus a free 1-on-1 personal training session. Offer ends soon!
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/pricing"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md font-display font-bold uppercase tracking-wider text-lg transition-all transform hover:scale-105 active:scale-95 inline-block shadow-xl"
              >
                Claim Offer Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-dark relative text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="max-w-3xl mx-auto" {...fadeIn}>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 uppercase leading-tight">
              Ready to start your <br />
              <span className="text-primary">transformation?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Stop waiting for tomorrow. Your fitness journey begins today. Book your free trial and experience the 365Fitness difference.
            </p>
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-md font-display font-bold uppercase tracking-widest text-xl transition-all transform hover:scale-105 active:scale-95 inline-flex items-center gap-3 shadow-[0_0_30px_rgba(230,57,70,0.5)]"
            >
              Book Your Free Trial <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
