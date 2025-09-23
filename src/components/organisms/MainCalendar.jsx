import React, { useState } from "react";
import Card from "../atoms/Card";
import { CalendarHeader } from "../molecules/CalendarHeader";
import { CalendarGrid } from "../molecules/CalendarGrid";
import { Popover, PopoverTrigger, PopoverContent } from "../atoms/Popover";
import { addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, addWeeks, subWeeks, addDays, subDays, format, isSameDay } from "date-fns";
import { parseTimeToMinutes, doEventsOverlap, getEventTypeClasses } from "../../utils/utils";
import { OffCanvas } from "../atoms/OffCanvas";
import AddEventForm from "../molecules/AddEventForm";

export function MainCalendar({
  currentDate,
  onDateChange,
  viewMode,
  onViewModeChange,
  events = [],
}) {
  const [popover, setPopover] = useState({ day: null, hour: null, open: false });
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  // const [selectedDate, setSelectedDate] = useState(null);

  const handleDayClick = (day) => {
    if (viewMode === 'Month') {
      setSelectedEvent(null); // No event selected, for adding new event
      setOffCanvasOpen(true);
    } else {
      onDateChange(day);
      if (viewMode === 'Month') {
        onViewModeChange('Day');
      }
    }
  };
  let days = [];

  if (viewMode === 'Month') {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const calendarStart = startOfWeek(monthStart);
    const calendarEnd = endOfWeek(monthEnd);
    days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });
  } else if (viewMode === 'Week') {
    const weekStart = startOfWeek(currentDate);
    const weekEnd = endOfWeek(currentDate);
    days = eachDayOfInterval({ start: weekStart, end: weekEnd });
  } else if (viewMode === 'Day') {
    days = [currentDate];
  }

  const navigate = (direction) => {
    let newDate;
    if (viewMode === 'Month') {
      newDate = direction === 'prev'
        ? subMonths(currentDate, 1)
        : addMonths(currentDate, 1);
    } else if (viewMode === 'Week') {
      newDate = direction === 'prev'
        ? subWeeks(currentDate, 1)
        : addWeeks(currentDate, 1);
    } else if (viewMode === 'Day') {
      newDate = direction === 'prev'
        ? subDays(currentDate, 1)
        : addDays(currentDate, 1);
    } else {
      // Default fallback to month navigation
      newDate = direction === 'prev'
        ? subMonths(currentDate, 1)
        : addMonths(currentDate, 1);
    }
    onDateChange(newDate);
  };

  // Calculate positions for overlapping events
  const calculateEventPositions = (events) => {
    if (events.length === 0) return [];
    const sorted = [...events].sort((a, b) => parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime));
    const maxOverlap = Math.max(...sorted.map(e => {
      let count = 1;
      for (let j = 0; j < sorted.length; j++) {
        if (doEventsOverlap(e, sorted[j])) count++;
      }
      return count;
    }));
    return sorted.map((event, index) => ({
      ...event,
      left: `${(index / maxOverlap) * 100}%`,
      width: `${100 / maxOverlap}%`,
    }));
  };

  return (
    <div className="flex-1">
      <Card>
        <CalendarHeader
          currentDate={currentDate}
          onNavigate={navigate}
          viewMode={viewMode}
          onViewModeChange={onViewModeChange}
        />

        <div className="p-0">
          {viewMode === 'Month' && (
            <CalendarGrid
              days={days}
              currentDate={currentDate}
              onDayClick={handleDayClick}
              showWeekHeader={true}
              events={events.filter(event => event.date.getMonth() === currentDate.getMonth() && event.date.getFullYear() === currentDate.getFullYear())}
              onEventClick={(event) => {
                setSelectedEvent(event);
                setOffCanvasOpen(true);
              }}
            />
          )}

          {viewMode === 'Week' && (
          <div className="p-6 max-h-[600px] overflow-y-auto">
            <table className="w-full border-collapse" style={{ tableLayout: 'fixed' }}>
              <thead className="sticky top-[-24px] bg-white dark:bg-gray-800 z-10 shadow">
                <tr>
                  <th className="text-sm font-medium text-muted-foreground w-20"></th>
                  {days.map((day) => (
                    <th key={day.toISOString()} className="text-center text-sm font-medium text-muted-foreground p-2 border">
                      {format(day, "EEE d")}
                    </th>
                  ))}
                </tr>
              </thead>

                {/* Full-day events row */}
                {/* Removed full-day events row from Week view as per user request */}

                <tbody>
                  {Array.from({ length: 24 }, (_, i) => {
                    const hour = i;
                    const timeLabel = hour === 0 ? "12:00 AM" : hour < 12 ? `${hour}:00 AM` : hour === 12 ? "12:00 PM" : `${hour - 12}:00 PM`;

                    return (
                      <tr key={hour} className="border" style={{ height: "96px" }}>
                        <td className="text-sm font-medium p-2 border w-20 min-h-[96px]">{timeLabel}</td>
                        {days.map((day) => {
                    const hourEvents = events.filter(event => {
                      if (!isSameDay(event.date, day)) return false;
                      // Exclude full-day events from hourly slots
                      if (event.startTime === "00:00" && event.endTime === "23:59") return false;
                      const eventStart = parseTimeToMinutes(event.startTime);
                      const hourStart = hour * 60;
                      const hourEnd = (hour + 1) * 60;
                      return eventStart >= hourStart && eventStart < hourEnd;
                    });

                          return (
                            <td key={`${day.toISOString()}-${hour}`} className="relative p-2 border hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors min-h-24">
                              {hourEvents.length === 0 ? (
                                <div className="text-gray-500 text-xs"></div>
                              ) : hourEvents.length === 1 ? (
                                calculateEventPositions(hourEvents).map(event => (
                                  <div key={event.id} className={`absolute p-1 rounded text-xs cursor-pointer ${
                                    event.type === 'business' ? 'bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200' :
                                    event.type === 'personal' ? 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200' :
                                    event.type === 'family' ? 'bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200' :
                                    event.type === 'holiday' ? 'bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200' :
                                    'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                                  }`} style={{ left: event.left, width: event.width, top: 0 }}
                                  onClick={() => {
                                    setSelectedEvent(event);
                                    setOffCanvasOpen(true);
                                  }}>
                                    <div className="font-medium">{event.title}</div>
                                    <div className="text-xs opacity-75">{event.startTime}</div>
                                  </div>
                                ))
                              ) : (
                                <Popover open={popover.open} onOpenChange={(open) => setPopover({ ...popover, open })}>
                                  <PopoverTrigger>
                                    <button
                                      className="text-xs text-blue-500 hover:text-blue-700"
                                      onClick={() => setPopover({ day: day.toISOString(), hour, open: true })}
                                    >
                                      {hourEvents.length} events
                                    </button>
                                  </PopoverTrigger>
                                  <PopoverContent className="max-w-xs">
                                    <div className="flex flex-col space-y-2 max-h-60 overflow-y-auto">
                                      {hourEvents.map(event => (
                                        <div key={event.id} className={`p-2 rounded cursor-pointer hover:opacity-80 ${getEventTypeClasses(event.type)}`}>
                                          <div className="text-xs">{event.title}</div>
                                          <div className="text-xs opacity-75">{event.startTime} - {event.endTime}</div>
                                        </div>
                                      ))}
                                    </div>
                                  </PopoverContent>
                                </Popover>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {viewMode === 'Day' && (
            <div className="p-6 max-h-[600px] overflow-y-auto">
              {/* <h3 className="text-xl font-semibold mb-4 text-center">
                {format(currentDate, "EEEE, MMMM d, yyyy")}
              </h3> */}

              {/* Full-day events section */}
              <div className="mb-4">
                {events.filter(event => {
                  return isSameDay(event.date, currentDate) && event.startTime === "00:00" && event.endTime === "23:59";
                }).map(event => (
                  <div key={event.id} className={`p-2 rounded mb-1 text-sm font-medium text-white cursor-pointer ${
                    event.type === 'business' ? 'bg-blue-600' :
                    event.type === 'personal' ? 'bg-green-600' :
                    event.type === 'family' ? 'bg-purple-600' :
                    event.type === 'holiday' ? 'bg-red-600' :
                    'bg-gray-600'
                  }`} style={{ width: "100%" }}
                  onClick={() => {
                    setSelectedEvent(event);
                    setOffCanvasOpen(true);
                  }}>
                    {event.title}
                  </div>
                ))}
              </div>

              <table className="w-full border-collapse" style={{ tableLayout: 'fixed' }}>
                <tbody>
                  {Array.from({ length: 24 }, (_, i) => {
                    const hour = i;
                    const timeLabel = hour === 0 ? "12:00 AM" : hour < 12 ? `${hour}:00 AM` : hour === 12 ? "12:00 PM" : `${hour - 12}:00 PM`;
                    const hourEvents = events.filter(event => {
                      if (!isSameDay(event.date, currentDate)) return false;
                      // Exclude full-day events from hourly slots
                      if (event.startTime === "00:00" && event.endTime === "23:59") return false;
                      const eventStart = parseTimeToMinutes(event.startTime);
                      const hourStart = hour * 60;
                      const hourEnd = (hour + 1) * 60;
                      return eventStart >= hourStart && eventStart < hourEnd;
                    });

                    return (
                      <tr key={hour} className="border">
                        <td className="text-sm font-medium p-3 border w-20" style={{ height: "96px", width: "90px" }}>{timeLabel}</td>
                        <td className="relative p-3 border hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors min-h-24 w-full">
                          {hourEvents.length > 0 ? (
                            calculateEventPositions(hourEvents).map(event => (
                              <div key={event.id} className={`absolute p-1 rounded text-xs cursor-pointer ${
                                event.type === 'business' ? 'bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200' :
                                event.type === 'personal' ? 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200' :
                                event.type === 'family' ? 'bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200' :
                                event.type === 'holiday' ? 'bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200' :
                                'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                              }`} style={{ left: event.left, width: event.width, top: 0 }}
                              onClick={() => {
                                setSelectedEvent(event);
                                setOffCanvasOpen(true);
                              }}>
                                <div className="font-medium">{event.title}</div>
                                <div className="text-xs opacity-75">{event.startTime} - {event.endTime}</div>
                              </div>
                            ))
                          ) : (
                            <div className="text-gray-500 text-sm"></div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {viewMode === 'List' && (
            <div className="p-6 text-center text-gray-500">
              List view coming soon...
            </div>
          )}
        </div>
      </Card>

      <OffCanvas isOpen={offCanvasOpen} onClose={() => setOffCanvasOpen(false)} size="large" position="right">
        {selectedEvent ? (
          <AddEventForm
            defaultDate={selectedEvent.date}
            onClose={() => setOffCanvasOpen(false)}
            onAddEvent={(updatedEvent) => {
              // Here you can handle event update logic, e.g., dispatch an action or update state
              console.log('Updated event:', updatedEvent);
              setOffCanvasOpen(false);
            }}
            {...selectedEvent}
          />
        ) : (
          <div className="p-6">No event selected</div>
        )}
      </OffCanvas>
    </div>
  );
}
