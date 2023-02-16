/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// //components/CalendarComponent.jsx
// import React, { useState } from 'react'
// import Calendar from 'react-calendar'
// import moment from 'moment-timezone'
// import events from 'data/staticdata'
// import 'react-calendar/dist/Calendar.css'
// import Link from 'next/link'

// function CalendarComponent() {
//   const [selectedEvent, setSelectedEvent] = useState(null)

//   const onChange = (date) => {
//     const selectedEvent = events.find(
//       (event) => moment(event.date).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD')
//     )
//     setSelectedEvent(selectedEvent)
//   }

//   return (
//     <div>
//       <>
//         <h1>Min ortodoxa kalender</h1>
//         <Calendar onClickDay={onChange} value={new Date()} />
//         {selectedEvent && (
//           <>
//             <h2>{selectedEvent.title}</h2>
//             <p>{selectedEvent.description}</p>
//             <Link legacyBehavior href={{ pathname: selectedEvent.link }}>
//               <a>Läs mer</a>
//             </Link>
//           </>
//         )}
//       </>
//     </div>
//   )
// }

// export default CalendarComponent
//components/CalendarComponent.jsx
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import moment from 'moment-timezone'
import events from 'data/staticdata'
import 'react-calendar/dist/Calendar.css'
import Link from 'next/link'

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
      <h1>Min ortodoxa kalender</h1>
      <Calendar onClickDay={onChange} value={new Date()} className="dark:bg-gray-800" />
      {selectedEvent && (
        <>
          <h2>{selectedEvent.title}</h2>
          <p>{selectedEvent.description}</p>
          <Link legacyBehavior href={{ pathname: selectedEvent.link }}>
            <a>Läs mer</a>
          </Link>
        </>
      )}
    </div>
  )
}

export default CalendarComponent
