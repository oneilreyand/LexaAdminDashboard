import React, { useState } from "react"
import {
  format,
  addMonths,
} from "date-fns"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import Button from "../atoms/Button"
import { Popover, PopoverContent, PopoverTrigger } from "../atoms/Popover"

export function DatePicker({ className, date, onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(date)
  const [tempDate, setTempDate] = useState(date)
  const [isOpen, setIsOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const handleApply = () => {
    setSelectedDate(tempDate)
    onDateChange?.(tempDate)
    setIsOpen(false)
  }

  const handleCancel = () => {
    setTempDate(selectedDate)
    setIsOpen(false)
  }

  const formatDate = (date) => {
    if (!date) return "Pick a date"
    return format(date, "MMM dd, yyyy")
  }

  return (
    <div className={`grid gap-2 ${className || ""}`}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            styleType="outline"
            className={`justify-start text-left font-normal ${
              !selectedDate ? "text-muted-foreground dark:text-gray-400" : ""
            }`}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {formatDate(selectedDate)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col space-y-4 p-6 dark:bg-gray-800">
            {/* Calendar */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Button
                  styleType="outline"
                  size="small"
                  onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="w-8" />
                <Button
                  styleType="outline"
                  size="small"
                  onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <DayPicker
                mode="single"
                selected={tempDate}
                onSelect={setTempDate}
                month={currentMonth}
                numberOfMonths={1}
                className="pointer-events-auto dark:text-dark-text"
                modifiersStyles={{
                  selected: { backgroundColor: '#7183e8', color: 'white' },
                }}
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-2">
              <Button styleType="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button onClick={handleApply}>Apply</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
