import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Block1 from "@/components/Block1";
import Block2 from "@/components/Block2";
import Block3 from "@/components/Block3";
import Block4 from "@/components/Block4";

export default function Home() {
  return (
    <>
      <Header />
      <Menu /> {/* 👈 Menú en esquina */}
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "1rem",
          padding: "1rem",
          minHeight: "70vh"
        }}
      >
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
      </main>
      <Footer />
    </>
  );
}