const fs = require('fs');
const path = require('path');

const tsxContent = `import React from 'react';
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
`;

fs.writeFileSync(path.join(__dirname, '../src/pages/Admissions.tsx'), tsxContent);

// Also update the JSON files
const localesPath = path.join(__dirname, '../src/locales');
const enFile = path.join(localesPath, 'en.json');
const taFile = path.join(localesPath, 'ta.json');
const urFile = path.join(localesPath, 'ur.json');

const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const ta = JSON.parse(fs.readFileSync(taFile, 'utf8'));
const ur = JSON.parse(fs.readFileSync(urFile, 'utf8'));

Object.assign(en.admissions, {
  req1: "Must be at least 15 years of age at the time of enrollment.",
  req2: "Successful completion of middle school (8th grade equivalent) or higher.",
  req3: "Basic ability to read the Quran with correct pronunciation (Nazirah).",
  req4: "A character reference letter from a local Imam or community leader.",
  req5: "Medical clearance certificate ensuring fitness for boarding life.",
  step1Title: "Submit Online Application",
  step1Desc: "Fill out the form below and attach all requested documents.",
  step2Title: "Entrance Examination",
  step2Desc: "Candidates will undergo a preliminary test assessing basic Islamic knowledge and Urdu/Arabic aptitude.",
  step3Title: "Interview",
  step3Desc: "A face-to-face or virtual interview with the admissions committee.",
  step4Title: "Acceptance & Enrollment",
  step4Desc: "Successful candidates will receive an offer letter and instructions for fee payment and boarding.",
  date1Label: "Applications Open",
  date1Value: "Shawwal 1",
  date2Label: "Deadline",
  date2Value: "Dhul Qadah 15",
  date3Label: "Classes Begin",
  date3Value: "Muharram 10",
  inquiryTitle: "Have Questions?",
  inquiryDesc: "Our admissions office is ready to help you navigate the process.",
  inquiryBtn: "Email Admissions",
  alert: "Forms submitted past the deadline will be placed on a waiting list for the following academic year without exception."
});

Object.assign(ta.admissions, {
  req1: "சேர்க்கை நேரத்தில் குறைந்தது 15 வயது நிரம்பியிருக்க வேண்டும்.",
  req2: "நடுநிலைப்பள்ளி (8 ஆம் வகுப்பு சமமான) அல்லது அதற்கு மேல் வெற்றிகரமாக முடித்திருக்க வேண்டும்.",
  req3: "சரியான உச்சரிப்புடன் குர்ஆனை வாசிக்கும் அடிப்படை திறன் (நசிரா).",
  req4: "உள்ளூர் இமாம் அல்லது சமூகத் தலைவரிடமிருந்து ஒரு நன்னடத்தை கடிதம்.",
  req5: "விடுதி வாழ்க்கைக்கு தகுதியானவர் என்பதை உறுதிப்படுத்தும் மருத்துவ அனுமதி சான்றிதழ்.",
  step1Title: "ஆன்லைன் விண்ணப்பத்தை சமர்ப்பிக்கவும்",
  step1Desc: "கீழே உள்ள படிவத்தை பூர்த்தி செய்து கோரப்பட்ட அனைத்து ஆவணங்களையும் இணைக்கவும்.",
  step2Title: "நுழைவுத் தேர்வு",
  step2Desc: "வேட்பாளர்கள் அடிப்படை இஸ்லாமிய அறிவு மற்றும் உருது/அரபு திறனை மதிப்பிடும் பூர்வாங்க சோதனைக்கு உட்படுத்தப்படுவார்கள்.",
  step3Title: "நேர்காணல்",
  step3Desc: "சேர்க்கை குழுவுடன் நேருக்கு நேர் அல்லது மெய்நிகர் நேர்காணல்.",
  step4Title: "ஏற்றுக்கொள்ளுதல் & சேர்க்கை",
  step4Desc: "வெற்றிகரமான வேட்பாளர்களுக்கு கட்டணம் செலுத்துதல் மற்றும் விடுதிக்கான வழிமுறைகளுடன் சலுகை கடிதம் கிடைக்கும்.",
  date1Label: "விண்ணப்பங்கள் திறக்கப்படும்",
  date1Value: "ஷவ்வால் 1",
  date2Label: "கடைசி நாள்",
  date2Value: "துல் கஅதா 15",
  date3Label: "வகுப்புகள் தொடங்கும்",
  date3Value: "முஹர்ரம் 10",
  inquiryTitle: "கேள்விகள் உள்ளதா?",
  inquiryDesc: "செயல்முறையை வழிநடத்த எங்கள் சேர்க்கை அலுவலகம் உங்களுக்கு உதவ தயாராக உள்ளது.",
  inquiryBtn: "சேர்க்கைக்கு மின்னஞ்சல் செய்யவும்",
  alert: "கெடு தேதிக்கு பின் சமர்ப்பிக்கப்படும் படிவங்கள் அடுத்த கல்வியாண்டிற்கான காத்திருப்பு பட்டியலில் வைக்கப்படும்."
});

Object.assign(ur.admissions, {
  req1: "داخلے کے وقت کم از کم 15 سال کی عمر ہونی چاہیے۔",
  req2: "مڈل اسکول (8ویں جماعت کے مساوی) یا اس سے زیادہ کی کامیاب تکمیل۔",
  req3: "صحیح تلفظ (ناظرہ) کے ساتھ قرآن پڑھنے کی بنیادی صلاحیت۔",
  req4: "مقامی امام یا کمیونٹی لیڈر کی طرف سے کردار کا حوالہ خط۔",
  req5: "میڈیکل کلیئرنس سرٹیفکیٹ جو بورڈنگ لائف کے لیے فٹنس کو یقینی بناتا ہو۔",
  step1Title: "آن لائن درخواست جمع کروائیں",
  step1Desc: "نیچے دیا گیا فارم پُر کریں اور درخواست کردہ تمام دستاویزات منسلک کریں۔",
  step2Title: "داخلہ امتحان",
  step2Desc: "امیدواروں کا ایک ابتدائی ٹیسٹ ہوگا جس میں بنیادی اسلامی علم اور اردو/عربی کی استعداد کا جائزہ لیا جائے گا۔",
  step3Title: "انٹرویو",
  step3Desc: "داخلہ کمیٹی کے ساتھ آمنے سامنے یا ورچوئل انٹرویو۔",
  step4Title: "قبولیت اور داخلہ",
  step4Desc: "کامیاب امیدواروں کو پیشکش کا خط اور فیس کی ادائیگی اور بورڈنگ کے لیے ہدایات موصول ہوں گی۔",
  date1Label: "درخواستیں کھلتی ہیں",
  date1Value: "1 شوال",
  date2Label: "آخری تاریخ",
  date2Value: "15 ذوالقعدہ",
  date3Label: "کلاسز شروع",
  date3Value: "10 محرم",
  inquiryTitle: "سوالات ہیں؟",
  inquiryDesc: "ہمارا داخلہ دفتر اس عمل کو نیویگیٹ کرنے میں آپ کی مدد کے لیے تیار ہے۔",
  inquiryBtn: "داخلہ کو ای میل کریں",
  alert: "آخری تاریخ کے بعد جمع کرائے گئے فارمز کو بغیر کسی استثنا کے اگلے تعلیمی سال کے لیے انتظار کی فہرست میں رکھا جائے گا۔"
});

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(taFile, JSON.stringify(ta, null, 2));
fs.writeFileSync(urFile, JSON.stringify(ur, null, 2));
