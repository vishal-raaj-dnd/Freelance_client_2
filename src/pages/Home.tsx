import React, { useRef, useState, useEffect } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { BookOpen, GraduationCap, Building2, Heart, Calendar, MessageCircle, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'motion/react';

const GoldSprinkles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-secondary rounded-full opacity-50"
          initial={{
            opacity: Math.random() * 0.5 + 0.3,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [null, Math.random() * 0.8 + 0.2, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Track is 250vh long for the restored pinned scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Reverted spring settings for smoother parallax
  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1,
    restDelta: 0.001
  });

  // SVG Parallax speeds
  const backgroundY = useTransform(smoothScrollY, [0, 1], ["0%", "15%"]);

  // Sequencing text opacity over the scroll (Restored timing)
  const text1Opacity = useTransform(smoothScrollY, [0, 0.3, 0.45], [1, 1, 0]);
  const text1Y = useTransform(smoothScrollY, [0, 0.45], ["0%", "-25%"]);
  
  const text2Opacity = useTransform(smoothScrollY, [0.45, 0.6, 0.9, 1], [0, 1, 1, 1]);
  const text2Y = useTransform(smoothScrollY, [0.45, 0.6], ["20%", "0%"]);

  return (
    <div className="flex flex-col relative w-full bg-bg-base -mt-28">
      
      {/* 250vh Scroll Track for Pinned Hero (Restored) */}
      <div ref={containerRef} className="relative h-[250vh] w-full">
        
        {/* Sticky Hero Section - Stays pinned until track is scrolled */}
        <section className="sticky top-0 h-screen w-full flex flex-col justify-center text-center items-center px-6 md:px-12 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface to-bg-base">
          
          {/* Layer 1: Background Video + Parallax */}
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-[-10%] z-0"
          >
            <video 
              ref={videoRef}
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4" 
              className="w-full h-full object-cover"
              muted
              playsInline
              autoPlay
              loop
              preload="auto"
            />
          </motion.div>

          <GoldSprinkles />
          
          {/* Layer 4: Text Content Sequencing */}
          <div className="relative z-40 flex flex-col items-center w-full max-w-5xl">
            
            {/* Sequence 1 Text - Divine Monolith feel */}
            <motion.div style={{ opacity: text1Opacity, y: text1Y }} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
              <div className="bg-surface/40 backdrop-blur-md border border-primary/20 text-primary px-4 md:px-6 py-2 rounded-full mb-6 md:mb-8 inline-flex items-center gap-2 font-medium text-sm md:text-base">
                 <Heart size={14} className="fill-secondary text-primary" /> The Nocturnal Imperial Standard
              </div>
              <h1 className="text-5xl md:text-8xl font-serif text-primary mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] tracking-tight drop-shadow-2xl">
                Nurturing Hearts,<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary drop-shadow-lg z-10 relative">Illuminating Minds.</span>
              </h1>
            </motion.div>

            {/* Sequence 2 Text */}
            <motion.div style={{ opacity: text2Opacity, y: text2Y }} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pt-[5vh] px-4">
              <h1 className="text-4xl md:text-7xl font-serif text-primary mb-4 md:mb-6 leading-[1.2] md:leading-[1.1] tracking-tight drop-shadow-2xl">
                Classical Tradition.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary drop-shadow-lg z-10 relative">Modern Excellence.</span>
              </h1>
              <p className="text-lg md:text-2xl text-primary/90 max-w-2xl font-serif mb-8 md:mb-10 leading-relaxed text-center drop-shadow-lg">
                Step into Dawoodiya Masjid & Madrasah, a vibrant place where the pursuit of knowledge shapes ethical leadership.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto pointer-events-auto flex-wrap justify-center">
                <Link to="/admissions" className="w-full sm:w-auto">
                   <Button className="w-full sm:w-auto hover:scale-105 transition-transform !px-8 md:!px-10 !py-4 text-lg !bg-primary !text-inverted hover:!bg-secondary !border-none font-bold">Apply Now</Button>
                </Link>
                <Link to="/about" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto hover:bg-surface backdrop-blur-sm !px-8 md:!px-10 !py-4 text-lg !border-primary text-primary">Discover More</Button>
                </Link>
              </div>
            </motion.div>

          </div>
        </section>
      </div>

      <div className="bg-bg-base relative z-20 shadow-[0_-30px_50px_rgba(0,0,0,0.5)]">
        {/* Pillared Content contained in standard max-width */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-16">
          
          {/* Welcome Message Section */}
          <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-primary rounded-[3rem] transform rotate-3 scale-105 opacity-20"></div>
              <img src="https://picsum.photos/seed/welcome/800/800" alt="Institute" className="relative z-10 rounded-[3rem] shadow-2xl w-full h-auto object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Welcome to Dawoodiya</span>
              <h2 className="text-4xl md:text-5xl font-display text-text-main font-bold mb-6 leading-tight">Where Knowledge <br/>Meets Action</h2>
              <p className="text-text-muted font-medium text-lg leading-relaxed mb-8">
                Welcome to a sanctuary of learning and spiritual refinement. For decades, Dawoodiya has been a beacon of traditional Islamic scholarship, deeply rooted in the Quran and Sunnah, yet acutely aware of the contemporary needs of the Ummah. We invite you to join a legacy of excellence.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Complete Dars-e-Nizami Curriculum",
                  "Dedicated Hifz & Tajweed Tracks",
                  "Comprehensive Boarding Facilities",
                  "Global Alumni Network"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-bold text-text-main">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button variant="outline" className="border-2 font-bold !px-8">Read Our History</Button>
              </Link>
            </div>
          </section>

          {/* Pillars Section */}
          <section className="py-24">
            <div className="text-center mb-20">
               <div className="clay-badge text-tertiary mb-6 inline-block">Our Core</div>
               <h2 className="text-4xl md:text-5xl font-display text-text-main font-bold mb-4">Pillars of Wisdom</h2>
               <p className="text-text-muted font-medium text-lg max-w-2xl mx-auto">The foundation upon which our institution and our students' success is built.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              
              <Card className="flex flex-col items-center justify-center text-center !p-12 h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="w-24 h-24 clay-input rounded-[2rem] flex items-center justify-center mb-8 text-primary shadow-inner">
                  <BookOpen size={40} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-display mb-4 text-text-main font-bold">Sacred Library</h3>
                <p className="text-text-muted font-bold leading-relaxed mb-8 flex-grow">
                  A grand treasury containing thousands of manuscripts waiting to illuminate the seeker's path.
                </p>
                <Link to="/library">
                  <Button variant="outline" className="!py-3 !px-6 !text-sm">Explore Library</Button>
                </Link>
              </Card>

              <Card className="flex flex-col items-center justify-center text-center !p-12 h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="w-24 h-24 clay-input rounded-[2rem] flex items-center justify-center mb-8 text-primary shadow-inner">
                   <GraduationCap size={40} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-display mb-4 text-text-main font-bold">Academics</h3>
                <p className="text-text-muted font-bold leading-relaxed mb-8 flex-grow">
                  Bright, rigorous syllabus forged through time to shape the passionate scholars of tomorrow.
                </p>
                <Link to="/academics">
                  <Button variant="secondary" className="!py-3 !px-6 !text-sm">View Syllabus</Button>
                </Link>
              </Card>

              <Card className="flex flex-col items-center justify-center text-center !p-12 h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="w-24 h-24 clay-input rounded-[2rem] flex items-center justify-center mb-8 text-tertiary shadow-inner">
                   <Building2 size={40} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-display mb-4 text-text-main font-bold">Community</h3>
                <p className="text-text-muted font-bold leading-relaxed mb-8 flex-grow">
                  Join a vibrant, supportive ecosystem dedicated to spiritual growth and ethical leadership.
                </p>
                <Link to="/about">
                  <Button variant="tertiary" className="!py-3 !px-6 !text-sm">Our Legacy</Button>
                </Link>
              </Card>

            </div>
          </section>

          {/* Statistics/Impact Section */}
          <section className="py-20 mb-16">
            <Card className="!p-16 bg-surface text-primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center shadow-lg group transition-colors">
               <div className="space-y-3 group-hover:-translate-y-1 transition-transform">
                 <Users size={32} className="text-secondary mx-auto mb-4" />
                 <h3 className="text-5xl font-display font-black text-primary">3,500+</h3>
                 <p className="font-bold text-text-muted tracking-wider uppercase text-sm">Active Students</p>
               </div>
               <div className="space-y-3 group-hover:-translate-y-1 transition-transform delay-75">
                 <Star size={32} className="text-secondary mx-auto mb-4" />
                 <h3 className="text-5xl font-display font-black text-primary">5,000+</h3>
                 <p className="font-bold text-text-muted tracking-wider uppercase text-sm">Graduates Network</p>
               </div>
               <div className="space-y-3 group-hover:-translate-y-1 transition-transform delay-150">
                 <BookOpen size={32} className="text-secondary mx-auto mb-4" />
                 <h3 className="text-5xl font-display font-black text-primary">15,000+</h3>
                 <p className="font-bold text-text-muted tracking-wider uppercase text-sm">Library Volumes</p>
               </div>
               <div className="space-y-3 group-hover:-translate-y-1 transition-transform delay-200">
                 <Building2 size={32} className="text-secondary mx-auto mb-4" />
                 <h3 className="text-5xl font-display font-black text-primary">45</h3>
                 <p className="font-bold text-text-muted tracking-wider uppercase text-sm">Years of Legacy</p>
               </div>
            </Card>
          </section>

          {/* Upcoming Events */}
          <section className="py-24 border-t border-primary/20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Calendar</span>
                <h2 className="text-4xl font-display text-text-main font-bold">Upcoming Events</h2>
              </div>
              <Link to="/events">
                <Button variant="outline" className="shrink-0 font-bold">View All Events</Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                { day: "15", month: "OCT", title: "Annual Convocation Ceremony", desc: "Honoring our graduating class of scholars." },
                { day: "22", month: "OCT", title: "Open Day for Admissions", desc: "Campus tours, faculty meet-and-greet, and Q&A." },
                { day: "05", month: "NOV", title: "Intensive Hadith Seminar", desc: "A weekend deep-dive into the narrations of Sahih Bukhari." },
                { day: "18", month: "NOV", title: "Community Iftar & Gather", desc: "A spiritual evening of remembrance and breaking fast." }
              ].map((evt, i) => (
                <Card key={i} className="flex gap-6 !p-6 items-center hover:shadow-xl transition-shadow group cursor-pointer border-l-4 border-transparent hover:border-primary">
                  <div className="w-20 shrink-0 text-center flex flex-col items-center justify-center py-4 bg-bg-base border border-primary/20 rounded-xl group-hover:bg-primary transition-colors">
                    <span className="text-sm font-bold text-primary group-hover:text-inverted uppercase transition-colors">{evt.month}</span>
                    <span className="text-3xl font-display font-black text-primary group-hover:text-inverted transition-colors">{evt.day}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-text-main mb-2">{evt.title}</h3>
                    <p className="text-text-muted font-medium text-sm leading-relaxed">{evt.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Modern Clay Banner Component */}
          <section className="my-16 mb-24 px-4 sm:px-0 relative z-20">
            <Card className="!p-0 bg-gradient-to-br from-surface to-bg-base border border-primary/20 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
              {/* Abstract background elements */}
              <div className="absolute inset-0 bg-primary opacity-[0.02] mix-blend-overlay"></div>
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 blur-3xl rounded-full"></div>
              
              <div className="relative z-10 p-10 md:p-16 lg:p-20 md:w-2/3">
                 <div className="clay-badge !bg-primary/10 !text-primary border border-primary/30 backdrop-blur-md mb-6 inline-block">Get In Touch</div>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-primary">Have questions about admissions?</h2>
                 <p className="text-lg md:text-xl font-sans font-medium text-primary/90 mb-0 leading-relaxed">
                   Our administration helps guide hundreds of students annually to find their perfect path in Islamic Sciences.
                 </p>
              </div>
              <div className="relative z-10 p-10 md:p-16 lg:p-20 md:w-1/3 flex justify-center md:justify-end bg-bg-base/60 backdrop-blur-sm self-stretch items-center border-t md:border-t-0 md:border-l border-primary/10">
                 <Link to="/contact">
                   <Button className="!bg-primary hover:!bg-secondary !text-inverted hover:scale-105 transition-transform !px-8 !py-4 font-bold border-none">Contact Us Today</Button>
                 </Link>
              </div>
            </Card>
          </section>

        </div>
      </div>
    </div>
  );
}
