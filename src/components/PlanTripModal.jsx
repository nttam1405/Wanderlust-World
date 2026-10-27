import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Send 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function PlanTripModal({
  isOpen,
  onClose,
  initialDestination = null
}) {
  const { language, t } = useLanguage();

  const [destination, setDestination] = useState(
    initialDestination ? initialDestination.name : 'Santorini'
  );
  const [travelers, setTravelers] = useState('couple');
  const [timeline, setTimeline] = useState('3-6months');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestName || !guestEmail) return;
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  const travelerOptions = [
    { value: 'solo', label: language === 'vi' ? '1 Người (Độc hành)' : 'Solo Explorer' },
    { value: 'couple', label: language === 'vi' ? '2 Người (Cặp đôi / Trăng mật)' : '2 Travelers (Couple / Honeymoon)' },
    { value: 'family', label: language === 'vi' ? 'Gia đình (3–5 Người)' : 'Family Heritage (3–5 Voyagers)' },
    { value: 'group', label: language === 'vi' ? 'Đoàn riêng / Bạn bè (6+ Người)' : 'Private Charter Group (6+ Voyagers)' },
  ];

  const timelineOptions = [
    { value: 'immediate', label: language === 'vi' ? 'Khởi hành ngay (Trong 30 ngày tới)' : 'Immediate (Next 30 Days)' },
    { value: '3-6months', label: language === 'vi' ? 'Trong 3–6 tháng tới' : 'Next 3–6 Months' },
    { value: 'late2025', label: language === 'vi' ? 'Cuối năm 2025 / 2026' : 'Late 2025 / 2026' },
    { value: 'flexible', label: language === 'vi' ? 'Thời gian linh hoạt' : 'Flexible / Inspiration Stage' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ocean-950/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300">
      
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-sand-200 my-8 p-6 sm:p-10 text-ocean-950 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-sand-100 hover:bg-sand-200 text-ocean-800 transition-colors"
          aria-label={t('modal.close')}
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation Success Screen */
          <div className="py-8 text-center space-y-5 animate-in fade-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-coral-600">
                {t('modal.successBadge')}
              </span>
              <h3 className="font-serif text-3xl font-bold text-ocean-950">
                {language === 'vi' ? `Hành Trình Đến ${destination} Của Bạn` : `Your Voyage to ${destination} Begins`}
              </h3>
              <p className="text-sm text-sand-800 max-w-md mx-auto font-light leading-relaxed">
                {language === 'vi' 
                  ? `Cảm ơn quý khách ${guestName}. Quản gia riêng của bạn tại Wanderlust World đã được thông báo và sẽ gửi bản thảo hành trình tùy chỉnh đến ${guestEmail} trong vòng 12 giờ.`
                  : `Thank you, ${guestName}. Your private Wanderlust concierge has been notified and will deliver your customized itinerary draft to ${guestEmail} within 12 hours.`}
              </p>
            </div>

            {/* Reference Card */}
            <div className="p-4 rounded-2xl bg-sand-50 border border-sand-200 max-w-md mx-auto text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-sand-600">{t('modal.refNumber')}</span>
                <span className="font-mono font-bold text-ocean-950">WW-892401</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sand-600">{language === 'vi' ? 'Điểm đến:' : 'Destination:'}</span>
                <span className="font-semibold text-ocean-900">{destination}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sand-600">{t('modal.assignedConcierge')}</span>
                <span className="font-semibold text-coral-600">Genevieve Laurent (Geneva Desk)</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="mt-6 px-8 py-3 rounded-full bg-ocean-950 text-white text-sm font-semibold hover:bg-coral-500 transition-colors shadow-sm"
            >
              {t('modal.returnHomeBtn')}
            </button>
          </div>
        ) : (
          /* Form Content */
          <div>
            
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-coral-600 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'vi' ? 'Chế Tác Chuyến Đi Riêng' : 'Bespoke Voyage Tailoring'}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ocean-950">
                {t('modal.planTripTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-sand-800 font-normal mt-1">
                {t('modal.planTripSub')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Destination Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sand-700 mb-1.5">
                  {t('modal.fieldDestination')}
                </label>
                <div className="relative">
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50/50 text-sm font-semibold text-ocean-950 focus:outline-none focus:ring-2 focus:ring-coral-400"
                  >
                    <option value="Paris">Paris ({language === 'vi' ? 'Pháp - Văn hóa & Ẩm thực Michelin' : 'France - Culture & Gastronomy'})</option>
                    <option value="Kyoto">Kyoto ({language === 'vi' ? 'Nhật Bản - Thiền định & Suối khoáng nóng' : 'Japan - Zen Sanctuaries & Hot Springs'})</option>
                    <option value="Santorini">Santorini ({language === 'vi' ? 'Hy Lạp - Biệt thự vách đá & Du thuyền' : 'Greece - Caldera Villas & Yachting'})</option>
                    <option value="Machu Picchu">Machu Picchu ({language === 'vi' ? 'Peru - Tàu Hiram Bingham & Bí mật Inca' : 'Peru - Hiram Bingham & Inca Mysteries'})</option>
                    <option value="Rome">Rome ({language === 'vi' ? 'Ý - Đế chế La Mã & Ẩm thực truyền thống' : 'Italy - Antiquity & Trattorias'})</option>
                    <option value="Maldives">Maldives ({language === 'vi' ? 'Đảo san hô riêng & Đáy biển phát quang' : 'Private Coral Atolls'})</option>
                    <option value="Banff & Lake Louise">Banff & Lake Louise ({language === 'vi' ? 'Canada - Hồ băng & Đỉnh Rocky' : 'Canada - Glacial Peaks'})</option>
                    <option value="Petra">Petra ({language === 'vi' ? 'Jordan - Hẻm núi hồng & Sa mạc Wadi Rum' : 'Jordan - Rose-Red Canyon'})</option>
                  </select>
                </div>
              </div>

              {/* Grid 2-cols: Travelers & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sand-700 mb-1.5">
                    {t('modal.fieldTravelers')}
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50/50 text-sm font-semibold text-ocean-950 focus:outline-none focus:ring-2 focus:ring-coral-400"
                  >
                    {travelerOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sand-700 mb-1.5">
                    {t('modal.fieldTimeline')}
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50/50 text-sm font-semibold text-ocean-950 focus:outline-none focus:ring-2 focus:ring-coral-400"
                  >
                    {timelineOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Information Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sand-700 mb-1.5">
                    {t('modal.fieldName')}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === 'vi' ? 'Ví dụ: Nguyễn Văn An' : 'e.g. Lady Vivienne Montgomery'}
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50/50 text-sm font-normal text-ocean-950 focus:outline-none focus:ring-2 focus:ring-coral-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sand-700 mb-1.5">
                    {t('modal.fieldEmail')}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50/50 text-sm font-normal text-ocean-950 focus:outline-none focus:ring-2 focus:ring-coral-400"
                  />
                </div>
              </div>

              {/* Special Desires / Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sand-700 mb-1.5">
                  {t('modal.fieldNotes')}
                </label>
                <textarea
                  rows="2"
                  placeholder={language === 'vi' ? 'Trực thăng riêng, chế độ ăn chay, kỷ niệm ngày cưới...' : 'Private helicopter transfers, dietary preferences, milestone celebration...'}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-sand-200 bg-sand-50/50 text-sm font-normal text-ocean-950 focus:outline-none focus:ring-2 focus:ring-coral-400 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white font-bold text-sm shadow-md hover:shadow-glow transition-all flex items-center justify-center gap-2 transform active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('modal.submitPlanBtn')}</span>
                </button>
              </div>

              {/* Guarantee */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-sand-600 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>
                  {language === 'vi' 
                    ? 'Không ràng buộc cam kết • Bảo mật thông tin tuyệt đối'
                    : 'No commitment required • Complete privacy protected'}
                </span>
              </div>

            </form>

          </div>
        )}

      </div>

    </div>
  );
}
