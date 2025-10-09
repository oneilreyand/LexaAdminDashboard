import { useState, useEffect, useCallback } from 'react';

export default function useOnline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [speed, setSpeed] = useState(0); // in Mbps

  const checkSpeed = useCallback(async () => {
    if (!isOnline) {
      setSpeed(0);
      return;
    }
    try {
      const start = Date.now();
      await fetch('https://www.google.com/favicon.ico', {
        method: 'GET',
        cache: 'no-cache'
      });
      const end = Date.now();
      const duration = (end - start) / 1000; // seconds
      const size = 1024; // assume 1KB for favicon
      const speedMbps = (size * 8) / (duration * 1000); // Mbps
      setSpeed(Math.round(speedMbps * 100) / 100);
    } catch {
      setSpeed(0);
    }
  }, [isOnline]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Poll every 2 seconds to ensure accuracy
    const interval = setInterval(() => {
      setIsOnline(navigator.onLine);
    }, 2000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    checkSpeed();
  }, [isOnline, checkSpeed]);

  console.log(speed, 'speed')

  return { isOnline, speed };
}
