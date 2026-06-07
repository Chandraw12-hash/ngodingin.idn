"use client";

// hooks/useLanguage.js

import { useState, useEffect } from "react";
import { translations } from "@/lib/i18n";

const STORAGE_KEY = "ngodingin_lang";
const DEFAULT_LANG = "id";

export function useLanguage() {
  const [lang, setLang] = useState(DEFAULT_LANG);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "id" || saved === "en") {
      setLang(saved);
    }
  }, []);

  function toggle() {
    setLang((prev) => {
      const next = prev === "id" ? "en" : "id";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }

  function setLanguage(newLang) {
    if (newLang !== "id" && newLang !== "en") return;
    localStorage.setItem(STORAGE_KEY, newLang);
    setLang(newLang);
  }

  return {
    lang,
    toggle,
    setLanguage,
    t: translations[lang],
    isID: lang === "id",
    isEN: lang === "en",
  };
}