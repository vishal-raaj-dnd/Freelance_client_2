const fs = require('fs');
const path = require('path');

const localesPath = path.join(__dirname, '../src/locales');
const enFile = path.join(localesPath, 'en.json');
const taFile = path.join(localesPath, 'ta.json');
const urFile = path.join(localesPath, 'ur.json');

const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const ta = JSON.parse(fs.readFileSync(taFile, 'utf8'));
const ur = JSON.parse(fs.readFileSync(urFile, 'utf8'));

// ======== EVENTS ========
const eventsTsx = `import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';
import { 
  format, addMonths, subMonths, startOfMonth, endOfMonth, 
  startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, 
  isSameDay, isToday, parseISO
} from 'date-fns';
import { cn } from '../utils/cn';
import { useTranslation } from 'react-i18next';

interface AppEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'commemoration' | 'lecture' | 'community' | 'academic';
}

const TYPE_COLORS = {
  commemoration: 'bg-surface border-primary text-secondary',
  lecture: 'bg-bg-base border-tertiary text-primary',
  community: 'bg-surface border-transparent text-secondary',
  academic: 'bg-bg-base border-primary/50 text-primary'
};

export function Events() {
  const { t } = useTranslation();
  
  const SAMPLE_EVENTS: AppEvent[] = [
    {
      id: '1', title: t('events.e1Title'), date: '2026-05-05', time: '14:00 - 18:00', location: t('events.e1Loc'), description: t('events.e1Desc'), type: 'academic'
    },
    {
      id: '2', title: t('events.e2Title'), date: '2026-05-05', time: '18:30 - 20:30', location: t('events.e2Loc'), description: t('events.e2Desc'), type: 'community'
    },
    {
      id: '3', title: t('events.e3Title'), date: '2026-05-12', time: '19:00 - 21:00', location: t('events.e3Loc'), description: t('events.e3Desc'), type: 'lecture'
    },
    {
      id: '4', title: t('events.e4Title'), date: '2026-05-20', time: '09:00 - 17:00', location: t('events.e4Loc'), description: t('events.e4Desc'), type: 'academic'
    },
    {
      id: '5', title: t('events.e5Title'), date: '2026-05-25', time: '10:00 - 16:00', location: t('events.e5Loc'), description: t('events.e5Desc'), type: 'community'
    },
    {
      id: '6', title: t('events.e6Title'), date: '2026-06-02', time: '20:00 - 22:00', location: t('events.e6Loc'), description: t('events.e6Desc'), type: 'commemoration'
    }
  ];

  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 4, 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  
  const onDateClick = (day: Date) => {
    if (selectedDate && isSameDay(day, selectedDate)) setSelectedDate(null);
    else setSelectedDate(day);
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dateFormat = "d";
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const eventsForSelectedDate = selectedDate 
    ? SAMPLE_EVENTS.filter(e => isSameDay(parseISO(e.date), selectedDate))
    : SAMPLE_EVENTS.filter(e => isSameMonth(parseISO(e.date), currentMonth));
    
  eventsForSelectedDate.sort((a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime());

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 w-full">
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-4 tracking-tight drop-shadow-lg">
          {t('events.title')}
        </h1>
        <p className="text-lg md:text-xl text-primary/80 font-medium max-w-2xl leading-relaxed">
          {t('events.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5 xl:col-span-4">
          <Card className="!p-6 sticky top-24 bg-surface border border-primary/20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-serif font-bold text-primary">
                {format(currentMonth, 'MMMM yyyy')}
              </h2>
              <div className="flex gap-2">
                <button onClick={prevMonth} className="w-8 h-8 flex items-center justify-center rounded-full bg-bg-base text-primary border border-primary/20 hover:bg-primary hover:text-inverted transition-colors"><ChevronLeft size={18} /></button>
                <button onClick={nextMonth} className="w-8 h-8 flex items-center justify-center rounded-full bg-bg-base text-primary border border-primary/20 hover:bg-primary hover:text-inverted transition-colors"><ChevronRight size={18} /></button>
              </div>
            </div>

            <div className="grid grid-cols-7 mb-2 text-center">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className="text-xs font-bold text-primary/60 py-2">{d}</div>)}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {days.map((day, i) => {
                const isSelected = selectedDate && isSameDay(day, selectedDate);
                const isCurrentMonth = isSameMonth(day, currentMonth);
                const hasEvents = SAMPLE_EVENTS.some(e => isSameDay(parseISO(e.date), day));
                const dayIsToday = isToday(day);
                
                return (
                  <div key={day.toString()} className="aspect-square p-[1px]">
                    <button
                      onClick={() => onDateClick(day)} disabled={!isCurrentMonth}
                      className={cn(
                        "w-full h-full flex flex-col items-center justify-center rounded-lg transition-all relative text-sm font-medium",
                        !isCurrentMonth ? "text-primary/20 cursor-default" : "text-primary hover:bg-bg-base border border-transparent hover:border-primary/20 cursor-pointer",
                        isSelected && "bg-primary text-inverted hover:bg-secondary font-bold shadow-[0_0_15px_rgba(220,203,164,0.3)] hover:border-transparent",
                        dayIsToday && !isSelected && "border-primary text-secondary bg-bg-base",
                      )}
                    >
                      <span>{format(day, dateFormat)}</span>
                      {hasEvents && isCurrentMonth && <span className={cn("absolute bottom-1.5 w-1 h-1 rounded-full", isSelected ? "bg-bg-base" : "bg-secondary")}></span>}
                    </button>
                  </div>
                )
              })}
            </div>

            {selectedDate && (
              <div className="mt-6 pt-6 border-t border-primary/20 text-center">
                <Button variant="outline" onClick={() => setSelectedDate(null)} className="text-xs w-full py-2 hover:bg-bg-base">
                  {t('events.viewAll')} {format(currentMonth, 'MMM')}
                </Button>
              </div>
            )}
          </Card>
        </div>

        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-serif text-primary">
              {selectedDate ? \`\${t('events.eventsFor')} \${format(selectedDate, 'MMMM d, yyyy')}\` : \`\${t('events.upcomingIn')} \${format(currentMonth, 'MMMM yyyy')}\`}
            </h3>
            <span className="text-sm font-medium text-primary/60 bg-surface px-3 py-1 rounded-full border border-primary/10">
              {eventsForSelectedDate.length} {eventsForSelectedDate.length === 1 ? t('events.event') : t('events.events')}
            </span>
          </div>

          <AnimatePresence mode="popLayout">
            {eventsForSelectedDate.length > 0 ? (
              eventsForSelectedDate.map((event, index) => (
                <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, delay: index * 0.05 }}>
                  <Card className={cn(
                    "flex flex-col sm:flex-row gap-6 !p-6 md:!p-8 transition-all hover:bg-surface group border-l-4",
                    TYPE_COLORS[event.type].split(' ')[1] !== 'border-transparent' ? TYPE_COLORS[event.type].split(' ')[1] : "border-transparent border-t border-r border-b border-primary/10"
                  )}>
                    <div className="hidden sm:flex flex-col items-center justify-center shrink-0 w-24 border-r border-primary/10 pr-6 text-center">
                      <span className="text-sm font-bold text-primary/60 uppercase tracking-wider mb-1">{format(parseISO(event.date), 'MMM')}</span>
                      <span className="text-4xl font-serif font-bold text-primary leading-none mb-2 group-hover:text-primary transition-colors">{format(parseISO(event.date), 'dd')}</span>
                      <span className="text-xs font-medium text-primary/80">{format(parseISO(event.date), 'EEE')}</span>
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="sm:hidden bg-surface px-3 py-1 rounded-md border border-primary/20 flex items-center gap-2 text-primary text-xs font-bold shrink-0">
                          <CalendarIcon size={12} className="text-primary" /> {format(parseISO(event.date), 'MMM dd')}
                        </div>
                        <span className="text-xs uppercase tracking-widest font-bold text-primary/80">{event.type}</span>
                      </div>
                      
                      <h4 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{event.title}</h4>
                      <p className="text-primary/80 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">{event.description}</p>

                      <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-primary/90 mt-auto">
                        <div className="flex items-center gap-1.5 bg-bg-base px-3 py-1.5 rounded-full border border-primary/10">
                          <Clock size={14} className="text-primary/60" /> <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-bg-base px-3 py-1.5 rounded-full border border-primary/10">
                          <MapPin size={14} className="text-primary/60" /> <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-20 text-center bg-surface/50 rounded-[2rem] border border-primary/10">
                <div className="w-16 h-16 mb-4 rounded-full bg-bg-base flex items-center justify-center border border-primary/20 text-primary/40"><CalendarIcon size={24} /></div>
                <h4 className="text-xl font-serif text-primary mb-2">{t('events.noEventsFound')}</h4>
                <p className="text-primary/60">{t('events.noEventsDesc')}</p>
                {selectedDate && <Button variant="outline" className="mt-6" onClick={() => setSelectedDate(null)}>{t('events.viewEntireMonth')}</Button>}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
`;


// ======== LIBRARY ========
const libraryTsx = `import React, { useState } from 'react';
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
`;


Object.assign(en.events, {
  e1Title: "Intensive Hadith Seminar", e1Desc: "A weekend deep-dive into the narrations of Sahih Bukhari with visiting scholars from Al-Azhar.", e1Loc: "Main Prayer Hall",
  e2Title: "Community Iftar & Gathering", e2Desc: "A spiritual evening of remembrance and breaking fast together as a community.", e2Loc: "Courtyard",
  e3Title: "Monthly Seerah Lecture", e3Desc: "Ongoing series covering the life of the Prophet ﷺ. This month focusing on the Medinan period.", e3Loc: "Lecture Hall A",
  e4Title: "Annual Quran Competition", e4Desc: "Students from across the region compete in memorization and recitation of the Holy Quran.", e4Loc: "Grand Auditorium",
  e5Title: "Youth Retreat: Navigating Modernity", e5Desc: "Interactive workshops and discussions aimed at helping youth maintain their faith in modern times.", e5Loc: "Youth Center",
  e6Title: "Commemoration of Badr", e6Desc: "Special night of remembrance and reflections on the lessons from the Battle of Badr.", e6Loc: "Main Prayer Hall",
  viewAll: "View All Events in", eventsFor: "Events for", upcomingIn: "Upcoming in", event: "Event", events: "Events",
  noEventsFound: "No events found", noEventsDesc: "There are no scheduled events for this date.", viewEntireMonth: "View entire month"
});

Object.assign(ta.events, {
  e1Title: "தீவிர ஹதீஸ் கருத்தரங்கு", e1Desc: "அல்-அஸ்ஹரிலிருந்து வருகை தரும் அறிஞர்களுடன் சாஹிஹ் புகாரியின் விவரிப்புகளில் ஒரு வார இறுதி ஆழமான பார்வை.", e1Loc: "பிரதான பிரார்த்தனை மண்டபம்",
  e2Title: "சமூக இஃப்தார் & ஒன்றுகூடல்", e2Desc: "ஒரு சமூகமாக ஒன்றாக நோன்பு திறக்கும் மற்றும் நினைவூட்டும் ஒரு ஆன்மீக மாலை.", e2Loc: "முற்றம்",
  e3Title: "மாதாந்திர சீரா விரிவுரை", e3Desc: "நபிகள் நாயகம் ﷺ அவர்களின் வாழ்க்கையை உள்ளடக்கிய தொடர். இந்த மாதம் மதீனா காலத்தை மையமாகக் கொண்டது.", e3Loc: "விரிவுரை மண்டபம் ஏ",
  e4Title: "வருடாந்திர குர்ஆன் போட்டி", e4Desc: "இப்பகுதி முழுவதிலுமிருந்து வரும் மாணவர்கள் திருக்குர்ஆனை மனப்பாடம் செய்தல் மற்றும் ஓதுதல் ஆகியவற்றில் போட்டியிடுகின்றனர்.", e4Loc: "பெரிய அரங்கம்",
  e5Title: "இளைஞர் பின்வாங்கல்: நவீனத்தை வழிநடத்துதல்", e5Desc: "நவீன காலங்களில் இளைஞர்கள் தங்கள் நம்பிக்கையைத் தக்க வைத்துக் கொள்ள உதவும் ஊடாடும் பட்டறைகள் மற்றும் விவாதங்கள்.", e5Loc: "இளைஞர் மையம்",
  e6Title: "பத்ரின் நினைவேந்தல்", e6Desc: "பத்ர் போரின் பாடங்கள் பற்றிய சிறப்பான நினைவேந்தல் மற்றும் பிரதிபலிப்புகளின் இரவு.", e6Loc: "பிரதான பிரார்த்தனை மண்டபம்",
  viewAll: "அனைத்து நிகழ்வுகளையும் காண்க", eventsFor: "நிகழ்வுகள்", upcomingIn: "வரவிருக்கும்", event: "நிகழ்வு", events: "நிகழ்வுகள்",
  noEventsFound: "எந்த நிகழ்வுகளும் காணப்படவில்லை", noEventsDesc: "இந்த தேதிக்கு திட்டமிடப்பட்ட நிகழ்வுகள் எதுவும் இல்லை.", viewEntireMonth: "முழு மாதத்தையும் காண்க"
});

Object.assign(ur.events, {
  e1Title: "گہرا حدیث سیمینار", e1Desc: "الازہر کے آنے والے اسکالرز کے ساتھ صحیح بخاری کی روایات میں ایک ویک اینڈ ڈیپ ڈائیو۔", e1Loc: "مرکزی نماز کا ہال",
  e2Title: "کمیونٹی افطار اور اجتماع", e2Desc: "یاد اور بحیثیت کمیونٹی ایک ساتھ روزہ افطار کرنے کی روحانی شام۔", e2Loc: "صحن",
  e3Title: "ماہانہ سیرت لیکچر", e3Desc: "نبی کریم ﷺ کی زندگی پر جاری سلسلہ۔ اس ماہ مدنی دور پر توجہ مرکوز ہے۔", e3Loc: "لیکچر ہال اے",
  e4Title: "سالانہ قرآن مقابلہ", e4Desc: "خطے بھر کے طلباء قرآن پاک کے حفظ اور تلاوت میں حصہ لیتے ہیں۔", e4Loc: "گرینڈ آڈیٹوریم",
  e5Title: "یوتھ ریٹریٹ: جدیدیت کو نیویگیٹ کرنا", e5Desc: "نوجوانوں کو جدید دور میں اپنے ایمان کو برقرار رکھنے میں مدد کرنے کے مقصد سے انٹرایکٹو ورکشاپس اور مباحثے۔", e5Loc: "یوتھ سینٹر",
  e6Title: "یوم بدر", e6Desc: "جنگ بدر کے اسباق کی یاد اور عکاسی کی خصوصی رات۔", e6Loc: "مرکزی نماز کا ہال",
  viewAll: "میں تمام واقعات دیکھیں", eventsFor: "کے لیے واقعات", upcomingIn: "میں آنے والے", event: "واقعہ", events: "واقعات",
  noEventsFound: "کوئی واقعہ نہیں ملا", noEventsDesc: "اس تاریخ کے لیے کوئی طے شدہ واقعہ نہیں ہے۔", viewEntireMonth: "پورا مہینہ دیکھیں"
});


Object.assign(en.library, {
  searchPh: "Search by title, author...",
  c1: "Tafsir & Quranic Sciences", c2: "Hadith & Commentaries", c3: "Islamic Jurisprudence (Fiqh)", c4: "Theology (Aqidah)", c5: "History & Biographies", c6: "Arabic Grammar & Rhetoric",
  digitalAccess: "Digital Access", digitalDesc: "Students have full access to our digitized rare manuscript portal.", loginPortal: "Login to Portal",
  newEdition: "New Edition",
  facilitiesTitle: "Facilities & Reading Rooms",
  f1Name: "Quiet Study Hall", f1Desc: "Strict silence enforced. Perfect for deep memorization and research.",
  f2Name: "Discussion Pods", f2Desc: "Group rooms for debating and revising lessons (Muzakarah).",
  f3Name: "The Manuscript Room", f3Desc: "Climate-controlled environment for viewing historical texts.",
  timingsTitle: "Library Timings",
  monThu: "Monday - Thursday", monThuTime: "08:00 AM - 10:00 PM",
  fri: "Friday", friTime1: "08:00 AM - 12:00 PM", jumuahClosed: "Closed for Jumu'ah", friTime2: "02:30 PM - 10:00 PM",
  weekends: "Weekends", weekendsTime: "09:00 AM - 05:00 PM"
});

Object.assign(ta.library, {
  searchPh: "தலைப்பு, ஆசிரியர் மூலம் தேடுக...",
  c1: "தஃப்சீர் & குர்ஆன் அறிவியல்", c2: "ஹதீஸ் & விளக்கவுரைகள்", c3: "இஸ்லாமிய சட்டவியல் (ஃபிக்ஹ்)", c4: "இறையியல் (அகீதா)", c5: "வரலாறு & வாழ்க்கை வரலாறுகள்", c6: "அரபு இலக்கணம் & சொல்லாட்சி",
  digitalAccess: "டிஜிட்டல் அணுகல்", digitalDesc: "மாணவர்கள் எங்கள் டிஜிட்டல் செய்யப்பட்ட அரிய கையெழுத்துப் பிரதி போர்ட்டலுக்கு முழு அணுகலைக் கொண்டுள்ளனர்.", loginPortal: "போர்ட்டலில் உள்நுழைக",
  newEdition: "புதிய பதிப்பு",
  facilitiesTitle: "வசதிகள் மற்றும் வாசிப்பு அறைகள்",
  f1Name: "அமைதியான ஆய்வு மண்டபம்", f1Desc: "கடுமையான மௌனம் அமல்படுத்தப்படுகிறது. ஆழ்ந்த மனப்பாடம் மற்றும் ஆராய்ச்சிக்கு ஏற்றது.",
  f2Name: "விவாத அறைகள்", f2Desc: "பாடங்களை விவாதிப்பதற்கும் திருத்துவதற்குமான குழு அறைகள் (முஸகரா).",
  f3Name: "கையெழுத்துப் பிரதி அறை", f3Desc: "வரலாற்று நூல்களைப் பார்ப்பதற்கான காலநிலை கட்டுப்படுத்தப்பட்ட சூழல்.",
  timingsTitle: "நூலக நேரம்",
  monThu: "திங்கள் - வியாழன்", monThuTime: "காலை 08:00 - இரவு 10:00",
  fri: "வெள்ளி", friTime1: "காலை 08:00 - மதியம் 12:00", jumuahClosed: "ஜும்ஆவுக்கு மூடப்பட்டது", friTime2: "பிற்பகல் 02:30 - இரவு 10:00",
  weekends: "வார இறுதி நாட்கள்", weekendsTime: "காலை 09:00 - மாலை 05:00"
});

Object.assign(ur.library, {
  searchPh: "عنوان، مصنف کے لحاظ سے تلاش کریں...",
  c1: "تفسیر اور قرآنی علوم", c2: "حدیث اور تفاسیر", c3: "اسلامی فقہ", c4: "الہیات (عقیدہ)", c5: "تاریخ اور سوانح عمری", c6: "عربی قواعد اور بیان",
  digitalAccess: "ڈیجیٹل رسائی", digitalDesc: "طلباء کو ہمارے ڈیجیٹل شدہ نایاب مخطوطات کے پورٹل تک مکمل رسائی حاصل ہے۔", loginPortal: "پورٹل میں لاگ ان کریں",
  newEdition: "نیا ایڈیشن",
  facilitiesTitle: "سہولیات اور ریڈنگ رومز",
  f1Name: "خاموش اسٹڈی ہال", f1Desc: "سخت خاموشی نافذ ہے۔ گہرے حفظ اور تحقیق کے لیے بہترین۔",
  f2Name: "ڈسکشن پوڈز", f2Desc: "اسباق پر بحث اور نظر ثانی کے لیے گروپ رومز (مذاکرہ)۔",
  f3Name: "مخطوطات کا کمرہ", f3Desc: "تاریخی نصوص دیکھنے کے لیے آب و ہوا کے زیر کنٹرول ماحول۔",
  timingsTitle: "لائبریری کے اوقات",
  monThu: "پیر - جمعرات", monThuTime: "08:00 صبح - 10:00 رات",
  fri: "جمعہ", friTime1: "08:00 صبح - 12:00 دوپہر", jumuahClosed: "جمعہ کے لیے بند ہے", friTime2: "02:30 دوپہر - 10:00 رات",
  weekends: "ویک اینڈ", weekendsTime: "09:00 صبح - 05:00 شام"
});

fs.writeFileSync(path.join(__dirname, '../src/pages/Events.tsx'), eventsTsx);
fs.writeFileSync(path.join(__dirname, '../src/pages/Library.tsx'), libraryTsx);
fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(taFile, JSON.stringify(ta, null, 2));
fs.writeFileSync(urFile, JSON.stringify(ur, null, 2));
console.log("Done Events and Library");
