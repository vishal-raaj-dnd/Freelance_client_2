import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';

const MasjidIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 12C8 7 10 5 12 3C14 5 16 7 16 12" />
    <path d="M8 12H16" />
    <path d="M4 22V10L4 6L5 4L6 6V10V22" />
    <path d="M20 22V10L20 6L19 4L18 6V10V22" />
    <path d="M2 22H22" />
    <path d="M10 22V18C10 16.5 11 16 12 16C13 16 14 16.5 14 18V22" />
  </svg>
);

export function Footer() {
  return (
    <footer className="mt-24 pb-12 px-6 lg:px-12 relative z-10 w-full mb-8 max-w-7xl mx-auto block">
      <div className="clay-card !rounded-[3rem] p-12 md:p-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm font-sans relative overflow-hidden">
        
        {/* Pure decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="md:col-span-1 relative z-10">
           <div className="flex items-center gap-3 mb-6">
             <motion.div 
               animate={{ 
                 boxShadow: [
                   "4px 4px 10px rgba(135,128,115,0.4), -4px -4px 10px rgba(209,174,108,0.7), inset 2px 2px 5px rgba(209,174,108,0.8), inset -2px -2px 5px rgba(135,128,115,0.2), 0 0 0px rgba(209,174,108,0)",
                   "4px 4px 10px rgba(135,128,115,0.4), -4px -4px 10px rgba(209,174,108,0.7), inset 2px 2px 5px rgba(209,174,108,0.8), inset -2px -2px 5px rgba(135,128,115,0.2), 0 0 15px rgba(209,174,108,0.6)"
                 ] 
               }}
               transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
               className="w-10 h-10 rounded-full flex items-center justify-center bg-bg-base shrink-0 border border-primary/40"
             >
                <MasjidIcon className="text-primary" size={20} />
             </motion.div>
             <h3 className="font-display text-xl font-bold text-text-main">Dawoodiya Masjid & Madrasah</h3>
           </div>
          <p className="text-text-muted font-bold leading-relaxed max-w-xs">
            A place of intellectual clarity and spiritual repose, cultivating minds in a vibrant environment.
          </p>
        </div>

        <div className="relative z-10">
          <h4 className="font-display font-bold mb-6 text-primary text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-4 font-bold text-text-muted/80">
            <li><NavLink to="/notice" className="hover:text-primary transition-colors">Notice Board</NavLink></li>
            <li><NavLink to="/scholarships" className="hover:text-primary transition-colors">Scholarships</NavLink></li>
            <li><NavLink to="/admissions" className="hover:text-primary transition-colors">Admissions</NavLink></li>
          </ul>
        </div>

        <div className="relative z-10">
          <h4 className="font-display font-bold mb-6 text-primary text-sm uppercase tracking-wider">Legal</h4>
          <ul className="space-y-4 font-bold text-text-muted/80">
            <li><NavLink to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</NavLink></li>
            <li><NavLink to="/terms" className="hover:text-primary transition-colors">Terms of Service</NavLink></li>
          </ul>
        </div>

        <div className="relative z-10">
           <h4 className="font-display font-bold mb-6 text-tertiary text-sm uppercase tracking-wider">Connect</h4>
           <ul className="space-y-4 font-bold text-text-muted/80">
            <li><NavLink to="/contact" className="hover:text-tertiary transition-colors">Contact Us</NavLink></li>
          </ul>
        </div>
        
        <div className="md:col-span-4 mt-12 pt-8 border-t border-bg-base text-text-muted font-bold text-xs text-center relative z-10">
          © 2024 Dawoodiya Masjid & Madrasah. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
