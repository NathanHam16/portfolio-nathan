"use client";
import React, { useRef, useEffect } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import './calendar.css';
import useFetch from "../../src/lib/useFetch"


export default function Calendar() {
  useFetch();
  const calendar_ref = useRef();

  const events = [
    {
      "kind": "calendar#event",
      "etag": "\"3367908631234000\"",
      "id": "66lgnrs8aaq9bp403isi0qm89q",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=NjZsZ25yczhhYXE5YnA0MDNpc2kwcW04OXEgYjE5NjltYXJsZXlAbQ",
      "created": "2023-05-13T05:05:15.000Z",
      "updated": "2023-05-13T05:05:15.617Z",
      "summary": "Data completed 1",
      "creator": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2023-05-13T01:15:00Z",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-05-13T02:15:00Z",
        "timeZone": "UTC"
      },
      "iCalUID": "66lgnrs8aaq9bp403isi0qm89q@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3367908642016000\"",
      "id": "4q9j261e5urcti2ibt004hm86o",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=NHE5ajI2MWU1dXJjdGkyaWJ0MDA0aG04Nm8gYjE5NjltYXJsZXlAbQ",
      "created": "2023-05-13T05:05:21.000Z",
      "updated": "2023-05-13T05:05:21.008Z",
      "summary": "Data completed 2",
      "creator": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2023-05-13T02:45:00Z",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-05-13T04:00:00Z",
        "timeZone": "UTC"
      },
      "iCalUID": "4q9j261e5urcti2ibt004hm86o@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3367908750306000\"",
      "id": "1p0nn5uvodbbecf1sncq0ov4n8",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=MXAwbm41dXZvZGJiZWNmMXNuY3Ewb3Y0bjggYjE5NjltYXJsZXlAbQ",
      "created": "2023-05-13T05:06:15.000Z",
      "updated": "2023-05-13T05:06:15.153Z",
      "summary": "Online meeting with Jasper",
      "creator": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2023-05-14T05:30:00Z",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-05-14T07:00:00Z",
        "timeZone": "UTC"
      },
      "iCalUID": "1p0nn5uvodbbecf1sncq0ov4n8@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3367908869270000\"",
      "id": "6lq0kafjg1ei7pmvkbfu1jceb0",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=NmxxMGthZmpnMWVpN3BtdmtiZnUxamNlYjAgYjE5NjltYXJsZXlAbQ",
      "created": "2023-05-13T05:06:34.000Z",
      "updated": "2023-05-13T05:07:14.635Z",
      "summary": "Brainstorming with Val",
      "creator": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2023-05-14T07:45:00Z",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-05-14T09:15:00Z",
        "timeZone": "UTC"
      },
      "iCalUID": "6lq0kafjg1ei7pmvkbfu1jceb0@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3367907238690000\"",
      "id": "6ligj7ntfcs94uuaf5n7fbvckt",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=NmxpZ2o3bnRmY3M5NHV1YWY1bjdmYnZja3QgYjE5NjltYXJsZXlAbQ",
      "created": "2023-05-13T04:53:39.000Z",
      "updated": "2023-05-13T04:53:39.345Z",
      "summary": "Finishig association mining for health data",
      "creator": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2023-05-15T05:30:00Z",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-05-15T06:45:00Z",
        "timeZone": "UTC"
      },
      "iCalUID": "6ligj7ntfcs94uuaf5n7fbvckt@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3367907327628000\"",
      "id": "717bq1obod61hntjms86m34hvd",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=NzE3YnExb2JvZDYxaG50am1zODZtMzRodmQgYjE5NjltYXJsZXlAbQ",
      "created": "2023-05-13T04:54:23.000Z",
      "updated": "2023-05-13T04:54:23.814Z",
      "summary": "Brainstorming with Luke",
      "creator": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2023-05-15T07:30:00Z",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-05-15T08:30:00Z",
        "timeZone": "UTC"
      },
      "iCalUID": "717bq1obod61hntjms86m34hvd@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3367907372500000\"",
      "id": "0bf88oglvplvoorrarj0vg08cc",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=MGJmODhvZ2x2cGx2b29ycmFyajB2ZzA4Y2MgYjE5NjltYXJsZXlAbQ",
      "created": "2023-05-13T04:54:46.000Z",
      "updated": "2023-05-13T04:54:46.250Z",
      "summary": "Report drafting pages 1-20",
      "creator": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2023-05-15T09:30:00Z",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-05-15T10:15:00Z",
        "timeZone": "UTC"
      },
      "iCalUID": "0bf88oglvplvoorrarj0vg08cc@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3367907559198000\"",
      "id": "2g7gg12gahuuar685oj91ue85o",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=Mmc3Z2cxMmdhaHV1YXI2ODVvajkxdWU4NW8gYjE5NjltYXJsZXlAbQ",
      "created": "2023-05-13T04:56:19.000Z",
      "updated": "2023-05-13T04:56:19.599Z",
      "summary": "Diagram drafting ",
      "creator": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2023-05-15T12:45:00Z",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-05-15T14:00:00Z",
        "timeZone": "UTC"
      },
      "iCalUID": "2g7gg12gahuuar685oj91ue85o@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3367907691412000\"",
      "id": "0avht039bd6311c0efg6t2q63s",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=MGF2aHQwMzliZDYzMTFjMGVmZzZ0MnE2M3MgYjE5NjltYXJsZXlAbQ",
      "created": "2023-05-13T04:57:18.000Z",
      "updated": "2023-05-13T04:57:25.706Z",
      "summary": "analyze Macca's business work flow",
      "creator": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2023-05-16T07:15:00Z",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-05-16T07:45:00Z",
        "timeZone": "UTC"
      },
      "iCalUID": "0avht039bd6311c0efg6t2q63s@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3367907726146000\"",
      "id": "1ma8536b02a1bv338dqokffo05",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=MW1hODUzNmIwMmExYnYzMzhkcW9rZmZvMDUgYjE5NjltYXJsZXlAbQ",
      "created": "2023-05-13T04:57:43.000Z",
      "updated": "2023-05-13T04:57:43.073Z",
      "summary": "Report drafting 21-30",
      "creator": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2023-05-16T09:15:00Z",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-05-16T10:30:00Z",
        "timeZone": "UTC"
      },
      "iCalUID": "1ma8536b02a1bv338dqokffo05@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3367907900120000\"",
      "id": "2qeuhspt21l39lkm924qn52q4b",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=MnFldWhzcHQyMWwzOWxrbTkyNHFuNTJxNGIgYjE5NjltYXJsZXlAbQ",
      "created": "2023-05-13T04:59:10.000Z",
      "updated": "2023-05-13T04:59:10.060Z",
      "summary": "Brainstorming with Jimmy",
      "creator": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2023-05-16T14:15:00Z",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-05-16T15:30:00Z",
        "timeZone": "UTC"
      },
      "iCalUID": "2qeuhspt21l39lkm924qn52q4b@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3367907976564000\"",
      "id": "5ohrn3p6fqaqccthijig6t691b",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=NW9ocm4zcDZmcWFxY2N0aGlqaWc2dDY5MWIgYjE5NjltYXJsZXlAbQ",
      "created": "2023-05-13T04:59:48.000Z",
      "updated": "2023-05-13T04:59:48.282Z",
      "summary": "Classification analysis supermarket data",
      "creator": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2023-05-16T16:30:00Z",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-05-16T17:45:00Z",
        "timeZone": "UTC"
      },
      "iCalUID": "5ohrn3p6fqaqccthijig6t691b@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3367908050464000\"",
      "id": "54b8tbnnhvo8vg87jhlouk9n1s",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=NTRiOHRibm5odm84dmc4N2pobG91azluMXMgYjE5NjltYXJsZXlAbQ",
      "created": "2023-05-13T05:00:25.000Z",
      "updated": "2023-05-13T05:00:25.232Z",
      "summary": "Start technical documentation",
      "creator": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2023-05-17T05:30:00Z",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-05-17T06:45:00Z",
        "timeZone": "UTC"
      },
      "iCalUID": "54b8tbnnhvo8vg87jhlouk9n1s@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3367908162266000\"",
      "id": "6obj6k8gd6m9mnge7qfl9k3u4h",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=Nm9iajZrOGdkNm05bW5nZTdxZmw5azN1NGggYjE5NjltYXJsZXlAbQ",
      "created": "2023-05-13T05:01:21.000Z",
      "updated": "2023-05-13T05:01:21.133Z",
      "summary": "Data cleaning ",
      "creator": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2023-05-17T08:15:00Z",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-05-17T09:30:00Z",
        "timeZone": "UTC"
      },
      "iCalUID": "6obj6k8gd6m9mnge7qfl9k3u4h@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3367908335092000\"",
      "id": "54v11pn696tgmssd309rfqu8rg",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=NTR2MTFwbjY5NnRnbXNzZDMwOXJmcXU4cmcgYjE5NjltYXJsZXlAbQ",
      "created": "2023-05-13T05:02:47.000Z",
      "updated": "2023-05-13T05:02:47.546Z",
      "summary": "Research",
      "creator": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "b1969marley@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2023-05-17T11:15:00Z",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-05-17T12:45:00Z",
        "timeZone": "UTC"
      },
      "iCalUID": "54v11pn696tgmssd309rfqu8rg@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    }
  ]

  const formattedEvents = events.map((item) => {
    return {
      title: item.summary,
      start: item.start.dateTime || item.start.date,
      end: item.end.dateTime || item.end.date,
    };
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      calendar_ref.current.style.visibility = 'visible';
    }, 15000);

    return () => clearTimeout(timeoutId);
  }, []);

  // setTimeout(() => { calendar_ref.current.style.visivility = "visible" }, 3000)

  return (
    <div className="calendar-container" ref={calendar_ref}>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        events={formattedEvents}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
      />
    </div >
  );
}