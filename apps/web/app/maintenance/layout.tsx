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


const sidebarStyle: CSSProperties = {
  width: "200px",
  background: "#f4f4f4",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",
  borderRight: "2px solid #ddd",
};

//<aside style={sidebarStyle}>
//        <ul>
//          <li>
//            <Link href="/maintenance/serviceRequestList">{getTranslation(lang, "serviceRequestList")}</Link>
//          </li>
//          <li>
//            <Link href="/maintenance/newServiceRequest">{getTranslation(lang, "newServiceRequest")}</Link>
//          </li>
//          <li>
//            <Link href="/maintenance/newServiceOrder">{getTranslation(lang, "newServiceOrder")}</Link>
//          </li>
//          
//          <li>
//            <Link href="/maintenance/serviceOrderList">{getTranslation(lang, "serviceOrderList")}</Link>
//          </li>
//          <li>
//            <Link href="/">{getTranslation(lang, "return")}</Link>
//          </li>
//        </ul>
//     </aside>