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
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div className="max-w-3xl mx-auto text-center" {...fadeIn}>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase">
              Membership <span className="text-primary">Plans</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Simple, transparent pricing. Choose the plan that fits your goals and budget. No hidden fees, ever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative bg-dark-card rounded-2xl border ${plan.popular ? 'border-primary shadow-[0_0_30px_rgba(230,57,70,0.2)]' : 'border-white/10'} p-8 flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white font-bold uppercase tracking-wider text-sm py-1 px-4 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-display font-bold text-white uppercase mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6 h-12">{plan.desc}</p>
                  <div className="flex items-end justify-center gap-1 mb-2">
                    <span className="text-5xl font-display font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-lg mb-1">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <p className="text-primary font-medium text-sm uppercase tracking-wider">{plan.savings}</p>
                  )}
                  {plan.total && (
                    <p className="text-gray-500 text-xs mt-1">{plan.total}</p>
                  )}
                </div>

                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        {feature.included ? (
                          <CheckCircle2 size={20} className="text-primary shrink-0" />
                        ) : (
                          <XCircle size={20} className="text-gray-600 shrink-0" />
                        )}
                        <span className={feature.included ? "text-gray-300" : "text-gray-600 line-through"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`w-full text-center py-4 rounded-md font-display font-bold uppercase tracking-wider text-lg transition-all transform hover:scale-105 active:scale-95 ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary-hover text-white shadow-[0_0_20px_rgba(230,57,70,0.4)]'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Choose Plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Offer Banner */}
      <section className="py-16 bg-primary relative overflow-hidden mt-16">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 uppercase">
            Limited Time Offer
          </h2>
          <p className="text-white/90 text-xl font-medium mb-8">
            Sign up for the Yearly plan today and get your first month absolutely FREE!
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-md font-display font-bold uppercase tracking-wider text-lg transition-all transform hover:scale-105 active:scale-95 inline-block shadow-xl"
          >
            Claim 1 Month Free
          </Link>
        </div>
      </section>
    </div>
  );
}
