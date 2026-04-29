import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="bg-surface pt-24 pb-32 px-6 relative border-b-8 border-primary transition-colors">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <MessageCircle size={56} className="text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight text-primary">{t('contact.title')}</h1>
          <p className="text-xl md:text-2xl font-medium text-text-muted max-w-2xl mx-auto leading-relaxed">
            {t('contact.desc')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl px-4 md:px-6 w-full mx-auto py-20 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-5 space-y-8">
            <Card className="!p-8 bg-surface border border-primary/10 hover:shadow-xl transition-shadow group">
               <h3 className="text-2xl font-display font-bold text-primary mb-6 transition-colors">{t('contact.infoTitle')}</h3>
               <div className="space-y-8">
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-secondary text-inverted flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                     <MapPin size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-primary mb-1">{t('contact.addressTitle')}</h4>
                     <p className="text-text-muted font-medium leading-relaxed">
                       {t('contact.address1')}<br/>{t('contact.address2')}<br/>{t('contact.address3')}
                     </p>
                   </div>
                 </div>

                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-secondary text-inverted flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                     <Phone size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-primary mb-1">{t('contact.phoneTitle')}</h4>
                     <p className="text-text-muted font-medium leading-relaxed">
                       {t('contact.phone1')}<br/>{t('contact.phone2')}
                     </p>
                   </div>
                 </div>

                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-secondary text-inverted flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                     <Mail size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-primary mb-1">{t('contact.emailTitle')}</h4>
                     <p className="text-text-muted font-medium leading-relaxed">
                       {t('contact.email1')}<br/>{t('contact.email2')}
                     </p>
                   </div>
                 </div>
               </div>
            </Card>

            <Card className="!p-8 bg-surface border border-primary/10 text-primary shadow-lg group hover:shadow-xl transition-all">
               <div className="flex items-center gap-3 mb-4">
                  <Clock size={24} className="text-secondary" />
                  <h3 className="text-2xl font-display font-bold text-primary">{t('contact.hoursTitle')}</h3>
               </div>
               <p className="text-text-muted font-medium mb-4 leading-relaxed group-hover:text-primary transition-colors">{t('contact.hoursDesc')}</p>
               <ul className="space-y-2 text-sm font-bold opacity-90">
                 <li className="flex justify-between"><span>{t('contact.monThu')}</span> <span>{t('contact.monThuTime')}</span></li>
                 <li className="flex justify-between"><span>{t('contact.fri')}</span> <span>{t('contact.friTime')}</span></li>
                 <li className="flex justify-between text-text-muted"><span>{t('contact.satSun')}</span> <span>{t('contact.closed')}</span></li>
               </ul>
            </Card>
          </div>

          <div className="lg:col-span-7">
            <Card className="!p-6 md:!p-10 lg:!p-16 border border-primary/10 bg-surface hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-display font-bold text-primary mb-2">{t('contact.formTitle')}</h2>
              <p className="text-text-muted font-medium mb-10">{t('contact.formDesc')}</p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">{t('contact.firstName')}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-bg-base border border-primary/10 focus:ring-2 focus:ring-secondary text-text-main outline-none transition-all placeholder:text-text-muted/50" placeholder={t('contact.firstNamePh')} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">{t('contact.lastName')}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-bg-base border border-primary/10 focus:ring-2 focus:ring-secondary text-text-main outline-none transition-all placeholder:text-text-muted/50" placeholder={t('contact.lastNamePh')} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">{t('contact.emailAddr')}</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-bg-base border border-primary/10 focus:ring-2 focus:ring-secondary text-text-main outline-none transition-all placeholder:text-text-muted/50" placeholder={t('contact.emailPh')} />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">{t('contact.subject')}</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-bg-base border border-primary/10 focus:ring-2 focus:ring-secondary text-text-main outline-none transition-all">
                    <option>{t('contact.subjGeneral')}</option>
                    <option>{t('contact.subjAdmissions')}</option>
                    <option>{t('contact.subjDonations')}</option>
                    <option>{t('contact.subjLibrary')}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">{t('contact.message')}</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl bg-bg-base border border-primary/10 focus:ring-2 focus:ring-secondary text-text-main resize-none outline-none transition-all placeholder:text-text-muted/50" placeholder={t('contact.messagePh')}></textarea>
                </div>

                <Button variant="primary" className="w-full !py-4 flex items-center justify-center gap-2 text-lg !bg-secondary !text-inverted hover:opacity-90">
                  <Send size={20} /> {t('contact.sendBtn')}
                </Button>
              </form>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
