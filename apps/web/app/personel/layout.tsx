import { CSSProperties, ReactNode } from "react";
import { getTranslation } from "@repo/i18n/getTranslation";

import Sidebar from "@repo/ui/sidebar";

import Link from "next/link";

const lang = "pt";

const menuItems = [
  { href: "/personel/listEmployee", text: getTranslation(lang, "listEmployee"), icon:"Group" },
  { href: "/personel/addNewEmployee", text: getTranslation(lang, "addNewEmployee") , icon: "PersonAdd" },
  { href: "/", text: getTranslation(lang, "return"),icon:"ArrowBack" },
];
export default function MaintenanceLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      

      <Sidebar title={getTranslation(lang, "personelControl")} menuItems={menuItems}>
        {children} {/* Aqui o conteúdo das páginas filhas será exibido */}
      </Sidebar>
    </div>
  );
}
