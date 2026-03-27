import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const images = [
    { id: 1, category: 'facility', src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop', alt: 'Gym Interior' },
    { id: 2, category: 'equipment', src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop', alt: 'Weights' },
    { id: 3, category: 'classes', src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop', alt: 'Personal Training' },
    { id: 4, category: 'transformations', src: 'https://images.unsplash.com/photo-1609899517235-c32e1f446182?q=80&w=1974&auto=format&fit=crop', alt: 'Transformation 1' },
    { id: 5, category: 'facility', src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop', alt: 'Cardio Area' },
    { id: 6, category: 'classes', src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop', alt: 'Group Class' },
    { id: 7, category: 'equipment', src: 'https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=2070&auto=format&fit=crop', alt: 'Machines' },
    { id: 8, category: 'transformations', src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop', alt: 'Transformation 2' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <div className="pt-24 pb-16 bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div className="max-w-3xl mx-auto text-center" {...fadeIn}>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Take a look inside 365Fitness. Explore our state-of-the-art facilities, premium equipment, and the incredible transformations of our members.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8 bg-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'facility', 'equipment', 'classes', 'transformations'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-display uppercase tracking-wider text-sm transition-all ${
                  filter === cat
                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(230,57,70,0.4)]'
                    : 'bg-dark-card text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
