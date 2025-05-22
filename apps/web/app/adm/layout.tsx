'use client';
import { CSSProperties, ReactNode } from "react";
import { getTranslation } from "@repo/i18n/getTranslation";

import { useLayout } from "@repo/appcontext/layoutContext";
import { useEffect } from "react";

const lang = "pt";

const menuItems = [
        { href: "/adm/user/create", text: String(getTranslation(lang, "createUser")) , icon: "PersonAdd" },
        { href: "/adm/user/list", text: String(getTranslation(lang, "listUser")) , icon: "People" },
        { href: "/", text: String(getTranslation(lang, "return")),icon:"ArrowBack" },
      ];
export default function MaintenanceLayout({ children }: { children: ReactNode }) {
  const { setTitle, setMenuItems } = useLayout();
  
    useEffect(() => {
      setTitle(String(getTranslation(lang, "adminPanel"))); // Set title for the page
      setMenuItems([
        { href: "/adm/user/create", text: String(getTranslation(lang, "createUser")) , icon: "PersonAdd" },
        { href: "/adm/user/list", text: String(getTranslation(lang, "listUser")) , icon: "People" },
        { href: "/", text: String(getTranslation(lang, "return")),icon:"ArrowBack" },
      ]
      );
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

