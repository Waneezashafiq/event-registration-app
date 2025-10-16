import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-all">
      <h2 className="text-lg font-semibold mb-2">{event.title}</h2>
      <p className="text-gray-600">{event.description}</p>
      <p className="mt-2 text-sm text-gray-500">
        📅 Date: {event.date} | 📍 Location: {event.location}
      </p>
    </div>
  );
};

export default EventCard;
