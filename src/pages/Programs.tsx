import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Dumbbell, Target, Zap, Heart } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const iconMap: Record<string, any> = {
  Strength: Dumbbell,
  Cardio: Zap,
  Flexibility: Heart,
  Performance: Target
};

export default function Programs() {
  const [programs, setPrograms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'programs'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPrograms(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    }, (err) => {
      handleFirestoreError(err, OperationType.LIST, 'programs');
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="pt-24 pb-16 bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark"></div>
          <div className="absolute inset-0 grid-lines opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div className="max-w-4xl" {...fadeIn}>
            <span className="text-primary font-bold text-xs uppercase tracking-ultra mb-6 block">Our Programs</span>
            <h1 className="text-7xl md:text-9xl font-display font-bold text-white mb-8 uppercase leading-[0.8] tracking-tighter">
              ELITE <br />
              <span className="serif-italic text-primary lowercase tracking-normal">training</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light max-w-2xl">
              From high-intensity interval training to specialized strength programs, we offer a diverse range of classes designed to push your limits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-32 bg-darker border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
              <p className="text-gray-500 mt-4 uppercase tracking-ultra text-[10px] font-bold">Loading Programs...</p>
            </div>
          ) : programs.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-white/10">
              <Dumbbell className="mx-auto text-gray-700 mb-4" size={48} />
              <p className="text-gray-500 uppercase tracking-ultra text-[10px] font-bold">No programs available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {programs.map((program, index) => {
                const Icon = iconMap[program.category] || Dumbbell;
                return (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-dark p-12 md:p-16 group hover:bg-darker transition-all duration-700"
                  >
                    <div className="flex flex-col md:flex-row gap-12">
                      <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden relative">
                        <img 
                          src={program.image} 
                          alt={program.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-6 left-6 bg-primary text-white p-4">
                          <Icon size={24} />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <span className="text-primary font-bold text-[10px] uppercase tracking-ultra mb-4 block">{program.category}</span>
                        <h3 className="text-4xl font-display font-bold text-white mb-6 uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">{program.title}</h3>
                        <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 tracking-widest">
                          {program.description}
                        </p>
                        <ul className="space-y-4 mb-12">
                          {program.features.map((feature: string, i: number) => (
                            <li key={i} className="flex items-center gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-ultra">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button className="flex items-center gap-3 text-white font-display font-bold uppercase tracking-ultra text-[10px] group/btn">
                          Learn More <ChevronRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-dark">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div className="max-w-3xl mx-auto" {...fadeIn}>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 uppercase tracking-tighter leading-[0.9]">
              NOT SURE WHICH <br />
              <span className="serif-italic text-primary lowercase tracking-normal">program</span> IS FOR YOU?
            </h2>
            <p className="text-gray-400 text-lg font-light mb-12 tracking-widest">
              Schedule a free consultation with one of our expert trainers to find the perfect path for your goals.
            </p>
            <button className="bg-primary text-white px-12 py-6 rounded-sm font-display font-bold uppercase tracking-ultra text-xs hover:translate-y-[-4px] transition-all shadow-[0_20px_40px_rgba(230,57,70,0.2)]">
              Book Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
