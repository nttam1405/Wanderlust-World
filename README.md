# Wanderlust World — Curated Global Destinations & Expeditions

A modern, responsive luxury travel landing page inspired by **Airbnb** and **National Geographic**, built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## ✨ Features & Architecture

### 1. 🌊 Sticky Glassmorphism Navbar
- **Brand Identity:** Emblem logo with compass icon and editorial typography.
- **Glassmorphic Effect:** Dynamic background blur (`backdrop-blur-md` transitioning to `backdrop-blur-xl` with scroll shadow).
- **Navigation:** Smooth links to Destinations, Experiences, Guides, and Reviews.
- **Micro-Interactions:** Saved favorites counter badge with pulse animation and Sunset Coral 'Plan a Trip' CTA button.
- **Mobile Experience:** Slide-out frosted glass navigation drawer.

### 2. 🌅 Hero Section
- **Visuals:** Full-screen Unsplash hero image of coastal mountains at golden hour with multilayered gradient overlays.
- **Editorial Typography:** High-contrast serif headlines paired with modern sans-serif body copy.
- **Floating Glassmorphic Search Bar:**
  - **Location:** Quick selector covering Paris, Kyoto, Santorini, Machu Picchu, Rome, Maldives, Banff, and Petra.
  - **When to Go:** Seasonal departures (Spring Sakura, Summer Solstice, Autumn Harvest, Winter Serenity).
  - **Travel Style:** Cultural Immersion, Ancient Wonders, Private Islands, Alpine Wilderness.
  - **Action:** Submits query, filters destination cards, and smoothly scrolls to results.
- **Trust Ribbon:** 140+ Global Sanctuaries, 4.98 Voyager Rating, 100% Carbon Neutral, 24/7 Dedicated Concierge.

### 3. 🏷️ Interactive Category Filter
- **Filter Tabs:** All Escapes, Europe, Asia, Americas, Wonders of the World.
- **Badge Indicators:** Real-time counts per category.
- **Active Search Indicator:** Displays applied search query pills with one-click reset.

### 4. 🗺️ Famous Destinations Grid
- **Curated Iconic Escapes:**
  - **Paris, France:** The City of Light, Haute Couture & Seine Sunsets
  - **Kyoto, Japan:** Timeless Zen Sanctuaries & Serene Bamboo Groves
  - **Santorini, Greece:** Cobalt Domes & Dramatic Volcanic Calderas
  - **Machu Picchu, Peru:** The Lost Sanctuary of the Incas in the Cloud Forest
  - **Rome, Italy:** Imperial Majesty, Baroque Fountains & La Dolce Vita
  - **Maldives:** Private Atolls, Luminous Bioluminescence & Overwater Serenity
  - **Banff & Lake Louise, Canada:** Glacial Turquoise Waters & Canadian Rockies
  - **Petra, Jordan:** The Rose-Red City Carved into Desert Sandstone
- **Card Micro-interactions:** Smooth hover zoom (`group-hover:scale-110`), interactive wishlist heart toggle, country badges, star ratings, starting prices, and Quick View triggers.

### 5. 🍱 Bento Grid Feature Section
- **360° Virtual Previews:** Interactive spatial canvas with spot switcher (Santorini, Maldives, Kyoto), hotspots, and a fullscreen modal 360 viewer with simulated gyro panning and ocean wave audio.
- **Curated Local Guides:** Spotlight on vetted resident experts (Zen masters, marine archaeologists, Andean historians) with credentials and direct consultation requests.
- **Best Time to Visit Tracker:** Interactive seasonal intelligence matrix with month tabs (Apr, May, Jun, Sep, Nov), temperature readings, crowd density gauges, and bloom highlights.
- **Ethical Luxury Card:** 100% carbon-neutral expeditions and indigenous heritage fund.

### 6. ⭐ Voyager Chronicles & Testimonials
- NatGeo-inspired quotes from verified voyagers with star ratings and travel details.
- Press recognition banner (Condé Nast, National Geographic, Robb Report, Travel + Leisure).

### 7. 📬 The Wanderlust Dispatch & Footer
- **Newsletter Subscription:** Interactive email signup with live success feedback state.
- **Curated Links:** Sanctuaries, Experiences, and Pillars & Trust.
- **Social Media:** Clean SVG icons with hover glow.
- **Utility:** Currency (USD) and Language selectors.

### 8. 📱 Interactive Modals
- **Destination Detail Modal:** High-res gallery carousel, expedition overview, curated highlights breakdown, and direct booking trigger.
- **360° Virtual Tour Modal:** Interactive panoramic rotation controls (Turn Left, Turn Right, Reset), compass azimuth indicator, spatial hotspots, and ambient sound simulation.
- **Plan a Trip Modal:** Bespoke journey customization form (destination, timeline, travelers, custom wishes) with immediate confirmation and reservation code.

---

## 🚀 Running the Project

```bash
# 1. Start the Vite development server
npm run dev

# 2. Build for production
npm run build

# 3. Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
