const fs = require('fs');
const path = require('path');

const localesPath = path.join(__dirname, '../src/locales');
const enFile = path.join(localesPath, 'en.json');
const taFile = path.join(localesPath, 'ta.json');
const urFile = path.join(localesPath, 'ur.json');

const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const ta = JSON.parse(fs.readFileSync(taFile, 'utf8'));
const ur = JSON.parse(fs.readFileSync(urFile, 'utf8'));

// ======== BOARDING ========
const boardingTsx = `import React from 'react';
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
`;

Object.assign(en.boarding, {
  feat1Title: "24/7 Security", feat1Desc: "Monitored premises with dedicated wardens to ensure safety.",
  feat2Title: "Halal Dining", feat2Desc: "Three nutritious, hygienically prepared meals served daily.",
  feat3Title: "Structured Routine", feat3Desc: "Scheduled times for rest, study, and extra-curricular activities.",
  feat4Title: "Recreation", feat4Desc: "Comfortable common rooms and dedicated sports facilities.",
  quartersDesc: "Our dormitories are designed with the student's comfort and focus in mind. Clean, spacious, and well-lit, they provide an ideal environment for rest after rigorous academic pursuits.",
  q1: "Climate-controlled rooms", q2: "Dedicated study desks per student", q3: "En-suite washing facilities in premium blocks", q4: "Weekly laundry services",
  scheduleDesc: "A structured routine designed to maximize spiritual growth, academic intake, and physical well-being.",
  s1Event: "Tahajjud & Fajr", s1Desc: "Awakening for pre-dawn prayers and spiritual reflection.",
  s2Event: "Breakfast", s2Desc: "Nutritious start to the day in the main dining hall.",
  s3Event: "Morning Classes", s3Desc: "Core Dars-e-Nizami modules and lectures.",
  s4Event: "Zuhr & Lunch", s4Desc: "Midday prayer followed by lunch and brief rest.",
  s5Event: "Afternoon Study", s5Desc: "Library time, Muzakarah, and revisions.",
  s6Event: "Asr & Recreation", s6Desc: "Sports, physical activities, and relaxation.",
  s7Event: "Maghrib & Dinner", s7Desc: "Evening prayer and communal dining.",
  s8Event: "Isha & Sleep", s8Desc: "Final prayers and lights out to ensure a healthy rest.",
  ctaTitle: "Plan a Campus Tour", ctaDesc: "We highly encourage prospective students and their parents to visit our campus and experience the boarding facilities firsthand before making a decision.", ctaBtn: "Schedule a Visit"
});

Object.assign(ta.boarding, {
  feat1Title: "24/7 பாதுகாப்பு", feat1Desc: "பாதுகாப்பை உறுதி செய்ய அர்ப்பணிப்புள்ள காவலர்களுடன் கண்காணிக்கப்படும் வளாகம்.",
  feat2Title: "ஹலால் உணவு", feat2Desc: "தினமும் மூன்று சத்தான, சுகாதாரமான முறையில் தயாரிக்கப்பட்ட உணவுகள் வழங்கப்படுகின்றன.",
  feat3Title: "கட்டமைக்கப்பட்ட வழக்கம்", feat3Desc: "ஓய்வு, படிப்பு மற்றும் பாடநெறி சாராத செயல்பாடுகளுக்கான திட்டமிடப்பட்ட நேரங்கள்.",
  feat4Title: "பொழுதுபோக்கு", feat4Desc: "வசதியான பொது அறைகள் மற்றும் பிரத்யேக விளையாட்டு வசதிகள்.",
  quartersDesc: "எங்கள் தங்குமிடங்கள் மாணவர்களின் வசதி மற்றும் கவனத்தை மனதில் கொண்டு வடிவமைக்கப்பட்டுள்ளன. சுத்தமான, விசாலமான மற்றும் நன்கு ஒளிரும், கடுமையான கல்வியியல் தேடல்களுக்குப் பிறகு ஓய்வெடுக்க சிறந்த சூழலை அவை வழங்குகின்றன.",
  q1: "காலநிலை கட்டுப்படுத்தப்பட்ட அறைகள்", q2: "ஒவ்வொரு மாணவருக்கும் பிரத்யேக ஆய்வு மேசைகள்", q3: "பிரீமியம் பிளாக்குகளில் உள்-சூட் கழுவும் வசதிகள்", q4: "வாராந்திர சலவை சேவைகள்",
  scheduleDesc: "ஆன்மீக வளர்ச்சி, கல்வியியல் உட்கொள்ளல் மற்றும் உடல் நல்வாழ்வை அதிகரிக்க வடிவமைக்கப்பட்ட ஒரு கட்டமைக்கப்பட்ட வழக்கம்.",
  s1Event: "தஹஜ்ஜுத் & ஃபஜ்ர்", s1Desc: "விடியற்காலை பிரார்த்தனைகள் மற்றும் ஆன்மீக சிந்தனைக்கான விழிப்புணர்வு.",
  s2Event: "காலை உணவு", s2Desc: "பிரதான உணவுக் கூடத்தில் நாளுக்கு சத்தான ஆரம்பம்.",
  s3Event: "காலை வகுப்புகள்", s3Desc: "முக்கிய தர்ஸ்-இ-நிஜாமி தொகுதிகள் மற்றும் விரிவுரைகள்.",
  s4Event: "ஜுஹ்ர் & மதிய உணவு", s4Desc: "நண்பகல் பிரார்த்தனை, அதைத் தொடர்ந்து மதிய உணவு மற்றும் சுருக்கமான ஓய்வு.",
  s5Event: "பிற்பகல் படிப்பு", s5Desc: "நூலக நேரம், முஸகரா மற்றும் திருத்தங்கள்.",
  s6Event: "அஸ்ர் & பொழுதுபோக்கு", s6Desc: "விளையாட்டு, உடல் செயல்பாடுகள் மற்றும் தளர்வு.",
  s7Event: "மக்ரிப் & இரவு உணவு", s7Desc: "மாலை பிரார்த்தனை மற்றும் வகுப்புவாத உணவு.",
  s8Event: "இஷா & தூக்கம்", s8Desc: "ஆரோக்கியமான ஓய்வை உறுதி செய்ய இறுதி பிரார்த்தனைகள் மற்றும் விளக்குகள் அணைக்கப்படும்.",
  ctaTitle: "வளாக சுற்றுப்பயணத்தை திட்டமிடுங்கள்", ctaDesc: "வருங்கால மாணவர்களும் அவர்களது பெற்றோர்களும் எங்கள் வளாகத்தைப் பார்வையிடவும், ஒரு முடிவை எடுப்பதற்கு முன் விடுதி வசதிகளை நேரடியாக அனுபவிக்கவும் நாங்கள் மிகவும் ஊக்குவிக்கிறோம்.", ctaBtn: "வருகையை திட்டமிடுங்கள்"
});

Object.assign(ur.boarding, {
  feat1Title: "24/7 سیکیورٹی", feat1Desc: "حفاظت کو یقینی بنانے کے لیے سرشار وارڈنز کے ساتھ زیر نگرانی احاطہ۔",
  feat2Title: "حلال ڈائننگ", feat2Desc: "روزانہ تین غذائیت سے بھرپور، حفظان صحت کے مطابق تیار کردہ کھانا پیش کیا جاتا ہے۔",
  feat3Title: "ساختہ معمول", feat3Desc: "آرام، مطالعہ، اور غیر نصابی سرگرمیوں کے لیے مقررہ اوقات۔",
  feat4Title: "تفریح", feat4Desc: "آرام دہ کامن رومز اور کھیلوں کی مخصوص سہولیات۔",
  quartersDesc: "ہمارے ہاسٹلز طالب علم کے آرام اور توجہ کو مدنظر رکھتے ہوئے بنائے گئے ہیں۔ صاف ستھرا، کشادہ، اور اچھی طرح سے روشن، وہ سخت تعلیمی مشاغل کے بعد آرام کے لیے ایک مثالی ماحول فراہم کرتے ہیں۔",
  q1: "آب و ہوا کے زیر کنٹرول کمرے", q2: "ہر طالب علم کے لیے مطالعہ کے لیے مخصوص میزیں", q3: "پریمیم بلاکس میں این سویٹ دھونے کی سہولیات", q4: "ہفتہ وار لانڈری کی خدمات",
  scheduleDesc: "روحانی ترقی، تعلیمی حصول، اور جسمانی تندرستی کو زیادہ سے زیادہ کرنے کے لیے ڈیزائن کیا گیا ایک منظم معمول۔",
  s1Event: "تہجد اور فجر", s1Desc: "فجر سے پہلے کی نماز اور روحانی غور و فکر کے لیے بیداری۔",
  s2Event: "ناشتہ", s2Desc: "مرکزی ڈائننگ ہال میں دن کا غذائیت سے بھرپور آغاز۔",
  s3Event: "صبح کی کلاسیں", s3Desc: "بنیادی درس نظامی کے ماڈیولز اور لیکچرز۔",
  s4Event: "ظہر اور دوپہر کا کھانا", s4Desc: "دوپہر کی نماز، اس کے بعد دوپہر کا کھانا اور مختصر آرام۔",
  s5Event: "دوپہر کا مطالعہ", s5Desc: "لائبریری کا وقت، مذاکرہ، اور دہرائی۔",
  s6Event: "عصر اور تفریح", s6Desc: "کھیل، جسمانی سرگرمیاں، اور آرام۔",
  s7Event: "مغرب اور رات کا کھانا", s7Desc: "شام کی نماز اور اجتماعی کھانا۔",
  s8Event: "عشاء اور نیند", s8Desc: "صحت مند آرام کو یقینی بنانے کے لیے آخری نمازیں اور بتیاں بند۔",
  ctaTitle: "کیمپس ٹور کا منصوبہ بنائیں", ctaDesc: "ہم ممکنہ طلباء اور ان کے والدین کی بھرپور حوصلہ افزائی کرتے ہیں کہ وہ کوئی بھی فیصلہ کرنے سے پہلے ہمارے کیمپس کا دورہ کریں اور بورڈنگ کی سہولیات کا براہ راست تجربہ کریں۔", ctaBtn: "دورے کا شیڈول بنائیں"
});
fs.writeFileSync(path.join(__dirname, '../src/pages/Boarding.tsx'), boardingTsx);


// ======== CONTACT ========
const contactTsx = `import React from 'react';
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
`;

Object.assign(en.contact, {
  addressTitle: "Campus Address", address1: "123 Seeker's Path,", address2: "Knowledge Valley,", address3: "City Name, Country 12345",
  phoneTitle: "Phone", phone1: "Main: +1 (555) 123-4567", phone2: "Admissions: +1 (555) 987-6543",
  emailTitle: "Email", email1: "info@dawoodiya.edu", email2: "admissions@dawoodiya.edu",
  hoursTitle: "Office Hours", hoursDesc: "Our administration office is available to assist you during the following hours:",
  monThu: "Monday - Thursday:", monThuTime: "9:00 AM - 4:00 PM",
  fri: "Friday:", friTime: "9:00 AM - 12:00 PM", satSun: "Saturday & Sunday:", closed: "Closed",
  formDesc: "Fill out the form below and our team will get back to you within 24-48 business hours.",
  firstName: "First Name", firstNamePh: "John", lastName: "Last Name", lastNamePh: "Doe",
  emailAddr: "Email Address", emailPh: "john@example.com", subject: "Subject of Inquiry",
  subjGeneral: "General Inquiry", subjAdmissions: "Admissions", subjDonations: "Donations & Support", subjLibrary: "Library Archives",
  message: "Your Message", messagePh: "How can we help you?", sendBtn: "Send Message"
});

Object.assign(ta.contact, {
  addressTitle: "வளாக முகவரி", address1: "123 தேடுபவரின் பாதை,", address2: "அறிவு பள்ளத்தாக்கு,", address3: "நகரத்தின் பெயர், நாடு 12345",
  phoneTitle: "தொலைபேசி", phone1: "பிரதானம்: +1 (555) 123-4567", phone2: "சேர்க்கை: +1 (555) 987-6543",
  emailTitle: "மின்னஞ்சல்", email1: "info@dawoodiya.edu", email2: "admissions@dawoodiya.edu",
  hoursTitle: "அலுவலக நேரம்", hoursDesc: "பின்வரும் நேரங்களில் உங்களுக்கு உதவ எங்கள் நிர்வாக அலுவலகம் உள்ளது:",
  monThu: "திங்கள் - வியாழன்:", monThuTime: "காலை 9:00 - மாலை 4:00",
  fri: "வெள்ளி:", friTime: "காலை 9:00 - மதியம் 12:00", satSun: "சனி & ஞாயிறு:", closed: "மூடப்பட்டது",
  formDesc: "கீழே உள்ள படிவத்தை நிரப்பவும், எங்கள் குழு 24-48 வணிக நேரங்களுக்குள் உங்களைத் தொடர்பு கொள்ளும்.",
  firstName: "முதல் பெயர்", firstNamePh: "ஜான்", lastName: "கடைசி பெயர்", lastNamePh: "டோ",
  emailAddr: "மின்னஞ்சல் முகவரி", emailPh: "john@example.com", subject: "விசாரணை பொருள்",
  subjGeneral: "பொது விசாரணை", subjAdmissions: "சேர்க்கை", subjDonations: "நன்கொடைகள் & ஆதரவு", subjLibrary: "நூலகக் காப்பகங்கள்",
  message: "உங்கள் செய்தி", messagePh: "நாங்கள் உங்களுக்கு எவ்வாறு உதவ முடியும்?", sendBtn: "செய்தி அனுப்பு"
});

Object.assign(ur.contact, {
  addressTitle: "کیمپس کا پتہ", address1: "123 طالب علم کا راستہ،", address2: "نالج ویلی،", address3: "شہر کا نام، ملک 12345",
  phoneTitle: "فون", phone1: "مین: +1 (555) 123-4567", phone2: "داخلے: +1 (555) 987-6543",
  emailTitle: "ای میل", email1: "info@dawoodiya.edu", email2: "admissions@dawoodiya.edu",
  hoursTitle: "دفتری اوقات", hoursDesc: "ہمارا انتظامی دفتر درج ذیل اوقات میں آپ کی مدد کے لیے دستیاب ہے:",
  monThu: "پیر - جمعرات:", monThuTime: "صبح 9:00 - شام 4:00",
  fri: "جمعہ:", friTime: "صبح 9:00 - دوپہر 12:00", satSun: "ہفتہ اور اتوار:", closed: "بند",
  formDesc: "نیچے دیا گیا فارم پُر کریں اور ہماری ٹیم 24-48 کاروباری گھنٹوں کے اندر آپ سے رابطہ کرے گی۔",
  firstName: "پہلا نام", firstNamePh: "جان", lastName: "آخری نام", lastNamePh: "ڈو",
  emailAddr: "ای میل ایڈریس", emailPh: "john@example.com", subject: "انکوائری کا موضوع",
  subjGeneral: "عمومی انکوائری", subjAdmissions: "داخلہ", subjDonations: "عطیات اور تعاون", subjLibrary: "لائبریری آرکائیوز",
  message: "آپ کا پیغام", messagePh: "ہم آپ کی کیا مدد کر سکتے ہیں؟", sendBtn: "پیغام بھیجیں"
});
fs.writeFileSync(path.join(__dirname, '../src/pages/Contact.tsx'), contactTsx);

// Write JSONs
fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(taFile, JSON.stringify(ta, null, 2));
fs.writeFileSync(urFile, JSON.stringify(ur, null, 2));
console.log("Done Boarding and Contact");
