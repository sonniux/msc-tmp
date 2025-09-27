import { getNews } from "@/lib/getNews";

export default function Block1() {
  const news = getNews()[0]; // primera noticia

  return (
    <div style={{ background: "#f4f4f4", padding: "1rem" }}>
      <h3>{news.title}</h3>
      <p>{news.summary}</p>
    </div>
  );
}
