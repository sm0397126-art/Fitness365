import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Pricing() {
  const plans = [
    {
      name: "Monthly",
      price: "$49",
      period: "/month",
      desc: "Perfect for short-term goals and flexibility.",
      features: [
        { name: "24/7 Gym Access", included: true },
        { name: "All Group Classes", included: true },
        { name: "Locker Room Access", included: true },
        { name: "Free Wi-Fi", included: true },
        { name: "1 Personal Training Session", included: false },
        { name: "Nutrition Plan", included: false },
        { name: "Guest Passes", included: false }
      ],
      popular: false,
      savings: null
    },
    {
      name: "Yearly",
      price: "$39",
      period: "/month",
      desc: "Our best value plan for committed individuals.",
      features: [
        { name: "24/7 Gym Access", included: true },
        { name: "All Group Classes", included: true },
        { name: "Locker Room Access", included: true },
        { name: "Free Wi-Fi", included: true },
        { name: "1 Personal Training Session/mo", included: true },
        { name: "Nutrition Plan", included: true },
        { name: "2 Guest Passes/mo", included: true }
      ],
      popular: true,
      savings: "Save $120 annually",
      total: "Billed $468 annually"
    },
    {
      name: "Quarterly",
      price: "$45",
      period: "/month",
      desc: "A great balance of commitment and value.",
      features: [
        { name: "24/7 Gym Access", included: true },
        { name: "All Group Classes", included: true },
        { name: "Locker Room Access", included: true },
        { name: "Free Wi-Fi", included: true },
        { name: "1 Personal Training Session", included: true },
        { name: "Nutrition Plan", included: false },
        { name: "1 Guest Pass/mo", included: true }
      ],
      popular: false,
      savings: "Save $12 quarterly",
      total: "Billed $135 quarterly"
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
            <span className="text-primary font-bold text-xs uppercase tracking-ultra mb-6 block">Membership Plans</span>
            <h1 className="text-7xl md:text-9xl font-display font-bold text-white mb-8 uppercase leading-[0.8] tracking-tighter">
              INVEST IN <br />
              <span className="serif-italic text-primary lowercase tracking-normal">yourself</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light max-w-2xl">
              Simple, transparent pricing. No hidden fees, ever. Choose the plan that fits your lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-32 bg-darker border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 max-w-7xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative bg-dark p-12 flex flex-col group hover:bg-dark-card transition-colors ${plan.popular ? 'z-10' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                )}
                
                <div className="mb-12">
                  <span className="text-primary font-bold text-[10px] uppercase tracking-ultra mb-4 block">
                    {plan.popular ? 'Recommended' : 'Standard'}
                  </span>
                  <h3 className="text-4xl font-display font-bold text-white uppercase mb-4 tracking-tighter">{plan.name}</h3>
                  <p className="text-gray-500 text-sm font-light mb-8 h-12 leading-relaxed">{plan.desc}</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-6xl font-display font-bold text-white tracking-tighter">{plan.price}</span>
                    <span className="text-gray-500 text-xs uppercase tracking-widest">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <p className="text-primary font-bold text-[10px] uppercase tracking-ultra">{plan.savings}</p>
                  )}
                </div>

                <div className="flex-grow">
                  <h4 className="text-[10px] font-bold text-white mb-6 uppercase tracking-ultra">Plan Features</h4>
                  <ul className="space-y-4 mb-12">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        {feature.included ? (
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                        )}
                        <span className={`text-xs uppercase tracking-widest ${feature.included ? "text-gray-300" : "text-gray-600 line-through"}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`w-full text-center py-6 rounded-sm font-display font-bold uppercase tracking-ultra text-[10px] transition-all transform hover:translate-y-[-4px] active:translate-y-0 ${
                    plan.popular
                      ? 'bg-primary text-white shadow-[0_20px_40px_rgba(230,57,70,0.2)]'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  Join Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Offer Banner */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <span className="text-white/80 font-bold text-xs uppercase tracking-ultra mb-8 block">Exclusive Opportunity</span>
          <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 uppercase leading-[0.85] tracking-tighter">
            Limited Time <br />
            <span className="serif-italic text-darker lowercase tracking-normal">offer</span>
          </h2>
          <p className="text-white/90 text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Sign up for the Yearly plan today and get your first month absolutely <span className="font-bold underline">FREE</span>!
          </p>
          <Link
            to="/contact"
            className="bg-darker text-white hover:bg-black px-16 py-8 rounded-sm font-display font-bold uppercase tracking-ultra text-xs transition-all transform hover:scale-105 active:scale-95 inline-block shadow-2xl"
          >
            Claim 1 Month Free
          </Link>
        </div>
      </section>
    </div>
  );
}
