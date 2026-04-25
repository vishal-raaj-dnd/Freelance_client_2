import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  isSameMonth, 
  isSameDay, 
  isToday,
  parseISO
} from 'date-fns';
import { cn } from '../utils/cn';

interface AppEvent {
  id: string;
  title: string;
  date: string; // ISO date string e.g. '2026-05-15'
  time: string;
  location: string;
  description: string;
  type: 'commemoration' | 'lecture' | 'community' | 'academic';
}

const SAMPLE_EVENTS: AppEvent[] = [
  {
    id: '1',
    title: 'Intensive Hadith Seminar',
    date: '2026-05-05',
    time: '14:00 - 18:00',
    location: 'Main Prayer Hall',
    description: 'A weekend deep-dive into the narrations of Sahih Bukhari with visiting scholars from Al-Azhar.',
    type: 'academic'
  },
  {
    id: '2',
    title: 'Community Iftar & Gathering',
    date: '2026-05-05',
    time: '18:30 - 20:30',
    location: 'Courtyard',
    description: 'A spiritual evening of remembrance and breaking fast together as a community.',
    type: 'community'
  },
  {
    id: '3',
    title: 'Monthly Seerah Lecture',
    date: '2026-05-12',
    time: '19:00 - 21:00',
    location: 'Lecture Hall A',
    description: 'Ongoing series covering the life of the Prophet ﷺ. This month focusing on the Medinan period.',
    type: 'lecture'
  },
  {
    id: '4',
    title: 'Annual Quran Competition',
    date: '2026-05-20',
    time: '09:00 - 17:00',
    location: 'Grand Auditorium',
    description: 'Students from across the region compete in memorization and recitation of the Holy Quran.',
    type: 'academic'
  },
  {
    id: '5',
    title: 'Youth Retreat: Navigating Modernity',
    date: '2026-05-25',
    time: '10:00 - 16:00',
    location: 'Youth Center',
    description: 'Interactive workshops and discussions aimed at helping youth maintain their faith in modern times.',
    type: 'community'
  },
  {
    id: '6',
    title: 'Commemoration of Badr',
    date: '2026-06-02',
    time: '20:00 - 22:00',
    location: 'Main Prayer Hall',
    description: 'Special night of remembrance and reflections on the lessons from the Battle of Badr.',
    type: 'commemoration'
  }
];

const TYPE_COLORS = {
  commemoration: 'bg-surface border-primary text-secondary',
  lecture: 'bg-bg-base border-tertiary text-primary',
  community: 'bg-surface border-transparent text-secondary',
  academic: 'bg-bg-base border-primary/50 text-primary'
};

export function Events() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 4, 1)); // Starting in May 2026 as per our sample data
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  
  const onDateClick = (day: Date) => {
    if (selectedDate && isSameDay(day, selectedDate)) {
      setSelectedDate(null); // toggle off
    } else {
      setSelectedDate(day);
    }
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dateFormat = "d";
  const days = eachDayOfInterval({
    start: startDate,
    end: endDate
  });

  const eventsForSelectedDate = selectedDate 
    ? SAMPLE_EVENTS.filter(e => isSameDay(parseISO(e.date), selectedDate))
    : SAMPLE_EVENTS.filter(e => isSameMonth(parseISO(e.date), currentMonth));
    
  // Sort events by date
  eventsForSelectedDate.sort((a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime());

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 w-full">
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-4 tracking-tight drop-shadow-lg">
          Events & Commemorations
        </h1>
        <p className="text-lg md:text-xl text-primary/80 font-medium max-w-2xl leading-relaxed">
          Join our gatherings of knowledge, remembrance, and community. Discover upcoming events at Dawoodiya.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column - Calendar */}
        <div className="lg:col-span-5 xl:col-span-4">
          <Card className="!p-6 sticky top-24 bg-surface border border-primary/20">
            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-serif font-bold text-primary">
                {format(currentMonth, 'MMMM yyyy')}
              </h2>
              <div className="flex gap-2">
                <button 
                  onClick={prevMonth}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-bg-base text-primary border border-primary/20 hover:bg-primary hover:text-inverted transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  onClick={nextMonth}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-bg-base text-primary border border-primary/20 hover:bg-primary hover:text-inverted transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Days of week */}
            <div className="grid grid-cols-7 mb-2 text-center">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                <div key={d} className="text-xs font-bold text-primary/60 py-2">
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {days.map((day, i) => {
                const isSelected = selectedDate && isSameDay(day, selectedDate);
                const isCurrentMonth = isSameMonth(day, currentMonth);
                const hasEvents = SAMPLE_EVENTS.some(e => isSameDay(parseISO(e.date), day));
                const dayIsToday = isToday(day);
                
                return (
                  <div 
                    key={day.toString()} 
                    className="aspect-square p-[1px]"
                  >
                    <button
                      onClick={() => onDateClick(day)}
                      disabled={!isCurrentMonth}
                      className={cn(
                        "w-full h-full flex flex-col items-center justify-center rounded-lg transition-all relative text-sm font-medium",
                        !isCurrentMonth ? "text-primary/20 cursor-default" : "text-primary hover:bg-bg-base border border-transparent hover:border-primary/20 cursor-pointer",
                        isSelected && "bg-primary text-inverted hover:bg-secondary font-bold shadow-[0_0_15px_rgba(220,203,164,0.3)] hover:border-transparent",
                        dayIsToday && !isSelected && "border-primary text-secondary bg-bg-base",
                      )}
                    >
                      <span>{format(day, dateFormat)}</span>
                      {hasEvents && isCurrentMonth && (
                        <span className={cn(
                          "absolute bottom-1.5 w-1 h-1 rounded-full",
                          isSelected ? "bg-bg-base" : "bg-secondary"
                        )}></span>
                      )}
                    </button>
                  </div>
                )
              })}
            </div>

            {selectedDate && (
              <div className="mt-6 pt-6 border-t border-primary/20 text-center">
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedDate(null)}
                  className="text-xs w-full py-2 hover:bg-bg-base"
                >
                  View All Events in {format(currentMonth, 'MMM')}
                </Button>
              </div>
            )}
          </Card>
        </div>

        {/* Right Column - Event List */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-serif text-primary">
              {selectedDate 
                ? `Events for ${format(selectedDate, 'MMMM d, yyyy')}` 
                : `Upcoming in ${format(currentMonth, 'MMMM yyyy')}`}
            </h3>
            <span className="text-sm font-medium text-primary/60 bg-surface px-3 py-1 rounded-full border border-primary/10">
              {eventsForSelectedDate.length} {eventsForSelectedDate.length === 1 ? 'Event' : 'Events'}
            </span>
          </div>

          <AnimatePresence mode="popLayout">
            {eventsForSelectedDate.length > 0 ? (
              eventsForSelectedDate.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className={cn(
                    "flex flex-col sm:flex-row gap-6 !p-6 md:!p-8 transition-all hover:bg-surface group border-l-4",
                    TYPE_COLORS[event.type].split(' ')[1] !== 'border-transparent' 
                      ? TYPE_COLORS[event.type].split(' ')[1] 
                      : "border-transparent border-t border-r border-b border-primary/10"
                  )}>
                    {/* Date/Time Block (Desktop) */}
                    <div className="hidden sm:flex flex-col items-center justify-center shrink-0 w-24 border-r border-primary/10 pr-6 text-center">
                      <span className="text-sm font-bold text-primary/60 uppercase tracking-wider mb-1">
                        {format(parseISO(event.date), 'MMM')}
                      </span>
                      <span className="text-4xl font-serif font-bold text-primary leading-none mb-2 group-hover:text-primary transition-colors">
                        {format(parseISO(event.date), 'dd')}
                      </span>
                      <span className="text-xs font-medium text-primary/80">
                        {format(parseISO(event.date), 'EEE')}
                      </span>
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        {/* Mobile Date Badge */}
                        <div className="sm:hidden bg-surface px-3 py-1 rounded-md border border-primary/20 flex items-center gap-2 text-primary text-xs font-bold shrink-0">
                          <CalendarIcon size={12} className="text-primary" />
                          {format(parseISO(event.date), 'MMM dd')}
                        </div>
                        
                        <span className="text-xs uppercase tracking-widest font-bold text-primary/80">
                          {event.type}
                        </span>
                      </div>
                      
                      <h4 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                        {event.title}
                      </h4>
                      
                      <p className="text-primary/80 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
                        {event.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-primary/90 mt-auto">
                        <div className="flex items-center gap-1.5 bg-bg-base px-3 py-1.5 rounded-full border border-primary/10">
                          <Clock size={14} className="text-primary/60" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-bg-base px-3 py-1.5 rounded-full border border-primary/10">
                          <MapPin size={14} className="text-primary/60" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center bg-surface/50 rounded-[2rem] border border-primary/10"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-bg-base flex items-center justify-center border border-primary/20 text-primary/40">
                  <CalendarIcon size={24} />
                </div>
                <h4 className="text-xl font-serif text-primary mb-2">No events found</h4>
                <p className="text-primary/60">
                  There are no scheduled events for this date.
                </p>
                {selectedDate && (
                  <Button 
                    variant="outline" 
                    className="mt-6"
                    onClick={() => setSelectedDate(null)}
                  >
                    View entire month
                  </Button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
