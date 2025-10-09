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
      <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Top Noticias</h2>
        <ul className="space-y-2">
          {news.map((item: any) => (
            <li key={item.id} className="border-b border-gray-200 pb-2">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.summary}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Tendencias</h2>
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
