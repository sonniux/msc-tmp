import { getNews } from "@/lib/getNews";

// src/components/BlockTopLeft.tsx
export default function BlockBottomLeft() {
  const news = getNews()[2];

  return (
    <section className="bg-white shadow-md rounded-xl p-4 min-h-[200px]">
      <h2 className="text-xl font-semibold mb-2">{news.title} 🎶</h2>
      <p className="text-gray-600">{news.summary}</p>
    </section>
  );
}
