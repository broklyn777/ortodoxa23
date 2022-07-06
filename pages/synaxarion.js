/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable prettier/prettier */
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function Synaxarion() {
  const [date, setDate] = useState(new Date())
  return (
    <>
      <div>synaxarion</div>
      <div className="app">
        <h1 className="text-center text-xl">Ortodox Kalender</h1>
        <div className="calendar-container">
          <Calendar
            onChange={setDate}
            value={date}

            // onClick={"hello", "world"} onChange
          />
        </div>
        <p className="text-center">
          <span className="bold">Valt datum:</span> {date.toLocaleDateString('sv-SV')}
        </p>
      </div>
    </>
  )
}

export default Synaxarion
