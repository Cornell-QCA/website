import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

interface EventData {
    file: string;
    desc: string;
    date?: string;
    time?: string;
    location?: string;
    fullDescription?: string;
    type: 'upcoming' | 'previous';
}

const Events: React.FC = () => {
    const [events, setEvents] = useState<EventData[]>([]);
    const [filteredEvents, setFilteredEvents] = useState<EventData[]>([]);
    const [activeTab, setActiveTab] = useState<'upcoming' | 'previous'>('upcoming');

    useEffect(() => {
        // Load and parse the CSV
        Papa.parse('data/csv/events.csv', {
            download: true,
            header: true,
            complete: (result: any) => {
                // Process events and categorize them as upcoming or previous
                const processedEvents: EventData[] = result.data.map((event: any) => ({
                    ...event,
                    type: determineEventType(event.desc),
                    date: getEventDate(event.desc),
                    time: getEventTime(event.desc),
                    location: getEventLocation(event.desc),
                    fullDescription: getEventDescription(event.desc)
                }));
                
                setEvents(processedEvents);
                // Start with upcoming events tab if there are any, otherwise show previous
                const upcomingEvents = processedEvents.filter(e => e.type === 'upcoming');
                if (upcomingEvents.length > 0) {
                    setFilteredEvents(upcomingEvents);
                    setActiveTab('upcoming');
                } else {
                    setFilteredEvents(processedEvents.filter(e => e.type === 'previous'));
                    setActiveTab('previous');
                }
            },
        });
    }, []);

    const handleTabChange = (type: 'upcoming' | 'previous') => {
        setActiveTab(type);
        setFilteredEvents(events.filter((event) => event.type === type));
    };

    // Helper function to determine if event is upcoming or previous
    const determineEventType = (desc: string): 'upcoming' | 'previous' => {
        if (desc.includes("'25")) return 'upcoming';
        return 'previous';
    };

    // Helper functions to extract event details (in real app, this data would be in CSV)
    const getEventDate = (desc: string): string => {
        if (desc.includes("Fall Fest '23")) return 'October 15, 2023 - October 16, 2023';
        if (desc.includes("Fall Fest '24")) return 'October 14, 2024 - October 15, 2024';
        if (desc.includes("Fall Fest '25")) return 'October 13, 2025 - October 14, 2025';
        if (desc.includes('Mehta Lab')) return 'March 20, 2024';
        if (desc.includes('Summer NME')) return 'July 10, 2024';
        return 'TBA';
    };

    const getEventTime = (desc: string): string => {
        if (desc.includes('Fall Fest')) return 'All day';
        if (desc.includes('Mehta Lab')) return '2:00 PM';
        if (desc.includes('Summer NME')) return '10:00 AM';
        return 'TBA';
    };

    const getEventLocation = (desc: string): string => {
        if (desc.includes('Fall Fest')) return 'Virtual & Cornell Campus';
        if (desc.includes('Mehta Lab')) return 'Mehta Laboratory, Clark Hall';
        if (desc.includes('Summer NME')) return 'Phillips Hall';
        return 'TBA';
    };

    const getEventDescription = (desc: string): string => {
        if (desc.includes("Fall Fest '23")) {
            return 'We hosted Qiskit Fall Fest, an event series run by IBM Quantum, featuring workshops and guest speakers focused on quantum computing';
        }
        if (desc.includes("Fall Fest '24")) {
            return 'We hosted Qiskit Fall Fest, an event series run by IBM Quantum, featuring workshops and guest speakers focused on quantum computing';
        }
        if (desc.includes("Fall Fest '25")) {
            return 'We\'re hosting Qiskit Fall Fest, an event series run by IBM Quantum, featuring workshops and guest speakers focused on quantum computing';
        }
        if (desc.includes('Mehta Lab')) {
            return 'Members toured the Mehta Laboratory to see cutting-edge quantum research facilities and learn about ongoing quantum experiments at Cornell';
        }
        if (desc.includes('Summer NME')) {
            return 'Our summer workshop series focused on quantum computing fundamentals, covering topics from basic quantum mechanics to advanced quantum algorithms';
        }
        return 'More details coming soon.';
    };

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="px-6 py-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Events</h1>
                    <div className="w-24 h-px bg-qca_red_dark-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        Workshops, talks, and lab tours we host for the Cornell community
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-100 rounded-lg p-1">
                        <button
                            onClick={() => handleTabChange('upcoming')}
                            className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                                activeTab === 'upcoming' 
                                    ? 'bg-qca_red_dark-500 text-white shadow-sm' 
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Upcoming Events
                        </button>
                        <button
                            onClick={() => handleTabChange('previous')}
                            className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                                activeTab === 'previous' 
                                    ? 'bg-qca_red_dark-500 text-white shadow-sm' 
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Previous Events
                        </button>
                    </div>
                </div>

                {/* Events List */}
                <div className="max-w-4xl mx-auto">
                    {filteredEvents.length > 0 ? (
                        <div className="space-y-8">
                            {filteredEvents.map((event, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200">
                                    <div className="md:flex">
                                        {/* Event Image */}
                                        <div className="md:w-1/3">
                                            <div className="h-48 md:h-full">
                                                <img
                                                    src={`events/${event.file}.png`}
                                                    alt={event.desc}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Event Details */}
                                        <div className="md:w-2/3 p-6">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{event.desc}</h3>
                                            
                                            {/* Event Info */}
                                            <div className="space-y-2 mb-4 text-sm">
                                                <div className="flex items-center text-gray-600">
                                                    <span className="font-medium w-16">Date:</span>
                                                    <span>{event.date}</span>
                                                </div>
                                                <div className="flex items-center text-gray-600">
                                                    <span className="font-medium w-16">Time:</span>
                                                    <span>{event.time}</span>
                                                </div>
                                                <div className="flex items-center text-gray-600">
                                                    <span className="font-medium w-16">Location:</span>
                                                    <span>{event.location}</span>
                                                </div>
                                            </div>
                                            
                                            {/* Event Description */}
                                            <p className="text-gray-700 leading-relaxed">
                                                {event.fullDescription}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                {activeTab === 'upcoming' ? 'No Upcoming Events' : 'No Previous Events'}
                            </h3>
                            <p className="text-gray-600">
                                {activeTab === 'upcoming' 
                                    ? 'Stay tuned for exciting events coming soon!' 
                                    : 'Check back later for event history.'}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Events;
