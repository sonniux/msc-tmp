export default async function StatsTop() {
    const res = await fetch("http://localhost:3000/api/news", {
        cache: "no-store", // para que siempre traiga los últimos datos
    });
    const news = await res.json();

    const resReleases = await fetch("http://localhost:3000/api/releases", {
        next: { revalidate: 60 } // para que los datos se actualicen cada minuto (ISR de Next.js).
    });
    const releases = await resReleases.json();

  return (
    <section className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-gray-100 rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold mb-2">Top Noticias</h2>
        <ul className="space-y-2">
          {news.map((item: any) => (
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
          {releases.map((item: any) => (
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
