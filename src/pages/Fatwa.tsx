import React from 'react';
import { Card } from '../components/ui/Card';

export function Fatwa() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      
      {/* Header Block */}
      <div className="text-center mb-20 animate-in fade-in slide-in-from-top-8 duration-700">
        <div className="clay-badge text-primary mb-6 inline-block">Guidance & Insight</div>
        <h1 className="text-5xl md:text-6xl font-display text-primary font-bold mb-6">
          The Blog / Fatwa Board
        </h1>
        <p className="text-xl text-text-muted font-bold">
          Reflections, rulings, and contemporary insights from our senior scholars.
        </p>
      </div>

      <div className="space-y-12">
        <Card glowOnHover className="!p-0 overflow-hidden group border-2 border-surface/50">
           <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/3 relative min-h-[250px] md:min-h-auto overflow-hidden">
                <img src="https://picsum.photos/seed/reading/600/600" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Reading" />
              </div>
              <div className="md:w-2/3 p-10 md:p-12 flex flex-col justify-center">
                 <span className="clay-badge !bg-surface text-primary mb-4 w-max inline-block shadow-none border border-primary/20">Contemporary Jurisprudence</span>
                 <h2 className="text-3xl font-display font-bold text-primary mb-6">Finance in the Modern Era</h2>
                 <p className="text-text-muted font-bold leading-relaxed mb-8 flex-grow">
                   A comprehensive breakdown of cryptocurrency, digital assets, and their standing within classical frameworks of trade.
                 </p>
                 <div className="flex items-center gap-4 border-t border-primary/10 pt-6">
                    <div className="w-10 h-10 rounded-full bg-surface border border-primary/20"></div>
                    <span className="text-primary font-bold text-sm">Shaykh Abdullah • Oct 15</span>
                 </div>
              </div>
           </div>
        </Card>

        <Card glowOnHover className="!p-0 overflow-hidden group border-2 border-surface/50">
           <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/3 relative min-h-[250px] md:min-h-auto overflow-hidden">
                <img src="https://picsum.photos/seed/dua/600/600" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Supplication" />
              </div>
              <div className="md:w-2/3 p-10 md:p-12 flex flex-col justify-center">
                 <span className="clay-badge !bg-surface text-primary mb-4 w-max inline-block shadow-none border border-primary/20">Spiritual Tarbiyah</span>
                 <h2 className="text-3xl font-display font-bold text-primary mb-6">The Etiquette of Supplication</h2>
                 <p className="text-text-muted font-bold leading-relaxed mb-8 flex-grow">
                   Conditions for acceptance, the best times for Dua, and understanding the wisdom behind delayed responses.
                 </p>
                 <div className="flex items-center gap-4 border-t border-primary/10 pt-6">
                    <div className="w-10 h-10 rounded-full bg-surface border border-primary/20"></div>
                    <span className="text-primary font-bold text-sm">Mufti Zaid • Sep 22</span>
                 </div>
              </div>
           </div>
        </Card>
      </div>

    </div>
  );
}
