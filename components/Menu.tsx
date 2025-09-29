"use client";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-4 right-4">
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-800 text-white px-4 py-2 rounded shadow hover:bg-gray-700"
      >
        ☰ Menú
      </button>

      {open && (
        <ul className="absolute right-0 mt-2 w-40 bg-white border rounded shadow">
          <li>
            <a href="/" className="block px-4 py-2 hover:bg-gray-100">Inicio</a>
          </li>
          <li>
            <a href="/noticias" className="block px-4 py-2 hover:bg-gray-100">Noticias</a>
          </li>
          <li>
            <a href="/eventos" className="block px-4 py-2 hover:bg-gray-100">Eventos</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
