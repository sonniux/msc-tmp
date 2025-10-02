export default function StatsTop() {
  return (
    <section className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-gray-100 rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold">Top Noticias</h2>
        <p className="text-gray-600">Resumen dinámico aquí...</p>
      </div>
      <div className="bg-gray-100 rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold">Tendencias</h2>
        <p className="text-gray-600">Estadísticas de música...</p>
      </div>
    </section>
  );
}
