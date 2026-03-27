import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ExitIntentPopup from './ExitIntentPopup';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-light font-sans selection:bg-primary selection:text-white">
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
