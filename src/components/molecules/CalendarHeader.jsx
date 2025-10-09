import React from "react";
import Button from "../atoms/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, startOfWeek, endOfWeek } from "date-fns";

const ViewMode = ["Month", "Week", "Day", "List"];

export function CalendarHeader({
  currentDate = new Date(),
  onNavigate = () => {},
  viewMode = 'Month',
  onViewModeChange = () => {},
}) {
  const getDateDisplay = () => {
    if (!currentDate || isNaN(currentDate.getTime())) {
      return "No date available";
    }
    if (viewMode === 'Month') {
      return format(currentDate, "MMMM yyyy");
    } else if (viewMode === 'Week') {
      const weekStart = startOfWeek(currentDate);
      const weekEnd = endOfWeek(currentDate);
      return `${format(weekStart, "MMM d")} - ${format(weekEnd, "MMM d, yyyy")}`;
    } else if (viewMode === 'Day') {
      return format(currentDate, "EEEE, MMMM d, yyyy");
    } else {
      return format(currentDate, "MMMM yyyy");
    }
  };

  return (
    <div className="flex flex-row items-center justify-between space-y-0 pb-4 p-6">
      <div className="flex items-center space-x-4">
        <Button
          styleType="outline"
          variant="secondary"
          size="small"
          className="p-2"
          onClick={() => onNavigate('prev')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <h2 className="text-2xl font-semibold">
          {getDateDisplay()}
        </h2>

        <Button
          styleType="outline"
          variant="secondary"
          size="small"
          className="p-2"
          onClick={() => onNavigate('next')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex space-x-1">
        {ViewMode.map((mode) => (
          <Button
            key={mode}
            styleType={viewMode === mode ? "basic" : "outline"}
            variant={viewMode === mode ? "primary" : "secondary"}
            size="small"
            onClick={() => onViewModeChange(mode)}
          >
            {mode}
          </Button>
        ))}
   
      </div>
    </div>
  );
}
