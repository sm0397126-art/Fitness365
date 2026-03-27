import { motion } from 'motion/react';
import { Target, Heart, Shield, Award } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="pt-24 pb-16 bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop"
            alt="Gym interior"
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark"></div>
          <div className="absolute inset-0 grid-lines opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div className="max-w-4xl" {...fadeIn}>
            <span className="text-primary font-bold text-xs uppercase tracking-ultra mb-6 block">Our Legacy</span>
            <h1 className="text-7xl md:text-9xl font-display font-bold text-white mb-8 uppercase leading-[0.8] tracking-tighter">
              OUR <br />
              <span className="serif-italic text-primary lowercase tracking-normal">story</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light max-w-2xl">
              Founded in 2018, <span className="text-white font-medium">365Fitness</span> was built on a simple premise: fitness should be accessible, effective, and empowering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - Split Layout */}
      <section className="py-32 bg-darker border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold text-xs uppercase tracking-ultra mb-4 block">The Mission</span>
              <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-10 uppercase leading-[0.85] tracking-tighter">
                Empower <br />
                <span className="serif-italic text-primary lowercase tracking-normal">every body</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light">
                To provide an unparalleled fitness experience that inspires and empowers individuals to achieve their health and wellness goals. We believe that a strong body builds a strong mind.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Target, title: "Precision", text: "Goal-oriented programming" },
                  { icon: Heart, title: "Community", text: "Inclusive and supportive" },
                  { icon: Shield, title: "Safety", text: "Premium environment" },
                  { icon: Award, title: "Results", text: "Data-driven success" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="text-primary">
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square lg:aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
            >
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                alt="Gym community"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
              <div className="absolute inset-0 border-[20px] border-darker/50 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trainers - Defined Grid */}
      <section className="py-32 bg-dark relative grid-lines">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="max-w-3xl mb-20" {...fadeIn}>
            <span className="text-primary font-bold text-xs uppercase tracking-ultra mb-4 block">The Team</span>
            <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 uppercase leading-[0.85] tracking-tighter">
              Expert <br />
              <span className="serif-italic text-primary lowercase tracking-normal">mentors</span>
            </h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              Our certified trainers bring years of experience, passion, and proven methodologies to help you crush your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { name: "Marcus Johnson", role: "Head Coach", certs: "NASM-CPT, Precision Nutrition L1", img: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=2070&auto=format&fit=crop" },
              { name: "Elena Rodriguez", role: "Strength Specialist", certs: "CSCS, USAW L1", img: "https://images.unsplash.com/photo-1609899517235-c32e1f446182?q=80&w=1974&auto=format&fit=crop" },
              { name: "James Wilson", role: "HIIT & Cardio Expert", certs: "ACE-CPT, CrossFit L2", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" }
            ].map((trainer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-dark group overflow-hidden"
              >
                <div className="aspect-[3/4] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-10 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-3xl font-display font-bold text-white uppercase mb-1 tracking-tighter">{trainer.name}</h3>
                    <p className="text-primary font-bold uppercase tracking-ultra text-[10px] mb-4">{trainer.role}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      <Award size={14} className="text-primary" />
                      <span>{trainer.certs}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
