import Section from "@/components/Section";
import { songs } from "@/data/songs";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <Section title="🎵 Canciones destacadas">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {songs.map((song) => (
            <div
              key={song.id}
              className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {song.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{song.artist}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
