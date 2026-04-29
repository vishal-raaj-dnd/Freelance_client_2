import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Home as HomeIcon, Shield, Utensils, Clock, MapPin, Coffee } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Boarding() {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src="https://picsum.photos/seed/boarding1/1920/1080" alt="Boarding Facilities" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-base/40 via-bg-base/20 to-secondary/40"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <HomeIcon size={48} className="text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-6 drop-shadow-lg">{t('boarding.title')}</h1>
          <p className="text-xl text-primary/90 font-medium leading-relaxed drop-shadow">
            {t('boarding.desc')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-20 mb-24">
          {[
            { icon: <Shield size={28} />, title: t('boarding.feat1Title'), desc: t('boarding.feat1Desc') },
            { icon: <Utensils size={28} />, title: t('boarding.feat2Title'), desc: t('boarding.feat2Desc') },
            { icon: <Clock size={28} />, title: t('boarding.feat3Title'), desc: t('boarding.feat3Desc') },
            { icon: <Coffee size={28} />, title: t('boarding.feat4Title'), desc: t('boarding.feat4Desc') }
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
            <h2 className="text-4xl font-display font-bold text-primary">{t('boarding.quartersTitle')}</h2>
            <p className="text-lg text-text-muted font-medium leading-relaxed">
              {t('boarding.quartersDesc')}
            </p>
            <ul className="space-y-4">
              {[t('boarding.q1'), t('boarding.q2'), t('boarding.q3'), t('boarding.q4')].map((item, i) => (
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

        <section className="bg-surface rounded-[3rem] p-10 md:p-16 mb-24 shadow-inner border border-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">{t('boarding.scheduleTitle')}</h2>
            <p className="text-text-muted font-medium max-w-2xl mx-auto text-lg">{t('boarding.scheduleDesc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { time: "04:30 AM", event: t('boarding.s1Event'), desc: t('boarding.s1Desc') },
              { time: "07:00 AM", event: t('boarding.s2Event'), desc: t('boarding.s2Desc') },
              { time: "08:00 AM", event: t('boarding.s3Event'), desc: t('boarding.s3Desc') },
              { time: "01:00 PM", event: t('boarding.s4Event'), desc: t('boarding.s4Desc') },
              { time: "03:00 PM", event: t('boarding.s5Event'), desc: t('boarding.s5Desc') },
              { time: "05:00 PM", event: t('boarding.s6Event'), desc: t('boarding.s6Desc') },
              { time: "07:30 PM", event: t('boarding.s7Event'), desc: t('boarding.s7Desc') },
              { time: "09:00 PM", event: t('boarding.s8Event'), desc: t('boarding.s8Desc') },
            ].map((slot, i) => (
              <div key={i} className="flex flex-col bg-surface p-6 rounded-2xl shadow-sm border border-secondary">
                <span className="text-primary font-bold text-sm tracking-wider mb-2">{slot.time}</span>
                <h4 className="font-display font-bold text-lg text-primary mb-2">{slot.event}</h4>
                <p className="text-xs text-primary font-medium">{slot.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Card className="!p-12 text-center bg-bg-base text-primary">
          <MapPin size={40} className="text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold mb-4">{t('boarding.ctaTitle')}</h2>
          <p className="text-primary/80 font-medium mb-8 max-w-2xl mx-auto">
            {t('boarding.ctaDesc')}
          </p>
          <Button variant="primary" className="!px-10 !py-4 text-lg">{t('boarding.ctaBtn')}</Button>
        </Card>
      </div>
    </div>
  );
}
