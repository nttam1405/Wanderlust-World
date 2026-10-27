import React from 'react';
import { Globe, Landmark, Compass, Award, Trees, X } from 'lucide-react';
import { categoriesList } from '../data/destinations';
import { useLanguage } from '../context/LanguageContext';

export default function CategoryFilter({
  activeCategory,
  onSelectCategory,
  searchFilter,
  onResetSearchFilter,
  totalResults
}) {
  const { t } = useLanguage();

  const getCategoryLabel = (id) => {
    switch (id) {
      case 'All':
        return t('categories.all');
      case 'Europe':
        return t('categories.europe');
      case 'Asia':
        return t('categories.asia');
      case 'Americas':
        return t('categories.americas');
      case 'Wonders of the World':
        return t('categories.wonders');
      default:
        return id;
    }
  };

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'All':
        return <Globe className="w-4 h-4" />;
      case 'Europe':
        return <Landmark className="w-4 h-4" />;
      case 'Asia':
        return <SparklesIcon className="w-4 h-4" />;
      case 'Americas':
        return <Trees className="w-4 h-4" />;
      case 'Wonders of the World':
        return <Award className="w-4 h-4 text-amber-500" />;
      default:
        return <Compass className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full">
      
      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 bg-sand-100/70 backdrop-blur-md rounded-2xl max-w-fit mx-auto border border-sand-200 shadow-inner">
        {categoriesList.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? 'bg-ocean-950 text-white shadow-md'
                  : 'text-ocean-800 hover:text-coral-600 hover:bg-white/70'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{getCategoryLabel(cat.id)}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold transition-colors ${
                  isActive
                    ? 'bg-coral-500 text-white'
                    : 'bg-sand-200 text-sand-800'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Search / Filter Status Notification */}
      {searchFilter && (searchFilter.location !== 'All' || searchFilter.season !== 'All Seasons' || searchFilter.style !== 'All Styles') && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral-50 border border-coral-200 text-coral-800 text-xs font-medium">
            <span>{t('categories.filterApplied')}</span>
            {searchFilter.location !== 'All' && (
              <span className="font-semibold text-coral-600">"{searchFilter.location}"</span>
            )}
            <button
              onClick={onResetSearchFilter}
              className="ml-1 p-0.5 rounded-full hover:bg-coral-200 text-coral-700 transition-colors"
              title={t('categories.resetBtn')}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <span className="text-xs text-sand-600">
            ({totalResults} {totalResults === 1 ? t('categories.singleMatch') : t('categories.matches')})
          </span>
        </div>
      )}

    </div>
  );
}

function SparklesIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
  );
}
