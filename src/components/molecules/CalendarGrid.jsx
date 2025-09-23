import React, { useState } from "react";
import { format, isSameMonth, isSameDay } from "date-fns";
import { getEventTypeClasses } from "../../utils/utils";
import { Popover, PopoverTrigger, PopoverContent } from "../atoms/Popover";

export function CalendarGrid({
  days,
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  currentDate,
  onDayClick,
  showWeekHeader = true,
  cellClassName = "min-h-32 p-2 border-r border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
  dayClassName = "text-sm font-medium",
  todayClassName = "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
  otherMonthClassName = "text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800",
  events = [],
  onEventClick,
}) {
  const [popover, setPopover] = useState({ day: null, open: false });

  // Get events for a specific day
  const getEventsForDay = (day) => {
    return events.filter(event => isSameDay(event.date, day));
  };

  return (
    <div className="grid grid-cols-7 h-full">
      {/* Header */}
      {showWeekHeader && weekDays.map((day) => (
        <div key={day} className="p-3 text-center text-sm font-medium text-muted-foreground border-b">
          {day}
        </div>
      ))}

      {/* Calendar Grid */}
      {days.map((day, index) => {
        const isToday = isSameDay(day, new Date());
        const isCurrentMonth = isSameMonth(day, currentDate);
        const isLastInRow = index % 7 === 6;
        const dayEvents = getEventsForDay(day);

        return (
          <div
            key={day.toISOString()}
            className={`${cellClassName} ${
              !isCurrentMonth ? otherMonthClassName : ""
            } ${isToday ? todayClassName : ""} ${
              isLastInRow ? "border-r-0" : ""
            }`}
            onClick={() => onDayClick(day)}
          >
            <div className={`${dayClassName} ${isToday ? "text-blue-600" : ""}`}>
              {format(day, 'd')}
            </div>
            {/* Events for this day */}
            <div className="mt-1 space-y-1">
              {dayEvents.slice(0, 3).map(event => (
                <div key={event.id} className={`text-xs p-1 rounded truncate cursor-pointer event-item ${getEventTypeClasses(event.type)}`} onClick={(e) => {
                  e.stopPropagation();
                  if (typeof onEventClick === 'function') {
                    onEventClick(event);
                  }
                }}>
                  {event.title}
                </div>
              ))}
              {dayEvents.length > 3 && (
                <div onClick={(e) => e.stopPropagation()}>
                  <Popover open={popover.open && popover.day === day.toISOString()} onOpenChange={(open) => setPopover({ day: open ? day.toISOString() : null, open })}>
                    <PopoverTrigger>
                      <button className="text-xs text-blue-500 hover:text-blue-700 cursor-pointer more-button">
                        +{dayEvents.length - 3} more
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-max max-h-[calc(3.5rem*6)] cursor-pointer">
                      <div className="flex flex-col space-y-2 max-h-[calc(3.5rem*6)] overflow-y-auto">
                        {dayEvents.slice(3).map(event => (
                          <div key={event.id} className={`p-2 rounded cursor-pointer hover:opacity-80 event-item ${getEventTypeClasses(event.type)}`} onClick={() => {
                            if (typeof onEventClick === 'function') {
                              onEventClick(event);
                            }
                            setPopover({ day: null, open: false });
                          }}>
                            <div className="text-xs">{event.title}</div>
                            <div className="text-xs opacity-75">{event.startTime} - {event.endTime}</div>
                          </div>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
