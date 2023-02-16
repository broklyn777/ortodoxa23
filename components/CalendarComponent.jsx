/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// //components/CalendarComponent.jsx
import { PageSEO } from '@/components/SEO'
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import moment from 'moment-timezone'
import events from 'data/staticdata'
import 'react-calendar/dist/Calendar.css'
import Link from 'next/link'

function CalendarComponent() {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [date, setDate] = useState(new Date()) // Lägg till state för att lagra det valda datumet

  const onChange = (date) => {
    const selectedEvent = events.find(
      (event) => moment(event.date).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD')
    )
    setSelectedEvent(selectedEvent)
    setDate(date) // Uppdatera state med det valda datumet
  }

  return (
    <>
      <PageSEO
        title={`Synaxarion, Ortodox kalender`}
        description="
     ortodoxa kyrkan är synaxarion i dag en förkortad samling av Helgonens liv.
     "
      />
      <div className="flex h-screen items-center justify-center">
        <div className="">
          {/* <h1>Min ortodoxa kalender</h1> */}
          {/* Visa valt datum */}
          <div>
            <Calendar onClickDay={onChange} value={date} className="  dark:bg-gray-800" />
            <p className="text-center">Valt datum: {moment(date).format('YYYY-MM-DD')}</p>
            {selectedEvent && (
              <>
                <div>
                  <h2 className="text-bold text-center">{selectedEvent.title}</h2>
                  <p>{selectedEvent.description}</p>
                  <Link legacyBehavior href={{ pathname: selectedEvent.link }}>
                    <a className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                      {' '}
                      Läs mer &rarr;
                    </a>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CalendarComponent

/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// //components/CalendarComponent.jsx
// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import moment from 'moment-timezone';
// import events from 'data/staticdata';
// import 'react-calendar/dist/Calendar.css';
// import Link from 'next/link';

// function CalendarComponent() {
//   const [selectedEvent, setSelectedEvent] = useState(null)

//   const onChange = (date) => {
//     const selectedEvent = events.find(
//       (event) => moment(event.date).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD')
//     )
//     setSelectedEvent(selectedEvent)
//   }

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div>
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
//       </div>
//     </div>
//   )
// }

// export default CalendarComponent;
