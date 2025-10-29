
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative h-96 md:h-[500px] text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img
        src="/image/KakaoTalk_20251028_080739232.jpg"
        alt="2025년 한국부동산마케팅협회 협회장배 골프대회"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
          <span className="text-yellow-300">2025년 한국부동산마케팅협회</span><br/><span className="text-yellow-300">협회장배</span> 골프대회
        </h1>
        <div className="mt-4 text-base md:text-xl bg-black bg-opacity-30 px-4 py-2 rounded-lg">
          <p><i className="fas fa-calendar-alt mr-2"></i>2025년 10월 27일 (월)</p>
          <p className="mt-1"><i className="fas fa-map-marker-alt mr-2"></i>88CC 동·서코스</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
