"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // Enables drag/drop
import { EventInput } from "@fullcalendar/core";

export default function FullCalendarComponent() {
  const [events, setEvents] = useState<EventInput[]>([
    { title: "Meeting", start: new Date().toISOString() }, // Example event
  ]);

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
    />
  );
}