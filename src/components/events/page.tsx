import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface EventData {
  file: string;
  desc: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    // Load and parse the CSV
    Papa.parse('/data/events.csv', {
      download: true,
      header: true,
      complete: (result: any) => {
        setEvents(result.data);
      },
    });
  }, []);

  return (
    <div className="mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Previous Events</h1>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={5000}
        className="w-full max-w-screen-2xl object-cover object-center"
      >
        {events.map((event, index) => (
          <div key={index} className="relative">
            <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white text-center z-20">
              {event.desc}
            </div>
            <img
              src={`/events/${event.file}.png`}
              alt={`Event ${index + 1}`}
              className="w-full h-64 md:h-96 lg:h-128 object-cover object-center"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Events;