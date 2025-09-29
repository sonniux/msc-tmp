import { getNews } from "@/lib/getNews";

export default function Block1() {
  const news = getNews()[1];

  return (
    <div className="bg-white shadow rounded p-4 hover:shadow-lg transition">
      <h3 className="font-semibold text-lg mb-2">{news.title}</h3>
      <p className="text-gray-600">{news.summary}</p>
    </div>
  );
}
