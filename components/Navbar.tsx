"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 transition-colors duration-300">
      <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        🎶 Music App
      </div>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-yellow-400" />
        ) : (
          <Moon className="h-5 w-5 text-gray-800" />
        )}
      </button>
    </nav>
  );
}
