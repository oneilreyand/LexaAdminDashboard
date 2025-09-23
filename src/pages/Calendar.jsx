import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataCalendar } from "../store/action/calendar";
import { CalendarSidebar } from "../components/organisms/CalendarSidebar";
import { MainCalendar } from "../components/organisms/MainCalendar";
import { OffCanvas } from "../components/atoms/OffCanvas";
import AddEventForm from "../components/molecules/AddEventForm";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, isWithinInterval, isSameDay, eachDayOfInterval, parseISO } from "date-fns";

const ViewMode = ["Month", "Week", "Day", "List"];

function expandEvents(events) {
  // Expand multi-day events into individual events for each day in the range
  const expanded = [];
  events.forEach(event => {
    const start = parseISO(event.startDate);
    const end = parseISO(event.endDate);
    const days = eachDayOfInterval({ start, end });
    days.forEach(day => {
      expanded.push({
        ...event,
        date: day,
      });
    });
  });
  return expanded;
}

export default function Calendar() {
  const dispatch = useDispatch();
  const { events } = useSelector(state => state.calendar);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState("Month");
  const [eventFilters, setEventFilters] = useState({
    viewAll: true,
    personal: false,
    business: false,
    family: false,
    holiday: false,
    etc: false,
  });

  const [offCanvasOpen, setOffCanvasOpen] = useState(false);

  useEffect(() => {
    dispatch(getDataCalendar());
  }, [dispatch]);

  // Expand events to cover full date ranges
  const expandedEvents = expandEvents(events);

  // Filter events based on current filters and date range
  const getFilteredEvents = () => {
    let filtered = expandedEvents;

    // Keep all events, including duplicates if any

    // Filter by event type if not viewAll
    if (!eventFilters.viewAll) {
      const activeFilters = Object.keys(eventFilters).filter(key => key !== 'viewAll' && eventFilters[key]);
      if (activeFilters.length > 0) {
        filtered = filtered.filter(event => activeFilters.includes(event.type));
      }
    }

    // Filter by date range based on viewMode
    if (viewMode === "Month") {
      const monthStart = startOfMonth(currentDate);
      const monthEnd = endOfMonth(currentDate);
      filtered = filtered.filter(event => {
        return isWithinInterval(event.date, { start: monthStart, end: monthEnd });
      });
    } else if (viewMode === "Week") {
      const weekStart = startOfWeek(currentDate);
      const weekEnd = endOfWeek(currentDate);
      filtered = filtered.filter(event => {
        return isWithinInterval(event.date, { start: weekStart, end: weekEnd });
      });
    } else if (viewMode === "Day") {
      filtered = filtered.filter(event => isSameDay(event.date, currentDate));
    }

    return filtered;
  };

  const filteredEvents = getFilteredEvents();

  const handleAddEventClick = () => {
    setOffCanvasOpen(true);
  };

  const handleCloseOffCanvas = () => {
    setOffCanvasOpen(false);
  };

  const handleAddEvent = (newEvent) => {
    // Implement event addition logic here, e.g., dispatch an action or update local state
    console.log("New event added:", newEvent);
    setOffCanvasOpen(false);
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-6 p-6 bg-white dark:bg-gray-900 overflow-y-auto">
      <CalendarSidebar
        currentDate={currentDate}
        onDateChange={setCurrentDate}
        eventFilters={eventFilters}
        onEventFiltersChange={setEventFilters}
        onAddEventClick={handleAddEventClick}
      />

      <MainCalendar
        currentDate={currentDate}
        onDateChange={setCurrentDate}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        events={filteredEvents}
      />

      <OffCanvas isOpen={offCanvasOpen} onClose={handleCloseOffCanvas} position="right" size="normal">
        <AddEventForm onClose={handleCloseOffCanvas} onAddEvent={handleAddEvent} defaultDate={currentDate} />
      </OffCanvas>
    </div>
  );
}
