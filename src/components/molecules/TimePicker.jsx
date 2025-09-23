import React, { useState, useEffect } from 'react'

import { ChevronUp, ChevronDown } from 'lucide-react'

const ChevronUpIcon = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex items-center justify-center w-6 h-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
    aria-label="Increase value"
  >
    <ChevronUp className="w-4 h-4" />
  </button>
)

const ChevronDownIcon = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex items-center justify-center w-6 h-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
    aria-label="Decrease value"
  >
    <ChevronDown className="w-4 h-4" />
  </button>
)

export function TimePicker({ time, onTimeChange, className, hideChevrons = false }) {
  // Convert 24-hour time to 12-hour format and AM/PM
  const to12Hour = (date) => {
    let hours = date.getHours()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    if (hours === 0) hours = 12
    return { hours, minutes: date.getMinutes(), ampm }
  }

  // Convert 12-hour + AM/PM to 24-hour
  const to24Hour = (hours12, minutes, ampm) => {
    let hours24 = hours12 % 12
    if (ampm === 'PM') hours24 += 12
    return { hours24, minutes }
  }

  const initialTime = time ? to12Hour(time) : { hours: 12, minutes: 0, ampm: 'AM' }

  const [hours, setHours] = useState(initialTime.hours)
  const [minutes, setMinutes] = useState(initialTime.minutes)
  const [ampm, setAmpm] = useState(initialTime.ampm)

  useEffect(() => {
    if (time) {
      const t = to12Hour(time)
      setHours(t.hours)
      setMinutes(t.minutes)
      setAmpm(t.ampm)
    }
  }, [time])

  // Update time and call onTimeChange
  const updateTime = (newHours, newMinutes, newAmpm) => {
    const { hours24, minutes } = to24Hour(newHours, newMinutes, newAmpm)
    const newTime = new Date(time || new Date())
    newTime.setHours(hours24)
    newTime.setMinutes(minutes)
    onTimeChange?.(newTime)
  }

  // Handlers for chevron buttons and input changes
  const incrementHours = () => {
    const newHours = hours === 12 ? 1 : hours + 1
    setHours(newHours)
    updateTime(newHours, minutes, ampm)
  }

  const decrementHours = () => {
    const newHours = hours === 1 ? 12 : hours - 1
    setHours(newHours)
    updateTime(newHours, minutes, ampm)
  }

  const incrementMinutes = () => {
    let newMinutes = minutes + 1
    let newHours = hours
    let newAmpm = ampm
    if (newMinutes > 59) {
      newMinutes = 0
      newHours = hours === 12 ? 1 : hours + 1
      if (newHours === 12) {
        newAmpm = ampm === 'AM' ? 'PM' : 'AM'
      }
    }
    setMinutes(newMinutes)
    setHours(newHours)
    setAmpm(newAmpm)
    updateTime(newHours, newMinutes, newAmpm)
  }

  const decrementMinutes = () => {
    let newMinutes = minutes - 1
    let newHours = hours
    let newAmpm = ampm
    if (newMinutes < 0) {
      newMinutes = 59
      newHours = hours === 1 ? 12 : hours - 1
      if (newHours === 11) {
        newAmpm = ampm === 'AM' ? 'PM' : 'AM'
      }
    }
    setMinutes(newMinutes)
    setHours(newHours)
    setAmpm(newAmpm)
    updateTime(newHours, newMinutes, newAmpm)
  }

  const toggleAmpm = () => {
    const newAmpm = ampm === 'AM' ? 'PM' : 'AM'
    setAmpm(newAmpm)
    updateTime(hours, minutes, newAmpm)
  }

  const handleHoursChange = (e) => {
    let val = Number(e.target.value)
    if (isNaN(val)) return
    if (val < 1) val = 1
    if (val > 12) val = 12
    setHours(val)
    updateTime(val, minutes, ampm)
  }

  const handleMinutesChange = (e) => {
    let val = Number(e.target.value)
    if (isNaN(val)) return
    if (val < 0) val = 0
    if (val > 59) val = 59
    setMinutes(val)
    updateTime(hours, val, ampm)
  }

  return (
    <div className={`flex items-center space-x-4 ${className || ''}`}>
      <div className="flex flex-col items-center">
        {!hideChevrons && <ChevronUpIcon onClick={incrementHours} />}
        <input
          type="number"
          min="1"
          max="12"
          value={hours}
          onChange={handleHoursChange}
          className="w-16 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1 text-center text-gray-900 dark:text-gray-200"
          aria-label="Hours"
        />
        {!hideChevrons && <ChevronDownIcon onClick={decrementHours} />}
      </div>
      <span className="text-xl select-none text-gray-900 dark:text-gray-200">:</span>
      <div className="flex flex-col items-center">
        {!hideChevrons && <ChevronUpIcon onClick={incrementMinutes} />}
        <input
          type="number"
          min="0"
          max="59"
          value={minutes.toString().padStart(2, '0')}
          onChange={handleMinutesChange}
          className="w-16 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1 text-center text-gray-900 dark:text-gray-200"
          aria-label="Minutes"
        />
        {!hideChevrons && <ChevronDownIcon onClick={decrementMinutes} />}
      </div>
      <div className="flex flex-col items-center">
        {!hideChevrons && <ChevronUpIcon onClick={toggleAmpm} />}
        <input
          type="text"
          readOnly
          value={ampm}
          className="w-16 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1 text-center cursor-default select-none text-gray-900 dark:text-gray-200"
          aria-label="AM/PM"
        />
        {!hideChevrons && <ChevronDownIcon onClick={toggleAmpm} />}
      </div>
    </div>
  )
}
