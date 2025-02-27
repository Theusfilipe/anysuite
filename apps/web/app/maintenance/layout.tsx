import { CSSProperties, ReactNode } from "react";
import { getTranslation } from "./../../../../packages/i18n/index";

import Sidebar from "@repo/ui/sidebar";

import Link from "next/link";

const lang = "pt";

const menuItems = [
  { href: "/maintenance/serviceRequestList", text: getTranslation(lang, "serviceRequestList") , icon: "Assignment" },
  { href: "/maintenance/newServiceRequest", text: getTranslation(lang, "newServiceRequest"), icon:"PostAdd" },
  { href: "/maintenance/newServiceOrder", text: getTranslation(lang, "newServiceOrder"), icon:"AssignmentReturn" },
  { href: "/maintenance/serviceOrderList", text: getTranslation(lang, "serviceOrderList"), icon:"ListAlt"  },
  { href: "/", text: getTranslation(lang, "return"),icon:"ArrowBack" },
];
export default function MaintenanceLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      

      <Sidebar title={getTranslation(lang, "maintenanceWelcome")} menuItems={menuItems}>
        {children} {/* Aqui o conteúdo das páginas filhas será exibido */}
      </Sidebar>
    </div>
  );
}


