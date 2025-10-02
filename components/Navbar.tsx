"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">
        MiProyecto
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-blue-500 transition-colors">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-500 transition-colors">
            Sobre mí
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-500 transition-colors">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
