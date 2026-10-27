import React, { useState } from 'react';
import { 
  Eye, 
  Users, 
  ShieldCheck, 
  Thermometer, 
  CloudSun, 
  ArrowUpRight, 
  Play, 
  Check, 
  Globe2, 
  Sparkles 
} from 'lucide-react';
import { bentoFeaturesData } from '../data/features';
import { useLanguage } from '../context/LanguageContext';

export default function BentoFeatures({ onOpenVirtualTour, onOpenPlanTrip }) {
  const { language, t } = useLanguage();

  const [activeSpotIndex, setActiveSpotIndex] = useState(0);
  const [activeGuideIndex, setActiveGuideIndex] = useState(0);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(0);

  const previewSpots = [
    {
      title: language === 'vi' ? 'Vách đá Caldera tại Oia, Santorini' : 'Oia Cliffside Caldera, Santorini',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
      elevation: language === 'vi' ? 'Cao 320m so với mực nước biển' : '320m above sea level',
      hotspots: language === 'vi' 
        ? ['Hồ bơi vô cực ngắm hoàng hôn', 'Phòng suite hang đá', 'Vườn nho cổ bên vách núi']
        : ['Sunset Infinity Terrace', 'Cave Pool Suite', 'Private Vineyard Deck'],
      category: language === 'vi' ? 'Toàn cảnh Biển Aegean' : 'Aegean Sea Panorama'
    },
    {
      title: language === 'vi' ? 'Biệt thự trên đầm phá biển, Maldives' : 'Overwater Lagoon Villa, Maldives',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
      elevation: language === 'vi' ? 'Cửa biển bước thẳng ra rạn san hô' : 'Direct lagoon access',
      hotspots: language === 'vi'
        ? ['Sàn kính nhìn xuống đáy biển', 'Vườn san hô bảo tồn', 'Lưới nằm ngắm sao']
        : ['Glass-Bottom Living Floor', 'Coral Nursery View', 'Stargazing Net'],
      category: language === 'vi' ? 'Bình yên Ấn Độ Dương' : 'Indian Ocean Serenity'
    },
    {
      title: language === 'vi' ? 'Trà quán cổ kính Gion, Kyoto' : 'Gion Ancient Teahouse, Kyoto',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      elevation: language === 'vi' ? 'Khu bảo tồn kiến trúc lịch sử' : 'Historic Preservation Zone',
      hotspots: language === 'vi'
        ? ['Hiên ngắm vườn rêu thiền định', 'Phòng Tatami thế kỷ 15', 'Bồn tắm gỗ Tuyết Tùng']
        : ['Moss Garden Veranda', '15th-Century Tatami Room', 'Cedar Bath'],
      category: language === 'vi' ? 'Văn hóa Thiền Tông' : 'Zen Cultural Immersion'
    }
  ];

  const currentSpot = previewSpots[activeSpotIndex];
  const currentGuideRaw = bentoFeaturesData.localGuides.guides[activeGuideIndex];
  const currentGuide = {
    ...currentGuideRaw,
    location: currentGuideRaw.location[language] || currentGuideRaw.location.en,
    role: currentGuideRaw.role[language] || currentGuideRaw.role.en,
    experience: currentGuideRaw.experience[language] || currentGuideRaw.experience.en,
    specialty: currentGuideRaw.specialty[language] || currentGuideRaw.specialty.en,
  };

  const currentMonthRaw = bentoFeaturesData.bestTimeTracker.monthsData[selectedMonthIndex];
  const currentMonth = {
    ...currentMonthRaw,
    month: currentMonthRaw.month[language] || currentMonthRaw.month.en,
    label: currentMonthRaw.label[language] || currentMonthRaw.label.en,
    crowd: currentMonthRaw.crowd[language] || currentMonthRaw.crowd.en,
    highlight: currentMonthRaw.highlight[language] || currentMonthRaw.highlight.en,
    status: currentMonthRaw.status[language] || currentMonthRaw.status.en,
  };

  return (
    <section id="features" className="py-20 sm:py-28 bg-[#f5f0e8]/50 relative overflow-hidden">
      
      {/* Decorative background grid and gradients */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#faf8f5] to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-coral-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-ocean-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-200/80 text-ocean-900 text-xs font-semibold mb-4 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-coral-500" />
            <span>{t('bento.badge')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ocean-950 tracking-tight leading-tight">
            {t('bento.heading')} <br />
            <span className="italic font-normal text-coral-500">{t('bento.headingItalic')}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-sand-800 leading-relaxed font-light">
            {t('bento.subheading')}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Card 1: 360° Virtual Previews (Large span 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-glass flex flex-col justify-between overflow-hidden relative group">
            
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-coral-100 text-coral-700">
                  {t('bento.virtual.badge')}
                </span>
                <span className="text-xs text-sand-600 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {t('bento.virtual.live')}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ocean-950 mb-2">
                {t('bento.virtual.title')}
              </h3>
              <p className="text-sm text-sand-800 font-normal max-w-xl">
                {t('bento.virtual.desc')}
              </p>

              {/* Spot Switcher Buttons */}
              <div className="flex flex-wrap gap-2 mt-5">
                {previewSpots.map((spot, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveSpotIndex(idx)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      activeSpotIndex === idx
                        ? 'bg-ocean-950 text-white shadow-xs'
                        : 'bg-sand-100 hover:bg-sand-200 text-ocean-800'
                    }`}
                  >
                    {spot.title.split(',')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated 360 Canvas Box */}
            <div className="relative mt-6 aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-inner group/canvas border border-sand-200">
              <img
                src={currentSpot.image}
                alt={currentSpot.title}
                className="w-full h-full object-cover transform duration-1000 ease-out group-hover/canvas:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent to-black/20" />

              {/* 360 Spatial Overlay Indicators */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-badge text-[11px] font-semibold text-ocean-900 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-coral-500" />
                <span>{currentSpot.category}</span>
              </div>

              {/* Simulated Hotspots */}
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 group/spot cursor-pointer">
                <div className="w-4 h-4 rounded-full bg-coral-500 animate-ping absolute" />
                <div className="w-4 h-4 rounded-full bg-coral-500 relative flex items-center justify-center text-white text-[10px] shadow-glow">
                  +
                </div>
                <span className="glass-badge px-2.5 py-0.5 rounded-full text-[11px] font-bold text-ocean-950 shadow-sm opacity-90 group-hover/spot:opacity-100">
                  {currentSpot.hotspots[0]}
                </span>
              </div>

              <div className="absolute bottom-16 right-1/4 flex items-center gap-2 group/spot cursor-pointer">
                <div className="w-3.5 h-3.5 rounded-full bg-white relative flex items-center justify-center text-ocean-900 text-[10px] shadow-sm">
                  •
                </div>
                <span className="glass-badge px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-ocean-950 shadow-sm opacity-90">
                  {currentSpot.hotspots[1]}
                </span>
              </div>

              {/* Bottom control bar with Launch Button */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ocean-950 via-ocean-950/70 to-transparent flex items-center justify-between">
                <div className="text-white">
                  <div className="text-xs font-semibold">{currentSpot.title}</div>
                  <div className="text-[11px] text-sand-300 font-light">{currentSpot.elevation}</div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenVirtualTour(currentSpot)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-coral-500 hover:bg-coral-600 text-white text-xs font-bold shadow-md hover:shadow-glow transition-all transform hover:scale-105"
                >
                  <Play className="w-3 h-3 fill-white" />
                  <span>{t('bento.virtual.launchBtn')}</span>
                </button>
              </div>

            </div>

          </div>

          {/* Card 2: Curated Local Guides (Span 5 cols) */}
          <div id="guides" className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-glass flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sand-200 text-ocean-900">
                  {t('bento.guides.badge')}
                </span>
                <span className="text-xs text-sand-600 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  {t('bento.guides.verified')}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ocean-950 mb-2">
                {t('bento.guides.title')}
              </h3>
              <p className="text-sm text-sand-800 font-normal">
                {t('bento.guides.desc')}
              </p>

              {/* Guide Avatars Selector */}
              <div className="flex items-center gap-3 mt-6 pb-2 overflow-x-auto">
                {bentoFeaturesData.localGuides.guides.map((g, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveGuideIndex(idx)}
                    className={`relative p-1 rounded-2xl transition-all duration-300 flex items-center gap-2.5 pr-4 border ${
                      activeGuideIndex === idx
                        ? 'border-coral-500 bg-coral-50/50 shadow-xs'
                        : 'border-sand-200 hover:border-sand-300 bg-white'
                    }`}
                  >
                    <img
                      src={g.avatar}
                      alt={g.name}
                      className="w-10 h-10 rounded-xl object-cover"
                    />
                    <div className="text-left">
                      <div className="text-xs font-bold text-ocean-950">{g.name.split(' ')[0]}</div>
                      <div className="text-[10px] text-sand-600 font-medium">
                        {typeof g.location === 'object' ? g.location[language] || g.location.en : g.location}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Guide Spotlight Card */}
            <div className="mt-6 p-5 rounded-2xl bg-sand-50/80 border border-sand-200/80">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h4 className="font-serif text-lg font-bold text-ocean-950">
                    {currentGuide.name}
                  </h4>
                  <div className="text-xs font-semibold text-coral-600">
                    {currentGuide.role} • {currentGuide.location}
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-lg bg-white border border-sand-200 text-xs font-bold text-ocean-900 flex items-center gap-1">
                  <span>★</span>
                  <span>{currentGuide.rating.toFixed(2)}</span>
                </div>
              </div>

              <div className="text-xs text-sand-800 leading-relaxed font-normal mb-4">
                <span className="font-semibold text-ocean-900">{t('bento.guides.focus')} </span>
                {currentGuide.specialty}
              </div>

              <div className="pt-3 border-t border-sand-200/70 flex items-center justify-between text-xs text-sand-600">
                <span>{currentGuide.experience} {t('bento.guides.experience')}</span>
                <button
                  type="button"
                  onClick={onOpenPlanTrip}
                  className="font-bold text-coral-600 hover:text-coral-700 flex items-center gap-1 hover:underline"
                >
                  <span>{t('bento.guides.requestGuide')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Card 3: Best Time to Visit Tracker (Span 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-glass flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-ocean-100 text-ocean-800">
                  {t('bento.tracker.badge')}
                </span>
                <span className="text-xs text-sand-600 font-medium flex items-center gap-1">
                  <CloudSun className="w-4 h-4 text-amber-500" />
                  {t('bento.tracker.seasonBadge')}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ocean-950 mb-2">
                {t('bento.tracker.title')}
              </h3>
              <p className="text-sm text-sand-800 font-normal">
                {t('bento.tracker.desc')}
              </p>

              {/* Month Selection Tabs */}
              <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1">
                {bentoFeaturesData.bestTimeTracker.monthsData.map((m, idx) => {
                  const mLabel = m.month[language] || m.month.en;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedMonthIndex(idx)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex flex-col items-center min-w-[64px] ${
                        selectedMonthIndex === idx
                          ? 'bg-ocean-950 text-white shadow-sm'
                          : 'bg-sand-100 hover:bg-sand-200 text-ocean-800'
                      }`}
                    >
                      <span>{mLabel}</span>
                      <span className="text-[10px] font-normal opacity-80">{m.score}/100</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Forecast & Crowd Matrix for selected month */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-gradient-to-br from-sand-50 to-sand-100/60 border border-sand-200">
              
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase text-sand-600 flex items-center gap-1.5">
                  <Thermometer className="w-3.5 h-3.5 text-coral-500" />
                  {t('bento.tracker.microclimate')}
                </div>
                <div className="font-serif text-xl font-bold text-ocean-950">
                  {currentMonth.temp}
                </div>
                <div className="text-xs text-emerald-700 font-medium flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  {currentMonth.status}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase text-sand-600 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-ocean-600" />
                  {t('bento.tracker.crowd')}
                </div>
                <div className="font-serif text-xl font-bold text-ocean-950">
                  {currentMonth.crowd}
                </div>
                {/* Visual Density Gauge */}
                <div className="w-full h-1.5 bg-sand-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-coral-500 rounded-full"
                    style={{ width: `${currentMonth.score}%` }}
                  />
                </div>
              </div>

              <div className="space-y-1 sm:col-span-1">
                <div className="text-[11px] font-bold uppercase text-sand-600 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  {t('bento.tracker.pinnacle')}
                </div>
                <div className="text-xs font-semibold text-ocean-950 leading-snug">
                  {currentMonth.highlight}
                </div>
              </div>

            </div>

          </div>

          {/* Card 4: Environmental & Bespoke Promise (Span 5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-ocean-950 to-ocean-900 text-white rounded-3xl p-6 sm:p-8 border border-ocean-800 shadow-glass flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sand-200 text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
                <Globe2 className="w-3.5 h-3.5 text-coral-400" />
                {t('bento.sustainability.badge')}
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                {t('bento.sustainability.titlePart1')} <br />
                <span className="italic font-normal text-coral-400">{t('bento.sustainability.titlePart2')}</span>
              </h3>
              <p className="text-sm text-sand-200 font-light leading-relaxed mt-3">
                {t('bento.sustainability.desc')}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="font-serif text-2xl font-bold text-sand-50">{t('bento.sustainability.zeroFootprint')}</div>
                <div className="text-xs text-sand-300">{t('bento.sustainability.certified')}</div>
              </div>

              <button
                type="button"
                onClick={onOpenPlanTrip}
                className="px-5 py-2.5 rounded-full bg-coral-500 hover:bg-coral-600 text-white text-xs font-bold transition-all shadow-md hover:shadow-glow flex items-center gap-1.5"
              >
                <span>{t('bento.sustainability.joinBtn')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
