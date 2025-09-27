import { getNews } from "@/lib/getNews";

export default function Block2() {
  const news = getNews()[1]; // segunda noticia

  return (
    <div style={{ background: "#e0e0e0", padding: "1rem" }}>
      <h3>{news.title}</h3>
      <p>{news.summary}</p>
    </div>
  );
}
