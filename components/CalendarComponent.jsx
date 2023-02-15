/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import moment from 'moment-timezone'
import events from 'data/staticdata'
import 'react-calendar/dist/Calendar.css'

function CalendarComponent() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const onChange = (date) => {
    const selectedEvent = events.find(
      (event) => moment(event.date).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD')
    )
    setSelectedEvent(selectedEvent)
  }

  return (
    <div>
      <>
        <h1>Min ortodoxa kalender</h1>
        <Calendar onClickDay={onChange} value={new Date()} />
        {selectedEvent && (
          <>
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.description}</p>
            <a href={selectedEvent.link} target="_blank" rel="noopener noreferrer">
              Läs mer
            </a>
          </>
        )}
      </>
    </div>
  )
}

export default CalendarComponent
