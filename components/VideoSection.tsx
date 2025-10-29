
import React from 'react';

// 골프대회 영상 목록
const videos = [
  {
    id: 'zRHsQbINEdQ',
    title: '골프회 첫참석자 인사'
  },
  {
    id: 'OO4Z3O8WEjc',
    title: '성실 열정상 개근상 시상 - 문상호 대표님, 옥길호 대표님, 문상동 대표님, 경대현 대표님, 배우순 대표님'
  },
  {
    id: '0byVoh57eMw',
    title: '다보기상 시상 - 수상팀 (2조) 김국진 골프회장님, 허용근 부회장님, 문상동 대표님, 김예송 대표님'
  },
  {
    id: 'xEoojjlINr0',
    title: '신페리오 우승 - 이태훈 부사장님'
  },
  {
    id: 'GnDnLgfiTuM',
    title: '일파만파상 시상 - 수상팀 (10조) 이윤상 명예회장님, 윤종대 대표님, 배우순 대표님, 이태훈 부사장님'
  },
  {
    id: '5phPt4VHRUM',
    title: '메달리스트 우승 - 문상동 대표님'
  },
  {
    id: 'VcdvPYl7HSU',
    title: '가위바위보 게임 - 우승자: 정명숙 부회장님'
  },
  {
    id: 'b5rilAwH8Qc',
    title: '행운상 추첨 - 김선관 부회장님'
  },
  {
    id: 'PMkXkDeT95g',
    title: '행운상 추첨 - 이윤상 명예회장님'
  },
  {
    id: 'zglcbLQzSCs',
    title: '포토제닉 우수상 시상 - 수상팀 (3조) 김선관 부회장님, 최용석 대표님, 김국기 대표님, 공대호 대표변호사님'
  },
  {
    id: 'zTLV30O_h8g',
    title: '포토제닉 준우승 시상 - 수상팀 (5조) 정명숙 대표님, 박선주 대표님, 지현경 대표님, 함초롬 대표님, 나정화 팀장님'
  },
  {
    id: 'bDflpeMm0gI',
    title: '포토제닉 우승 시상 - 수상팀 (1조) 장영호 회장님, 문상호 대표님, 윤점식 대표님, 강규영 대표님'
  },
  {
    id: 'tqCNFYowmD4',
    title: '테너 공연 - 엑스뻬제 박철수 대표님'
  },
  {
    id: '2aswTWNsom0',
    title: '감사인사 및 폐회 건배'
  }
];

const VideoSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">영상 하이라이트</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map(video => (
          <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
