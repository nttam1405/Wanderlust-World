import React from 'react';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';
import { reviewsData } from '../data/features';
import { useLanguage } from '../context/LanguageContext';

export default function ReviewsSection() {
  const { language, t } = useLanguage();

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#faf8f5] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral-100 text-coral-700 text-xs font-bold mb-4 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('reviews.badge')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ocean-950 tracking-tight leading-tight">
            {t('reviews.heading')} <br />
            <span className="italic font-normal text-coral-500">{t('reviews.headingItalic')}</span>
          </h2>
          <p className="mt-4 text-base text-sand-800 leading-relaxed font-light">
            {t('reviews.subheading')}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviewsData.map((review) => {
            const quoteText = typeof review.quote === 'object' ? review.quote[language] || review.quote.en : review.quote;
            const destText = typeof review.destination === 'object' ? review.destination[language] || review.destination.en : review.destination;
            const originText = typeof review.origin === 'object' ? review.origin[language] || review.origin.en : review.origin;
            const dateText = typeof review.date === 'object' ? review.date[language] || review.date.en : review.date;

            return (
              <div
                key={review.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-sand-200/90 shadow-glass-card flex flex-col justify-between relative group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="relative">
                  
                  {/* Subtle Quote Symbol */}
                  <Quote className="w-10 h-10 text-coral-100 absolute -top-2 -left-2 rotate-180 -z-0" />

                  {/* Stars and Verified */}
                  <div className="flex items-center justify-between mb-5 relative z-10">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      {t('reviews.verified')}
                    </span>
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-sm sm:text-base text-ocean-900 leading-relaxed font-normal relative z-10 italic">
                    "{quoteText}"
                  </blockquote>

                  {/* Destination Tag */}
                  <div className="mt-4 text-xs font-semibold text-coral-600">
                    {destText}
                  </div>
                </div>

                {/* Author Info */}
                <div className="mt-6 pt-5 border-t border-sand-100 flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-11 h-11 rounded-full object-cover border border-sand-200"
                  />
                  <div>
                    <div className="text-sm font-bold text-ocean-950 font-serif">
                      {review.author}
                    </div>
                    <div className="text-[11px] text-sand-600">
                      {originText} • {dateText}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global Press / Trust Ribbon */}
        <div className="mt-16 pt-12 border-t border-sand-200/80 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-sand-600 font-semibold mb-6">
            {t('reviews.pressHeading')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-serif text-lg tracking-widest font-bold">CONDÉ NAST TRAVELLER</span>
            <span className="font-serif text-lg tracking-widest font-bold">NATIONAL GEOGRAPHIC</span>
            <span className="font-serif text-lg tracking-widest font-bold">ROBB REPORT</span>
            <span className="font-serif text-lg tracking-widest font-bold">TRAVEL + LEISURE</span>
          </div>
        </div>

      </div>

    </section>
  );
}
