import { getNews } from "@/lib/getNews";

export default function Block4() {
  const news = getNews()[3]; // cuarta noticia

  return (
    <div style={{ background: "#c0c0c0", padding: "1rem" }}>
      <h3>{news.title}</h3>
      <p>{news.summary}</p>
    </div>
  );
}
