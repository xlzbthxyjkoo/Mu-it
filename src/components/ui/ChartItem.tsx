import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ChartItemProps {
  id: number;
  title: string;
  artist: string;
  cover: string;
  rank: number;
  price: string;
}

const ChartItem: React.FC<ChartItemProps> = ({
  id,
  title,
  artist,
  cover,
  rank,
  price,
}) => {
  return (
    <Link href={`/album/${id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative">
          <div className="aspect-square relative">
            <Image
              src={cover}
              alt={title}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/300?text=Album+Cover";
              }}
            />
          </div>
          <div className="absolute top-2 left-2 bg-brand-navy text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">
            {rank}
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-medium text-brand-dark truncate">{title}</h3>
          <p className="text-gray-600 text-sm">{artist}</p>
          <p className="mt-2 font-medium text-brand-navy">{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ChartItem;
