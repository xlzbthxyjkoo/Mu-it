import React, { useState, useEffect } from "react";
import AlbumCard from "../ui/AlbumCard";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface Album {
  id: number;
  title: string;
  artist: string;
  cover: string;
  price: string;
}

interface NewReleasesProps {
  albums: Album[];
}

const NewReleases: React.FC<NewReleasesProps> = ({ albums }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 자동 슬라이드 (3초마다)
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === albums.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [albums.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === albums.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? albums.length - 1 : prev - 1));
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // 현재 인덱스를 기준으로 보여질 앨범들 계산 (5개)
  const getVisibleAlbums = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + albums.length) % albums.length;
      visible.push({
        album: albums[index],
        position: i,
      });
    }
    return visible;
  };

  const visibleAlbums = getVisibleAlbums();

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-brand-dark">최신 앨범</h2>
          <button
            onClick={toggleAutoPlay}
            className="flex items-center justify-center w-12 h-12 bg-brand-navy text-white rounded-full hover:bg-brand-navy/90 transition-all duration-200"
          >
            {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>

        <div className="relative h-[500px] flex items-center justify-center">
          {/* 앨범들 */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            {visibleAlbums.map(({ album, position }, index) => {
              const scale =
                position === 0
                  ? 1.2
                  : Math.abs(position) === 1
                  ? 0.9
                  : Math.abs(position) === 2
                  ? 0.7
                  : 0.5;

              const opacity =
                position === 0
                  ? 1
                  : Math.abs(position) === 1
                  ? 0.8
                  : Math.abs(position) === 2
                  ? 0.6
                  : 0.3;

              const zIndex = 10 - Math.abs(position);
              const translateX = position * 200; // 더 넓은 간격
              const rotateY = position * 15; // 줄인 회전각
              const translateY = Math.abs(position) * 10; // 살짝 아래로

              return (
                <div
                  key={`${album.id}-${index}`}
                  className="absolute transition-all duration-700 ease-out cursor-pointer hover:scale-105"
                  style={{
                    transform: `translateX(${translateX}px) translateY(${translateY}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                    filter: position === 0 ? "none" : "blur(0.5px)",
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => {
                    setCurrentIndex(
                      (currentIndex + position + albums.length) % albums.length
                    );
                    setIsAutoPlaying(false); // 클릭 시 자동재생 일시정지
                  }}
                >
                  <div className="w-72 transform transition-all duration-300">
                    <AlbumCard
                      id={album.id}
                      title={album.title}
                      artist={album.artist}
                      cover={album.cover}
                      price={album.price}
                      isHighlighted={position === 0}
                      showPrice={false}
                    />
                    {position === 0 && (
                      <div className="absolute -inset-4 bg-gradient-to-r from-brand-navy/10 to-brand-beige/10 rounded-2xl blur-sm opacity-60"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 이전/다음 버튼 */}
          <button
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute left-8 z-20 group"
          >
            <div className="bg-white/80 backdrop-blur-md hover:bg-white p-4 rounded-full shadow-xl text-brand-navy hover:text-brand-dark transition-all duration-300 group-hover:scale-110">
              <ChevronLeft size={28} />
            </div>
          </button>

          <button
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute right-8 z-20 group"
          >
            <div className="bg-white/80 backdrop-blur-md hover:bg-white p-4 rounded-full shadow-xl text-brand-navy hover:text-brand-dark transition-all duration-300 group-hover:scale-110">
              <ChevronRight size={28} />
            </div>
          </button>
        </div>

        {/* 인디케이터 */}
        <div className="flex justify-center mt-12 space-x-3">
          {albums.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`relative transition-all duration-300 ${
                currentIndex === index ? "w-8 h-3" : "w-3 h-3 hover:w-4"
              }`}
            >
              <div
                className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-brand-navy shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewReleases;
