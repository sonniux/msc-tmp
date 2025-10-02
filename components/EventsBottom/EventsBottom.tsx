export default async function EventsBottom() {
    const res = await fetch("http://localhost:3000/api/events", {
        cache: "no-store",
    });
    const events = await res.json();

    return (
        <section className="grid grid-cols-2 gap-4 p-4">
        <div className="bg-gray-200 rounded-xl p-6 shadow">
            <h2 className="text-lg font-semibold mb-2">Próximos Conciertos</h2>
            <ul className="space-y-2">
            {events.map((event: any) => (
                <li key={event.id} className="border-b border-gray-300 pb-2">
                <p className="font-medium">{event.name}</p>
                <span className="text-sm text-gray-700">
                    {event.date} – {event.location}
                </span>
                </li>
            ))}
            </ul>
        </div>
        <div className="bg-gray-200 rounded-xl p-6 shadow">
            <h2 className="text-lg font-semibold mb-2">Nuevos Lanzamientos</h2>
            <p className="text-gray-600">Aquí más adelante cargaremos data dinámica.</p>
        </div>
        </section>
    );
}
