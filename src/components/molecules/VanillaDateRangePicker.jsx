import React, { useState, useEffect, useRef } from "react";

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

function formatDate(date) {
  if (!date) return "";
  return date.toLocaleDateString();
}

export function VanillaDateRangePicker({ className, date, onDateChange }) {
  const [startDate, setStartDate] = useState(date?.from || null);
  const [endDate, setEndDate] = useState(date?.to || null);
  const [currentYear, setCurrentYear] = useState((date?.from || new Date()).getFullYear());
  const [currentMonth, setCurrentMonth] = useState((date?.from || new Date()).getMonth());
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

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

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day) => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    if (!startDate || (startDate && endDate)) {
      setStartDate(clickedDate);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (clickedDate < startDate) {
        setEndDate(startDate);
        setStartDate(clickedDate);
      } else {
        setEndDate(clickedDate);
      }
    }
  };

  const isInRange = (day) => {
    if (!startDate || !endDate) return false;
    const date = new Date(currentYear, currentMonth, day);
    return date >= startDate && date <= endDate;
  };

  const isStart = (day) => {
    if (!startDate) return false;
    const date = new Date(currentYear, currentMonth, day);
    return date.getTime() === startDate.getTime();
  };

  const isEnd = (day) => {
    if (!endDate) return false;
    const date = new Date(currentYear, currentMonth, day);
    return date.getTime() === endDate.getTime();
  };

  const handleApply = () => {
    onDateChange?.({ from: startDate, to: endDate });
    setIsOpen(false);
  };

  const formatRange = () => {
    if (!startDate) return "Pick a date range";
    if (!endDate) return formatDate(startDate);
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  return (
    <div className={`relative inline-block ${className || ""}`} ref={ref}>
      <button
        type="button"
        className="border rounded px-3 py-2 w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {formatRange()}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-lg p-4 w-80">
          <div className="flex justify-between items-center mb-2">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-gray-900 dark:text-gray-200"
              aria-label="Previous Month"
            >
              {'<'}
            </button>
            <div className="font-medium text-gray-900 dark:text-gray-200">
              {new Date(currentYear, currentMonth).toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </div>
            <button
              type="button"
              onClick={handleNextMonth}
              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-gray-900 dark:text-gray-200"
              aria-label="Next Month"
            >
              {'>'}
            </button>
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
          <div className="grid grid-cols-7 gap-1 text-center text-sm mb-4">
            {weeks.map((week, i) =>
              week.map((day, idx) =>
                day ? (
                  <button
                    key={`${i}-${idx}`}
                    type="button"
                    className={`p-2 rounded hover:bg-blue-200 dark:hover:bg-blue-800 text-gray-900 dark:text-gray-200 ${
                      isStart(day) ? "bg-blue-500 text-white dark:bg-blue-600" :
                      isEnd(day) ? "bg-blue-500 text-white dark:bg-blue-600" :
                      isInRange(day) ? "bg-blue-200 dark:bg-blue-700" : ""
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
          <div className="flex gap-2">
            <input
              type="text"
              className="border rounded px-2 py-1 flex-1"
              value={startDate ? formatDate(startDate) : ""}
              readOnly
              placeholder="Start date"
            />
            <input
              type="text"
              className="border rounded px-2 py-1 flex-1"
              value={endDate ? formatDate(endDate) : ""}
              readOnly
              placeholder="End date"
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-3 py-1 border rounded hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
