
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} 한국부동산마케팅협회. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-1">성공적인 행사를 함께 만들어주셔서 감사합니다.</p>
      </div>
    </footer>
  );
};

export default Footer;
