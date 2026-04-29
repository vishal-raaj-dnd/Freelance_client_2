import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Search, Book, Bookmark, FileText, Database, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Library() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full">
      <div className="bg-surface py-20 px-6 relative border-b border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <Book size={48} className="text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-primary">{t('library.title')}</h1>
          <p className="text-lg md:text-xl font-medium text-primary/80 mb-12">{t('library.desc')}</p>
          
          <div className="relative max-w-2xl mx-auto shadow-2xl rounded-full border border-primary/20">
            <input 
              type="text" 
              placeholder={t('library.searchPh')}
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
          
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="font-display font-bold text-xl text-primary mb-4">{t('library.collectionsTitle')}</h3>
              <ul className="space-y-3">
                {[t('library.c1'), t('library.c2'), t('library.c3'), t('library.c4'), t('library.c5'), t('library.c6')].map((cat, i) => (
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
               <h4 className="font-display font-bold mb-2">{t('library.digitalAccess')}</h4>
               <p className="text-primary/70 text-sm mb-4 leading-relaxed">{t('library.digitalDesc')}</p>
               <Button variant="primary" className="w-full !text-xs !py-2">{t('library.loginPortal')}</Button>
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-16">
            <section>
              <h2 className="text-3xl font-display font-bold text-primary mb-8">{t('library.additionsTitle')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map(val => (
                  <Card key={val} className="flex gap-6 !p-6 hover:-translate-y-1 transition-transform group cursor-pointer border border-primary/10 bg-surface">
                    <div className="w-24 h-32 bg-bg-base rounded-lg shrink-0 relative overflow-hidden shadow-inner border border-primary/10">
                      <div className="absolute left-2 top-0 bottom-0 w-px bg-surface/5"></div>
                      <div className="absolute right-2 top-0 bottom-0 w-px bg-black/40"></div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                         <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded border border-primary/20">{t('library.newEdition')}</span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-primary mb-1 group-hover:text-primary transition-colors">Al-Minhaj bi Sharh Sahih Muslim</h3>
                      <p className="text-sm font-bold text-primary/80 mb-2">Imam An-Nawawi</p>
                      <p className="text-xs text-primary/60 font-medium">Vol 1-18. Damascus Print, 2023.</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section>
               <h2 className="text-3xl font-display font-bold text-primary mb-8">{t('library.facilitiesTitle')}</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[
                   { name: t('library.f1Name'), desc: t('library.f1Desc'), icon: <Bookmark size={24} /> },
                   { name: t('library.f2Name'), desc: t('library.f2Desc'), icon: <FileText size={24} /> },
                   { name: t('library.f3Name'), desc: t('library.f3Desc'), icon: <Book size={24} /> }
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
            
            <Card className="!p-0 overflow-hidden bg-surface text-primary border border-primary/20">
              <div className="flex flex-col md:flex-row">
                <div className="p-10 flex-1">
                  <h3 className="text-3xl font-display font-bold mb-6 text-primary">{t('library.timingsTitle')}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-primary/10 pb-4">
                      <span className="font-medium text-primary/80">{t('library.monThu')}</span>
                      <span className="font-bold">{t('library.monThuTime')}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-primary/10 pb-4">
                      <span className="font-medium text-primary/80">{t('library.fri')}</span>
                      <span className="font-bold text-right">{t('library.friTime1')}<br/><span className="text-sm font-normal text-primary/60">{t('library.jumuahClosed')}</span><br/>{t('library.friTime2')}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-primary">{t('library.weekends')}</span>
                      <span className="font-bold text-primary">{t('library.weekendsTime')}</span>
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
