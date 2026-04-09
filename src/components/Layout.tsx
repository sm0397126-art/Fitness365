import { Outlet } from 'react-router-dom';
import { motion, useScroll } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ExitIntentPopup from './ExitIntentPopup';

export default function Layout() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen flex flex-col bg-dark text-light font-sans selection:bg-primary selection:text-white">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ExitIntentPopup />
    </div>
  );
}
