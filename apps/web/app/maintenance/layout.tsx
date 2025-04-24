import { CSSProperties, ReactNode } from "react";
import { getTranslation } from "@repo/i18n/getTranslation";

import Sidebar from "@repo/ui/sidebar";

import Link from "next/link";
import PrimarySearchAppBar from "@repo/ui/header";

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
  return (
    <PrimarySearchAppBar>
      <div style={{ display: "flex", height: "100vh" }}>
      

        <Sidebar title={getTranslation(lang, "maintenanceWelcome")} menuItems={menuItems}>
          {children} {/* Aqui o conteúdo das páginas filhas será exibido */}
        </Sidebar>
      </div>
    </PrimarySearchAppBar>
    
  );
}


