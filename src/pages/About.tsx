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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop"
            alt="Gym interior"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div className="max-w-3xl mx-auto text-center" {...fadeIn}>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase">
              Our <span className="text-primary">Story</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Founded in 2018, 365Fitness was built on a simple premise: fitness should be accessible, effective, and empowering. We're not just a gym; we're a community dedicated to helping you become the best version of yourself, every single day of the year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-display font-bold text-white mb-6 uppercase">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                To provide an unparalleled fitness experience that inspires and empowers individuals to achieve their health and wellness goals. We believe that a strong body builds a strong mind, and our mission is to facilitate that transformation for everyone who walks through our doors.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Target, text: "Goal-oriented programming" },
                  { icon: Heart, text: "Inclusive and supportive community" },
                  { icon: Shield, text: "Safe, clean, and premium environment" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <div className="bg-primary/20 p-2 rounded-full text-primary">
                      <item.icon size={20} />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-[500px]"
            >
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                alt="Gym community"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
              Meet Our <span className="text-primary">Experts</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Our certified trainers bring years of experience, passion, and proven methodologies to help you crush your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Marcus Johnson", role: "Head Coach", certs: "NASM-CPT, Precision Nutrition L1", img: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=2070&auto=format&fit=crop" },
              { name: "Elena Rodriguez", role: "Strength Specialist", certs: "CSCS, USAW L1", img: "https://images.unsplash.com/photo-1609899517235-c32e1f446182?q=80&w=1974&auto=format&fit=crop" },
              { name: "James Wilson", role: "HIIT & Cardio Expert", certs: "ACE-CPT, CrossFit L2", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" }
            ].map((trainer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-dark-card rounded-2xl overflow-hidden border border-white/5 group"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-2xl font-display font-bold text-white uppercase mb-1">{trainer.name}</h3>
                    <p className="text-primary font-medium uppercase tracking-wider text-sm mb-3">{trainer.role}</p>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Award size={16} className="text-primary" />
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
