import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import DestinationGrid from './components/DestinationGrid';
import BentoFeatures from './components/BentoFeatures';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import DestinationModal from './components/DestinationModal';
import VirtualTourModal from './components/VirtualTourModal';
import PlanTripModal from './components/PlanTripModal';

import { destinationsData, getLocalizedDestination } from './data/destinations';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { language, t } = useLanguage();

  // Navigation & Category state
  const [activeCategory, setActiveCategory] = useState('All');

  // Search filter state from Hero
  const [searchFilter, setSearchFilter] = useState({
    location: 'All',
    season: 'All Seasons',
    style: 'All Styles',
  });

  // Favorites / Wishlist state
  const [favorites, setFavorites] = useState(['santorini', 'kyoto']);

  // Modals state
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [activeVirtualSpot, setActiveVirtualSpot] = useState(null);
  const [isPlanTripOpen, setIsPlanTripOpen] = useState(false);
  const [planTripInitialDest, setPlanTripInitialDest] = useState(null);

  // Toggle favorite destination
  const handleToggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Handle Hero search submission
  const handleHeroSearch = (filters) => {
    setSearchFilter(filters);
    const destSection = document.getElementById('destinations');
    if (destSection) {
      destSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reset search filter
  const handleResetSearchFilter = () => {
    setSearchFilter({
      location: 'All',
      season: 'All Seasons',
      style: 'All Styles',
    });
  };

  // Reset all filters
  const handleResetAllFilters = () => {
    setActiveCategory('All');
    handleResetSearchFilter();
  };

  // Open Plan Trip Modal
  const handleOpenPlanTrip = (destination = null) => {
    setPlanTripInitialDest(destination);
    setIsPlanTripOpen(true);
  };

  // Open 360 Virtual Tour
  const handleOpenVirtualTour = (spot) => {
    setActiveVirtualSpot(spot);
    setIsVirtualTourOpen(true);
  };

  // Filtered destinations logic
  const filteredDestinations = useMemo(() => {
    return destinationsData.filter((item) => {
      // 1. Category filter
      if (activeCategory !== 'All') {
        const matchesCat = item.category.includes(activeCategory);
        if (!matchesCat) return false;
      }

      // 2. Location filter from search bar
      if (searchFilter.location !== 'All') {
        const locLower = searchFilter.location.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(locLower);
        const matchesEnCountry = typeof item.country === 'object' 
          ? item.country.en.toLowerCase().includes(locLower) 
          : item.country.toLowerCase().includes(locLower);
        const matchesViCountry = typeof item.country === 'object' && item.country.vi
          ? item.country.vi.toLowerCase().includes(locLower)
          : false;
        
        if (!matchesName && !matchesEnCountry && !matchesViCountry) return false;
      }

      // 3. Travel Style filter
      if (searchFilter.style !== 'All Styles') {
        if (searchFilter.style === 'Ancient Wonders Trek' && !item.isWonder) {
          return false;
        }
        if (searchFilter.style === 'Private Island & Coastal' && !['santorini', 'maldives'].includes(item.id)) {
          return false;
        }
        if (searchFilter.style === 'Alpine & Wilderness Escape' && !['banff'].includes(item.id)) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, searchFilter]);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-ocean-950 flex flex-col font-sans selection:bg-coral-500 selection:text-white">
      
      {/* Sticky Glassmorphism Navbar with Language Switcher */}
      <Navbar
        onOpenPlanTrip={() => handleOpenPlanTrip()}
        wishlistCount={favorites.length}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onSearchSubmit={handleHeroSearch}
          onExploreClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('destinations');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Famous Destinations Section */}
        <section id="destinations" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-coral-600 block mb-3">
              {t('destinationsSection.tagline')}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ocean-950 tracking-tight leading-tight">
              {t('destinationsSection.heading')}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-sand-800 leading-relaxed font-light">
              {t('destinationsSection.subheading')}
            </p>
          </div>

          {/* Interactive Category Filter */}
          <div className="mb-10 sm:mb-14">
            <CategoryFilter
              activeCategory={activeCategory}
              onSelectCategory={(catId) => {
                setActiveCategory(catId);
                handleResetSearchFilter();
              }}
              searchFilter={searchFilter}
              onResetSearchFilter={handleResetSearchFilter}
              totalResults={filteredDestinations.length}
            />
          </div>

          {/* Famous Destinations Grid */}
          <DestinationGrid
            destinations={filteredDestinations}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectDestination={(dest) => setSelectedDestination(dest)}
            onQuickBook={(dest) => handleOpenPlanTrip(dest)}
            onResetFilters={handleResetAllFilters}
          />

        </section>

        {/* Bento Grid Feature Section */}
        <BentoFeatures
          onOpenVirtualTour={(spot) => handleOpenVirtualTour(spot)}
          onOpenPlanTrip={() => handleOpenPlanTrip()}
        />

        {/* Voyager Reviews Section */}
        <ReviewsSection />
      </main>

      {/* Footer with Language Switcher */}
      <Footer
        onCategoryClick={(catId) => {
          setActiveCategory(catId);
          const el = document.getElementById('destinations');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Destination Quick View & Details Modal */}
      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
          onBookNow={(dest) => handleOpenPlanTrip(dest)}
        />
      )}

      {/* 360° Virtual Preview Modal */}
      {isVirtualTourOpen && (
        <VirtualTourModal
          spot={activeVirtualSpot}
          onClose={() => setIsVirtualTourOpen(false)}
          onBookSpot={() => handleOpenPlanTrip()}
        />
      )}

      {/* Bespoke Voyage Tailoring / Plan a Trip Modal */}
      <PlanTripModal
        isOpen={isPlanTripOpen}
        onClose={() => setIsPlanTripOpen(false)}
        initialDestination={planTripInitialDest}
      />

    </div>
  );
}
