import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FileText, Calendar, CheckCircle, Mail, AlertTriangle } from 'lucide-react';

export function Admissions() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-secondary py-24 px-6 relative border-b border-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <FileText size={56} className="text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight text-inverted">Admissions</h1>
          <p className="text-xl md:text-2xl font-medium text-text-muted max-w-2xl mx-auto leading-relaxed">
            Begin your journey of seeking sacred knowledge. Review our requirements and start your application today.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content Info */}
          <div className="lg:col-span-2 space-y-16">
             
             {/* General Requirements */}
             <section>
               <h2 className="text-3xl font-display font-bold text-primary mb-8">General Requirements</h2>
               <div className="space-y-6">
                 {[
                   'Must be at least 15 years of age at the time of enrollment.',
                   'Successful completion of middle school (8th grade equivalent) or higher.',
                   'Basic ability to read the Quran with correct pronunciation (Nazirah).',
                   'A character reference letter from a local Imam or community leader.',
                   'Medical clearance certificate ensuring fitness for boarding life.'
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
               <h2 className="text-3xl font-display font-bold text-primary mb-8">The Process</h2>
               <div className="relative pl-8 border-l-2 border-primary/30 space-y-12">
                 {[
                   { step: 1, title: 'Submit Online Application', desc: 'Fill out the form below and attach all requested documents.' },
                   { step: 2, title: 'Entrance Examination', desc: 'Candidates will undergo a preliminary test assessing basic Islamic knowledge and Urdu/Arabic aptitude.' },
                   { step: 3, title: 'Interview', desc: 'A face-to-face or virtual interview with the admissions committee.' },
                   { step: 4, title: 'Acceptance & Enrollment', desc: 'Successful candidates will receive an offer letter and instructions for fee payment and boarding.' }
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
                <h3 className="text-2xl font-display font-bold mb-6">Key Dates</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-primary/70 text-sm">Applications Open</span>
                    <span className="font-bold text-primary">Shawwal 1</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-primary/70 text-sm">Deadline</span>
                    <span className="font-bold text-primary">Dhul Qadah 15</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-primary/70 text-sm">Classes Begin</span>
                    <span className="font-bold text-primary">Muharram 10</span>
                  </li>
                </ul>
              </Card>

              {/* Inquiry Card */}
              <Card className="!p-8 bg-surface border border-white">
                <Mail className="text-secondary mb-4" size={28} />
                <h3 className="text-xl font-display font-bold text-primary mb-2">Have Questions?</h3>
                <p className="text-sm text-text-muted font-medium mb-6">Our admissions office is ready to help you navigate the process.</p>
                <Button variant="outline" className="w-full !border-primary text-primary hover:!bg-primary hover:text-inverted">Email Admissions</Button>
              </Card>

              {/* Warning/Alert */}
              <div className="bg-red-50 text-red-800 p-4 rounded-2xl flex gap-3 text-sm font-medium border border-red-100">
                <AlertTriangle size={20} className="shrink-0 text-red-500" />
                <p>Forms submitted past the deadline will be placed on a waiting list for the following academic year without exception.</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
