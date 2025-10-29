import React, { useState } from 'react';
import Modal from './Modal';

// 성실 열정상 이미지
const awardImages = [
  '/award/1/KakaoTalk_20251028_083722163.jpg',
  '/award/1/KakaoTalk_20251028_083722163_01.jpg',
  '/award/1/KakaoTalk_20251028_083722163_02.jpg',
];

// 팀 최고점상 이미지
const teamAwardImages = [
  '/award/2/KakaoTalk_20251028_083740132.jpg',
  '/award/2/KakaoTalk_20251028_083740132_01.jpg',
];

// 다보기상 이미지
const bogeyAwardImages = [
  '/award/3/KakaoTalk_20251028_083755701.jpg',
  '/award/3/KakaoTalk_20251028_083755701_01.jpg',
  '/award/3/KakaoTalk_20251028_083755701_02.jpg',
];

// 일파만파상 이미지
const parAwardImages = [
  '/award/4/KakaoTalk_20251028_083810872.jpg',
  '/award/4/KakaoTalk_20251028_083810872_01.jpg',
];

// 운수대통상 이미지
const birdieAwardImages = [
  '/award/5/KakaoTalk_20251028_083826168.jpg',
  '/award/5/KakaoTalk_20251028_083826168_01.jpg',
];

// 정밀사격상 이미지
const nearestAwardImages = [
  '/award/6/KakaoTalk_20251028_083845813.jpg',
  '/award/6/KakaoTalk_20251028_083845813_01.jpg',
];

// 대포왕상 이미지
const longestAwardImages = [
  '/award/7/KakaoTalk_20251028_083859709.jpg',
  '/award/7/KakaoTalk_20251028_083859709_01.jpg',
  '/award/7/KakaoTalk_20251028_083859709_02.jpg',
];

// 신페리오 우승 이미지
const newperioWinnerImages = [
  '/award/8/KakaoTalk_20251028_083914584.jpg',
  '/award/8/KakaoTalk_20251028_083914584_01.jpg',
];

// 메달리스트 우승 이미지
const medalistWinnerImages = [
  '/award/9/KakaoTalk_20251028_083932660.jpg',
  '/award/9/KakaoTalk_20251028_083932660_01.jpg',
  '/award/9/KakaoTalk_20251028_083932660_02.jpg',
];

// 포토제닉상 이미지
const photogenicAwardImages = [
  '/award/10/KakaoTalk_20251028_083950090.jpg',
  '/award/10/KakaoTalk_20251028_083950090_01.jpg',
  '/award/10/KakaoTalk_20251028_083950090_02.jpg',
];

// 포토제닉상 준우승 이미지
const photogenicRunnerUpImages = [
  '/award/11/KakaoTalk_20251028_084003111.jpg',
  '/award/11/KakaoTalk_20251028_084003111_01.jpg',
];

// 포토제닉상 우수상 이미지
const photogenicExcellenceImages = [
  '/award/12/KakaoTalk_20251028_084013792.jpg',
  '/award/12/KakaoTalk_20251028_084013792_01.jpg',
];

// public/image 폴더에 있는 이미지들
const galleryImages = [
  '/image/KakaoTalk_20251028_080739232.jpg',
  '/image/KakaoTalk_20251028_080739232_01.jpg',
  '/image/KakaoTalk_20251028_080739232_02.jpg',
  '/image/KakaoTalk_20251028_080739232_03.jpg',
  '/image/KakaoTalk_20251028_080739232_04.jpg',
  '/image/KakaoTalk_20251028_080739232_05.jpg',
  '/image/KakaoTalk_20251028_080739232_06.jpg',
  '/image/KakaoTalk_20251028_080739232_07.jpg',
  '/image/KakaoTalk_20251028_080739232_08.jpg',
  '/image/KakaoTalk_20251028_080739232_09.jpg',
  '/image/KakaoTalk_20251028_080739232_10.jpg',
  '/image/KakaoTalk_20251028_080739232_11.jpg',
  '/image/KakaoTalk_20251028_080739232_12.jpg',
  '/image/KakaoTalk_20251028_080739232_13.jpg',
  '/image/KakaoTalk_20251028_080739232_14.jpg',
  '/image/KakaoTalk_20251028_080739232_15.jpg',
  '/image/KakaoTalk_20251028_080739232_16.jpg',
  '/image/KakaoTalk_20251028_080739232_17.jpg',
  '/image/KakaoTalk_20251028_080739232_18.jpg',
  '/image/KakaoTalk_20251028_080739232_19.jpg',
  '/image/KakaoTalk_20251028_080739232_20.jpg',
  '/image/KakaoTalk_20251028_080739232_21.jpg',
  '/image/KakaoTalk_20251028_080739232_22.jpg',
  '/image/KakaoTalk_20251028_080739232_23.jpg',
  '/image/KakaoTalk_20251028_080739232_24.jpg',
  '/image/KakaoTalk_20251028_080739232_25.jpg',
  '/image/KakaoTalk_20251028_080739232_26.jpg',
  '/image/KakaoTalk_20251028_080739232_27.jpg',
  '/image/KakaoTalk_20251028_080739232_28.jpg',
  '/image/KakaoTalk_20251028_080739232_29.jpg',
];

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (photo: string) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="space-y-16">
      {/* 성실 열정상 섹션 */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🏆 성실·열정상
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            올해 골프회에서 개근 참여하신 다섯 분께<br />
            '성실·열정상'이 수여되었습니다.
          </p>
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-green-800 mb-4">수상자 명단</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <p className="font-medium">✓ 문상호 대표님</p>
              <p className="font-medium">✓ 옥길호 대표님</p>
              <p className="font-medium">✓ 문상동 대표님</p>
              <p className="font-medium">✓ 경대현 대표님</p>
              <p className="font-medium">✓ 배우순 대표님</p>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              한 해 동안 꾸준한 참여와 열정을 보여주신 다섯 분께<br />
              진심으로 축하와 감사를 드립니다.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {awardImages.map((photo, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group" onClick={() => openModal(photo)}>
              <img src={photo} alt={`성실 열정상 ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

      {/* 팀 최고점상 섹션 */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ⛳ 팀 최고점상 (가장 많은 타수상)
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            올해 가장 많은 타수를 기록한 팀에게 수여되는,<br />
            내년에는 더욱 좋은 스코어를 기원하는 상입니다.
          </p>
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-orange-800 mb-4">수상팀 (12조)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <p className="font-medium">✓ 이성규 부회장님</p>
              <p className="font-medium">✓ 이혁 대표님</p>
              <p className="font-medium">✓ 채호병 대표님</p>
              <p className="font-medium">✓ 임효정 부사장님</p>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              모두 수고 많으셨습니다. 내년에는 한층 더 향상된 실력을 기대하겠습니다!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teamAwardImages.map((photo, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group" onClick={() => openModal(photo)}>
              <img src={photo} alt={`팀 최고점상 ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

      {/* 다보기상 섹션 */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            😂 다보기상
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            올해 대회에서 가장 많은 '보기'를 기록하신 팀에게 수여되는 특별상입니다.
          </p>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">수상팀 (2조)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <p className="font-medium">✓ 김국진 골프회장님</p>
              <p className="font-medium">✓ 허용근 부회장님</p>
              <p className="font-medium">✓ 문상동 대표님</p>
              <p className="font-medium">✓ 김예송 대표님</p>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              즐겁고 화기애애한 분위기로 대회를 빛내주신 네 분께 감사드립니다!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bogeyAwardImages.map((photo, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group" onClick={() => openModal(photo)}>
              <img src={photo} alt={`다보기상 ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

      {/* 일파만파상 섹션 */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🏌️‍♂️ 일파만파상 (다파상)
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            올해 대회에서 가장 많은 '파(Par)'를 기록하며<br />
            꾸준한 실력과 안정적인 플레이를 보여주신 팀에게 수여되는 상입니다.
          </p>
          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">수상팀 (10조)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <p className="font-medium">✓ 이윤상 명예회장님</p>
              <p className="font-medium">✓ 윤종대 대표님</p>
              <p className="font-medium">✓ 배우순 대표님</p>
              <p className="font-medium">✓ 이태훈 부사장님</p>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              탁월한 집중력과 팀워크로 멋진 경기를 펼쳐주신 네 분께 축하와 감사를 드립니다!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {parAwardImages.map((photo, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group" onClick={() => openModal(photo)}>
              <img src={photo} alt={`일파만파상 ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

      {/* 운수대통상 섹션 */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🍀 운수대통상 (다버디상)
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            올해 대회에서 가장 많은 '버디(Birdie)'를 기록하며<br />
            탁월한 실력과 집중력을 보여주신 팀에게 수여되는 상입니다.
          </p>
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">수상팀 (6조)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <p className="font-medium">✓ 조세윤 부회장님</p>
              <p className="font-medium">✓ 이정근 대표님</p>
              <p className="font-medium">✓ 권백용 대표님</p>
              <p className="font-medium">✓ 남진우 상무님</p>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              멋진 플레이로 대회의 분위기를 한층 빛내주신 네 분께 진심으로 축하드립니다!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {birdieAwardImages.map((photo, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group" onClick={() => openModal(photo)}>
              <img src={photo} alt={`운수대통상 ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

      {/* 정밀사격상 섹션 */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🎯 정밀사격상 (니어리스트)
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            이번 대회에서 가장 정교한 샷으로 홀에 가장 근접한 기록을 세운 분께 수여되는 상입니다.
          </p>
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6 max-w-md mx-auto mb-8">
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">수상자</h3>
            <p className="font-medium text-gray-700 text-lg">최기만 부회장님</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nearestAwardImages.map((photo, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group" onClick={() => openModal(photo)}>
              <img src={photo} alt={`정밀사격상 ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

      {/* 대포왕상 섹션 */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            💥 대포왕상 (롱기스트)
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            이번 대회에서 가장 강력한 드라이브 샷으로<br />
            최장 거리 비거리를 기록하신 분께 수여되는 상입니다.
          </p>
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 max-w-md mx-auto mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-2">수상자</h3>
            <p className="font-medium text-gray-700 text-lg">임효정 부사장님</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {longestAwardImages.map((photo, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group" onClick={() => openModal(photo)}>
              <img src={photo} alt={`대포왕상 ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

      {/* 신페리오 우승 섹션 */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🏆 신페리오 우승
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            이번 대회 신페리오 부문 우승자는 이태훈 부사장님입니다.<br />
            훌륭한 경기 운영과 꾸준한 실력으로 멋진 성과를 거두셨습니다. 축하드립니다!
          </p>
          <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 max-w-md mx-auto mb-8">
            <h3 className="text-xl font-semibold text-amber-800 mb-2">우승자</h3>
            <p className="font-medium text-gray-700 text-lg">이태훈 부사장님</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {newperioWinnerImages.map((photo, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group" onClick={() => openModal(photo)}>
              <img src={photo} alt={`신페리오 우승 ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

      {/* 메달리스트 우승 섹션 */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🥇 우승 (메달리스트)
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            이번 대회 <strong>메달리스트(우승)</strong>의 영예는 문상동 대표님께 돌아갔습니다.<br />
            탁월한 실력과 집중력으로 멋진 경기를 펼쳐주신 문상동 대표님께 진심으로 축하드립니다!
          </p>
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6 max-w-md mx-auto mb-8">
            <h3 className="text-xl font-semibold text-emerald-800 mb-2">우승자</h3>
            <p className="font-medium text-gray-700 text-lg">문상동 대표님</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {medalistWinnerImages.map((photo, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group" onClick={() => openModal(photo)}>
              <img src={photo} alt={`메달리스트 우승 ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

      {/* 포토제닉상 섹션 */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            📸 포토제닉상 (Photogenic Award)
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            골프장에서 처음으로 가발을 착용하신 장영호 회장님의 센스로<br />
            현장을 웃음바다로 만든 팀에게 수여된 특별상입니다.
          </p>
          <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-pink-800 mb-4">수상팀 (1조)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <p className="font-medium">✓ 장영호 회장님</p>
              <p className="font-medium">✓ 문상호 대표님</p>
              <p className="font-medium">✓ 윤점식 대표님</p>
              <p className="font-medium">✓ 강규영 대표님</p>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              유쾌한 에너지로 대회의 분위기를 더욱 밝게 만들어주신 네 분께 감사드립니다!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photogenicAwardImages.map((photo, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group" onClick={() => openModal(photo)}>
              <img src={photo} alt={`포토제닉상 ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

      {/* 포토제닉상 준우승 섹션 */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            📸 포토제닉상 준우승
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            골프장에서 공룡 옷을 입고 등장해 즐거움을 선사하신 함초롬 대표님이 속한 5조가<br />
            이번 대회의 포토제닉상 준우승을 차지했습니다.
          </p>
          <div className="bg-rose-50 border-2 border-rose-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-rose-800 mb-4">수상팀 (5조)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <p className="font-medium">✓ 정명숙 부회장님</p>
              <p className="font-medium">✓ 박선주 대표님</p>
              <p className="font-medium">✓ 지현경 대표님</p>
              <p className="font-medium">✓ 함초롬 대표님</p>
              <p className="font-medium">✓ 나정화 팀장님</p>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              재치와 유쾌함으로 현장을 빛내주신 다섯 분께 진심으로 축하드립니다!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {photogenicRunnerUpImages.map((photo, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group" onClick={() => openModal(photo)}>
              <img src={photo} alt={`포토제닉상 준우승 ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

      {/* 포토제닉상 우수상 섹션 */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            📸 포토제닉상 우수상
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            장풍 퍼포먼스로 현장을 뜨겁게 달군 센스 넘치는 3조에게<br />
            올해의 포토제닉상 우수상이 수여되었습니다.
          </p>
          <div className="bg-fuchsia-50 border-2 border-fuchsia-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-fuchsia-800 mb-4">수상팀 (3조)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <p className="font-medium">✓ 김선관 부회장님</p>
              <p className="font-medium">✓ 최용석 대표님</p>
              <p className="font-medium">✓ 김국기 대표님</p>
              <p className="font-medium">✓ 공대호 대표변호사님</p>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              유쾌한 에너지와 팀워크로 즐거운 추억을 만들어주신 네 분께 진심으로 축하드립니다!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {photogenicExcellenceImages.map((photo, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group" onClick={() => openModal(photo)}>
              <img src={photo} alt={`포토제닉상 우수상 ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

      {/* 전체 포토 갤러리 */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">포토 갤러리</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((photo, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group" onClick={() => openModal(photo)}>
              <img src={photo} alt={`행사 사진 ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <Modal isOpen={!!selectedImage} onClose={closeModal}>
          <img src={selectedImage} alt="선택된 사진" className="max-w-full max-h-[80vh] rounded-lg" />
        </Modal>
      )}
    </section>
  );
};

export default PhotoGallery;