import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function parseTimeToMinutes(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}

export function doEventsOverlap(event1, event2) {
  const start1 = parseTimeToMinutes(event1.startTime);
  const end1 = parseTimeToMinutes(event1.endTime);
  const start2 = parseTimeToMinutes(event2.startTime);
  const end2 = parseTimeToMinutes(event2.endTime);
  return start1 < end2 && start2 < end1;
}

export function getEventTypeClasses(eventType) {
  const typeClasses = {
    business: 'bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 cursor-pointer',
    personal: 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 cursor-pointer',
    family: 'bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 cursor-pointer',
    holiday: 'bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200 cursor-pointer',
    default: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 cursor-pointer'
  };
  return typeClasses[eventType] || typeClasses.default;
}

export function truncateText(text, wordLimit) {
  if (!text) return '';
  
  const words = text.split(' ');
  if (words.length <= wordLimit) {
    return text;
  }
  
  return words.slice(0, wordLimit).join(' ') + ' ...';
}
