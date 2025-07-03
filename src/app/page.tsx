// app/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  User,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// 임시 앨범 데이터
const newAlbums = [
  {
    id: 1,
    title: "새벽에 듣는 음악",
    artist: "아이유",
    cover: "/albums/album1.jpg",
    price: "25,000원",
  },
  {
    id: 2,
    title: "Butter",
    artist: "BTS",
    cover: "/albums/album2.jpg",
    price: "23,500원",
  },
  {
    id: 3,
    title: "The Album",
    artist: "BLACKPINK",
    cover: "/albums/album3.jpg",
    price: "22,000원",
  },
  {
    id: 4,
    title: "Bad Decisions",
    artist: "Benny Blanco, BTS",
    cover: "/albums/album4.jpg",
    price: "19,800원",
  },
  {
    id: 5,
    title: "Proof",
    artist: "BTS",
    cover: "/albums/album5.jpg",
    price: "35,000원",
  },
];

const chartAlbums = {
  realtime: [
    {
      id: 1,
      title: "Dynamite",
      artist: "BTS",
      cover: "/albums/chart1.jpg",
      rank: 1,
      price: "18,000원",
    },
    {
      id: 2,
      title: "Pink Venom",
      artist: "BLACKPINK",
      cover: "/albums/chart2.jpg",
      rank: 2,
      price: "20,000원",
    },
    {
      id: 3,
      title: "After LIKE",
      artist: "IVE",
      cover: "/albums/chart3.jpg",
      rank: 3,
      price: "17,500원",
    },
    {
      id: 4,
      title: "ANTIFRAGILE",
      artist: "LE SSERAFIM",
      cover: "/albums/chart4.jpg",
      rank: 4,
      price: "19,000원",
    },
    {
      id: 5,
      title: "Shut Down",
      artist: "BLACKPINK",
      cover: "/albums/chart5.jpg",
      rank: 5,
      price: "21,000원",
    },
    {
      id: 6,
      title: "FOREVER 1",
      artist: "소녀시대",
      cover: "/albums/chart6.jpg",
      rank: 6,
      price: "18,500원",
    },
    {
      id: 7,
      title: "Attention",
      artist: "NewJeans",
      cover: "/albums/chart7.jpg",
      rank: 7,
      price: "16,000원",
    },
    {
      id: 8,
      title: "LOVE DIVE",
      artist: "IVE",
      cover: "/albums/chart8.jpg",
      rank: 8,
      price: "17,000원",
    },
    {
      id: 9,
      title: "Talk that Talk",
      artist: "TWICE",
      cover: "/albums/chart9.jpg",
      rank: 9,
      price: "19,500원",
    },
    {
      id: 10,
      title: "Hype Boy",
      artist: "NewJeans",
      cover: "/albums/chart10.jpg",
      rank: 10,
      price: "16,500원",
    },
  ],
  korean: [
    {
      id: 1,
      title: "Ditto",
      artist: "NewJeans",
      cover: "/albums/kr1.jpg",
      rank: 1,
      price: "19,000원",
    },
    {
      id: 2,
      title: "사건의 지평선",
      artist: "윤하",
      cover: "/albums/kr2.jpg",
      rank: 2,
      price: "18,000원",
    },
    // ... 8개 더 추가 (생략)
  ],
  international: [
    {
      id: 1,
      title: "As It Was",
      artist: "Harry Styles",
      cover: "/albums/int1.jpg",
      rank: 1,
      price: "29,000원",
    },
    {
      id: 2,
      title: "Unholy",
      artist: "Sam Smith, Kim Petras",
      cover: "/albums/int2.jpg",
      rank: 2,
      price: "28,000원",
    },
    // ... 8개 더 추가 (생략)
  ],
};

const upcomingAlbums = [
  {
    id: 1,
    title: "새 앨범",
    artist: "레드벨벳",
    cover: "/albums/upcoming1.jpg",
    releaseDate: "2023-11-25",
    price: "22,000원",
  },
  {
    id: 2,
    title: "The New Chapter",
    artist: "NCT",
    cover: "/albums/upcoming2.jpg",
    releaseDate: "2023-12-01",
    price: "23,500원",
  },
  {
    id: 3,
    title: "Second Wind",
    artist: "Stray Kids",
    cover: "/albums/upcoming3.jpg",
    releaseDate: "2023-12-10",
    price: "24,500원",
  },
  {
    id: 4,
    title: "Breaking Point",
    artist: "ENHYPEN",
    cover: "/albums/upcoming4.jpg",
    releaseDate: "2023-12-15",
    price: "21,000원",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("realtime");
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === newAlbums.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? newAlbums.length - 1 : prev - 1));
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentSlide]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F1EFEC]">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* 로고 */}
            <div className="flex-shrink-0">
              <Image
                src="/navy_logo.png"
                alt="Mu-it Logo"
                width={120}
                height={50}
                className="h-12 w-auto"
              />
            </div>

            {/* 검색창 */}
            <div className="w-1/3 relative">
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                <select className="bg-gray-100 border-r border-gray-300 px-2 py-2 text-sm focus:outline-none">
                  <option>음반</option>
                  <option>아티스트</option>
                  <option>곡명</option>
                </select>
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  className="flex-grow px-3 py-2 focus:outline-none"
                />
                <button className="bg-[#123458] p-2 text-white">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* 사용자 아이콘 및 장바구니 */}
            <div className="flex items-center space-x-4">
              <Link
                href="/mypage"
                className="text-gray-700 hover:text-[#123458] transition"
              >
                <User size={24} />
              </Link>
              <Link
                href="/cart"
                className="text-gray-700 hover:text-[#123458] transition relative"
              >
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </span>
              </Link>
            </div>
          </div>

          {/* 메뉴바 */}
          <nav className="mt-4">
            <ul className="flex justify-center space-x-8 font-medium">
              <li>
                <Link
                  href="/korean"
                  className="hover:text-[#123458] py-2 border-b-2 border-transparent hover:border-[#123458] transition"
                >
                  국내음반
                </Link>
              </li>
              <li>
                <Link
                  href="/international"
                  className="hover:text-[#123458] py-2 border-b-2 border-transparent hover:border-[#123458] transition"
                >
                  해외음반
                </Link>
              </li>
              <li>
                <Link
                  href="/classical"
                  className="hover:text-[#123458] py-2 border-b-2 border-transparent hover:border-[#123458] transition"
                >
                  클래식
                </Link>
              </li>
              <li>
                <Link
                  href="/lp"
                  className="hover:text-[#123458] py-2 border-b-2 border-transparent hover:border-[#123458] transition"
                >
                  LP
                </Link>
              </li>
              <li>
                <Link
                  href="/charts"
                  className="hover:text-[#123458] py-2 border-b-2 border-transparent hover:border-[#123458] transition"
                >
                  차트
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* 최신 앨범 슬라이더 */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-[#030303]">
              최신 앨범
            </h2>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {newAlbums.map((album) => (
                    <div key={album.id} className="w-full flex-shrink-0 px-4">
                      <div className="grid grid-cols-5 gap-8">
                        {newAlbums.map((nestedAlbum, index) => (
                          <div
                            key={`${album.id}-${index}`}
                            className={`bg-[#F1EFEC] p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md 
                              ${
                                index === 2
                                  ? "transform scale-110 shadow-md z-10"
                                  : ""
                              }`}
                          >
                            <div className="relative aspect-square mb-3 overflow-hidden rounded-md">
                              <Image
                                src={nestedAlbum.cover}
                                alt={nestedAlbum.title}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src =
                                    "https://via.placeholder.com/300?text=Album+Cover";
                                }}
                              />
                            </div>
                            <h3 className="font-semibold text-[#030303] truncate">
                              {nestedAlbum.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {nestedAlbum.artist}
                            </p>
                            <p className="font-medium mt-2 text-[#123458]">
                              {nestedAlbum.price}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg text-[#123458] hover:bg-[#123458] hover:text-white transition"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg text-[#123458] hover:bg-[#123458] hover:text-white transition"
              >
                <ChevronRight size={24} />
              </button>
              <div className="flex justify-center mt-4 space-x-2">
                {newAlbums.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      currentSlide === index ? "bg-[#123458]" : "bg-gray-300"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 차트 섹션 */}
        <section className="py-12 bg-[#D4C9BE]/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#030303]">음반 차트</h2>
              <div className="flex space-x-1 bg-white rounded-full p-1 shadow-sm">
                <button
                  onClick={() => setActiveTab("realtime")}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                    activeTab === "realtime"
                      ? "bg-[#123458] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  실시간
                </button>
                <button
                  onClick={() => setActiveTab("korean")}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                    activeTab === "korean"
                      ? "bg-[#123458] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  국내
                </button>
                <button
                  onClick={() => setActiveTab("international")}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                    activeTab === "international"
                      ? "bg-[#123458] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  해외
                </button>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-6">
              {chartAlbums[activeTab as keyof typeof chartAlbums]
                .slice(0, 10)
                .map((album) => (
                  <div
                    key={album.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative">
                      <div className="aspect-square relative">
                        <Image
                          src={album.cover}
                          alt={album.title}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src =
                              "https://via.placeholder.com/300?text=Album+Cover";
                          }}
                        />
                      </div>
                      <div className="absolute top-2 left-2 bg-[#123458] text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">
                        {album.rank}
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-[#030303] truncate">
                        {album.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{album.artist}</p>
                      <p className="mt-2 font-medium text-[#123458]">
                        {album.price}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* 출시 예정 음반 */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-[#030303]">
              출시 예정 음반
            </h2>
            <div className="grid grid-cols-4 gap-8">
              {upcomingAlbums.map((album) => (
                <div
                  key={album.id}
                  className="bg-[#F1EFEC] rounded-lg overflow-hidden shadow-sm group hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={album.cover}
                      alt={album.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "https://via.placeholder.com/300?text=Coming+Soon";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-[#123458] text-white px-3 py-1 rounded-full text-sm">
                        {album.releaseDate} 출시
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#030303]">
                      {album.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{album.artist}</p>
                    <div className="flex justify-between items-center mt-3">
                      <p className="font-medium text-[#123458]">
                        {album.price}
                      </p>
                      <button className="bg-[#123458]/10 hover:bg-[#123458]/20 text-[#123458] text-sm font-medium px-3 py-1 rounded-full transition">
                        예약하기
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#030303] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Mu-it</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                최고의 음반 구매 경험을 제공하는 온라인 음반 스토어입니다.
                국내외 아티스트의 다양한 음반을 만나보세요.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">고객 지원</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>
                  <Link href="/faq" className="hover:text-[#D4C9BE]">
                    자주 묻는 질문
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-[#D4C9BE]">
                    배송 안내
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-[#D4C9BE]">
                    교환 및 반품
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#D4C9BE]">
                    문의하기
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">회사 정보</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>
                  <Link href="/about" className="hover:text-[#D4C9BE]">
                    회사 소개
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#D4C9BE]">
                    이용약관
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#D4C9BE]">
                    개인정보처리방침
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">뉴스레터 구독</h3>
              <p className="text-gray-300 text-sm mb-3">
                신규 앨범 소식과 특별 할인 정보를 받아보세요.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="bg-gray-800 text-white px-3 py-2 text-sm rounded-l focus:outline-none w-full"
                />
                <button className="bg-[#123458] px-4 py-2 rounded-r text-sm font-medium">
                  구독
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 flex justify-between items-center">
            <p>© 2023 Mu-it. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#D4C9BE]">
                Instagram
              </Link>
              <Link href="#" className="hover:text-[#D4C9BE]">
                Facebook
              </Link>
              <Link href="#" className="hover:text-[#D4C9BE]">
                Twitter
              </Link>
              <Link href="#" className="hover:text-[#D4C9BE]">
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
