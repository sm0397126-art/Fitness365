import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Flame, Dumbbell, Activity, HeartPulse } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Programs() {
  const programs = [
    {
      id: "weight-loss",
      title: "Weight Loss",
      icon: Flame,
      target: "Beginners to Intermediate",
      duration: "12 Weeks",
      results: "Lose 10-20 lbs, improve cardiovascular health, increase energy.",
      desc: "A high-intensity program combining cardio, strength training, and nutritional guidance to maximize fat burn and preserve lean muscle.",
      benefits: ["Customized meal plans", "HIIT sessions", "Weekly weigh-ins", "24/7 support group"],
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "muscle-gain",
      title: "Muscle Gain",
      icon: Dumbbell,
      target: "Intermediate to Advanced",
      duration: "16 Weeks",
      results: "Gain 5-10 lbs of lean muscle, increase strength by 20%.",
      desc: "A hypertrophy-focused lifting program designed to stimulate muscle growth through progressive overload and targeted nutrition.",
      benefits: ["Periodized training blocks", "Macro tracking", "Form correction", "Supplement guidance"],
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "personal-training",
      title: "Personal Training",
      icon: Activity,
      target: "All Levels",
      duration: "Ongoing",
      results: "Achieve specific, personalized goals faster.",
      desc: "1-on-1 coaching tailored entirely to your body, goals, and schedule. Maximum accountability and expert guidance every step of the way.",
      benefits: ["1-on-1 attention", "Customized workouts", "Injury prevention", "Flexible scheduling"],
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "cardio-strength",
      title: "Cardio & Strength",
      icon: HeartPulse,
      target: "All Levels",
      duration: "8 Weeks",
      results: "Improve endurance, build functional strength.",
      desc: "A balanced approach to fitness, blending cardiovascular endurance with functional strength training for overall health and longevity.",
      benefits: ["Improved stamina", "Better posture", "Stress reduction", "Group class access"],
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
    }
  ];

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
            <span className="text-primary font-bold text-xs uppercase tracking-ultra mb-6 block">Our Disciplines</span>
            <h1 className="text-7xl md:text-9xl font-display font-bold text-white mb-8 uppercase leading-[0.8] tracking-tighter">
              CHOOSE YOUR <br />
              <span className="serif-italic text-primary lowercase tracking-normal">path</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light max-w-2xl">
              Discover the perfect program tailored to your goals. Precision-engineered for maximum results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-32 bg-darker border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-40">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-24 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 relative overflow-hidden aspect-[4/5] group grayscale hover:grayscale-0 transition-all duration-1000">
                  <img
                    src={program.img}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent"></div>
                  <div className="absolute top-10 left-10 text-white font-display font-bold text-6xl opacity-20 group-hover:opacity-100 transition-opacity">0{index + 1}</div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <span className="text-primary font-bold text-xs uppercase tracking-ultra mb-4 block">Program {program.id.replace('-', ' ')}</span>
                  <h2 className="text-6xl md:text-7xl font-display font-bold text-white mb-8 uppercase leading-[0.85] tracking-tighter">{program.title}</h2>
                  <p className="text-gray-400 text-xl mb-10 leading-relaxed font-light">{program.desc}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5 mb-12">
                    <div className="bg-dark p-6">
                      <p className="text-[10px] text-gray-500 uppercase tracking-ultra mb-2">Target Audience</p>
                      <p className="text-white font-bold uppercase text-sm tracking-wider">{program.target}</p>
                    </div>
                    <div className="bg-dark p-6">
                      <p className="text-[10px] text-gray-500 uppercase tracking-ultra mb-2">Duration</p>
                      <p className="text-white font-bold uppercase text-sm tracking-wider">{program.duration}</p>
                    </div>
                    <div className="bg-dark p-6 col-span-full">
                      <p className="text-[10px] text-gray-500 uppercase tracking-ultra mb-2">Expected Results</p>
                      <p className="text-primary font-bold uppercase text-sm tracking-wider">{program.results}</p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-xs font-bold text-white mb-6 uppercase tracking-ultra">Included Benefits</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {program.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-400 text-sm font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-4 bg-primary hover:bg-primary-hover text-white px-12 py-6 rounded-sm font-display font-bold uppercase tracking-ultra text-xs transition-all transform hover:translate-y-[-4px] active:translate-y-0 shadow-[0_20px_40px_rgba(230,57,70,0.2)] group"
                  >
                    Enroll Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
