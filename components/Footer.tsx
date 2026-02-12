
import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook, ExternalLink } from 'lucide-react';
import { CLUB_NAME, CLUB_LOCATION, MEETING_TIME, CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS, TMI_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#004165] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 font-['Playfair_Display']">About {CLUB_NAME}</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              We provide a supportive and positive learning experience in which members are empowered to develop communication and leadership skills, resulting in greater self-confidence and personal growth.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 font-['Playfair_Display']">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href={TMI_LINKS.howItWorks} target="_blank" rel="noopener noreferrer" className="hover:text-[#F2DF74] transition-colors flex items-center gap-2 group">
                  How it works <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href={TMI_LINKS.pathways} target="_blank" rel="noopener noreferrer" className="hover:text-[#F2DF74] transition-colors flex items-center gap-2 group">
                  Membership pathways <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href={TMI_LINKS.resources} target="_blank" rel="noopener noreferrer" className="hover:text-[#F2DF74] transition-colors flex items-center gap-2 group">
                  Resources <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href={TMI_LINKS.faq} target="_blank" rel="noopener noreferrer" className="hover:text-[#F2DF74] transition-colors flex items-center gap-2 group">
                  FAQ <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 font-['Playfair_Display']">Visit Us</h3>
            <div className="flex items-start space-x-3 text-sm opacity-80">
              <MapPin className="w-5 h-5 text-[#F2DF74] shrink-0" />
              <span>{CLUB_LOCATION}</span>
            </div>
            <div className="flex items-start space-x-3 text-sm opacity-80">
              <Phone className="w-5 h-5 text-[#F2DF74] shrink-0" />
              <span>{CONTACT_PHONE}</span>
            </div>
            <div className="flex items-start space-x-3 text-sm opacity-80">
              <Mail className="w-5 h-5 text-[#F2DF74] shrink-0" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#F2DF74] transition-colors">{CONTACT_EMAIL}</a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 font-['Playfair_Display']">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="bg-[#772432] p-2 rounded-full hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="bg-[#772432] p-2 rounded-full hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="bg-[#772432] p-2 rounded-full hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs opacity-60 mt-4 italic">
              Meets: {MEETING_TIME}
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-xs opacity-60">
          <p>© {new Date().getFullYear()} {CLUB_NAME}. Not affiliated with Toastmasters International HQ but follows its guidelines.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
