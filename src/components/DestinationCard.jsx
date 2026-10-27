import React from 'react';
import { Star, Heart, ArrowUpRight, Clock, Award, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedDestination } from '../data/destinations';

export default function DestinationCard({
  destination,
  isFavorite,
  onToggleFavorite,
  onOpenDetails,
  onQuickBook
}) {
  const { language, t } = useLanguage();
  const locDest = getLocalizedDestination(destination, language);

  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden border border-sand-200/80 shadow-xs hover:shadow-glass-card transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1.5"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand-100">
        
        {/* Destination Image with Zoom Effect */}
        <img
          src={locDest.image}
          alt={locDest.name}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />

        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/75 via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

        {/* Floating Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Country Badge */}
            <span className="glass-badge px-3 py-1 rounded-full text-xs font-semibold text-ocean-900 shadow-sm flex items-center gap-1">
              <MapPin className="w-3 h-3 text-coral-500" />
              {locDest.country}
            </span>

            {/* Wonder of World Badge */}
            {locDest.isWonder && (
              <span className="bg-amber-400/90 text-ocean-950 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold shadow-xs flex items-center gap-1">
                <Award className="w-3 h-3 fill-ocean-950" />
                {t('destinationsSection.wonderBadge')}
              </span>
            )}
          </div>

          {/* Favorite / Wishlist Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(locDest.id);
            }}
            className={`p-2.5 rounded-full transition-all duration-300 backdrop-blur-md ${
              isFavorite
                ? 'bg-white text-coral-500 shadow-md scale-105'
                : 'bg-white/80 hover:bg-white text-ocean-700 hover:text-coral-500'
            }`}
            aria-label={`Save ${locDest.name} to wishlist`}
          >
            <Heart
              className={`w-4 h-4 transition-transform duration-200 ${
                isFavorite ? 'fill-coral-500 stroke-coral-500 scale-110' : ''
              }`}
            />
          </button>
        </div>

        {/* Floating Quick View button on hover */}
        <div className="absolute inset-x-0 bottom-4 px-4 flex justify-between items-end z-10">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-ocean-950/80 backdrop-blur-md text-[11px] font-medium text-sand-200">
              {locDest.vibe}
            </span>
          </div>
          
          <button
            onClick={() => onOpenDetails(locDest)}
            className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-3.5 py-1.5 rounded-full bg-white text-ocean-950 text-xs font-semibold shadow-md hover:bg-sand-50 flex items-center gap-1"
          >
            <span>{t('destinationsSection.quickView')}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-coral-500" />
          </button>
        </div>

      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        
        <div>
          {/* Header & Rating */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="font-serif text-2xl font-bold text-ocean-950 group-hover:text-coral-600 transition-colors">
              {locDest.name}
            </h3>
            
            <div className="flex items-center gap-1 bg-sand-100/80 px-2 py-0.5 rounded-md">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold text-ocean-950">{locDest.rating}</span>
              <span className="text-[11px] text-sand-700 font-medium hidden sm:inline">
                ({(locDest.reviewsCount / 1000).toFixed(1)}k)
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xs font-medium text-coral-600 mb-2.5 line-clamp-1">
            {locDest.tagline}
          </p>

          {/* Description */}
          <p className="text-sm text-sand-800 leading-relaxed line-clamp-2 font-normal">
            {locDest.description}
          </p>
        </div>

        {/* Highlights List */}
        <div className="mt-4 pt-3.5 border-t border-sand-100">
          <div className="flex items-center gap-2 text-xs text-sand-700">
            <Clock className="w-3.5 h-3.5 text-sand-500 flex-shrink-0" />
            <span className="font-medium text-ocean-900">{locDest.duration}</span>
            <span className="text-sand-400">•</span>
            <span className="truncate">{locDest.highlights[0]}</span>
          </div>
        </div>

        {/* Footer: Price & CTA */}
        <div className="mt-5 pt-4 border-t border-sand-200/60 flex items-center justify-between gap-3">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-sand-600 font-medium block">
              {t('destinationsSection.startingFrom')}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-2xl font-bold text-ocean-950">
                ${locDest.price.toLocaleString()}
              </span>
              <span className="text-xs text-sand-700 font-normal">
                {t('destinationsSection.perPerson')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenDetails(locDest)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-ocean-900 bg-sand-100 hover:bg-sand-200 transition-colors"
            >
              {t('destinationsSection.details')}
            </button>
            <button
              type="button"
              onClick={() => onQuickBook(locDest)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-coral-500 hover:bg-coral-600 shadow-sm transition-all duration-200"
            >
              {t('destinationsSection.book')}
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
