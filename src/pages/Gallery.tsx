import React from 'react';
import { Card } from '../components/ui/Card';

const images = [
  { id: 1, height: 'h-64', seed: 'architecture' },
  { id: 2, height: 'h-96', seed: 'library' },
  { id: 3, height: 'h-72', seed: 'student' },
  { id: 4, height: 'h-80', seed: 'courtyard' },
  { id: 5, height: 'h-64', seed: 'text' },
  { id: 6, height: 'h-96', seed: 'lecture' },
];

export function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      <div className="text-center mb-20">
        <div className="clay-badge text-primary mb-6 inline-block">Visual Archives</div>
        <h1 className="text-5xl md:text-6xl font-display text-text-main font-bold mb-6">Our Visual Legacy</h1>
        <p className="text-xl text-text-muted font-bold max-w-2xl mx-auto">
          Moments captured around the Masjid and Madrasah, reflecting the peace and bright vitality of our community.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {images.map((img) => (
          <div key={img.id} className="break-inside-avoid">
            <Card glowOnHover className={`!p-0 w-full ${img.height} relative group overflow-hidden border-4 border-surface shadow-xl`}>
              <img 
                src={`https://picsum.photos/seed/${img.seed}/600/800`} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out" 
                alt={`Gallery ${img.seed}`}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 mix-blend-color transition-opacity duration-500"></div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
