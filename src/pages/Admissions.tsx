import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FileText, Calendar, CheckCircle, Mail, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Admissions() {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-secondary py-24 px-6 relative border-b border-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <FileText size={56} className="text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight text-inverted">{t('admissions.title')}</h1>
          <p className="text-xl md:text-2xl font-medium text-text-muted max-w-2xl mx-auto leading-relaxed">
            {t('admissions.desc')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content Info */}
          <div className="lg:col-span-2 space-y-16">
             
             {/* General Requirements */}
             <section>
               <h2 className="text-3xl font-display font-bold text-primary mb-8">{t('admissions.reqTitle')}</h2>
               <div className="space-y-6">
                 {[
                   t('admissions.req1'),
                   t('admissions.req2'),
                   t('admissions.req3'),
                   t('admissions.req4'),
                   t('admissions.req5')
                 ].map((req, i) => (
                   <Card key={i} className="!p-6 flex items-start gap-4">
                     <CheckCircle className="text-primary shrink-0 mt-1" size={24} />
                     <p className="text-lg font-medium text-primary">{req}</p>
                   </Card>
                 ))}
               </div>
             </section>

             {/* Application Process Timeline */}
             <section>
               <h2 className="text-3xl font-display font-bold text-primary mb-8">{t('admissions.processTitle')}</h2>
               <div className="relative pl-8 border-l-2 border-primary/30 space-y-12">
                 {[
                   { step: 1, title: t('admissions.step1Title'), desc: t('admissions.step1Desc') },
                   { step: 2, title: t('admissions.step2Title'), desc: t('admissions.step2Desc') },
                   { step: 3, title: t('admissions.step3Title'), desc: t('admissions.step3Desc') },
                   { step: 4, title: t('admissions.step4Title'), desc: t('admissions.step4Desc') }
                 ].map((item) => (
                   <div key={item.step} className="relative">
                     <div className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-primary text-inverted font-bold flex items-center justify-center font-display border-4 border-white">
                       {item.step}
                     </div>
                     <h3 className="text-xl font-display font-bold text-primary mb-2">{item.title}</h3>
                     <p className="text-text-muted font-medium leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
               </div>
             </section>

          </div>

          {/* Sidebar Action / Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              
              {/* Important Dates */}
              <Card className="!p-8 bg-bg-base text-primary">
                <Calendar className="text-primary mb-6" size={32} />
                <h3 className="text-2xl font-display font-bold mb-6">{t('admissions.datesTitle')}</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-primary/70 text-sm">{t('admissions.date1Label')}</span>
                    <span className="font-bold text-primary">{t('admissions.date1Value')}</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-primary/70 text-sm">{t('admissions.date2Label')}</span>
                    <span className="font-bold text-primary">{t('admissions.date2Value')}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-primary/70 text-sm">{t('admissions.date3Label')}</span>
                    <span className="font-bold text-primary">{t('admissions.date3Value')}</span>
                  </li>
                </ul>
              </Card>

              {/* Inquiry Card */}
              <Card className="!p-8 bg-surface border border-white">
                <Mail className="text-secondary mb-4" size={28} />
                <h3 className="text-xl font-display font-bold text-primary mb-2">{t('admissions.inquiryTitle')}</h3>
                <p className="text-sm text-text-muted font-medium mb-6">{t('admissions.inquiryDesc')}</p>
                <Button variant="outline" className="w-full !border-primary text-primary hover:!bg-primary hover:text-inverted">{t('admissions.inquiryBtn')}</Button>
              </Card>

              {/* Warning/Alert */}
              <div className="bg-red-50 text-red-800 p-4 rounded-2xl flex gap-3 text-sm font-medium border border-red-100">
                <AlertTriangle size={20} className="shrink-0 text-red-500" />
                <p>{t('admissions.alert')}</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
