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
    Papa.parse('data/csv/events.csv', {
      download: true,
      header: true,
      complete: (result: any) => {
        setEvents(result.data);
      },
    });
  }, []);

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Previous Events</h1>
      <Carousel
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows
        autoPlay
        interval={5000}
        className="max-w-screen-2xl object-cover object-center"
      >
        {events.map((event, index) => (
          <>
            <div key={index} className="relative">
              <img
                src={`events/${event.file}.png`}
                alt={`Event ${index + 1}`}
                className="h-64 md:h-96 lg:h-128 object-cover object-center"
              />
            </div>
            <div className="left-0 right-0 bg-gray-50 mb-3 text-center z-20">
              <p className='p-2'>
                {event.desc}
              </p>
            </div>
          </>
        ))}
      </Carousel>
    </div>
  );
}

export default Events;