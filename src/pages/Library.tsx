import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Search, Book, Bookmark, FileText, Database, ArrowRight } from 'lucide-react';

export function Library() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full">
      {/* Search Header */}
      <div className="bg-surface py-20 px-6 relative border-b border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <Book size={48} className="text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-primary">The Grand Archive</h1>
          <p className="text-lg md:text-xl font-medium text-primary/80 mb-12">Search through over 15,000 physical volumes and 50,000 digitized manuscripts.</p>
          
          <div className="relative max-w-2xl mx-auto shadow-2xl rounded-full border border-primary/20">
            <input 
              type="text" 
              placeholder="Search by title, author..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-8 py-5 pr-20 rounded-full bg-bg-base border-none text-lg text-primary focus:outline-none focus:ring-4 focus:ring-primary/30 font-medium placeholder:text-primary/50"
            />
            <button className="absolute right-2 top-2 bottom-2 aspect-square bg-primary text-inverted rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
              <Search size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Sidebar Collections */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="font-display font-bold text-xl text-primary mb-4">Collections</h3>
              <ul className="space-y-3">
                {['Tafsir & Quranic Sciences', 'Hadith & Commentaries', 'Islamic Jurisprudence (Fiqh)', 'Theology (Aqidah)', 'History & Biographies', 'Arabic Grammar & Rhetoric'].map((cat, i) => (
                  <li key={i}>
                    <button className="text-left w-full px-4 py-2 rounded-lg hover:bg-bg-base text-primary/80 hover:text-primary font-bold text-sm transition-colors flex justify-between items-center group border border-transparent hover:border-primary/10">
                      {cat}
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card className="!p-6 bg-bg-base border border-primary/10 text-primary">
               <Database size={24} className="text-primary mb-4" />
               <h4 className="font-display font-bold mb-2">Digital Access</h4>
               <p className="text-primary/70 text-sm mb-4 leading-relaxed">Students have full access to our digitized rare manuscript portal.</p>
               <Button variant="primary" className="w-full !text-xs !py-2">Login to Portal</Button>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-16">
            
            {/* Featured Section */}
            <section>
              <h2 className="text-3xl font-display font-bold text-primary mb-8">Featured Additions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map(val => (
                  <Card key={val} className="flex gap-6 !p-6 hover:-translate-y-1 transition-transform group cursor-pointer border border-primary/10 bg-surface">
                    <div className="w-24 h-32 bg-bg-base rounded-lg shrink-0 relative overflow-hidden shadow-inner border border-primary/10">
                      <div className="absolute left-2 top-0 bottom-0 w-px bg-surface/5"></div>
                      <div className="absolute right-2 top-0 bottom-0 w-px bg-black/40"></div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                         <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded border border-primary/20">New Edition</span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-primary mb-1 group-hover:text-primary transition-colors">Al-Minhaj bi Sharh Sahih Muslim</h3>
                      <p className="text-sm font-bold text-primary/80 mb-2">Imam An-Nawawi</p>
                      <p className="text-xs text-primary/60 font-medium">Vol 1-18. Damascus Print, 2023.</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Reading Rooms */}
            <section>
               <h2 className="text-3xl font-display font-bold text-primary mb-8">Facilities & Reading Rooms</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[
                   { name: 'Quiet Study Hall', desc: 'Strict silence enforced. Perfect for deep memorization and research.', icon: <Bookmark size={24} /> },
                   { name: 'Discussion Pods', desc: 'Group rooms for debating and revising lessons (Muzakarah).', icon: <FileText size={24} /> },
                   { name: 'The Manuscript Room', desc: 'Climate-controlled environment for viewing historical texts.', icon: <Book size={24} /> }
                 ].map((facility, i) => (
                   <Card key={i} className="!p-8 text-center flex flex-col items-center group bg-surface border border-primary/10">
                     <div className="w-16 h-16 rounded-full bg-bg-base flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-inverted transition-colors border border-primary/20">
                       {facility.icon}
                     </div>
                     <h3 className="font-display font-bold text-primary mb-3">{facility.name}</h3>
                     <p className="text-sm text-primary/80 font-medium leading-relaxed">{facility.desc}</p>
                   </Card>
                 ))}
               </div>
            </section>
            
            {/* Library Timings */}
            <Card className="!p-0 overflow-hidden bg-surface text-primary border border-primary/20">
              <div className="flex flex-col md:flex-row">
                <div className="p-10 flex-1">
                  <h3 className="text-3xl font-display font-bold mb-6 text-primary">Library Timings</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-primary/10 pb-4">
                      <span className="font-medium text-primary/80">Monday - Thursday</span>
                      <span className="font-bold">08:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-primary/10 pb-4">
                      <span className="font-medium text-primary/80">Friday</span>
                      <span className="font-bold text-right">08:00 AM - 12:00 PM<br/><span className="text-sm font-normal text-primary/60">Closed for Jumu'ah</span><br/>02:30 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-primary">Weekends</span>
                      <span className="font-bold text-primary">09:00 AM - 05:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="relative md:w-1/3 min-h-[200px]">
                  <img src="https://picsum.photos/seed/librarydesk/400/600" className="absolute inset-0 w-full h-full object-cover" alt="Library Desk" />
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
