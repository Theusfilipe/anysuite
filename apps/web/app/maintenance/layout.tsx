'use client';
import { CSSProperties, ReactNode } from "react";
import { getTranslation } from "@repo/i18n/getTranslation";

import { useLayout } from "@repo/appcontext/layoutContext";
import { useEffect } from "react";

const lang = "pt";

const menuItems = [
  { href: "/maintenance/serviceRequest/serviceRequestList", text: getTranslation(lang, "serviceRequestList") , icon: "Assignment" },
  { href: "/maintenance/serviceRequest/newServiceRequest", text: getTranslation(lang, "newServiceRequest"), icon:"PostAdd" },
  { href: "/maintenance/serviceOrder/newServiceOrder", text: getTranslation(lang, "newServiceOrder"), icon:"AssignmentReturn" },
  { href: "/maintenance/serviceOrder/serviceOrderList", text: getTranslation(lang, "serviceOrderList"), icon:"ListAlt"  },
  { href: "/maintenance/checklistTemplate/newChecklistTemplate", text: getTranslation(lang, "newChecklistTemplate"), icon: "AddTask" },
  { href: "/maintenance/checklistTemplate/listChecklistTemplates", text: getTranslation(lang, "listChecklistTemplates"), icon: "CheckCircle" },
  { href: "/maintenance/checklist/listChecklist", text: getTranslation(lang, "listChecklist"), icon: "Checklist" },
  { href: "/maintenance/checklist/createChecklist", text: getTranslation(lang, "createChecklist"), icon: "ChecklistAdd" },
  { href: "/maintenance/calendar", text: getTranslation(lang, "calendar"), icon: "Today" },
  { href: "/", text: getTranslation(lang, "return"),icon:"ArrowBack" },
];
export default function MaintenanceLayout({ children }: { children: ReactNode }) {
  const { setTitle, setMenuItems } = useLayout();
  
    useEffect(() => {
      setTitle(String(getTranslation(lang, "maintenance")));
      setMenuItems([
        { href: "/maintenance/serviceRequest/serviceRequestList", text: String(getTranslation(lang, "serviceRequestList")) , icon: "Assignment" },
        { href: "/maintenance/serviceRequest/newServiceRequest", text: String(getTranslation(lang, "newServiceRequest")), icon:"PostAdd" },
        { href: "/maintenance/serviceOrder/newServiceOrder", text: String(getTranslation(lang, "newServiceOrder")), icon:"AssignmentReturn" },
        { href: "/maintenance/serviceOrder/serviceOrderList", text: String(getTranslation(lang, "serviceOrderList")), icon:"ListAlt"  },
        { href: "/maintenance/checklistTemplate/newChecklistTemplate", text: String(getTranslation(lang, "newChecklistTemplate")), icon: "AddTask" },
        { href: "/maintenance/checklistTemplate/listChecklistTemplates", text: String(getTranslation(lang, "listChecklistTemplates")), icon: "CheckCircle" },
        { href: "/maintenance/checklist/listChecklist", text: String(getTranslation(lang, "listChecklist")), icon: "Checklist" },
        { href: "/maintenance/checklist/createChecklist", text: String(getTranslation(lang, "createChecklist")), icon: "ChecklistAdd" },
        { href: "/maintenance/calendar", text: String(getTranslation(lang, "calendar")), icon: "Today" },
        { href: "/", text: String(getTranslation(lang, "return")),icon:"ArrowBack" },
      ]
      );
    }, []);

  return (
    <div>
      {children} {/* Aqui o conteúdo das páginas filhas será exibido */}
    </div>
    
    
  );
}

