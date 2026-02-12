
import React, { useState } from 'react';
import { Download, Printer, Share2, Clock, User, MessageCircle, Info, Heart, Sparkles, Check } from 'lucide-react';
import { MOCK_AGENDA, CLUB_NAME, MEETING_608_THEME, MEETING_608_WORD } from '../constants';

const Agenda: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const isAgendaEmpty = MOCK_AGENDA.length === 0;

  const archiveItems = [
    { name: 'Meeting Agenda_ 31 Jan 2026', details: 'Meeting #607 - Club Contests' },
    { name: 'Meeting Agenda_ 22 Jan 2026', details: 'Meeting #606 - Contest Special' },
    { name: 'Meeting Agenda_ 08 Jan 2026', details: 'Meeting #600 - Milestone Meeting' }
  ];

  const handleShare = async () => {
    const shareData = {
      title: `${CLUB_NAME} - Meeting #608`,
      text: `Join us for our ${MEETING_608_THEME} session! Word of the day: ${MEETING_608_WORD.word}.`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share cancelled or failed');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Heart className="w-32 h-32 text-[#772432]" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#772432] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Upcoming Session</span>
              <h1 className="text-3xl font-bold text-[#004165]">{CLUB_NAME}</h1>
            </div>
            <p className="text-gray-500 font-medium">Meeting #608 • Thursday, 12 Feb 2026 • 7:45 PM</p>
            <div className="flex items-center gap-2 text-[#772432] font-bold mt-2">
              <Heart className="w-4 h-4 fill-current" />
              <span>Theme: {MEETING_608_THEME}</span>
            </div>
          </div>
          <div className="flex gap-3 relative z-10">
            {!isAgendaEmpty && (
              <>
                <button 
                  onClick={handleShare}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all shadow-md ${
                    copied ? 'bg-emerald-500 text-white' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                  {copied ? 'Link Copied!' : 'Share Session'}
                </button>
                <button className="hidden sm:flex items-center gap-2 px-6 py-3 bg-[#004165] text-white rounded-xl hover:bg-[#00314d] transition-colors font-bold shadow-md">
                  <Download className="w-5 h-5" /> Download PDF
                </button>
              </>
            )}
          </div>
        </div>

        {/* Word of the Evening Feature */}
        {!isAgendaEmpty && (
          <div className="mb-8 bg-gradient-to-r from-[#004165] to-[#006094] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Sparkles className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4 text-[#F2DF74]">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Word of the Evening</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end gap-4 mb-4">
                <h2 className="text-5xl font-bold font-['Playfair_Display']">{MEETING_608_WORD.word}</h2>
                <span className="text-lg opacity-60 italic mb-1">({MEETING_608_WORD.type})</span>
              </div>
              <p className="text-xl text-white/90 font-light mb-4 max-w-2xl">
                {MEETING_608_WORD.meaning}
              </p>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-2xl italic text-sm">
                "{MEETING_608_WORD.example}"
              </div>
            </div>
          </div>
        )}

        {/* Agenda Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 min-h-[400px]">
          <div className="bg-[#772432] px-8 py-4 text-white flex justify-between items-center">
            <span className="font-bold tracking-widest uppercase text-xs">Time Schedule</span>
            <span className="font-bold tracking-widest uppercase text-xs">Role Details</span>
          </div>
          
          {isAgendaEmpty ? (
            <div className="flex flex-col items-center justify-center p-20 text-center">
              <div className="bg-gray-100 p-6 rounded-full mb-6">
                <Info className="w-12 h-12 text-[#004165]/30" />
              </div>
              <h3 className="text-2xl font-bold text-[#004165] mb-2">Agenda Under Preparation</h3>
              <p className="text-gray-500 max-w-md">
                The Executive Committee is currently finalizing the roles and speeches for our meeting on Feb 12th. Please check back shortly.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {MOCK_AGENDA.map((item) => (
                <div key={item.id} className="p-6 md:px-8 md:py-8 flex flex-col md:flex-row items-start md:items-center hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-4 md:w-1/4 mb-4 md:mb-0">
                    <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-[#004165]/10 group-hover:text-[#004165] transition-colors">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg text-gray-800">{item.time}</span>
                  </div>
                  
                  <div className="md:w-1/2 mb-4 md:mb-0">
                    <h4 className="text-lg font-bold text-[#004165] mb-1">{item.description}</h4>
                    <p className="text-xs text-gray-400 font-medium">{CLUB_NAME} • Session 608</p>
                  </div>
                  
                  <div className="md:w-1/4 flex items-center justify-end gap-3 w-full">
                    <div className="text-right">
                      <p className="font-bold text-gray-900 line-clamp-1">{item.rolePlayer}</p>
                      <p className="text-xs text-[#772432] font-semibold uppercase tracking-tighter">Role Player</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#772432]/10 group-hover:text-[#772432] transition-colors">
                      <User className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Archive Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#004165] mb-6 flex items-center gap-2">
              <Share2 className="w-5 h-5" /> Meeting Archive
            </h3>
            <ul className="space-y-4">
              {archiveItems.map(item => (
                <li key={item.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer group border border-transparent hover:border-gray-200">
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-700 text-sm">{item.name}</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">{item.details}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-[#772432] opacity-0 group-hover:opacity-100 transition-opacity">VIEW</span>
                    <Download className="w-4 h-4 text-gray-400 group-hover:text-[#772432]" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#F2DF74]/10 p-8 rounded-3xl shadow-sm border border-[#F2DF74]/30 border-dashed">
            <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> Role Support
            </h3>
            <p className="text-amber-900/70 text-sm mb-6 leading-relaxed">
              Assigned a role for the next meeting? Check out our resources for Grammarians, Evaluators, and Toastmasters of the Day.
            </p>
            <button className="w-full py-3 bg-[#F2DF74] text-amber-900 font-bold rounded-xl hover:bg-[#ebd565] transition-colors shadow-sm">
              View Role Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
