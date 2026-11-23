"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { dict, type Dict, type Lang } from "./dict";

const STORAGE_KEY = "ngodingin-lang";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  // Baca pilihan tersimpan setelah mount (hindari hydration mismatch)
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "id" || saved === "en") setLangState(saved);
  }, []);

  // Sinkronkan atribut <html lang>
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang harus dipakai di dalam LanguageProvider");
  return ctx;
}
