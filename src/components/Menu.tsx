"use client"; // necesario porque usaremos interacción

import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ position: "absolute", top: "1rem", right: "1rem" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "#222",
          color: "#fff",
          padding: "0.5rem 1rem",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px"
        }}
      >
        ☰ Menú
      </button>

      {open && (
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: "0.5rem",
            background: "#fff",
            border: "1px solid #ccc",
            position: "absolute",
            right: 0,
            marginTop: "0.5rem"
          }}
        >
          <li><a href="/" style={{ textDecoration: "none" }}>Inicio</a></li>
          <li><a href="/noticias" style={{ textDecoration: "none" }}>Noticias</a></li>
          <li><a href="/eventos" style={{ textDecoration: "none" }}>Eventos</a></li>
        </ul>
      )}
    </nav>
  );
}
