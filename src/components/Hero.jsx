import React, { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  Compass, 
  Search, 
  Star, 
  ArrowDown, 
  Sparkles, 
  ChevronDown
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedHeroStats } from '../data/features';

export default function Hero({ onSearchSubmit, onExploreClick }) {
  const { language, t } = useLanguage();

  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedSeason, setSelectedSeason] = useState('All Seasons');
  const [selectedStyle, setSelectedStyle] = useState('All Styles');

  const locations = [
    { value: 'All', label: t('locations.all') },
    { value: 'Paris', label: t('locations.paris') },
    { value: 'Kyoto', label: t('locations.kyoto') },
    { value: 'Santorini', label: t('locations.santorini') },
    { value: 'Machu Picchu', label: t('locations.machuPicchu') },
    { value: 'Rome', label: t('locations.rome') },
    { value: 'Maldives', label: t('locations.maldives') },
    { value: 'Banff', label: t('locations.banff') },
    { value: 'Petra', label: t('locations.petra') },
  ];

  const seasons = [
    { value: 'All Seasons', label: t('seasons.all') },
    { value: 'Spring Sakura (Mar-May)', label: t('seasons.spring') },
    { value: 'Summer Solstice (Jun-Aug)', label: t('seasons.summer') },
    { value: 'Autumn Harvest (Sep-Nov)', label: t('seasons.autumn') },
    { value: 'Winter Serenity (Dec-Feb)', label: t('seasons.winter') },
  ];

  const styles = [
    { value: 'All Styles', label: t('styles.all') },
    { value: 'Luxury Cultural Immersion', label: t('styles.culture') },
    { value: 'Ancient Wonders Trek', label: t('styles.wonders') },
    { value: 'Private Island & Coastal', label: t('styles.island') },
    { value: 'Alpine & Wilderness Escape', label: t('styles.alpine') },
  ];

  const trendingPicks = language === 'vi' ? [
    { label: 'Vườn Thiền Kyoto', query: 'Kyoto' },
    { label: 'Hoàng Hôn Santorini', query: 'Santorini' },
    { label: 'Tàu Machu Picchu', query: 'Machu Picchu' },
    { label: 'Đảo San Hô Maldives', query: 'Maldives' }
  ] : [
    { label: 'Kyoto Zen Gardens', query: 'Kyoto' },
    { label: 'Santorini Sunset Caldera', query: 'Santorini' },
    { label: 'Machu Picchu Train', query: 'Machu Picchu' },
    { label: 'Maldives Atolls', query: 'Maldives' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchSubmit({
      location: selectedLocation,
      season: selectedSeason,
      style: selectedStyle,
    });
  };

  const currentStats = getLocalizedHeroStats(language);

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-between pt-24 pb-12 sm:pb-16 overflow-hidden">
      
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2400&q=85"
          alt="Breathtaking tropical coastline landscape"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/70 via-ocean-950/40 to-sand-50/95" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-ocean-950/50 mix-blend-multiply" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center pt-10 sm:pt-16">
        
        {/* Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-badge text-white/95 text-xs sm:text-sm font-medium mb-6 shadow-glass backdrop-blur-md border border-white/30 animate-in fade-in duration-700">
          <Sparkles className="w-4 h-4 text-coral-400" />
          <span>{t('hero.badge')}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-coral-400"></span>
          <span className="text-sand-200 hidden sm:inline">{t('hero.badgeSub')}</span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-5xl leading-[1.08] drop-shadow-md">
          {t('hero.titlePart1')} <br className="hidden sm:inline" />
          <span className="italic font-normal bg-gradient-to-r from-sand-200 via-coral-200 to-coral-400 bg-clip-text text-transparent">
            {t('hero.titleItalic')}
          </span>{' '}
          {t('hero.titlePart2')}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-sand-100 max-w-2xl font-light leading-relaxed drop-shadow-sm">
          {t('hero.subtitle')}
        </p>

        {/* Floating Glassmorphic Search Bar */}
        <div className="w-full max-w-5xl mt-10 sm:mt-12">
          <form
            onSubmit={handleSearch}
            className="glass-search p-3 sm:p-4 rounded-3xl sm:rounded-full text-ocean-900 transition-all duration-300 hover:shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-2 items-center">
              
              {/* Field 1: Destination */}
              <div className="sm:col-span-1 lg:col-span-2 px-4 py-2.5 rounded-2xl sm:rounded-full hover:bg-ocean-50/70 transition-colors text-left flex items-center space-x-3 group">
                <div className="p-2.5 rounded-full bg-sand-100 text-coral-500 group-hover:bg-coral-500 group-hover:text-white transition-colors flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-sand-700">
                    {t('hero.locationLabel')}
                  </span>
                  <div className="relative">
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-ocean-950 focus:outline-none appearance-none cursor-pointer truncate pr-4"
                      aria-label={t('hero.locationLabel')}
                    >
                      {locations.map((loc) => (
                        <option key={loc.value} value={loc.value} className="text-ocean-900 bg-white">
                          {loc.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-sand-500 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-[1px] h-8 bg-sand-200 mx-auto" />

              {/* Field 2: Date / Season */}
              <div className="sm:col-span-1 lg:col-span-2 px-4 py-2.5 rounded-2xl sm:rounded-full hover:bg-ocean-50/70 transition-colors text-left flex items-center space-x-3 group">
                <div className="p-2.5 rounded-full bg-sand-100 text-coral-500 group-hover:bg-coral-500 group-hover:text-white transition-colors flex-shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-sand-700">
                    {t('hero.whenLabel')}
                  </span>
                  <div className="relative">
                    <select
                      value={selectedSeason}
                      onChange={(e) => setSelectedSeason(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-ocean-950 focus:outline-none appearance-none cursor-pointer truncate pr-4"
                      aria-label={t('hero.whenLabel')}
                    >
                      {seasons.map((s) => (
                        <option key={s.value} value={s.value} className="text-ocean-900 bg-white">
                          {s.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-sand-500 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-[1px] h-8 bg-sand-200 mx-auto" />

              {/* Field 3: Travel Style & Search Button */}
              <div className="sm:col-span-1 lg:col-span-2 px-4 py-2.5 rounded-2xl sm:rounded-full hover:bg-ocean-50/70 transition-colors text-left flex items-center space-x-3 group">
                <div className="p-2.5 rounded-full bg-sand-100 text-coral-500 group-hover:bg-coral-500 group-hover:text-white transition-colors flex-shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-sand-700">
                    {t('hero.styleLabel')}
                  </span>
                  <div className="relative">
                    <select
                      value={selectedStyle}
                      onChange={(e) => setSelectedStyle(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-ocean-950 focus:outline-none appearance-none cursor-pointer truncate pr-4"
                      aria-label={t('hero.styleLabel')}
                    >
                      {styles.map((st) => (
                        <option key={st.value} value={st.value} className="text-ocean-900 bg-white">
                          {st.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-sand-500 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Action Submit Button */}
              <div className="sm:col-span-3 lg:col-span-1 flex justify-center">
                <button
                  type="submit"
                  className="w-full lg:w-auto h-12 lg:h-12 px-6 lg:px-5 rounded-2xl lg:rounded-full bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-glow transition-all duration-300 transform active:scale-95"
                >
                  <Search className="w-5 h-5" />
                  <span className="lg:hidden text-sm">{t('hero.searchBtn')}</span>
                </button>
              </div>

            </div>
          </form>

          {/* Quick Popular Suggestions */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-xs text-sand-200">
            <span className="font-semibold text-white/90">{t('hero.trending')}</span>
            {trendingPicks.map((pick) => (
              <button
                key={pick.query}
                type="button"
                onClick={() => {
                  setSelectedLocation(pick.query);
                  onSearchSubmit({ location: pick.query, season: 'All Seasons', style: 'All Styles' });
                }}
                className="px-2.5 py-1 rounded-full bg-white/20 hover:bg-white/35 text-white backdrop-blur-sm transition-all duration-200 border border-white/20 hover:border-white/50"
              >
                {pick.label}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Hero Bottom Stats Ribbon */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 w-full">
        <div className="glass-badge py-4 px-6 sm:px-8 rounded-3xl shadow-sm border border-sand-200/60 bg-white/70">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-sand-200">
            {currentStats.map((stat, idx) => (
              <div key={idx} className={`${idx !== 0 ? 'pt-4 md:pt-0' : ''}`}>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-ocean-950 flex items-center justify-center gap-1">
                  {stat.value}
                  {stat.label.includes('Rating') || stat.label.includes('đánh giá') ? (
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400 -mt-1" />
                  ) : null}
                </div>
                <div className="text-xs sm:text-sm text-sand-700 font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="relative z-10 flex justify-center mt-6">
        <a
          href="#destinations"
          onClick={onExploreClick}
          className="p-2 rounded-full text-sand-600 hover:text-coral-500 transition-colors animate-bounce"
          aria-label={t('hero.scrollDown')}
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>

    </section>
  );
}
