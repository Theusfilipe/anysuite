'use client';
import { ReactNode } from "react";
import { getTranslation } from "@repo/i18n/getTranslation";

import { useLayout } from "@repo/appcontext/layoutContext";
import { useEffect } from "react";

const lang = "pt";

const menuItems = [
  { href: "/stockroom/inventory", text: getTranslation(lang, "inventory"), icon: "Inventory" },
  { href: "/stockroom/stockroomNewEquipment", text: getTranslation(lang, "stockroomNewEquipment"), icon: "AddCircle" },
  { href: "/stockroom/stockroomNewSparePart", text: getTranslation(lang, "stockroomNewSparePart"), icon: "AddCircleOutline" },
  { href: "/", text: getTranslation(lang, "return"), icon: "ArrowBack" },
];

export default function StockroomLayout({ children }: { children: ReactNode }) {
  const { setTitle, setMenuItems } = useLayout();
    
      useEffect(() => {
        setTitle(String(getTranslation(lang, "stockroom")));
        setMenuItems([
          { href: "/stockroom/inventory", text: String(getTranslation(lang, "inventory")), icon: "Inventory" },
          { href: "/stockroom/stockroomNewEquipment", text: String(getTranslation(lang, "stockroomNewEquipment")), icon: "AddCircle" },
          { href: "/stockroom/stockroomNewSparePart", text: String(getTranslation(lang, "stockroomNewSparePart")), icon: "AddCircleOutline" },
          { href: "/", text: String(getTranslation(lang, "return")), icon: "ArrowBack" },
        ]
        );
        
        return () => {
          setTitle("");          // Clear title
          setMenuItems([]);      // Clear menu items
        };
      }, []);
  return (
    <div>
      
        {children} 
      
    </div>
  );
}


