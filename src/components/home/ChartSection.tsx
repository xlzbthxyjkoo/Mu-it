import React, { useState } from "react";
import ChartItem from "../ui/ChartItem";

// 차트 아이템 타입
interface ChartItem {
  id: number;
  title: string;
  artist: string;
  cover: string;
  rank: number;
  price: string;
}

interface ChartSectionProps {
  chartData: {
    realtime: ChartItem[];
    korean: ChartItem[];
    international: ChartItem[];
  };
}

const ChartSection: React.FC<ChartSectionProps> = ({ chartData }) => {
  const [activeTab, setActiveTab] = useState<
    "realtime" | "korean" | "international"
  >("realtime");

  return (
    <section className="py-12 bg-brand-beige/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-brand-dark">음반 차트</h2>
          <div className="flex space-x-1 bg-white rounded-full p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("realtime")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                activeTab === "realtime"
                  ? "bg-brand-navy text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              실시간
            </button>
            <button
              onClick={() => setActiveTab("korean")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                activeTab === "korean"
                  ? "bg-brand-navy text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              국내
            </button>
            <button
              onClick={() => setActiveTab("international")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                activeTab === "international"
                  ? "bg-brand-navy text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              해외
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {chartData[activeTab].slice(0, 10).map((album) => (
            <ChartItem
              key={album.id}
              id={album.id}
              title={album.title}
              artist={album.artist}
              cover={album.cover}
              rank={album.rank}
              price={album.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
