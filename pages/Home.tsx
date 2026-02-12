
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Star, ArrowRight, Mic, ShieldCheck, Zap, Heart, Sparkles } from 'lucide-react';
import { TESTIMONIALS, MEETING_608_THEME, MEETING_608_WORD } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#004165]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#004165] to-[#004165]/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1920&h=1080" 
            alt="Professional Public Speaking" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Millennium Toastmasters Club <span className="text-[#F2DF74]">— Abu Dhabi</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-light mb-4 italic">
              "Where Leaders Are Made"
            </p>
            <p className="text-lg text-white/80 mb-10 max-w-2xl">
              Unlock your potential in public speaking, communication, and leadership. Join our vibrant community in the heart of Abu Dhabi and start your journey to confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-[#772432] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#8e2b3c] transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                Attend as Guest <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/agenda" 
                className="bg-white text-[#004165] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center shadow-xl"
              >
                View Agenda
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#004165] mb-8">Empowering You To Speak, Lead, and Succeed</h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  Toastmasters International is a worldwide nonprofit educational organization that empowers individuals to become more effective communicators and leaders.
                </p>
                <p>
                  At Millennium Toastmasters Club, we offer a safe, encouraging environment to practice public speaking. Whether you're a professional looking to nail your next presentation or a student seeking confidence, we are here for you.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#004165]/10 p-3 rounded-lg text-[#004165]">
                    <Mic className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#004165]">Public Speaking</h4>
                    <p className="text-sm">Overcome anxiety and find your unique voice.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#772432]/10 p-3 rounded-lg text-[#772432]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#772432]">Leadership</h4>
                    <p className="text-sm">Take on club roles and lead project teams.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#006094]/10 p-3 rounded-lg text-[#006094]">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#006094]">Confidence</h4>
                    <p className="text-sm">Grow through regular peer feedback and mentorship.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#F2DF74]/20 p-3 rounded-lg text-amber-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-800">Community</h4>
                    <p className="text-sm">Network with diverse professionals in Abu Dhabi.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800&h=800" 
                  alt="Toastmasters Meeting Atmosphere" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#772432] text-white p-8 rounded-2xl shadow-xl max-w-xs -rotate-3 border-4 border-white">
                <p className="text-xl font-bold mb-2 italic">Meeting Frequency</p>
                <p className="text-sm opacity-90">Every alternate Thursday from 7:45 PM to 10:00 PM. Twice every month!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Meeting Highlight - LIVE DATA FROM 608th Meeting */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#004165] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="p-12 md:w-2/3 text-white relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Heart className="w-48 h-48 text-[#772432]" />
              </div>
              <span className="inline-block bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 relative z-10">SESSION CONFIRMED #608</span>
              <h3 className="text-4xl font-bold mb-2 relative z-10">{MEETING_608_THEME}</h3>
              <p className="text-white/60 mb-8 flex items-center gap-2 relative z-10">
                <Calendar className="w-5 h-5" /> Thursday, 12 February 2026 • 7:45 PM
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 relative z-10">
                <div>
                  <h5 className="text-[#F2DF74] font-bold uppercase text-xs tracking-widest mb-2 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Word of the Day
                  </h5>
                  <p className="text-2xl font-bold font-['Playfair_Display']">{MEETING_608_WORD.word}</p>
                  <p className="text-xs text-white/50 italic mt-1">"{MEETING_608_WORD.meaning}"</p>
                </div>
                <div>
                  <h5 className="text-[#F2DF74] font-bold uppercase text-xs tracking-widest mb-2">Location</h5>
                  <p className="text-xl font-semibold">Trust Asian Center</p>
                  <p className="text-xs text-white/50 mt-1">Khalifa Street, Abu Dhabi</p>
                </div>
              </div>
              
              <Link to="/agenda" className="inline-flex items-center gap-2 text-[#F2DF74] font-bold hover:underline relative z-10">
                Full Agenda & Speech Titles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="md:w-1/3 bg-[#772432] p-12 flex flex-col justify-center items-center text-center">
              <Heart className="w-16 h-16 text-white/30 mb-4 animate-pulse" />
              <h4 className="text-2xl font-bold text-white mb-2">Valentine's Special</h4>
              <p className="text-white/80 mb-6 text-sm">Join us for a heartwarming evening exploring "A Love Story" through the art of communication and storytelling.</p>
              <Link 
                to="/contact" 
                className="w-full py-4 bg-white text-[#772432] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Register as Guest
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Summary */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#004165] mb-4">Member Success Stories</h2>
            <p className="text-gray-600">Hear from our members who have transformed their lives through Toastmasters.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white border border-gray-100 p-8 rounded-3xl shadow-lg relative group hover:-translate-y-2 transition-transform">
                <div className="flex items-center gap-4 mb-6">
                  <div className="portrait-backdrop w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#004165]">{testimonial.name}</h4>
                    <p className="text-[10px] text-[#772432] font-bold uppercase tracking-wider">{testimonial.roleInClub}</p>
                  </div>
                </div>
                <div className="relative">
                  <Star className="w-8 h-8 text-[#F2DF74]/20 absolute -top-4 -left-4" />
                  <p className="text-gray-600 italic text-sm leading-relaxed">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/testimonials" className="text-[#004165] font-bold hover:underline flex items-center justify-center gap-2">
              Read More Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
