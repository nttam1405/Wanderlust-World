import React from 'react';
import DestinationCard from './DestinationCard';
import { Compass, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function DestinationGrid({
  destinations,
  favorites,
  onToggleFavorite,
  onSelectDestination,
  onQuickBook,
  onResetFilters
}) {
  const { t } = useLanguage();

  if (destinations.length === 0) {
    return (
      <div className="py-20 text-center max-w-md mx-auto">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sand-200 text-coral-500 flex items-center justify-center">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} />
        </div>
        <h3 className="font-serif text-2xl font-bold text-ocean-950 mb-2">
          {t('destinationsSection.emptyTitle')}
        </h3>
        <p className="text-sm text-sand-800 mb-6 font-normal">
          {t('destinationsSection.emptyDesc')}
        </p>
        <button
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ocean-950 text-white text-sm font-semibold hover:bg-coral-500 transition-colors shadow-sm"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{t('categories.resetBtn')}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
      {destinations.map((dest) => (
        <DestinationCard
          key={dest.id}
          destination={dest}
          isFavorite={favorites.includes(dest.id)}
          onToggleFavorite={onToggleFavorite}
          onOpenDetails={onSelectDestination}
          onQuickBook={onQuickBook}
        />
      ))}
    </div>
  );
}
