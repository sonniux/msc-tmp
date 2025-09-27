import { getNews } from "@/lib/getNews";

export default function Block3() {
  const news = getNews()[2]; // tercera noticia

  return (
    <div style={{ background: "#d0d0d0", padding: "1rem" }}>
      <h3>{news.title}</h3>
      <p>{news.summary}</p>
    </div>
  );
}
