"use client";

import { useState, useEffect } from "react";
import NewReleases from "@/components/home/NewReleases";
import ChartSection from "@/components/home/ChartSection";
import UpcomingAlbums from "@/components/home/UpcomingAlbums";
import { newAlbums, chartAlbums, upcomingAlbums } from "@/lib/mock-data";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // 페이지 로딩 시뮬레이션
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-navy"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* 최신 앨범 슬라이드 */}
      <NewReleases albums={newAlbums} />

      {/* 차트 섹션 */}
      <ChartSection chartData={chartAlbums} />

      {/* 출시 예정 음반 */}
      <UpcomingAlbums albums={upcomingAlbums} />
    </div>
  );
}
