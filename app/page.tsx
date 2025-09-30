import HeaderMenu from "@/components/HeaderMenu";
import BlockTopLeft from "@/components/BlockTopLeft";
import BlockTopRight from "@/components/BlockTopRight";
import BlockBottomLeft from "@/components/BlockBottomLeft";
import BlockBottomRight from "@/components/BlockBottomRight";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between p-8 bg-gray-100">
      <HeaderMenu />

      <div className="grid grid-cols-2 gap-6 w-full max-w-6xl mt-12">
        <BlockTopLeft />
        <BlockTopRight />
        <BlockBottomLeft />
        <BlockBottomRight />
      </div>

      <Footer />
    </main>
  );
}
