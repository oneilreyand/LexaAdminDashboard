import React from "react";
import Button from "../atoms/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

export function MiniCalendar({ monthDate, selectedDate, onDateChange, onMonthChange }) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const weeks = [];
  let dayCounter = 1 - firstDay;
  while (dayCounter <= daysInMonth) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      if (dayCounter > 0 && dayCounter <= daysInMonth) {
        week.push(dayCounter);
      } else {
        week.push(null);
      }
      dayCounter++;
    }
    weeks.push(week);
  }

  const handleDateClick = (day) => {
    const newDate = new Date(year, month, day);
    onDateChange(newDate);
  };

  const isSelected = (day) => {
    return selectedDate &&
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === day;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button
          styleType="outline"
          variant="secondary"
          size="small"
          className="border-0"
          onClick={() => onMonthChange(new Date(year, month - 1, 1))}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="font-medium text-gray-900 dark:text-gray-200">
          {new Date(year, month).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </div>
        <Button
          styleType="outline"
          variant="secondary"
          size="small"
          className="border-0"
          onClick={() => onMonthChange(new Date(year, month + 1, 1))}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {weeks.map((week, i) =>
          week.map((day, idx) =>
            day ? (
              <button
                key={`${i}-${idx}`}
                type="button"
                className={`w-full h-8 flex items-center justify-center rounded hover:bg-blue-200 dark:hover:bg-blue-800 font-normal text-gray-900 dark:text-gray-200 ${
                  isSelected(day) ? "bg-primary text-white dark:bg-blue-600" : ""
                }`}
                onClick={() => handleDateClick(day)}
              >
                {day}
              </button>
            ) : (
              <div key={`${i}-${idx}`} />
            )
          )
        )}
      </div>
    </div>
  );
}
