
import React from 'react';

const participants = [
  '장영호', '김국진', '이윤상', '김선관', '조정훈', '정명숙', '정동규', '이정근', '허용근', '최기만', 
  '조세윤', '배우순', '문상호', '옥길호', '문상동', '강선우', '경대현', '강규영', '최권호', '안상근', 
  '김영택', '이성규', '공대호', '신용익', '최용석', '이태훈', '이정우', '함초롬', '노병용', '이한빈', 
  '윤점식', '김국기', '나정화', '박선주', '권백용', '김예송', '김수철', '이혁', '천성오', '김재구', 
  '임민섭', '박철수', '최영창', '감동진', '이대현', '채호병', '이완직', '남진우', '김상근', '윤종대', 
  '조봉재', '임효정'
];

const ParticipantList: React.FC = () => {
  return (
    <section>
      <div className="mb-8">
        <img
          src="/banner/1.jpg"
          alt="2025년 한국부동산마케팅협회 협회장배 골프대회"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">참가자 명단 (52명)</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-x-6">
          {participants.map((name, index) => (
            <p key={index} className="text-gray-700 mb-2 break-inside-avoid">{name}</p>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t">
            <p className="text-gray-700"><span className="font-semibold text-green-700">※ 석찬 참석자:</span> 지현경</p>
        </div>
      </div>
    </section>
  );
};

export default ParticipantList;
