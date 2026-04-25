import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { BookOpen, Users, Star, Building, History, Target, Search } from 'lucide-react';

const aboutTabs = [
  { id: 'history', label: 'History', icon: <History size={18} /> },
  { id: 'vision', label: 'Vision & Mission', icon: <Target size={18} /> },
  { id: 'professors', label: 'Professors', icon: <Users size={18} /> },
  { id: 'alumni', label: 'Alumni', icon: <Star size={18} /> },
];

export function About() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(aboutTabs[0].id);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (aboutTabs.some(tab => tab.id === hash)) {
      setActiveTab(hash);
    } else {
      setActiveTab(aboutTabs[0].id);
    }
  }, [location.hash]);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    navigate(`/about#${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-16 relative w-full">
      
      {/* Sidebar Navigation */}
      <div className="lg:w-72 shrink-0">
        <div className="sticky top-32">
          <div className="bg-primary text-inverted px-5 py-2 rounded-full font-bold text-sm inline-flex items-center gap-2 mb-8 shadow-lg">
            <Building size={16} /> About Us
          </div>
          <nav className="flex flex-col gap-3">
            {aboutTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`text-left text-base py-4 px-6 rounded-2xl transition-all duration-300 font-bold flex items-center gap-3 ${
                  activeTab === tab.id 
                    ? 'bg-surface text-primary border border-primary/20 shadow-[0_0_15px_rgba(220,203,164,0.1)]' 
                    : 'text-text-muted hover:bg-surface hover:text-primary border border-transparent hover:border-primary/10'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </nav>

          <Card className="mt-12 !p-6 bg-surface border border-primary/10 text-primary">
            <h4 className="font-display font-bold text-lg mb-2 text-primary">Need Assistance?</h4>
            <p className="text-sm text-primary/70 mb-4 leading-relaxed">Contact our administration office for any inquiries regarding the institute's background.</p>
            <Button variant="primary" className="w-full !text-sm">Contact Us</Button>
          </Card>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 max-w-4xl">
        
        {activeTab === 'history' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="!p-0 mb-12 min-h-[400px] relative overflow-hidden group">
               <img src="https://picsum.photos/seed/dawoodiyyahistory/1200/600" alt="History" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-bg-base/60 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-10 backdrop-blur-sm bg-surface/40 w-full">
                 <h2 className="text-4xl font-display font-bold text-primary mb-2">Our Blessed History</h2>
                 <p className="text-primary font-bold">A centenarian legacy of faith and scholarship.</p>
               </div>
            </Card>
            
            <p className="text-text-muted font-medium text-xl leading-relaxed mb-12">
              Established with a profound commitment to the preservation and dissemination of sacred knowledge, our institution has stood as a beacon of light for decades. We are rooted in the classical tradition, yet fully aware of the contemporary needs of the Ummah.
            </p>

            <div className="space-y-8">
              {[
                { year: '1980', title: 'Foundation of the Main Sanctum', desc: 'The first cornerstone was laid by esteemed scholars and luminaries of the era. The initial cohort consisted of just 15 dedicated students seeking sacred knowledge.' },
                { year: '1995', title: 'Curriculum Formalization', desc: 'A rigorous syllabus integrating traditional Dars-e-Nizami with modern pedagogical frameworks was officially adopted, setting a new standard for Islamic institutes.' },
                { year: '2005', title: 'Inauguration of the Great Library', desc: 'The expansive library storing thousands of historical volumes and rare manuscripts was opened to the public and researchers worldwide.' },
                { year: '2020', title: 'Digital Transformation & Global Reach', desc: 'Launching online programs and virtual classrooms, allowing students from across the globe to benefit from our esteemed faculty.' }
              ].map((milestone, idx) => (
                <div key={idx} className="flex gap-6 items-start relative group">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full clay-card flex items-center justify-center font-display font-bold text-primary z-10 shrink-0">
                      {milestone.year}
                    </div>
                    {idx !== 3 && <div className="w-1 flex-grow bg-primary/20 absolute top-16 bottom-[-32px] left-8 ml-[-2px]"></div>}
                  </div>
                  <div className="pt-3 pb-8">
                    <h3 className="text-2xl font-display font-bold text-text-main mb-3">{milestone.title}</h3>
                    <p className="text-text-muted font-medium leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="mt-12 bg-gradient-to-r from-primary/20 to-transparent border-l-4 border-primary !shadow-none !rounded-l-none">
              <p className="italic text-text-main font-medium text-lg">
                "We do not merely teach books; we strive to forge characters imbued with the prophetic light, capable of navigating the darkest of times." 
                <br/><span className="text-sm text-text-muted font-bold mt-2 block">— Founding Shaykh</span>
              </p>
            </Card>
          </div>
        )}

        {activeTab === 'vision' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 clay-card bg-primary text-primary flex items-center justify-center rounded-xl"><Target size={24} /></div>
              <h1 className="text-5xl font-display text-text-main font-bold">Vision & Mission</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="!p-10 relative overflow-hidden h-full">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>
                <h3 className="text-3xl font-display text-primary font-bold mb-6 relative z-10 flex items-center gap-3">
                  <Star size={24} className="text-primary"/> The Vision
                </h3>
                <p className="text-text-muted font-medium text-lg leading-relaxed relative z-10">
                  To be a global pillar of Islamic scholarship, radiating divine guidance and nurturing minds that bridge eternal truth with contemporary challenges. We envision a society transformed by individuals who act as living embodiments of prophetic virtues.
                </p>
              </Card>

              <Card className="!p-8 md:!p-10 relative overflow-hidden h-full group">
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-bg-base/50 blur-3xl rounded-full group-hover:bg-bg-base/80 transition-colors"></div>
                <h3 className="text-2xl md:text-3xl font-display text-primary font-bold mb-6 relative z-10 flex items-center gap-3">
                  <Target size={24} className="text-primary"/> The Mission
                </h3>
                <p className="text-text-muted font-medium text-lg leading-relaxed relative z-10">
                  To cultivate a profound understanding of Deen through rigorous academic discipline, spiritual tarbiyah, and the preservation of sacred texts. We commit to providing an environment where faith and reason harmonize perfectly.
                </p>
              </Card>
            </div>

            <h3 className="text-3xl font-display text-text-main font-bold mb-8">Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Ikhlas (Sincerity)', desc: 'Doing all actions purely for the sake of the Divine.' },
                { title: 'Adab (Refinement)', desc: 'Cultivating impeccable manners in all interactions.' },
                { title: 'Taqwa (Consciousness)', desc: 'Maintaining an ever-present awareness of the Creator.' },
                { title: 'Khidmah (Service)', desc: 'Serving humanity with humility and profound empathy.' },
                { title: 'Ihsan (Excellence)', desc: 'Striving for perfection in both worship and worldly duties.' },
                { title: 'Sanad (Chain)', desc: 'Preserving the unbroken chain of transmission.' },
              ].map((val, i) => (
                <Card key={i} className="!p-6 hover:-translate-y-1 transition-transform">
                  <h4 className="font-display font-bold text-lg text-primary mb-2">{val.title}</h4>
                  <p className="text-sm text-text-muted font-medium">{val.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'professors' && (
           <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-5xl font-display text-text-main font-bold mb-4">Our Distinguished Faculty</h1>
            <p className="text-xl text-text-muted font-medium mb-10 max-w-2xl">
              Learn from inheritors of the prophetic legacy. Our scholars bring decades of traditional study combined with deep contextual awareness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: 'Shaykh Abdullah Al-Qasim', role: 'Head of Hadith Sciences', exp: '30+ Years', img: 'https://picsum.photos/seed/prof1/400/400' },
                { name: 'Mufti Zaid Ibn Tariq', role: 'Chief of Fiqh & Fatwa', exp: '25+ Years', img: 'https://picsum.photos/seed/prof2/400/400' },
                { name: 'Maulana Usama Malik', role: 'Tasawwuf & Spirituality', exp: '40+ Years', img: 'https://picsum.photos/seed/prof3/400/400' },
                { name: 'Ustadha Fatima Zahra', role: 'Arabic Rhetoric', exp: '20+ Years', img: 'https://picsum.photos/seed/prof4/400/400' },
              ].map((prof, i) => (
                <Card key={i} className="!p-0 overflow-hidden group">
                  <div className="h-64 overflow-hidden relative border-b border-primary/10">
                    <img src={prof.img} alt={prof.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-base/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-surface/60 backdrop-blur-md">
                      <h4 className="font-display text-2xl font-bold text-primary tracking-tight">{prof.name}</h4>
                      <p className="text-primary font-bold text-sm">{prof.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-bold text-text-muted bg-surface px-3 py-1 rounded-full">Experience: {prof.exp}</span>
                      <Search size={18} className="text-primary hover:text-primary cursor-pointer transition-colors" />
                    </div>
                    <p className="text-text-muted text-sm font-medium leading-relaxed">
                      A renowned expert locally and internationally, dedicated to grounding students in foundational texts with an eye toward practical application.
                    </p>
                  </div>
                </Card>
              ))}
            </div>
           </div>
        )}

        {activeTab === 'alumni' && (
           <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 clay-card bg-bg-base text-primary flex items-center justify-center rounded-xl"><Users size={24} /></div>
              <h1 className="text-4xl md:text-5xl font-display text-text-main font-bold">Global Alumni Network</h1>
            </div>
            
            <p className="text-text-muted font-medium text-lg mb-10 leading-relaxed">
              Graduates of Dawoodiya are illuminating communities across the globe. From community leaders and imams to professionals and academics, our alumni carry the torch of sacred knowledge wherever they go.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { count: '5,000+', label: 'Total Graduates' },
                { count: '45', label: 'Countries Reached' },
                { count: '120+', label: 'Published Authors' },
                { count: '300+', label: 'Active Imams' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <h3 className="text-4xl font-display font-black text-primary mb-2">{stat.count}</h3>
                  <p className="font-bold text-sm text-text-muted uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-display font-bold text-text-main mb-6">Notable Contributions</h3>
            <div className="space-y-6">
              {[1, 2, 3].map((val) => (
                <Card key={val} className="flex flex-col md:flex-row gap-6 items-center !p-6 hover:shadow-xl transition-shadow">
                  <img src={`https://picsum.photos/seed/alumni${val}/150/150`} className="w-24 h-24 rounded-full object-cover shrink-0 filter grayscale hover:grayscale-0 transition-all rounded-br-[2rem]" alt="Alumni" />
                  <div>
                    <h4 className="font-display font-bold text-xl text-text-main">Community Pioneer #{val}</h4>
                    <p className="text-primary font-bold text-sm mb-2">Class of 200{val}</p>
                    <p className="text-text-muted text-sm font-medium leading-relaxed">
                      Established a thriving inner-city youth center bridging traditional Islamic studies with robust social services, deeply impacting thousands of young lives.
                    </p>
                  </div>
                </Card>
              ))}
            </div>

           </div>
        )}

      </div>
    </div>
  );
}
