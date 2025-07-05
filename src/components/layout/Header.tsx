import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingCart } from "lucide-react";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/navy_logo.png"
                alt="Mu-it Logo"
                width={120}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
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
              <button className="bg-brand-navy p-2 text-white">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* 사용자 아이콘 및 장바구니 */}
          <div className="flex items-center space-x-4">
            <Link
              href="/mypage"
              className="text-gray-700 hover:text-brand-navy transition"
            >
              <User size={24} />
            </Link>
            <Link
              href="/cart"
              className="text-gray-700 hover:text-brand-navy transition relative"
            >
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* 메뉴바 */}
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
