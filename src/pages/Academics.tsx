import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { BookOpen, GraduationCap, Library as LibraryIcon, ScrollText, PlayCircle } from 'lucide-react';

export function Academics() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <div className="bg-bg-base text-text-main py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-primary fill-current">
            <path d="M0,100 C30,50 70,50 100,0 L100,100 Z" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-sm tracking-widest uppercase mb-6 shadow-inner">Academic Excellence</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight text-primary">Programs & Curriculum</h1>
          <p className="text-xl md:text-2xl font-medium text-primary/70 max-w-3xl mx-auto leading-relaxed">
            Unveiling a holistic educational paradigm that bridges the deep roots of classical Dars-e-Nizami with forward-looking contemporary insights.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        
        {/* Core Methodology Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap size={40} className="text-primary" />
            <h2 className="text-4xl font-display font-bold text-primary">The Dawoodiyyah Methodology</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="!p-8 col-span-1 lg:col-span-2 group hover:shadow-2xl transition-shadow bg-gradient-to-br from-white to-surface border border-primary/10">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">Integrated Dars-e-Nizami</h3>
              <p className="text-text-muted font-medium text-lg leading-relaxed mb-6">
                Our flagship 8-year program masterfully covers foundational Arabic syntax (Nahw) and morphology (Sarf), progressing to advanced rhetoric (Balaghah), jurisprudence (Fiqh), logic (Mantiq), exegesis (Tafsir), and the canonical Hadith collections.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Direct Sanad to Authors', 'Classical Text Immersion', 'Dialectical Training', 'Spiritual Tarbiyah'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-primary font-bold text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="!p-8 bg-surface text-primary border border-primary/10 hover:shadow-lg transition-shadow">
              <ScrollText size={32} className="mb-6 opacity-80" />
              <h3 className="text-2xl font-display font-bold mb-4">Memorization (Hifz)</h3>
              <p className="font-medium mb-6 text-text-muted leading-relaxed">
                Dedicated intensive tracks for the complete memorization of the Holy Qur'an with strict adherence to Tajweed.
              </p>
              <Button variant="outline" className="w-full">View Tajweed Rules</Button>
            </Card>
          </div>
        </section>

        {/* Detailed Programs Bento Grid */}
        <section>
           <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">Comprehensive Faculties</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
             {/* Bento Box 1 */}
             <Card className="col-span-1 md:col-span-8 !p-8 relative overflow-hidden group">
               <img src="https://picsum.photos/seed/faculty1/800/400" className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700" alt="Arabic" />
               <div className="absolute inset-0 bg-gradient-to-r from-surface/40 to-bg-base/20"></div>
               <div className="relative z-10 w-full max-w-lg h-full flex flex-col justify-center">
                 <h3 className="text-3xl font-display font-bold text-primary mb-4">Faculty of Arabic Language</h3>
                 <p className="text-primary/80 font-medium mb-6">Master the language of the Quran. From fundamental grammar to pre-Islamic poetry and advanced rhetoric.</p>
                 <Button variant="primary" className="self-start">Explore Syllabus</Button>
               </div>
             </Card>

             {/* Bento Box 2 */}
             <Card className="col-span-1 md:col-span-4 !p-8 bg-bg-base border border-primary/20 text-primary flex flex-col justify-end">
               <BookOpen size={48} className="mb-auto opacity-50" />
               <h3 className="text-2xl font-display font-bold mb-2 text-primary">Faculty of Shari'ah</h3>
               <p className="text-primary/90 font-medium text-sm">Deep dives into comparative Fiqh, Usul al-Fiqh, and contemporary legal challenges.</p>
             </Card>

             {/* Bento Box 3 */}
             <Card className="col-span-1 md:col-span-5 !p-8 flex flex-col justify-center border-t-8 border-primary">
               <h3 className="text-2xl font-display font-bold text-primary mb-4">Faculty of Usul al-Din</h3>
               <p className="text-primary/80 font-medium leading-relaxed">
                 Specialized modules covering classical theology (Aqidah), logic, and the critical study of modern philosophies to equip scholars for today's ideological landscape.
               </p>
             </Card>

             {/* Bento Box 4 */}
             <Card className="col-span-1 md:col-span-7 !p-0 relative overflow-hidden group">
                <img src="https://picsum.photos/seed/faculty4/800/400" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-700" alt="Hadith" />
               <div className="absolute inset-0 bg-surface/30 mix-blend-overlay"></div>
               <div className="absolute bottom-8 left-8 right-8 bg-surface/80 backdrop-blur-md p-6 rounded-xl border border-primary/10">
                  <h3 className="text-3xl font-display font-bold text-primary mb-2">Specialization in Hadith (Takhassus)</h3>
                  <p className="text-primary font-bold uppercase tracking-widest text-sm">Post-Graduate Track</p>
               </div>
             </Card>
           </div>
        </section>

        {/* Video Class Preview */}
        <section className="relative rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-bg-base"></div>
          <img src="https://picsum.photos/seed/academicsvideo/1200/500" alt="Video Cover" className="relative z-0 w-full h-[500px] object-cover opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
             <div className="w-20 h-20 rounded-full bg-secondary/10 backdrop-blur-md border border-secondary/20 flex items-center justify-center cursor-pointer hover:bg-secondary/20 transition-colors mb-8 hover:scale-110 transform">
               <PlayCircle size={40} className="text-primary" />
             </div>
             <h2 className="text-4xl font-display font-bold text-primary mb-4">Experience a Lecture</h2>
             <p className="text-primary/80 font-medium text-lg max-w-xl">Take a glimpse inside our classrooms and experience the profound spiritual ambiance of traditional transmission.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center pb-20">
          <h2 className="text-4xl font-display font-bold text-primary mb-6">Ready to seek knowledge?</h2>
          <p className="text-xl text-text-muted font-medium mb-10 max-w-2xl mx-auto">
            Admissions for the upcoming academic year are now open. Review the prerequisites and join a vibrant community of seekers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" className="!text-lg !px-10 py-4">Apply for Admission</Button>
            <Button variant="outline" className="!text-lg !px-10 py-4">Download Prospectus</Button>
          </div>
        </section>

      </div>
    </div>
  );
}
