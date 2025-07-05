import React from "react";
import Image from "next/image";

// 출시 예정 앨범 타입
interface UpcomingAlbum {
  id: number;
  title: string;
  artist: string;
  cover: string;
  releaseDate: string;
  price: string;
}

interface UpcomingAlbumsProps {
  albums: UpcomingAlbum[];
}

const UpcomingAlbums: React.FC<UpcomingAlbumsProps> = ({ albums }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-brand-dark">
          출시 예정 음반
        </h2>
        <div className="grid grid-cols-4 gap-8">
          {albums.map((album) => (
            <div
              key={album.id}
              className="bg-brand-light rounded-lg overflow-hidden shadow-sm group hover:shadow-md transition-shadow"
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
                  <span className="bg-brand-navy text-white px-3 py-1 rounded-full text-sm">
                    {album.releaseDate} 출시
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-brand-dark">{album.title}</h3>
                <p className="text-gray-600 text-sm">{album.artist}</p>
                <div className="flex justify-between items-center mt-3">
                  <p className="font-medium text-brand-navy">{album.price}</p>
                  <button className="bg-brand-navy/10 hover:bg-brand-navy/20 text-brand-navy text-sm font-medium px-3 py-1 rounded-full transition">
                    예약하기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingAlbums;
