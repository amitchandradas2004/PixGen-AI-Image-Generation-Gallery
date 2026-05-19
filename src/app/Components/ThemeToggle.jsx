"use client";

import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className=""
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <MdSunny /> : <FaMoon />}
    </button>
  );
}
