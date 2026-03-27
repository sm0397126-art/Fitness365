import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-darker pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-white p-1.5 rounded-md">
                <Dumbbell size={24} />
              </div>
              <span className="text-2xl font-display font-bold tracking-wider text-white">
                365<span className="text-primary">FITNESS</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transform your body and mind. We provide the best equipment, certified trainers, and a motivating community to help you reach your goals 365 days a year.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/fitness365siv?igsh=MXJrajZrOWQ4dXkyMg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-primary transition-colors">Our Programs</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-primary transition-colors">Membership Plans</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6 text-white">Programs</h4>
            <ul className="space-y-3">
              <li><Link to="/programs" className="text-gray-400 hover:text-primary transition-colors">Weight Loss</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-primary transition-colors">Muscle Gain</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-primary transition-colors">Personal Training</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-primary transition-colors">Cardio & Strength</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-primary transition-colors">Yoga & Flexibility</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <span className="text-gray-400">sibsagar west, jomunaroad ,785640,Assam.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <span className="text-gray-400">+91 9181407647</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <span className="text-gray-400">join@365fitness.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} 365Fitness. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
