export default function Header() {
  return (
    <header className="w-full flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-xl font-bold">🎵 Music Frontend</h1>
      <nav>
        <ul className="flex gap-4 text-sm text-gray-600">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Noticias</a></li>
          <li><a href="#">Eventos</a></li>
        </ul>
      </nav>
    </header>
  );
}
