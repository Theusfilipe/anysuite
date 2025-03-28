"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // Enables drag/drop
import { EventInput } from "@fullcalendar/core";

interface CalendarProps {
  events: EventInput[];
}

export default function FullCalendarComponent({ events: initialEvents }: CalendarProps) {
  const [events, setEvents] = useState<EventInput[]>(initialEvents);

  const handleDateClick = (info: any) => {
    const newEvent = {
      title: "New Event",
      start: info.dateStr,
    };
    setEvents([...events, newEvent]);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      dateClick={handleDateClick} // Click to add events
      editable={true} // Allow drag & drop
      height="100%"
      headerToolbar= {
        {
          start: "prev,next today",
          center: "title",
          end: "dayGridMonth,timeGridWeek",
        }
      }
    />
  );
}