import React, { useState } from 'react';
import { 
  X, 
  RotateCw, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Compass, 
  MapPin
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function VirtualTourModal({ spot, onClose, onBookSpot }) {
  const { language, t } = useLanguage();
  const [rotation, setRotation] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);

  if (!spot) return null;

  const handleRotate = (deg) => {
    setRotation((prev) => (prev + deg) % 360);
  };

  const hotspots = language === 'vi' ? [
    { id: 1, title: 'Ban Công Toàn Cảnh', description: 'Góc ngắm hoàng hôn 180° không bị che chắn nhìn ra miệng núi lửa Caldera với lò sưởi ngoài trời riêng.', left: '35%', top: '55%' },
    { id: 2, title: 'Hồ Bơi Hang Đá', description: 'Bể ngâm nước biển điều hòa nhiệt độ được đục thủ công trực tiếp vào vách đá núi lửa nguyên khối.', left: '65%', top: '68%' },
    { id: 3, title: 'Mái Vòm Truyền Thống', description: 'Kiến trúc vòm Hy Lạp cổ điển giúp cách âm tuyệt đối và làm mát tự nhiên.', left: '22%', top: '38%' },
  ] : [
    { id: 1, title: 'Panoramic Terrace', description: 'Unobstructed 180° caldera sunset vantage point with private fire pit.', left: '35%', top: '55%' },
    { id: 2, title: 'Cliffside Plunge Pool', description: 'Temperature-regulated seawater infinity basin carved into native stone.', left: '65%', top: '68%' },
    { id: 3, title: 'Architectural Vault', description: 'Traditional dome architecture engineered for natural cooling and silence.', left: '22%', top: '38%' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-ocean-950/85 backdrop-blur-lg animate-in fade-in duration-300">
      
      {/* 360 Theater Frame */}
      <div 
        className="relative w-full max-w-5xl bg-ocean-950 text-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col h-[85vh] max-h-[800px] animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header Bar */}
        <div className="p-4 sm:px-6 bg-ocean-950/70 backdrop-blur-md border-b border-white/10 flex items-center justify-between z-20">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-coral-500/20 text-coral-400 flex items-center justify-center">
              <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: '12s' }} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg font-bold text-white">
                  {spot.title || t('modal.virtualTitle')}
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-coral-500/30 text-coral-300 text-[10px] font-bold border border-coral-500/30">
                  {language === 'vi' ? 'Mô Phỏng 8K' : '8K Spatial Sim'}
                </span>
              </div>
              <p className="text-xs text-sand-300 font-light flex items-center gap-1">
                <MapPin className="w-3 h-3 text-coral-400" />
                <span>
                  {language === 'vi' 
                    ? `Hướng xoay: ${(Math.abs(rotation) % 360)}° • Dùng các nút bên dưới để xoay 360°`
                    : `Orientation: ${(Math.abs(rotation) % 360)}° • Use controls below to pan 360°`}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2.5 rounded-xl border transition-colors ${
                soundEnabled
                  ? 'bg-coral-500/30 border-coral-400 text-coral-300'
                  : 'bg-white/10 border-white/15 text-sand-200 hover:bg-white/20'
              }`}
              title={soundEnabled ? 'Tắt âm thanh / Mute' : 'Bật âm thanh thiên nhiên / Ambient Audio'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
              aria-label={t('modal.close')}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* 360 Simulated Viewport with Pan Effect */}
        <div className="relative flex-1 overflow-hidden select-none bg-black flex items-center justify-center cursor-grab active:cursor-grabbing">
          
          {/* Panoramic Image container moving with rotation */}
          <div
            className="absolute inset-0 w-[140%] h-[120%] -left-[20%] -top-[10%] transition-transform duration-500 ease-out"
            style={{
              transform: `scale(1.08) translateX(${rotation * 1.5}px)`,
            }}
          >
            <img
              src={spot.image}
              alt="360 view panorama"
              className="w-full h-full object-cover filter brightness-95"
            />
            {/* Cylindrical Vignette Overlay */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60 pointer-events-none" />
          </div>

          {/* Interactive Spatial Hotspots */}
          {hotspots.map((h) => (
            <div
              key={h.id}
              className="absolute z-20"
              style={{
                left: h.left,
                top: h.top,
                transform: `translateX(${rotation * 1.2}px)`,
              }}
            >
              <button
                type="button"
                onClick={() => setActiveHotspot(activeHotspot?.id === h.id ? null : h)}
                className="relative group p-1 flex items-center gap-1.5 focus:outline-none"
              >
                <div className="w-5 h-5 rounded-full bg-coral-500 text-white flex items-center justify-center text-xs font-bold shadow-glow animate-pulse">
                  +
                </div>
                <div className="glass-card-dark px-2.5 py-1 rounded-full text-xs font-semibold text-white shadow-md border border-white/20 whitespace-nowrap">
                  {h.title}
                </div>
              </button>

              {/* Hotspot Info Popover */}
              {activeHotspot?.id === h.id && (
                <div className="absolute left-0 bottom-full mb-2 w-64 p-3.5 rounded-2xl glass-card-dark border border-coral-500/40 shadow-2xl text-left animate-in fade-in zoom-in-95">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-coral-400">{h.title}</span>
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="text-sand-400 hover:text-white"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                  <p className="text-xs text-sand-200 font-light leading-relaxed">
                    {h.description}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Simulated Compass Heading Ring */}
          <div className="absolute bottom-20 left-6 z-20 hidden sm:flex items-center gap-2 glass-card-dark px-3 py-1.5 rounded-full border border-white/10 text-xs text-sand-200">
            <Compass className="w-4 h-4 text-coral-400" />
            <span>
              {language === 'vi' ? `Góc phương vị ${(Math.abs(rotation) % 360)}°` : `Facing ${(Math.abs(rotation) % 360)}° azimuth`}
            </span>
          </div>

          {/* Sound Notification Badge */}
          {soundEnabled && (
            <div className="absolute top-6 left-6 z-20 glass-card-dark px-3 py-1.5 rounded-full border border-coral-500/30 text-xs text-coral-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-coral-400 animate-ping" />
              <span>
                {language === 'vi' ? 'Đang phát: Âm thanh sóng biển & gió tự nhiên' : 'Playing: Gentle Aegean Sea Waves & Breeze'}
              </span>
            </div>
          )}

        </div>

        {/* Bottom Control Bar */}
        <div className="p-4 sm:px-6 bg-ocean-950/80 backdrop-blur-md border-t border-white/10 flex flex-wrap items-center justify-between gap-4 z-20">
          
          {/* Pan Navigation Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-sand-400 font-medium hidden sm:inline mr-2">
              {language === 'vi' ? 'Điều hướng:' : 'Pan 360°:'}
            </span>
            <button
              onClick={() => handleRotate(35)}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('modal.turnLeft')}</span>
            </button>
            <button
              onClick={() => handleRotate(-35)}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>{t('modal.turnRight')}</span>
            </button>
            <button
              onClick={() => setRotation(0)}
              className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sand-300 text-xs transition-colors"
            >
              {t('modal.resetView')}
            </button>
          </div>

          {/* Reserve / Close Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-sand-300 hover:text-white transition-colors"
            >
              {t('modal.close')}
            </button>
            <button
              onClick={() => {
                onClose();
                onBookSpot?.(spot);
              }}
              className="px-6 py-2.5 rounded-full bg-coral-500 hover:bg-coral-600 text-white text-xs font-bold shadow-md hover:shadow-glow transition-all"
            >
              {t('modal.planJourneyHere')}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
