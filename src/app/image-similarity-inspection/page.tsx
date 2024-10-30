import Image from 'next/image';
import React from 'react';
import { Card, Checkbox, Button } from 'antd';

type Creative = {
  url: string;
  title: string;
  description: string;
  image: string;
  template: string;
  placementGroup: string;
  campaignObjective: string;
};
const creatives: Creative[] = [
  {
    url: 'https://naver.com',
    title: '성공한 사람들을 위한 가장 완벽한 세단',
    description: '지금 바로 할인된 가격에 만나보세요',
    image: '/cars/car1.jpeg',
    placementGroup: 'M_MAIN',
    campaignObjective: 'WEBSITE_TRAFFIC',
    template: 'NATIVE_SINGLE_IMAGE',
  },
  {
    url: 'https://naver.com',
    title: '당신의 드라이브를 럭셔리하게 업그레이드하세요',
    description: '지금 바로 할인된 가격에 만나보세요',
    image: '/cars/car2.jpeg',
    placementGroup: 'M_BANNER',
    campaignObjective: 'CATALOG',
    template: 'NATIVE_SINGLE_IMAGE',
  },
  {
    url: 'https://naver.com',
    title: '퍼포먼스와 스타일의 완벽한 조화, 이제 당신의 것입니다',
    description: '지금 바로 할인된 가격에 만나보세요',
    image: '/cars/car3.jpeg',
    placementGroup: 'BAND',
    campaignObjective: 'LEAD',
    template: 'NATIVE_MULTIPLE_IMAGE',
  },
  {
    url: 'https://naver.com',
    title: '여행의 시작, 당신만의 특별한 동반자',
    description: '안전과 편안함을 함께, 가족을 위한 최상의 선택',
    image: '/cars/car4.jpeg',
    placementGroup: 'CATALOG',
    campaignObjective: 'INSTALL_APP',
    template: 'NATIVE_SINGLE_IMAGE',
  },
  {
    url: 'https://naver.com',
    title: '한계를 넘는 퍼포먼스를 경험하세요',
    description: '당신의 꿈을 현실로 만드는 드라이빙 경험.',
    image: '/cars/car5.jpeg',
    placementGroup: 'M_MAIN',
    campaignObjective: 'CONVERSION',
    template: 'SINGLE_VIDEO',
  },
  {
    url: 'https://naver.com',
    title: '성공한 사람들을 위한 가장 완벽한 세단',
    description: '세상과 연결되는 순간, 더 특별해집니다.',
    image: '/cars/car6.jpeg',
    placementGroup: 'M_MAIN',
    campaignObjective: 'WEBSITE_TRAFFIC',
    template: 'NATIVE_SINGLE_IMAGE',
  },
];

const CreativeCard = ({ creative }: { creative: Creative }) => (
  <>
    <Image src={creative.image} alt="advertisement" className="mr-4 w-48 h-auto" width={200} height={200} />
    <div className="flex mt-4 gap-4">
      <div>
        <p>
          <strong>광고문구1:</strong> {creative.title}
        </p>
        <p>
          <strong>광고문구2:</strong> {creative.description}
        </p>
        <p>
          <strong>URL:</strong> {creative.url}
        </p>
      </div>
      <div>
        <p>
          <strong>캠페인 목적:</strong> {creative.campaignObjective}
        </p>
        <p>
          <strong>게재위치</strong>: {creative.placementGroup}
        </p>
        <p>
          <strong>소재 템플릿:</strong> {creative.template}
        </p>
      </div>
    </div>
  </>
);
export default function ImageReviewLayout() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-4">
        {/* 검수중인 소재 Section */}
        <div className="border border-gray-300 p-4 mb-4">
          <h2 className="text-lg font-semibold mb-4">검수중인 소재</h2>
          <Card className="flex items-center">
            <Checkbox />
            <CreativeCard creative={creatives[0]} />
          </Card>
        </div>

        <div>
          {/* 이미지 튜닝 Section */}
          <div className="border border-gray-300 p-4 mb-4">
            <h2 className="text-lg font-semibold mb-4">이미지 튜닝</h2>
            <div className="grid grid-cols-4 gap-4">
              {['배경 제거', '색상 제거', '테두리만 유지', '이미지내 문자 제거'].map((text, index) => (
                <Button key={index} type={index === 1 ? 'primary' : 'default'} className="text-xs">
                  {text}
                </Button>
              ))}
            </div>
          </div>

          {/* 기타 요소 적용 Section */}
          <div className="border border-gray-300 p-4 mb-4">
            <h2 className="text-lg font-semibold mb-4">기타 요소 적용</h2>
            <div className="grid grid-cols-3 gap-4">
              {['캠페인 목적', '소재 템플릿', '게재위치', '광고문구', '랜딩URL', '이미지 대표 색상', '클러스터링', 'LLM 생성 이미지 캡션'].map(
                (text, index) => (
                  <Button key={index} type={index % 4 === 0 ? 'primary' : 'default'} className="text-xs">
                    {text}
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 유사한 소재 Section */}
      <div className="border border-gray-300 p-4 mb-4">
        <h2 className="text-lg font-semibold mb-4">유사한 소재</h2>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(5)].map((_, index) => (
            <Card key={index} className="flex items-center">
              <Checkbox className="mr-4" />
              <CreativeCard creative={creatives[index + 1]} key={index} />
            </Card>
          ))}
        </div>
      </div>

      {/* Action Buttons Section */}
      <div className="flex justify-end gap-4 mt-4">
        <Button type="primary" size="large" className="px-10 py-6">
          일괄승인
        </Button>
        <Button type="primary" size="large" className="px-10 py-6">
          자동승인 설정
        </Button>
      </div>
    </div>
  );
}
