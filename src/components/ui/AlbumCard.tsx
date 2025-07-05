import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AlbumCardProps {
  id: number;
  title: string;
  artist: string;
  cover: string;
  price: string;
  isHighlighted?: boolean;
  showPrice?: boolean;
}

const AlbumCard: React.FC<AlbumCardProps> = ({
  id,
  title,
  artist,
  cover,
  price,
  isHighlighted = false,
  showPrice = true,
}) => {
  return (
    <Link href={`/album/${id}`}>
      <div
        className={`
            bg-brand-light p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md
            ${isHighlighted ? "transform scale-110 shadow-md z-10" : ""}
          `}
      >
        <div className="relative aspect-square mb-3 overflow-hidden rounded-md">
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzEyMzQ1OCIvPgogIDx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIAogICAgICAgIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5BTEJVTTwvdGV4dD4KICA8L3N2Zz4K";
            }}
          />
        </div>
        <h3 className="font-semibold text-brand-dark truncate">{title}</h3>
        <p className="text-gray-600 text-sm">{artist}</p>
        {showPrice && (
          <p className="font-medium mt-2 text-brand-navy">{price}</p>
        )}
      </div>
    </Link>
  );
};

export default AlbumCard;
