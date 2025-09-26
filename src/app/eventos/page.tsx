import Header from "@/components/Header"
import Menu from "@/components/Menu"

export default function EventosPage() {
  return (
    <>
        <Header />
        <Menu /> {/* 👈 Menú en esquina */}
        <main style={{ padding: "1rem" }}>
            <h1>Eventos</h1>
            <p>Aquí irá el contenido de <b>Eventos</b>.</p>
        </main>
    </>
  );
}
