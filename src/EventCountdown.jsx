import React, { useEffect, useState } from "react";

function EventCountdown({ targetDate = "2025-03-15T09:00:00" }) {

  // Function to calculate remaining time
  const getTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = Math.max(0, target - now);

    const secTotal = Math.floor(diff / 1000);
    const days = Math.floor(secTotal / 86400);
    const hours = Math.floor((secTotal % 86400) / 3600);
    const minutes = Math.floor((secTotal % 3600) / 60);
    const seconds = secTotal % 60;

    return { days, hours, minutes, seconds };
  };

  // State for countdown
  const [time, setTime] = useState(getTimeLeft());

  // Update every second
  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  // Box Component
  const Box = ({ value, label }) => (
    <div className="w-28 h-28 bg-white rounded-xl shadow flex flex-col items-center justify-center">
      <div className="text-teal-700 text-3xl font-extrabold">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-slate-400 text-xs tracking-wider mt-1 uppercase">
        {label}
      </div>
    </div>
  );

  return (
    <>
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">

          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-slate-800 mb-8">
            Event Starts In
          </h2>

          {/* Countdown Boxes */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <Box value={time.days} label="Days" />
              <Box value={time.hours} label="Hours" />
              <Box value={time.minutes} label="Minutes" />
              <Box value={time.seconds} label="Seconds" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default EventCountdown;
