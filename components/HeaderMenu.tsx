export default function HeaderMenu() {
  return (
    <nav className="absolute top-4 right-4 bg-brand-dark text-white px-5 py-3 rounded-full shadow-md">
      <ul className="flex gap-6 font-semibold">
        <li><a href="#" className="hover:text-brand-light transition">Inicio</a></li>
        <li><a href="#" className="hover:text-brand-light transition">Explorar</a></li>
      </ul>
    </nav>
  );
}
