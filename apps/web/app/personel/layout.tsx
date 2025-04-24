import { CSSProperties, ReactNode } from "react";
import { getTranslation } from "@repo/i18n/getTranslation";

import Sidebar from "@repo/ui/sidebar";
import header from "@repo/ui/header";

import Link from "next/link";
import PrimarySearchAppBar from "@repo/ui/header";

const lang = "pt";

const menuItems = [
  { href: "/personel/listEmployee", text: String(getTranslation(lang, "listEmployee")), icon:"Group" },
  { href: "/personel/addNewEmployee", text: String(getTranslation(lang, "addNewEmployee")), icon: "PersonAdd" },
  { href: "/", text: String(getTranslation(lang, "return")), icon:"ArrowBack" },
];
export default function MaintenanceLayout({ children }: { children: ReactNode }) {
  return (
    <PrimarySearchAppBar>
      <div style={{ display: "flex", height: "100vh" }}>
      

        <PrimarySearchAppBar title={String(getTranslation(lang, "personelControl"))} menuItems={menuItems}>
          {children} {/* Aqui o conteúdo das páginas filhas será exibido */}
        </PrimarySearchAppBar>
        
      </div>
    </PrimarySearchAppBar>
    
  );
}
