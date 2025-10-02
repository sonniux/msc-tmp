import Header from "@/components/Header/Header";
import StatsTop from "@/components/StatsTop/StatsTop";
import EventsBottom from "@/components/EventsBottom/EventsBottom";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <StatsTop />
      <EventsBottom />
      <Footer />
    </main>
  );
}
