export const bentoFeaturesData = {
  virtualPreview: {
    sampleSpots: [
      { 
        name: 'Oia Cliffside Caldera, Santorini', 
        nameVi: 'Vách đá Caldera tại Oia, Santorini',
        angle: '360° Panorama', 
        activeUsers: 48 
      },
      { 
        name: 'Overwater Lagoon Villa, Maldives', 
        nameVi: 'Biệt thự trên đầm phá biển, Maldives',
        angle: 'Aerial & Interior', 
        activeUsers: 64 
      },
      { 
        name: 'Gion Ancient Teahouse, Kyoto', 
        nameVi: 'Trà quán cổ kính Gion, Kyoto',
        angle: 'Courtyard Garden', 
        activeUsers: 32 
      }
    ]
  },
  localGuides: {
    guides: [
      {
        name: 'Kenji Takahashi',
        location: {
          en: 'Kyoto, Japan',
          vi: 'Kyoto, Nhật Bản',
        },
        role: {
          en: 'Zen Heritage Guardian',
          vi: 'Hộ Thần Di Sản Thiền Tông',
        },
        experience: {
          en: '18 Years',
          vi: '18 Năm',
        },
        rating: 5.0,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
        specialty: {
          en: 'Exclusive Tea Ceremonies & Sacred Garden Restorations',
          vi: 'Nghi lễ Trà đạo Độc quyền & Phục chế Vườn Thiền Cổ',
        }
      },
      {
        name: 'Eleni Douka',
        location: {
          en: 'Santorini, Greece',
          vi: 'Santorini, Hy Lạp',
        },
        role: {
          en: 'Aegean Marine Archaeologist',
          vi: 'Nhà Khảo Cổ Học Biển Aegean',
        },
        experience: {
          en: '12 Years',
          vi: '12 Năm',
        },
        rating: 4.99,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
        specialty: {
          en: 'Sunken Caldera Catamaran Routes & Volcanic Geology',
          vi: 'Hải trình Catamaran ngắm Miệng Núi Lửa Chìm & Địa chất',
        }
      },
      {
        name: 'Mateo Quispe',
        location: {
          en: 'Cusco & Sacred Valley, Peru',
          vi: 'Cusco & Thung lũng Linh thiêng, Peru',
        },
        role: {
          en: 'High Andean Explorer',
          vi: 'Nhà Thám Hiểm Rặng Núi Andes',
        },
        experience: {
          en: '15 Years',
          vi: '15 Năm',
        },
        rating: 4.98,
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
        specialty: {
          en: 'Quechua Astronomy & Ancient Incan Trail Systems',
          vi: 'Thiên văn học Quechua & Tuyến Đường Mòn Inca Cổ Đại',
        }
      }
    ]
  },
  bestTimeTracker: {
    monthsData: [
      { 
        month: { en: 'Apr', vi: 'T4' },
        label: { en: 'April', vi: 'Tháng 4' },
        temp: '19°C / 66°F', 
        crowd: { en: 'Moderate', vi: 'Vừa phải' },
        highlight: { en: 'Cherry Blossom Bloom in Kyoto', vi: 'Mùa hoa Anh Đào nở rộ tại Kyoto' },
        score: 98, 
        status: { en: 'Prime Window', vi: 'Thời điểm vàng' }
      },
      { 
        month: { en: 'May', vi: 'T5' },
        label: { en: 'May', vi: 'Tháng 5' },
        temp: '23°C / 73°F', 
        crowd: { en: 'Optimal', vi: 'Lý tưởng' },
        highlight: { en: 'Mild Aegean Breezes in Santorini', vi: 'Gió biển Aegean dịu êm tại Santorini' },
        score: 96, 
        status: { en: 'Peak Delight', vi: 'Tuyệt mỹ' }
      },
      { 
        month: { en: 'Jun', vi: 'T6' },
        label: { en: 'June', vi: 'Tháng 6' },
        temp: '24°C / 75°F', 
        crowd: { en: 'Low-Med', vi: 'Thưa thớt' },
        highlight: { en: 'Dry Andean Skies over Machu Picchu', vi: 'Bầu trời Andes trong veo tại Machu Picchu' },
        score: 99, 
        status: { en: 'Pristine Conditions', vi: 'Điều kiện hoàn hảo' }
      },
      { 
        month: { en: 'Sep', vi: 'T9' },
        label: { en: 'September', vi: 'Tháng 9' },
        temp: '22°C / 72°F', 
        crowd: { en: 'Low', vi: 'Yên tĩnh' },
        highlight: { en: 'Parisian Autumn & Harvest Gastronomy', vi: 'Mùa thu Paris & Ẩm thực mùa thu hoạch' },
        score: 95, 
        status: { en: 'Serene Luxury', vi: 'Thư thái thanh bình' }
      },
      { 
        month: { en: 'Nov', vi: 'T11' },
        label: { en: 'November', vi: 'Tháng 11' },
        temp: '29°C / 84°F', 
        crowd: { en: 'Moderate', vi: 'Vừa phải' },
        highlight: { en: 'Crystal Clarity in Maldives Coral Lagoons', vi: 'Nước biển trong vắt rạn san hô Maldives' },
        score: 97, 
        status: { en: 'Underwater Nirvana', vi: 'Thiên đường lặn biển' }
      },
    ]
  }
};

export const reviewsData = [
  {
    id: 1,
    author: 'Eleanor Vance',
    origin: {
      en: 'London, UK',
      vi: 'London, Vương quốc Anh',
    },
    destination: {
      en: 'Kyoto Sanctuary & Ryokan Voyage',
      vi: 'Hành trình Thiền định & Ryokan tại Kyoto',
    },
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    date: {
      en: 'Traveled October 2025',
      vi: 'Du ngoạn Tháng 10, 2025',
    },
    verified: true,
    quote: {
      en: 'Wanderlust World arranged a private dawn entry into the bamboo forest followed by a Zen master mediation that brought me to tears. An unmatched level of refinement and care.',
      vi: 'Wanderlust World đã sắp xếp cho tôi vào rừng trúc lúc bình minh tĩnh lặng, sau đó là buổi thiền định cùng một Thiền sư khiến tôi rơi nước mắt vì xúc động. Sự tinh tế và chu đáo đạt đến đỉnh cao.',
    },
  },
  {
    id: 2,
    author: 'Julian & Marcus Sterling',
    origin: {
      en: 'San Francisco, USA',
      vi: 'San Francisco, Hoa Kỳ',
    },
    destination: {
      en: 'Machu Picchu Hiram Bingham Expedition',
      vi: 'Chuyến Thám Hiểm Machu Picchu trên tàu Hiram Bingham',
    },
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    date: {
      en: 'Traveled September 2025',
      vi: 'Du ngoạn Tháng 9, 2025',
    },
    verified: true,
    quote: {
      en: 'From the private champagne toast on the Andean rail car to the secluded sunrise overlook above the Inca citadel, every single second felt hand-crafted by master curators.',
      vi: 'Từ ly champagne trên toa tàu lộng gió giữa rặng Andes đến góc ngắm bình minh tĩnh lặng phía trên thành cổ Inca, từng khoảnh khắc đều như một tác phẩm nghệ thuật được may đo riêng.',
    },
  },
  {
    id: 3,
    author: 'Dr. Sophia Al-Mansoor',
    origin: {
      en: 'Dubai, UAE',
      vi: 'Dubai, UAE',
    },
    destination: {
      en: 'Santorini Caldera Cliffside & Yacht',
      vi: 'Biệt thự Vách đá & Du thuyền Caldera Santorini',
    },
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    date: {
      en: 'Traveled August 2025',
      vi: 'Du ngoạn Tháng 8, 2025',
    },
    verified: true,
    quote: {
      en: 'The 360° preview gave us absolute confidence when booking our cave villa. In person, it exceeded every expectation. The local historian Eleni was extraordinary.',
      vi: 'Tính năng mô phỏng 360° giúp chúng tôi hoàn toàn yên tâm khi chọn biệt thự hang đá. Khi đến nơi, vẻ đẹp còn vượt xa cả kỳ vọng. Hướng dẫn viên khảo cổ Eleni thật xuất sắc.',
    },
  }
];

export const getLocalizedHeroStats = (lang = 'en') => [
  { value: '140+', label: lang === 'vi' ? 'Điểm đến Tuyển chọn' : 'Global Sanctuaries' },
  { value: '4.98', label: lang === 'vi' ? 'Đánh giá Du khách' : 'Voyager Rating' },
  { value: '100%', label: lang === 'vi' ? 'Chuyến đi Trung hòa Carbon' : 'Carbon Neutral Expeditions' },
  { value: '24/7', label: lang === 'vi' ? 'Quản gia Chuyên trách' : 'Dedicated Concierge' },
];
