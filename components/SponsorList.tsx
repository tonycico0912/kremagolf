
import React from 'react';

const cashSponsors = [
    { name: '장영호 회장님', company: '씨엘케이', amount: '5,000,000원' },
    { name: '이윤상 명예회장님', company: '유성', amount: '2,000,000원' },
    { name: '김국진 골프회장님', company: '국진하우징', amount: '3,000,000원' },
    { name: '김병수 부회장님', company: '루시드프로모', amount: '1,000,000원' },
    { name: '김선관 부회장님', company: '삼일산업', amount: '2,000,000원' },
    { name: '이성규 부회장님', company: '더피알커뮤니케이션', amount: '1,000,000원' },
    { name: '정명숙 부회장님', company: '씨앤에이개발', amount: '1,000,000원' },
    { name: '이완직 부회장님', company: '미도리얼코', amount: '1,000,000원' },
    { name: '임민섭 부회장님', company: '상림디엠텍', amount: '2,000,000원' },
    { name: '허용근 부회장님', company: '훈민정음', amount: '1,000,000원' },
    { name: '조정훈 대표님', company: '전 골프회장님, 원포올디앤씨', amount: '2,000,000원' },
    { name: '안상근 대표님', company: '니소스씨앤디', amount: '1,000,000원' },
    { name: '이영준 대표님', company: '모아디앤씨', amount: '500,000원' },
    { name: '이정우 대표님', company: '바론디벨롭먼트', amount: '1,000,000원' },
    { name: '이혁 대표님', company: '혁본', amount: '1,000,000원' },
    { name: '채호병 대표님', company: '시선커뮤니케이션', amount: '1,000,000원' }
];

const goodsSponsors = [
    { name: '이윤상 명예회장님', company: '유성', item: '회장배 석찬 후원' },
    { name: '조세윤 부회장님', company: '씨앤디플래닝', item: '드라이버, 우드, 유틸리티, 퍼터, 골프백, 보스턴백, 골프공 20더즌' },
    { name: '경대현 대표님', company: 'DH파트너스', item: '프리미엄 위스키 5세트' },
    { name: '김국기 대표님', company: '더큐브', item: '최고급 탈모샴푸 52세트' },
    { name: '김영택 대표님', company: '우드커뮤니케이션', item: '최고급 와인세트' },
    { name: '김예송 대표님', company: '어반티', item: '프리미엄 꽃바구니 3세트' },
    { name: '김재구 부사장님', company: '데이터노우즈', item: '최고급 펜과 수첩 52세트' },
    { name: '노병용 대표님', company: '클리프커뮤니케이션', item: '9월 7일 뉴코리아 홀인원 기념 볼 52더즌 (홀인원 축하드립니다)' },
    { name: '지현경 대표님', company: '카라', item: '최고급 골프용품' },
    { name: '최영창 대표님', company: '와이씨씨', item: '최고급 두피헤어용품 52세트' }
];

const SponsorList: React.FC = () => {
    return (
        <section>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">2025년 협회장배 골프대회를 후원해 주신분들</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-green-700 flex items-center"><i className="fas fa-coins mr-3 text-yellow-500"></i>후원금</h3>
                    <ul className="space-y-3">
                        {cashSponsors.map((sponsor, index) => (
                            <li key={index} className="flex justify-between items-baseline">
                                <div className="text-gray-700">
                                    <span className="font-semibold">{sponsor.name}</span>
                                    <span className="text-sm text-gray-500 ml-2">({sponsor.company})</span>
                                </div>
                                <span className="font-bold text-gray-800">{sponsor.amount}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-green-700 flex items-center"><i className="fas fa-gift mr-3 text-red-500"></i>물품 후원</h3>
                    <ul className="space-y-4">
                        {goodsSponsors.map((sponsor, index) => (
                            <li key={index} className="text-gray-700">
                                <p className="font-semibold">{sponsor.name} <span className="text-sm text-gray-500">({sponsor.company})</span></p>
                                <p className="pl-4 text-gray-600"> L {sponsor.item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SponsorList;
