import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Mu-it</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              최고의 음반 구매 경험을 제공하는 온라인 음반 스토어입니다. 국내외
              아티스트의 다양한 음반을 만나보세요.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">고객 지원</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <Link href="/faq" className="hover:text-brand-beige">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-brand-beige">
                  배송 안내
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-brand-beige">
                  교환 및 반품
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-beige">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">회사 정보</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <Link href="/about" className="hover:text-brand-beige">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-beige">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-brand-beige">
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
              <button className="bg-brand-navy px-4 py-2 rounded-r text-sm font-medium">
                구독
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 flex justify-between items-center">
          <p>© 2023 Mu-it. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-brand-beige">
              Instagram
            </Link>
            <Link href="#" className="hover:text-brand-beige">
              Facebook
            </Link>
            <Link href="#" className="hover:text-brand-beige">
              Twitter
            </Link>
            <Link href="#" className="hover:text-brand-beige">
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
