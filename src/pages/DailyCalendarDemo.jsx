import React from "react";
import { DailyEventCalendar } from "../components/organisms/DailyEventCalendar";

const sampleEvents = [];

export default function DailyCalendarDemo() {
  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Daily Event Calendar Demo</h1>
        <p className="text-gray-600 mb-6">
          This calendar shows events for a specific day with overlapping events displayed side-by-side.
        </p>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Sample Events:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            {sampleEvents.map((event, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: event.color }}
                ></div>
                <span>
                  <strong>{event.title}</strong> ({event.startTime} - {event.endTime})
                </span>
              </div>
            ))}
          </div>
        </div>

        <DailyEventCalendar events={sampleEvents} />
      </div>
    </div>
  );
}
