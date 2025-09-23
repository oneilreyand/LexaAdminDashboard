import React from "react";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import Checkbox from "../atoms/Checkbox";
import { MiniCalendar } from "../molecules/MiniCalendar";

export function CalendarSidebar({
  currentDate,
  onDateChange,
  eventFilters,
  onEventFiltersChange,
  onAddEventClick,
}) {
  const [miniCalendarDate, setMiniCalendarDate] = React.useState(currentDate);

  const handleFilterChange = (filterKey, checked) => {
    onEventFiltersChange({
      ...eventFilters,
      [filterKey]: checked,
    });
  };

  const getFilterColorClass = (key) => {
    switch (key) {
      case 'business':
        return 'text-blue-600 dark:text-blue-400';
      case 'personal':
        return 'text-green-600 dark:text-green-400';
      case 'family':
        return 'text-purple-600 dark:text-purple-400';
      case 'holiday':
        return 'text-red-600 dark:text-red-400';
      case 'etc':
        return 'text-gray-600 dark:text-gray-400';
      default:
        return '';
    }
  };

  return (
    <div className="w-82 space-y-6">
      {/* Add Event Button */}
      <Button
        className="w-full justify-center flex items-center space-x-2"
        onClick={onAddEventClick}
      >
        <span>Add Event</span>
      </Button>

      {/* Mini Calendar */}
      <Card>
        <div>
          <MiniCalendar
            monthDate={miniCalendarDate}
            selectedDate={currentDate}
            onDateChange={onDateChange}
            onMonthChange={setMiniCalendarDate}
          />
        </div>
      </Card>

      {/* Event Filters */}
      <Card>
        <div className="p-4">
          <h3 className="font-medium mb-4">Event Filters</h3>
          <div className="space-y-3">
            {Object.entries(eventFilters).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-2">
                <Checkbox
                  id={key}
                  checked={value}
                  onChange={(e) => handleFilterChange(key, e.target.checked)}
                />
                <label htmlFor={key} className={`text-sm font-medium ${getFilterColorClass(key)}`}>
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
