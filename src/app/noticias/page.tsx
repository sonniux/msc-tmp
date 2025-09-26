import Header from "@/components/Header"
import Menu from "@/components/Menu"

export default function NoticiasPage() {
  return (
    <>
        <Header />
        <Menu /> {/* 👈 Menú en esquina */}
        <main style={{ padding: "1rem" }}>
            <h1>Noticias</h1>
            <p>Aquí irá el contenido de <b>Noticias</b>.</p>
        </main>
    </>
  );
}
