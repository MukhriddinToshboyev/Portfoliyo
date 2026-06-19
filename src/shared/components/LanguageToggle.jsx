"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { FiGlobe } from "react-icons/fi";
import "../../i18n/config";

const languages = [
  { code: "uz", label: "O'zbek" },
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
];

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        style={{
          background: "none",
          border: "1px solid var(--border-color)",
          borderRadius: "0.4rem",
          color: "var(--text-primary)",
          width: "3.5rem",
          height: "3rem",
          fontSize: "1rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s",
          gap: "0.3rem",
        }}
      >
        <FiGlobe size={18} />
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "3.4rem",
            right: "0",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
            borderRadius: "0.4rem",
            overflow: "hidden",
            zIndex: 100,
            minWidth: "8rem",
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onMouseDown={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
              style={{
                display: "block",
                width: "100%",
                padding: "0.5rem 1rem",
                background:
                  i18n.language === lang.code ? "var(--accent)" : "transparent",
                color:
                  i18n.language === lang.code
                    ? "#151c25"
                    : "var(--text-primary)",
                border: "none",
                cursor: "pointer",
                fontSize: "0.9rem",
                textAlign: "left",
                fontFamily: "Arial, Helvetica, sans-serif",
                transition: "all 0.15s",
              }}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
