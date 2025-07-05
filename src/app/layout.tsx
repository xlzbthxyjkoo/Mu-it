import type { Metadata, Viewport } from "next";
import { Nanum_Gothic, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// 한글 폰트 - 나눔고딕
const nanumGothic = Nanum_Gothic({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-nanum-gothic",
});

// 영어 폰트 - Roboto
const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

// viewport 설정 추가
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Mu-it | 음반 스토어",
  description:
    "최고의 음반 구매 경험을 제공하는 온라인 음반 스토어 - 국내외 아티스트의 다양한 음반을 만나보세요.",
  keywords: "음반, 앨범, K-POP, 케이팝, CD, LP, 음악, 스토어",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
