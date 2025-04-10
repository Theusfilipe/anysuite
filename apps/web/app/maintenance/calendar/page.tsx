import FullCalendarComponent from "@repo/ui/fullcalendar";

import { GlobalStyles } from "@mui/system";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function CalendarPage() {

  const{ data: session } = useSession({
      required: true,
      onUnauthenticated() {
        redirect("/api/auth/callback/credentials");
      }
    });

    const inspectionEvents = [
        { title: "Inspection - Ship A", start: "2025-04-05T10:00:00", end: "2025-04-05T12:00:00", description: "Verificar sistema de ancoragem e casco."  },
        { title: "Inspection - Platform B", start: "2025-04-10T09:00:00", end: "2025-04-10T11:30:00", description: "Verificar sistema de ancoragem e casco."  },
        { title: "Inspection - Dock C", start: "2025-04-15T14:00:00", end: "2025-04-15T16:00:00", description: "Checagem de válvulas e equipamentos de segurança."  },
      ];

  return (
  <div style={{ height: "80vh", width: "160vh" , display: "flex", flexDirection: "column" }}>
   
    <FullCalendarComponent events={inspectionEvents} />
  </div>);
  
}