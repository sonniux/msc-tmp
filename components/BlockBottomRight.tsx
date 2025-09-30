import { getNews } from "@/lib/getNews";

// src/components/BlockTopLeft.tsx
export default function BlockBottomRight() {
  const news = getNews()[3];

  return (
    <section className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition">
      <h2 className="text-2xl font-display font-bold text-brand mb-3">
        {news.title} 🎶
      </h2>
      <p className="text-gray-600">
        {news.summary}
      </p>
    </section>
  );
}
