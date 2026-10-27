import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, Heart, Globe, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onOpenPlanTrip, wishlistCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.destinations'), href: '#destinations' },
    { name: t('nav.experiences'), href: '#features' },
    { name: t('nav.guides'), href: '#guides' },
    { name: t('nav.reviews'), href: '#reviews' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav-scrolled py-3.5 shadow-sm'
          : 'glass-nav py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="Wanderlust World Home"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-ocean-900 to-ocean-700 text-sand-50 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-glow">
              <Compass className="w-5 h-5 text-coral-400 group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-ocean-950 flex items-center gap-1.5">
                Wanderlust <span className="text-coral-500 font-normal italic">World</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-sand-600 font-semibold -mt-1 hidden sm:block">
                {t('nav.tagline')}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/60 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-ocean-800 hover:text-coral-600 rounded-full transition-all duration-200 hover:bg-white/80"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA, Language Switcher & Wishlist */}
          <div className="hidden sm:flex items-center space-x-3">
            
            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-ocean-900 border border-sand-200 shadow-xs text-xs font-bold transition-all duration-200 hover:border-coral-300 hover:shadow-sm"
              title={language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
            >
              <Globe className="w-3.5 h-3.5 text-coral-500" />
              <span>{language === 'vi' ? '🇻🇳 Tiếng Việt' : '🇬🇧 English'}</span>
            </button>

            {/* Wishlist Pill */}
            <a
              href="#destinations"
              className="relative p-2.5 rounded-full bg-white/70 hover:bg-white text-ocean-800 hover:text-coral-500 transition-all duration-200 border border-sand-200 shadow-xs"
              title={t('nav.savedSanctuaries')}
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-coral-500 text-white text-[10px] font-bold flex items-center justify-center animate-bounce">
                  {wishlistCount}
                </span>
              )}
            </a>

            {/* Plan a Trip CTA Button */}
            <button
              onClick={onOpenPlanTrip}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-coral-500 via-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 shadow-md hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-coral-400 focus:ring-offset-2"
            >
              <Sparkles className="w-4 h-4 mr-1.5 animate-pulse" />
              {t('nav.planTrip')}
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Actions: Language + Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 text-xs font-bold rounded-full bg-white/80 border border-sand-200 text-ocean-900"
            >
              {language === 'vi' ? '🇻🇳 VI' : '🇬🇧 EN'}
            </button>
            <button
              onClick={onOpenPlanTrip}
              className="px-3 py-1.5 text-xs font-semibold text-white rounded-full bg-coral-500 shadow-sm"
            >
              {language === 'vi' ? 'Lên Tour' : 'Plan Trip'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-ocean-900 hover:bg-white/70 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-4 pb-6 mt-3 bg-white/95 backdrop-blur-2xl border-t border-sand-200 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-ocean-900 hover:bg-sand-100 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="px-4 py-2 flex items-center justify-between border-t border-sand-100">
              <span className="text-xs font-semibold text-sand-700">
                {language === 'vi' ? 'Ngôn ngữ' : 'Language'}:
              </span>
              <button
                onClick={toggleLanguage}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-100 text-xs font-bold text-ocean-950"
              >
                <Globe className="w-3.5 h-3.5 text-coral-500" />
                <span>{language === 'vi' ? '🇻🇳 Tiếng Việt (Bấm để đổi)' : '🇬🇧 English (Click to toggle)'}</span>
              </button>
            </div>

            <div className="pt-2 border-t border-sand-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanTrip();
                }}
                className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold text-white rounded-xl bg-coral-500 shadow-md"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                {t('nav.mobilePlanBtn')}
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-sand-700 py-1">
                <ShieldCheck className="w-3.5 h-3.5 text-coral-500" />
                <span>{t('nav.guaranteeShort')}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
