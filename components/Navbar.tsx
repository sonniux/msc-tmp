"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 relative z-50">
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
          className="md:hidden text-gray-700 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay + Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay oscuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menú lateral */}
            <motion.ul
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg flex flex-col space-y-6 p-6 z-50 md:hidden"
            >
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </Link>
              </li>
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
