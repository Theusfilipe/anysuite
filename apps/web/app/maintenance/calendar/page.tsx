import FullCalendarComponent from "@repo/ui/fullcalendar";

import { GlobalStyles } from "@mui/system";

export default function CalendarPage() {

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