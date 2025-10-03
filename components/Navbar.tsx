"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MiProyecto</div>

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex space-x-6">
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

        {/* Botón hamburguesa en móviles */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú desplegable en móviles con animación */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4 flex flex-col space-y-4 md:hidden"
          >
            <li>
              <Link
                href="/"
                className="block hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sobre mí
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
