"use client";

import { useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";

interface UseThemeReturn {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
  isLight: boolean;
}

const STORAGE_KEY = "letters-never-sent-theme";

export default function useTheme(): UseThemeReturn {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [resolvedTheme, setResolvedTheme] = useState<
    "light" | "dark"
  >("dark");

  const getSystemTheme = (): "light" | "dark" => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";
  };

  const applyTheme = (selectedTheme: Theme) => {
    if (typeof document === "undefined") {
      return;
    }

    const html = document.documentElement;

    html.classList.remove("light", "dark");

    let currentTheme: "light" | "dark";

    if (selectedTheme === "system") {
      currentTheme = getSystemTheme();
    } else {
      currentTheme = selectedTheme;
    }

    html.classList.add(currentTheme);

    html.setAttribute("data-theme", currentTheme);

    setResolvedTheme(currentTheme);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);

    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newTheme);
    }

    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const current =
      theme === "system" ? resolvedTheme : theme;

    setTheme(current === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const savedTheme = localStorage.getItem(
      STORAGE_KEY
    ) as Theme | null;

    const initialTheme =
      savedTheme || "dark";

    setThemeState(initialTheme);
    applyTheme(initialTheme);

    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleSystemThemeChange = () => {
      if (
        localStorage.getItem(STORAGE_KEY) ===
        "system"
      ) {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener(
      "change",
      handleSystemThemeChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleSystemThemeChange
      );
    };
  }, []);

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
  };
}