export default function EventsBottom() {
  return (
    <section className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-gray-200 rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold">Próximos Conciertos</h2>
        <p className="text-gray-600">Eventos destacados...</p>
      </div>
      <div className="bg-gray-200 rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold">Nuevos Lanzamientos</h2>
        <p className="text-gray-600">Álbumes recientes...</p>
      </div>
    </section>
  );
}
