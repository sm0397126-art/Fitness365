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
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div className="max-w-3xl mx-auto text-center" {...fadeIn}>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase">
              Our <span className="text-primary">Programs</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover the perfect program tailored to your goals. Whether you want to lose weight, build muscle, or improve your overall health, we have a plan for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 bg-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden aspect-[4/3] group">
                  <img
                    src={program.img}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 bg-primary text-white p-3 rounded-xl shadow-lg">
                    <program.icon size={32} />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-4xl font-display font-bold text-white mb-4 uppercase">{program.title}</h2>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">{program.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-dark-card p-4 rounded-lg border border-white/5">
                      <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Target</p>
                      <p className="text-white font-medium">{program.target}</p>
                    </div>
                    <div className="bg-dark-card p-4 rounded-lg border border-white/5">
                      <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Duration</p>
                      <p className="text-white font-medium">{program.duration}</p>
                    </div>
                    <div className="bg-dark-card p-4 rounded-lg border border-white/5 col-span-2">
                      <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Expected Results</p>
                      <p className="text-primary font-medium">{program.results}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-display font-bold text-white mb-4 uppercase">What's Included</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {program.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-md font-display font-bold uppercase tracking-wider text-lg transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(230,57,70,0.3)]"
                  >
                    Start This Program <ArrowRight size={20} />
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
