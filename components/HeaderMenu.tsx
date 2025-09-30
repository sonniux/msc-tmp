// src/components/HeaderMenu.tsx
export default function HeaderMenu() {
  return (
    <nav className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
      <ul className="flex gap-4">
        <li><a href="#" className="hover:underline">Inicio</a></li>
        <li><a href="#" className="hover:underline">Explorar</a></li>
      </ul>
    </nav>
  );
}
