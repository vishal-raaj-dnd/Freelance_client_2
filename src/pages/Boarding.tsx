import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Home as HomeIcon, Shield, Utensils, Clock, MapPin, Coffee } from 'lucide-react';

export function Boarding() {
  return (
    <div className="w-full">
      {/* Immersive Header */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src="https://picsum.photos/seed/boarding1/1920/1080" alt="Boarding Facilities" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-base/40 via-bg-base/20 to-secondary/40"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <HomeIcon size={48} className="text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-6 drop-shadow-lg">A Second Home</h1>
          <p className="text-xl text-primary/90 font-medium leading-relaxed drop-shadow">
            Experience a nurturing, secure, and spiritually uplifting residential life. Our boarding facilities are designed to foster brotherhood and dedicated focus on studies.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Key Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-20 mb-24">
          {[
            { icon: <Shield size={28} />, title: "24/7 Security", desc: "Monitored premises with dedicated wardens to ensure safety." },
            { icon: <Utensils size={28} />, title: "Halal Dining", desc: "Three nutritious, hygienically prepared meals served daily." },
            { icon: <Clock size={28} />, title: "Structured Routine", desc: "Scheduled times for rest, study, and extra-curricular activities." },
            { icon: <Coffee size={28} />, title: "Recreation", desc: "Comfortable common rooms and dedicated sports facilities." }
          ].map((feat, i) => (
            <Card key={i} className="!p-8 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mx-auto mb-6 text-primary">
                {feat.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-primary mb-3">{feat.title}</h3>
              <p className="text-sm text-text-muted font-medium leading-relaxed">{feat.desc}</p>
            </Card>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-display font-bold text-primary">Living Quarters</h2>
            <p className="text-lg text-text-muted font-medium leading-relaxed">
              Our dormitories are designed with the student's comfort and focus in mind. Clean, spacious, and well-lit, they provide an ideal environment for rest after rigorous academic pursuits.
            </p>
            <ul className="space-y-4">
              {['Climate-controlled rooms', 'Dedicated study desks per student', 'En-suite washing facilities in premium blocks', 'Weekly laundry services'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-primary font-bold">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="text-sm">✓</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/room1/500/600" className="w-full h-64 object-cover rounded-[2rem] rounded-br-none shadow-lg" alt="Room 1" />
              <img src="https://picsum.photos/seed/room2/500/600" className="w-full h-64 object-cover rounded-[2rem] rounded-bl-none shadow-lg translate-y-8" alt="Room 2" />
            </div>
          </div>
        </div>

        {/* Daily Schedule */}
        <section className="bg-surface rounded-[3rem] p-10 md:p-16 mb-24 shadow-inner border border-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">A Day in the Life</h2>
            <p className="text-text-muted font-medium max-w-2xl mx-auto text-lg">A structured routine designed to maximize spiritual growth, academic intake, and physical well-being.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { time: "04:30 AM", event: "Tahajjud & Fajr", desc: "Awakening for pre-dawn prayers and spiritual reflection." },
              { time: "07:00 AM", event: "Breakfast", desc: "Nutritious start to the day in the main dining hall." },
              { time: "08:00 AM", event: "Morning Classes", desc: "Core Dars-e-Nizami modules and lectures." },
              { time: "01:00 PM", event: "Zuhr & Lunch", desc: "Midday prayer followed by lunch and brief rest." },
              { time: "03:00 PM", event: "Afternoon Study", desc: "Library time, Muzakarah, and revisions." },
              { time: "05:00 PM", event: "Asr & Recreation", desc: "Sports, physical activities, and relaxation." },
              { time: "07:30 PM", event: "Maghrib & Dinner", desc: "Evening prayer and communal dining." },
              { time: "09:00 PM", event: "Isha & Sleep", desc: "Final prayers and lights out to ensure a healthy rest." },
            ].map((slot, i) => (
              <div key={i} className="flex flex-col bg-surface p-6 rounded-2xl shadow-sm border border-secondary">
                <span className="text-primary font-bold text-sm tracking-wider mb-2">{slot.time}</span>
                <h4 className="font-display font-bold text-lg text-primary mb-2">{slot.event}</h4>
                <p className="text-xs text-primary font-medium">{slot.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Card className="!p-12 text-center bg-bg-base text-primary">
          <MapPin size={40} className="text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold mb-4">Plan a Campus Tour</h2>
          <p className="text-primary/80 font-medium mb-8 max-w-2xl mx-auto">
            We highly encourage prospective students and their parents to visit our campus and experience the boarding facilities firsthand before making a decision.
          </p>
          <Button variant="primary" className="!px-10 !py-4 text-lg">Schedule a Visit</Button>
        </Card>

      </div>
    </div>
  );
}
