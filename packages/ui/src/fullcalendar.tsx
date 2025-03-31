"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // Enables drag/drop
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import { EventInput } from "@fullcalendar/core";
import { Dialog, DialogTitle, DialogContent, Typography, Button } from "@mui/material";

interface CalendarProps {
  events: EventInput[];
}

export default function FullCalendarComponent({ events: initialEvents }: CalendarProps) {
  const [events, setEvents] = useState<EventInput[]>(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState<EventInput | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleEventClick = (clickInfo: any) => {
    setSelectedEvent({
      title: clickInfo.event.title,
      start: clickInfo.event.start ? new Date(clickInfo.event.start).toLocaleString("pt-BR") : "",
      end: clickInfo.event.end ? new Date(clickInfo.event.end).toLocaleString("pt-BR") : "",
      description: clickInfo.event.extendedProps?.description || "Sem descrição",
    });
    setModalOpen(true);
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick} // Click to add events
        editable={false} // Allow drag & drop
        locale={ptBrLocale}
        height="100%"
        headerToolbar= {
          {
            start: "prev,next today",
            center: "title",
            end: "dayGridMonth,timeGridWeek",
          }
        }
        titleFormat={(date) => {
          const month = date.date.marker.toLocaleDateString("pt-BR", { month: "long" });
          const year = date.date.marker.getFullYear();
          return `${month.charAt(0).toUpperCase() + month.slice(1)} de ${year}`;
        }}
      />
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <DialogTitle>{selectedEvent?.title}</DialogTitle>
        <DialogContent>
          <Typography>
            📅 <strong>Início:</strong> {selectedEvent?.start?.toLocaleString("pt-BR")}
          </Typography>
          {selectedEvent?.end && (
            <Typography>
              ⏳ <strong>Fim:</strong> {selectedEvent?.end.toLocaleString("pt-BR")}
            </Typography>
          )}
          <Typography>
            📝 <strong>Descrição:</strong> {selectedEvent?.description}
          </Typography>
          <Button onClick={() => setModalOpen(false)} color="primary" variant="contained" style={{ marginTop: "10px" }}>
            Fechar
          </Button>
        </DialogContent>
      </Dialog>
    </div>
    
    
  );
}