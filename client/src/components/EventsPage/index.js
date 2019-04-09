import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import './index.css'

const localizer = BigCalendar.momentLocalizer(moment)

const events = [
  {
    id: 1,
    title: 'Math',
    description: 'wow so amazing',
    start: new Date(),
    end: new Date(),
    image: "https://www.boell.de/sites/default/files/uploads/2016/06/brexit.png",
    organizers: [{
      title: 'Tumor'
    }]
  },
  {
    id: 2,
    title: 'Bel',
    description: 'wow so amazing',
    start: new Date(),
    end: new Date(),
    image: "https://www.boell.de/sites/default/files/uploads/2016/06/brexit.png",
    organizers: [{
      title: 'Tumor'
    }]
  },
  {
    id: 4,
    title: 'Da',
    description: 'wow so amazing',
    start: new Date(),
    end: new Date(),
    image: "https://www.boell.de/sites/default/files/uploads/2016/06/brexit.png",
    organizers: [{
      title: 'Tumor'
    }]
  },
  {
    id: 3,
    title: 'Ne',
    description: 'wow so amazing',
    start: new Date(),
    end: new Date(),
    image: "https://www.boell.de/sites/default/files/uploads/2016/06/brexit.png",
    organizers: [{
      title: 'Tumor'
    }]
  },
  {
    id: 5,
    title: 'Da',
    description: 'wow so amazing',
    start: new Date(),
    end: new Date(),
    image: "https://www.boell.de/sites/default/files/uploads/2016/06/brexit.png",
    organizers: [{
      title: 'Tumor'
    }]
  },
  {
    id: 6,
    title: 'Ne',
    description: 'wow so amazing',
    start: new Date(),
    end: new Date(),
    image: "https://www.boell.de/sites/default/files/uploads/2016/06/brexit.png",
    organizers: [{
      title: 'Tumor'
    }]
  }
]

events[1].start.setDate(6)
events[3].start.setDate(6)

export default function EventsPage() {
  return (
    <>
      <h1>Events</h1>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </>
  )
}
