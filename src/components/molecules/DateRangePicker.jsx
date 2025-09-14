import React, { useState } from "react"
import {
  format,
  startOfDay,
  endOfDay,
  subDays,
  subMonths,
  startOfMonth,
  endOfMonth,
  addMonths,
  subWeeks,
  startOfWeek,
  endOfWeek,
} from "date-fns"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import Button from "../atoms/Button"
import Input from "../atoms/Input"
import Label from "../atoms/Label"
import { Popover, PopoverContent, PopoverTrigger } from "../atoms/Popover"

const presets = [
  {
    label: "Today",
    value: () => ({
      from: startOfDay(new Date()),
      to: endOfDay(new Date()),
    }),
  },
  {
    label: "Yesterday",
    value: () => ({
      from: startOfDay(subDays(new Date(), 1)),
      to: endOfDay(subDays(new Date(), 1)),
    }),
  },
  {
    label: "This week",
    value: () => ({
      from: startOfWeek(new Date()),
      to: endOfWeek(new Date()),
    }),
  },
  {
    label: "Last week",
    value: () => ({
      from: startOfWeek(subWeeks(new Date(), 1)),
      to: endOfWeek(subWeeks(new Date(), 1)),
    }),
  },
  {
    label: "This month",
    value: () => ({
      from: startOfMonth(new Date()),
      to: endOfMonth(new Date()),
    }),
  },
  {
    label: "Last month",
    value: () => ({
      from: startOfMonth(subMonths(new Date(), 1)),
      to: endOfMonth(subMonths(new Date(), 1)),
    }),
  },
  {
    label: "7 days",
    value: () => ({
      from: startOfDay(subDays(new Date(), 6)),
      to: endOfDay(new Date()),
    }),
  },
  {
    label: "30 days",
    value: () => ({
      from: startOfDay(subDays(new Date(), 29)),
      to: endOfDay(new Date()),
    }),
  },
]

export function DateRangePicker({ className, date, onDateChange }) {
  const [selectedRange, setSelectedRange] = useState(date)
  const [tempRange, setTempRange] = useState(date)
  const [isOpen, setIsOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const handlePresetClick = (preset) => {
    const range = preset.value()
    setTempRange(range)
  }

  const handleApply = () => {
    setSelectedRange(tempRange)
    onDateChange?.(tempRange)
    setIsOpen(false)
  }

  const handleCancel = () => {
    setTempRange(selectedRange)
    setIsOpen(false)
  }

  const formatDateRange = (range) => {
    if (!range?.from) return "Pick a date range"
    if (!range.to) return format(range.from, "MMM dd, yyyy")
    return `${format(range.from, "MMM dd, yyyy")} - ${format(
      range.to,
      "MMM dd, yyyy"
    )}`
  }

  return (
    <div className={`grid gap-2 ${className || ""}`}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            styleType="outline"
            className={`justify-start text-left font-normal ${
              !selectedRange ? "text-muted-foreground dark:text-gray-400" : ""
            }`}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {formatDateRange(selectedRange)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex flex-col space-y-4 p-4">
            {/* Presets */}
            <div className="flex flex-wrap gap-2">
              {presets.map((preset) => (
                <Button
                  key={preset.label}
                  styleType="outline"
                  size="small"
                  onClick={() => handlePresetClick(preset)}
                  className="text-xs"
                >
                  {preset.label}
                </Button>
              ))}
            </div>

            {/* Calendar */}
            <div className="flex gap-10">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Button
                    styleType="outline"
                    size="small"
                    onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  {/* <h4 className="font-medium">
                    {format(currentMonth, "MMMM yyyy")}
                  </h4> */}
                  <div className="w-8" />
                </div>
                <DayPicker
                  mode="range"
                  selected={tempRange}
                  onSelect={setTempRange}
                  month={currentMonth}
                  numberOfMonths={1}
                  className="pointer-events-auto dark:text-dark-text"
                  modifiersStyles={{
                    range_start: { backgroundColor: '#7183e8', color: 'white' },
                    range_end: { backgroundColor: '#7183e8', color: 'white' },
                    range_middle: { backgroundColor: '#7183e8', color: 'white' },
                  }}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-8" />
                  {/* <h4 className="font-medium">
                    {format(addMonths(currentMonth, 1), "MMMM yyyy")}
                  </h4> */}
                  <Button
                    styleType="outline"
                    size="small"
                    onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <DayPicker
                  mode="range"
                  selected={tempRange}
                  onSelect={setTempRange}
                  month={addMonths(currentMonth, 1)}
                  numberOfMonths={1}
                  className="pointer-events-auto dark:text-dark-text"
                  modifiersStyles={{
                    range_start: { backgroundColor: '#7183e8', color: 'white' },
                    range_end: { backgroundColor: '#7183e8', color: 'white' },
                    range_middle: { backgroundColor: '#7183e8', color: 'white' },
                  }}
                />
              </div>
            </div>

            {/* Date inputs */}
            <div className="flex gap-4">
              <div className="flex-1 space-y-2">
                <Label htmlFor="start-date">Start Date</Label>
                <Input
                  id="start-date"
                  value={
                    tempRange?.from ? format(tempRange.from, "MMM dd, yyyy") : ""
                  }
                  readOnly
                  placeholder="Start date"
                />
              </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor="end-date">End Date</Label>
                <Input
                  id="end-date"
                  value={
                    tempRange?.to ? format(tempRange.to, "MMM dd, yyyy") : ""
                  }
                  readOnly
                  placeholder="End date"
                />
              </div>
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
