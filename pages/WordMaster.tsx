
import React, { useState, useEffect } from 'react';
import { Search, RotateCcw, Volume2, Bookmark, Sparkles, BookOpen } from 'lucide-react';
import { getAIWordOfTheDay } from '../services/geminiService';
import { WordOfTheDay } from '../types';

const WordMaster: React.FC = () => {
  const [wordData, setWordData] = useState<WordOfTheDay | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const generateNewWord = async () => {
    setLoading(true);
    const data = await getAIWordOfTheDay();
    setWordData(data);
    setLoading(false);
  };

  useEffect(() => {
    generateNewWord();
  }, []);

  const pastWords = [
    { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing.' },
    { word: 'Pragmatic', meaning: 'Dealing with things sensibly and realistically.' },
    { word: 'Meliorism', meaning: 'The belief that the world can be made better by human effort.' },
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#772432]/10 text-[#772432] px-4 py-2 rounded-full font-bold text-sm mb-4">
            <Sparkles className="w-4 h-4" /> AI POWERED CORNER
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#004165] mb-4">Word Master Corner</h1>
          <p className="text-gray-600">Level up your vocabulary for the next meeting.</p>
        </div>

        {/* Current Word Card */}
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 mb-12 transform transition-all">
          <div className="bg-[#004165] p-8 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[#F2DF74]" />
              <h2 className="text-xl font-bold uppercase tracking-widest">Word of the Day</h2>
            </div>
            <button 
              onClick={generateNewWord} 
              disabled={loading}
              className="flex items-center gap-2 bg-[#772432] hover:bg-[#8e2b3c] disabled:opacity-50 px-4 py-2 rounded-xl transition-all font-bold text-sm"
            >
              <RotateCcw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Generate Another
            </button>
          </div>
          
          <div className="p-10">
            {loading ? (
              <div className="py-12 flex flex-col items-center justify-center space-y-4">
                <div className="w-12 h-12 border-4 border-[#004165]/20 border-t-[#004165] rounded-full animate-spin"></div>
                <p className="text-[#004165] font-medium animate-pulse">Our AI Grammarian is thinking...</p>
              </div>
            ) : wordData && (
              <div className="animate-in slide-in-from-bottom-4 duration-500">
                <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
                  <h3 className="text-6xl font-bold text-[#004165] font-['Playfair_Display'] capitalize">{wordData.word}</h3>
                  <span className="text-xl text-[#772432] font-semibold italic mb-2">({wordData.type})</span>
                  <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 text-[#004165] mb-1">
                    <Volume2 className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Definition</h4>
                    <p className="text-2xl text-gray-700 leading-relaxed font-light">{wordData.meaning}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Usage Examples</h4>
                    <ul className="space-y-4">
                      {wordData.examples.map((ex, i) => (
                        <li key={i} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border-l-4 border-[#F2DF74]">
                          <span className="text-amber-500 font-bold">{i+1}.</span>
                          <p className="text-gray-600 italic">"{ex}"</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Archive Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#004165] mb-6 flex items-center gap-2">
              <Bookmark className="w-5 h-5" /> Past Highlights
            </h3>
            <div className="space-y-4">
              {pastWords.map((item) => (
                <div key={item.word} className="p-4 border border-gray-50 rounded-2xl hover:bg-gray-50 transition-colors">
                  <h4 className="font-bold text-[#772432]">{item.word}</h4>
                  <p className="text-sm text-gray-500 line-clamp-1">{item.meaning}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[#004165] p-8 rounded-3xl shadow-xl text-white">
            <h3 className="text-xl font-bold mb-4">Word Master Challenge</h3>
            <p className="text-white/70 text-sm mb-8">
              Can you use the Word of the Day during our next meeting? Doing so earns you a special shoutout from our Grammarian!
            </p>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search archive..." 
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F2DF74]"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordMaster;
