import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';

function useTheme() {
  const [isDark, setIsDark] = useState(false);

  React.useEffect(() => {
    // Check initial state
    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  };

  return { isDark, toggleTheme };
}
import { cn } from '../utils/cn';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'motion/react';

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

const navItems = [
  { path: '/', label: 'Home' },
  { 
    path: '/about', 
    label: 'About Us',
    subItems: [
      { path: '/about#history', label: 'History' },
      { path: '/about#management', label: 'Management' },
      { path: '/about#professors', label: 'Professors' },
      { path: '/about#alumni', label: 'Alumni' },
      { path: '/about#vision-and-mission', label: 'Vision and Mission' },
      { path: '/about#why-choose-us', label: 'Why Choose Us' },
      { path: '/about#reviews', label: 'Reviews' },
    ]
  },
  { 
    path: '/academics', 
    label: 'Academics',
    subItems: [
      { path: '/academics#courses', label: 'Courses' },
      { path: '/academics#syllabus', label: 'Syllabus' },
      { path: '/admissions', label: 'Admission' },
      { path: '/academics#results', label: 'Results' },
      { path: '/admissions#old-student', label: 'Admission Form (Old Student)' },
      { path: '/admissions#new-student', label: 'Admission Form (New Student)' },
    ]
  },
  { 
    path: '/library', 
    label: 'Library',
    subItems: [
      { path: '/library#tamil-book-count', label: 'Tamil Book Count' },
      { path: '/library#english-book-count', label: 'English Book Count' },
      { path: '/library#urdu-book-count', label: 'Urdu Book Count' },
    ]
  },
  { 
    path: '/blog', 
    label: 'Fatwa',
    subItems: [
      { path: '/fatwa#blog1', label: 'Blog 1' },
      { path: '/fatwa#blog2', label: 'Blog 2' },
      { path: '/fatwa#blog3', label: 'Blog 3' },
      { path: '/fatwa#blog4', label: 'Blog 4' },
      { path: '/blog', label: 'More Blogs' },
    ]
  },
  { 
    path: '/gallery', 
    label: 'Gallery',
    subItems: [
      { path: '/gallery#old-building', label: 'Old Building' },
      { path: '/gallery#new-building', label: 'New Building' },
      { path: '/gallery#future', label: 'Future' },
    ]
  },
  { 
    path: '/contact', 
    label: 'Contact Us',
    subItems: [
      { path: '/contact#office-number', label: 'Office Number' },
      { path: '/contact#principal', label: 'Principal' },
      { path: '/contact#vice-principal', label: 'Vice Principal' },
      { path: '/contact#forms', label: 'Forms' },
      { path: '/contact#map-location', label: 'Map Location' },
    ]
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  // Helper to determine if a dropdown should stay lit up
  const isParentActive = (itemPath: string) => {
    if (itemPath === '/') return location.pathname === '/';
    return location.pathname.startsWith(itemPath);
  };

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
        <nav className="bg-bg-base/90 backdrop-blur-md rounded-full w-full max-w-7xl h-[72px] flex items-center justify-between px-4 lg:px-8 pointer-events-auto border border-primary/20 relative">
          
          {/* Brand */}
          <NavLink to="/" className="flex items-center gap-3 xl:gap-3 group shrink-0">
            <motion.div 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-surface shrink-0 border border-primary/40"
            >
               <MasjidIcon className="text-primary" size={20} />
            </motion.div>
            <span className="font-serif text-lg xl:text-xl tracking-wide text-primary group-hover:text-primary transition-colors">
              Dawoodiyyah
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              item.subItems ? (
                <div 
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.path)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => cn(
                      "text-[13px] font-sans font-bold flex items-center gap-1 transition-all px-3 xl:px-4 py-2 rounded-full whitespace-nowrap",
                      (isActive || activeDropdown === item.path || isParentActive(item.path)) 
                        ? "text-inverted bg-gradient-to-r from-primary to-secondary" 
                        : "text-primary/80 hover:text-secondary hover:bg-surface"
                    )}
                  >
                    {item.label} <ChevronDown size={14} className={cn("transition-transform", activeDropdown === item.path && "rotate-180")} />
                  </NavLink>
                  
                  <AnimatePresence>
                    {activeDropdown === item.path && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-3 w-56 bg-surface border border-primary/20 rounded-2xl overflow-hidden shadow-2xl z-[100]"
                      >
                        {item.subItems.map(subItem => (
                          <a 
                            key={subItem.path} 
                            href={subItem.path}
                            onClick={(e) => {
                              // Standard navigation for distinct paths
                              // Let router handle it, or use standard anchors
                            }}
                            className="block px-5 py-3 text-sm font-bold text-primary/80 hover:text-inverted hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "text-[13px] font-sans font-bold transition-all px-3 xl:px-4 py-2 rounded-full whitespace-nowrap",
                      isActive 
                        ? "text-inverted bg-gradient-to-r from-primary to-secondary" 
                        : "text-primary/80 hover:text-secondary hover:bg-surface"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            ))}
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button 
              onClick={toggleTheme} 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-surface border border-primary/20 text-primary hover:bg-primary hover:text-inverted transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Button className="!bg-tertiary !text-inverted hover:!bg-secondary !border-none !py-2 !px-6 text-[13px]">
              Donate
            </Button>
          </div>

          {/* Actions Dropdown Trigger (Mobile) */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={toggleTheme} 
              className="w-9 h-9 rounded-full flex items-center justify-center bg-surface border border-primary/20 text-primary hover:bg-primary hover:text-inverted transition-colors"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button 
              className="text-primary bg-surface border border-primary/20 rounded-full p-2 outline-none shrink-0"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={20} className="stroke-[2.5px]" />
            </button>
          </div>
        </nav>
      </div>

      {/* Slide-out Sidebar (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-bg-base border-l border-primary/20 z-[70] flex flex-col p-6 shadow-[[-20px_0_50px_rgba(0,0,0,0.5)]] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-primary/10 shrink-0">
                <span className="font-serif text-xl tracking-wide text-primary">Menu</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary border border-primary/20"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.path} className="flex flex-col">
                    <NavLink
                      to={item.path}
                      onClick={() => !item.subItems && setIsOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "text-lg font-sans font-bold py-3 px-4 rounded-xl transition-all flex justify-between items-center",
                          isActive 
                            ? "text-inverted bg-gradient-to-r from-primary to-secondary" 
                            : "text-primary hover:bg-surface"
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                    {item.subItems && (
                      <div className="pl-6 flex flex-col gap-1 mt-1 mb-2 border-l-2 border-primary/10 ml-6">
                        {item.subItems.map(subItem => (
                          <a
                            key={subItem.path}
                            href={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-semibold py-2 px-4 rounded-lg text-primary/70 hover:text-inverted hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-primary/10 mt-6 shrink-0">
                <Button className="w-full !bg-tertiary !text-inverted hover:!bg-secondary !py-4 font-bold text-lg">
                  Donate
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

