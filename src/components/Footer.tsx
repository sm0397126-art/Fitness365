import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-darker pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-primary text-white p-2 rounded-sm transform group-hover:rotate-12 transition-transform duration-500">
                <Dumbbell size={20} />
              </div>
              <span className="text-xl font-display font-bold tracking-ultra text-white uppercase">
                365<span className="text-primary">FITNESS</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs">
              Transform your body and mind. We provide the best equipment, certified trainers, and a motivating community to help you reach your goals 365 days a year.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/fitness365siv?igsh=MXJrajZrOWQ4dXkyMg==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:translate-y-[-4px]">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:translate-y-[-4px]">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:translate-y-[-4px]">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:translate-y-[-4px]">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold text-white mb-10 uppercase tracking-ultra">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-500 text-xs uppercase tracking-widest hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-500 text-xs uppercase tracking-widest hover:text-primary transition-colors">Our Programs</Link></li>
              <li><Link to="/pricing" className="text-gray-500 text-xs uppercase tracking-widest hover:text-primary transition-colors">Membership Plans</Link></li>
              <li><Link to="/gallery" className="text-gray-500 text-xs uppercase tracking-widest hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-500 text-xs uppercase tracking-widest hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-[10px] font-bold text-white mb-10 uppercase tracking-ultra">Programs</h4>
            <ul className="space-y-4">
              <li><Link to="/programs" className="text-gray-500 text-xs uppercase tracking-widest hover:text-primary transition-colors">Weight Loss</Link></li>
              <li><Link to="/programs" className="text-gray-500 text-xs uppercase tracking-widest hover:text-primary transition-colors">Muscle Gain</Link></li>
              <li><Link to="/programs" className="text-gray-500 text-xs uppercase tracking-widest hover:text-primary transition-colors">Personal Training</Link></li>
              <li><Link to="/programs" className="text-gray-500 text-xs uppercase tracking-widest hover:text-primary transition-colors">Cardio & Strength</Link></li>
              <li><Link to="/programs" className="text-gray-500 text-xs uppercase tracking-widest hover:text-primary transition-colors">Yoga & Flexibility</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold text-white mb-10 uppercase tracking-ultra">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0 mt-1" size={16} />
                <span className="text-gray-500 text-xs uppercase tracking-widest leading-relaxed">sibsagar west, jomunaroad ,785640,Assam.</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary shrink-0" size={16} />
                <span className="text-gray-500 text-xs uppercase tracking-widest">+91 9181407647</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary shrink-0" size={16} />
                <span className="text-gray-500 text-xs uppercase tracking-widest">join@365fitness.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-600 text-[10px] uppercase tracking-ultra">
            &copy; {new Date().getFullYear()} 365Fitness. All rights reserved.
          </p>
          <div className="flex gap-12 text-[10px] uppercase tracking-ultra text-gray-600">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
