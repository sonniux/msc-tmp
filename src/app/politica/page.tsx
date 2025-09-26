import Header from "@/components/Header"
import Menu from "@/components/Menu"

export default function PoliticaPage() {
  return (
    <>
        <Header />
        <Menu /> {/* 👈 Menú en esquina */}
        <main style={{ padding: "1rem" }}>
            <h1>Política de Privacidad</h1>
            <p>Aquí irá el contenido de la política.</p>
        </main>
    </>
  );
}
