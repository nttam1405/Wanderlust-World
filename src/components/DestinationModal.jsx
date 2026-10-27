import React, { useState } from 'react';
import { 
  X, 
  Star, 
  MapPin, 
  Calendar, 
  Clock, 
  Check, 
  Sparkles, 
  Compass, 
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedDestination } from '../data/destinations';

export default function DestinationModal({
  destination,
  onClose,
  onBookNow
}) {
  const { language, t } = useLanguage();
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  if (!destination) return null;

  const locDest = getLocalizedDestination(destination, language);
  const gallery = locDest.gallery || [locDest.image];

  const handleNextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % gallery.length);
  };

  const handlePrevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-ocean-950/70 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-sand-200 my-8 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/80 hover:bg-white text-ocean-900 hover:text-coral-600 backdrop-blur-md shadow-md transition-colors"
          aria-label={t('modal.close')}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1">
          
          {/* Main Gallery Carousel */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-ocean-950">
            <img
              src={gallery[activePhotoIndex]}
              alt={`${locDest.name} photo ${activePhotoIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent to-black/30" />

            {/* Gallery Navigation Arrows */}
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevPhoto}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-white text-ocean-900 backdrop-blur-md transition-colors shadow-sm"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextPhoto}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-white text-ocean-900 backdrop-blur-md transition-colors shadow-sm"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Floating Title and Badges */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between flex-wrap gap-4 text-white">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="glass-badge px-3 py-0.5 rounded-full text-xs font-semibold text-ocean-950 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-coral-500" />
                    {locDest.country}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-coral-500 text-white text-xs font-bold">
                    {locDest.region}
                  </span>
                  <span className="text-xs text-sand-200">
                    {locDest.coordinates}
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold drop-shadow-md">
                  {locDest.name}
                </h2>
                <p className="text-sm text-sand-200 font-light mt-0.5">
                  {locDest.tagline}
                </p>
              </div>

              {/* Thumbnail Selector */}
              <div className="flex gap-2">
                {gallery.map((photo, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                      activePhotoIndex === idx
                        ? 'border-coral-400 scale-105 shadow-md'
                        : 'border-white/50 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={photo} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-sand-50 border border-sand-200 text-ocean-900">
              
              <div>
                <div className="text-[11px] font-bold uppercase text-sand-600 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {t('modal.voyagerRating')}
                </div>
                <div className="font-serif text-lg font-bold text-ocean-950 mt-0.5">
                  {locDest.rating} / 5.0
                </div>
                <div className="text-[11px] text-sand-600">
                  {locDest.reviewsCount.toLocaleString()} {language === 'vi' ? 'lữ khách xác thực' : 'verified voyagers'}
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold uppercase text-sand-600 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-coral-500" />
                  {t('modal.recommendedDuration')}
                </div>
                <div className="font-serif text-lg font-bold text-ocean-950 mt-0.5">
                  {locDest.duration}
                </div>
                <div className="text-[11px] text-sand-600">
                  {language === 'vi' ? 'Linh hoạt theo yêu cầu' : 'Bespoke pace & transit'}
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold uppercase text-sand-600 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-ocean-600" />
                  {t('modal.primeSeason')}
                </div>
                <div className="font-serif text-lg font-bold text-ocean-950 mt-0.5">
                  {locDest.bestSeason}
                </div>
                <div className="text-[11px] text-sand-600">
                  {language === 'vi' ? 'Thời tiết & ánh sáng lý tưởng' : 'Optimal climate & light'}
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold uppercase text-sand-600 flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-coral-500" />
                  {t('modal.expeditionVibe')}
                </div>
                <div className="font-serif text-lg font-bold text-ocean-950 mt-0.5 truncate">
                  {locDest.vibe}
                </div>
                <div className="text-[11px] text-sand-600">
                  {language === 'vi' ? 'Nhóm riêng hoặc gia đình' : 'Small-group or solo private'}
                </div>
              </div>

            </div>

            {/* Description */}
            <div>
              <h3 className="font-serif text-xl font-bold text-ocean-950 mb-2">
                {t('modal.detailsTitle')}
              </h3>
              <p className="text-sand-800 text-base leading-relaxed font-normal">
                {locDest.description} {language === 'vi' 
                  ? 'Được thiết kế với tinh thần của những nhà thám hiểm tự nhiên và sự tiện nghi của một khu nghỉ dưỡng hàng đầu thế giới, mỗi ngày đều cân bằng giữa những phát hiện phấn khích và những khoảnh khắc tĩnh lặng tuyệt đối.'
                  : 'Designed with the spirit of vintage naturalists and the seamless luxury of a world-class resort, each day balances exhilarating discoveries with transcendent moments of stillness.'}
              </p>
            </div>

            {/* Highlights Breakdown */}
            <div>
              <h3 className="font-serif text-xl font-bold text-ocean-950 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-coral-500" />
                {t('modal.highlightsTitle')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {locDest.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-sand-200 shadow-2xs flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-coral-100 text-coral-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-ocean-900 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee Callout */}
            <div className="p-4 rounded-2xl bg-ocean-50/70 border border-ocean-100 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-ocean-700 flex-shrink-0" />
              <div className="text-xs text-ocean-900">
                <span className="font-bold">
                  {language === 'vi' ? 'Cam kết Wanderlust:' : 'The Wanderlust Guarantee:'}
                </span>{' '}
                {language === 'vi'
                  ? 'Tất cả các chuyến đi đều có quản gia riêng 24/7, chính sách dời lịch linh hoạt, chuyên gia bản địa được kiểm định nghiêm ngặt và trung hòa 100% lượng khí thải carbon.'
                  : 'All expeditions feature 24/7 dedicated private concierge, flexible date rescheduling, fully vetted local guides, and zero net carbon emissions.'}
              </div>
            </div>

          </div>

        </div>

        {/* Modal Sticky Bottom Bar */}
        <div className="p-4 sm:p-6 bg-sand-50 border-t border-sand-200 flex items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sand-600 block">
              {t('modal.allInclusiveRate')}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl font-bold text-ocean-950">
                ${locDest.price.toLocaleString()}
              </span>
              <span className="text-xs text-sand-700 font-medium">
                {t('destinationsSection.perPerson')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-full text-xs font-semibold text-ocean-900 hover:bg-sand-200 transition-colors"
            >
              {t('modal.close')}
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookNow(locDest);
              }}
              className="px-7 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 shadow-md hover:shadow-glow transition-all flex items-center gap-2 transform active:scale-95"
            >
              <span>{t('modal.reserveBtn')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
