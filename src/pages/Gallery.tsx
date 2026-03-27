import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { ImageIcon } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const categories = ['all', 'facility', 'equipment', 'classes', 'transformations'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'gallery'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setImages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    }, (err) => {
      handleFirestoreError(err, OperationType.LIST, 'gallery');
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

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
            <span className="text-primary font-bold text-xs uppercase tracking-ultra mb-6 block">Our Space</span>
            <h1 className="text-7xl md:text-9xl font-display font-bold text-white mb-8 uppercase leading-[0.8] tracking-tighter">
              VISUAL <br />
              <span className="serif-italic text-primary lowercase tracking-normal">experience</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light max-w-2xl">
              Take a virtual tour of our world-class facilities, state-of-the-art equipment, and the vibrant community that makes 365Fitness unique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-32 bg-darker border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-ultra transition-all border ${
                  activeCategory === cat 
                    ? 'bg-primary border-primary text-white' 
                    : 'bg-transparent border-white/10 text-gray-500 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
              <p className="text-gray-500 mt-4 uppercase tracking-ultra text-[10px] font-bold">Loading Gallery...</p>
            </div>
          ) : images.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-white/10">
              <ImageIcon className="mx-auto text-gray-700 mb-4" size={48} />
              <p className="text-gray-500 uppercase tracking-ultra text-[10px] font-bold">No images found in the gallery.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="relative aspect-square group overflow-hidden bg-dark"
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                      <span className="text-primary font-bold text-[10px] uppercase tracking-ultra mb-2">{image.category}</span>
                      <p className="text-white text-sm font-light tracking-widest uppercase">{image.alt}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
