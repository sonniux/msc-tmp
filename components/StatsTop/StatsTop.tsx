import news from "@/data/news.json";
import releases from "@/data/releases.json";

export default function StatsTop() {
  return (
    <section className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-gray-100 rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold mb-2">Top Noticias</h2>
        <ul className="space-y-2">
          {news.map((item) => (
            <li key={item.id} className="border-b border-gray-200 pb-2">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.summary}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-100 rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold mb-2">Tendencias</h2>
        <ul className="space-y-2">
          {releases.map((item) => (
            <li key={item.id} className="border-b border-gray-200 pb-2">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
