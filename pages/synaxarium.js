/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable prettier/prettier */
import CalendarComponent from '@/components/CalendarComponent'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function Synaxarion() {
  const [date, setDate] = useState(new Date())
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Synaxarion
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">en Ortodox Kalender</p>
        </div>

        <div className="">
          <CalendarComponent />
        </div>
      </div>
    </>
  )
}

export default Synaxarion
