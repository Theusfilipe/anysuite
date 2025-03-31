import { ReactNode } from "react";
import { getTranslation } from "@repo/i18n/getTranslation";

import Sidebar from "@repo/ui/sidebar";

const lang = "pt";

const menuItems = [
  { href: "/stockroom/stockroomEquipmentList", text: getTranslation(lang, "stockroomEquipmentList"), icon: "Inventory" },
  { href: "/stockroom/stockroomNewEquipment", text: getTranslation(lang, "stockroomNewEquipment"), icon: "AddCircle" },
  { href: "/stockroom/stockroomNewSparePart", text: getTranslation(lang, "stockroomNewSparePart"), icon: "AddCircleOutline" },
  { href: "/", text: getTranslation(lang, "return"), icon: "ArrowBack" },
];

export default function StockroomLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar title={getTranslation(lang, "stockroom")} menuItems={menuItems}>
        {children} 
      </Sidebar>
    </div>
  );
}


