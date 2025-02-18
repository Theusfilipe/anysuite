import { CSSProperties, ReactNode } from "react";
import { getTranslation } from "./../../../../packages/i18n/index";

import Link from "next/link";

const lang = "pt";

export default function StockroomLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside style={sidebarStyle}>
        <ul>
          <li>
            <Link href="/stockroom/serviceRequestList">{getTranslation(lang, "serviceRequestList")}</Link>
          </li>
          <li>
            <Link href="/stockroom/newServiceRequest">{getTranslation(lang, "newServiceRequest")}</Link>
          </li>
          <li>
            <Link href="/stockroom/newServiceOrder">{getTranslation(lang, "newServiceOrder")}</Link>
          </li>
          <li>
            <Link href="/stockroom/serviceOrderList">{getTranslation(lang, "serviceOrderList")}</Link>
          </li>
          <li>
            <Link href="/">{getTranslation(lang, "return")}</Link>
          </li>
        </ul>
      </aside>

      <main style={{ flex: 1, padding: "20px" }}>
        {children} {/* Aqui o conteúdo das páginas filhas será exibido */}
      </main>
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