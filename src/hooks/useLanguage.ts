import { useState, useEffect } from "react";

export type Language = "en" | "hr";

const getInitialLanguage = (): Language => {
  // Check localStorage first
  const stored = localStorage.getItem("kalypso-language");
  if (stored === "en" || stored === "hr") {
    return stored;
  }

  // Check geolocation via timezone or navigator language
  try {
    const userLanguage = navigator.language.toLowerCase();
    if (userLanguage.startsWith("hr") || userLanguage.includes("croatia")) {
      return "hr";
    }
  } catch (error) {
    console.error("Error detecting language:", error);
  }

  return "en"; // Default to English
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem("kalypso-language", language);
  }, [language]);

  return { language, setLanguage };
};
