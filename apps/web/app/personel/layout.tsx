'use client';
import { CSSProperties, ReactNode } from "react";
import { getTranslation } from "@repo/i18n/getTranslation";

import { useLayout } from "@repo/appcontext/layoutContext";
import { useEffect } from "react";


const lang = "pt";

const menuItems = [
  { href: "/personel/listEmployee", text: String(getTranslation(lang, "listEmployee")), icon:"Group" },
  { href: "/personel/addNewEmployee", text: String(getTranslation(lang, "addNewEmployee")), icon: "PersonAdd" },
  { href: "/", text: String(getTranslation(lang, "return")), icon:"ArrowBack" },
];
export default function PersonelLayout({ children }: { children: ReactNode }) {

  const { setTitle, setMenuItems } = useLayout();

  useEffect(() => {
    setTitle(String(getTranslation(lang, "personelControl")));
    setMenuItems([
      { href: "/personel/listEmployee", text: String(getTranslation(lang, "listEmployee")), icon:"Group" },
      { href: "/personel/addNewEmployee", text: String(getTranslation(lang, "addNewEmployee")), icon: "PersonAdd" },
      { href: "/", text: String(getTranslation(lang, "return")), icon:"ArrowBack" },
    ]);

    return () => {
      setTitle("");          // Clear title
      setMenuItems([]);      // Clear menu items
    };
  }, []);

  return (
    
      <div>
          {children} {/* Aqui o conteúdo das páginas filhas será exibido */}
      </div>
    
    
  );
}
