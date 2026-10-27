import React, { useState } from 'react';
import { 
  Compass, 
  Send, 
  Check, 
  Globe, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function InstagramIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15"/>
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" r="2"/>
    </svg>
  );
}

export default function Footer({ onCategoryClick }) {
  const { language, setLanguage, t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-ocean-950 text-white pt-20 pb-12 relative overflow-hidden border-t border-ocean-900">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-coral-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-ocean-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Newsletter Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-ocean-900/90 to-ocean-900/50 border border-white/10 shadow-2xl mb-16 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral-500/20 text-coral-400 text-xs font-semibold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>{t('footer.newsletterBadge')}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                {t('footer.newsletterTitle')} <br />
                <span className="italic font-normal text-coral-400">{t('footer.newsletterTitleItalic')}</span>
              </h3>
              <p className="text-sand-300 text-sm max-w-xl font-light">
                {t('footer.newsletterDesc')}
              </p>
            </div>

            <div className="lg:col-span-5">
              {isSubscribed ? (
                <div className="p-4 rounded-2xl bg-coral-500/20 border border-coral-400/40 text-coral-200 text-sm flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-coral-500 text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t('footer.subscribedTitle')}</div>
                    <div className="text-xs text-sand-300">{t('footer.subscribedDesc')}</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="relative flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      placeholder={t('footer.emailPlaceholder')}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-5 py-3.5 rounded-2xl sm:rounded-full bg-white/10 border border-white/20 text-white placeholder-sand-400 text-sm focus:outline-none focus:ring-2 focus:ring-coral-400 focus:bg-white/15"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3.5 rounded-2xl sm:rounded-full bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm shadow-md hover:shadow-glow transition-all flex items-center justify-center gap-2 transform active:scale-95"
                    >
                      <span>{t('footer.subscribeBtn')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[11px] text-sand-400 text-center sm:text-left pl-2">
                    {t('footer.privacyNote')}
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-10 border-t border-b border-white/10 text-sand-300">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-coral-500 text-white flex items-center justify-center shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Wanderlust <span className="text-coral-400 font-normal italic">World</span>
              </span>
            </a>
            <p className="text-xs text-sand-400 max-w-sm leading-relaxed font-light">
              {t('footer.brandDesc')}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#social-ig"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-coral-500 text-sand-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="#social-x"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-coral-500 text-sand-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="#social-yt"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-coral-500 text-sand-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="#social-li"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-coral-500 text-sand-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 1: Destinations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t('footer.sanctuariesCol')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onCategoryClick('Europe')} className="hover:text-coral-400 transition-colors">
                  {language === 'vi' ? 'Châu Âu (Paris, Rome, Santorini)' : 'Europe (Paris, Rome, Santorini)'}
                </button>
              </li>
              <li>
                <button onClick={() => onCategoryClick('Asia')} className="hover:text-coral-400 transition-colors">
                  {language === 'vi' ? 'Châu Á (Kyoto, Maldives, Petra)' : 'Asia (Kyoto, Maldives, Petra)'}
                </button>
              </li>
              <li>
                <button onClick={() => onCategoryClick('Americas')} className="hover:text-coral-400 transition-colors">
                  {language === 'vi' ? 'Châu Mỹ (Machu Picchu, Banff)' : 'Americas (Machu Picchu, Banff)'}
                </button>
              </li>
              <li>
                <button onClick={() => onCategoryClick('Wonders of the World')} className="hover:text-coral-400 transition-colors">
                  {language === 'vi' ? 'Kỳ quan Thế giới' : 'Wonders of the World'}
                </button>
              </li>
              <li>
                <a href="#destinations" className="hover:text-coral-400 transition-colors">
                  {language === 'vi' ? 'Thiên đường Đảo riêng' : 'Island Sanctuaries'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Experiences */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t('footer.experiencesCol')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-coral-400 transition-colors">{language === 'vi' ? 'Tour Thực Tế 360°' : '360° Virtual Previews'}</a></li>
              <li><a href="#guides" className="hover:text-coral-400 transition-colors">{language === 'vi' ? 'Chuyên Gia Bản Địa' : 'Curated Local Guides'}</a></li>
              <li><a href="#features" className="hover:text-coral-400 transition-colors">{language === 'vi' ? 'Thời Điểm Đẹp Nhất' : 'Best Time to Visit Tracker'}</a></li>
              <li><a href="#reviews" className="hover:text-coral-400 transition-colors">{language === 'vi' ? 'Cảm Nhận Du Khách' : 'Voyager Chronicles'}</a></li>
              <li><a href="#features" className="hover:text-coral-400 transition-colors">{language === 'vi' ? 'Tàu Hạng Sang & Thuê Riêng' : 'Private Rail & Charters'}</a></li>
            </ul>
          </div>

          {/* Col 3: Trust & Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t('footer.pillarsCol')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-coral-400 transition-colors">{language === 'vi' ? 'Trung Hòa Carbon' : 'Carbon Neutrality'}</a></li>
              <li><a href="#features" className="hover:text-coral-400 transition-colors">{language === 'vi' ? 'Quỹ Di Sản Bản Địa' : 'Indigenous Heritage Fund'}</a></li>
              <li><a href="#" className="hover:text-coral-400 transition-colors">{language === 'vi' ? 'Y Tế & An Toàn' : 'Safety & Medical Protocol'}</a></li>
              <li><a href="#" className="hover:text-coral-400 transition-colors">{language === 'vi' ? 'Báo Chí & Truyền Thông' : 'Press & Media Kit'}</a></li>
              <li><a href="#" className="hover:text-coral-400 transition-colors">{language === 'vi' ? 'Cơ Hội Nghề Nghiệp' : 'Careers at Wanderlust'}</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Language Switcher & Currency */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-400">
          
          <div className="flex items-center gap-2">
            <span>© 2026 {t('footer.rightsReserved')}</span>
          </div>

          {/* Currency / Language selector & credit */}
          <div className="flex items-center gap-4 flex-wrap">
            
            {/* Interactive Language Selector in Footer */}
            <div className="flex items-center gap-1.5 text-sand-200 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <Globe className="w-3.5 h-3.5 text-coral-400" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-xs text-sand-100 font-semibold focus:outline-none cursor-pointer"
                aria-label="Chọn ngôn ngữ / Select Language"
              >
                <option value="vi" className="text-ocean-950 bg-white">🇻🇳 Tiếng Việt</option>
                <option value="en" className="text-ocean-950 bg-white">🇬🇧 English</option>
              </select>
            </div>

            <span>•</span>
            <div className="text-sand-300 font-semibold">USD ($)</div>
            <span>•</span>
            <a href="#" className="hover:underline">{t('footer.privacyPolicy')}</a>
            <span>•</span>
            <a href="#" className="hover:underline">{t('footer.terms')}</a>
          </div>

        </div>

      </div>

    </footer>
  );
}
