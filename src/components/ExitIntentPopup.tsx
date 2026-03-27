import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-dark-card border border-white/10 p-8 rounded-2xl max-w-md w-full relative overflow-hidden"
          >
            {/* Decorative background */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
            
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-display font-bold text-white mb-2 uppercase tracking-wide">
                Wait! Don't Leave Yet.
              </h3>
              <p className="text-gray-300 mb-6">
                Get a <span className="text-primary font-bold">FREE 1-Day Pass</span> to experience our premium facilities and classes. No commitment required.
              </p>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsVisible(false); }}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white font-display font-bold uppercase tracking-wider py-4 rounded-lg transition-colors"
                >
                  Claim My Free Pass
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4">
                By claiming, you agree to our terms and conditions. Offer valid for new members only.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
