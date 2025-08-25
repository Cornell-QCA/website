import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { marked } from 'marked';

interface EventData {
    name: string;
    timeline: string;
    location: string;
    file: string;
    image: string;
    type: 'upcoming' | 'previous';
}

const Events: React.FC = () => {
    const [events, setEvents] = useState<EventData[]>([]);
    const [filteredEvents, setFilteredEvents] = useState<EventData[]>([]);
    const [eventDescriptions, setEventDescriptions] = useState<React.ReactNode[]>([]);
    const [activeTab, setActiveTab] = useState<'upcoming' | 'previous'>('upcoming');

    useEffect(() => {
        // Load and parse the CSV
        Papa.parse('data/csv/events.csv', {
            download: true,
            header: true,
            complete: async (result: any) => {
                const eventData = result.data;
                setEvents(eventData);

                // Fetch and parse markdown files
                const descriptions = await Promise.all(
                    eventData.map(async (event: EventData) => {
                        try {
                            const response = await fetch(`data/events/${event.file}.md`);
                            const markdown = await response.text();
                            return <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />;
                        } catch (error) {
                            console.error(`Failed to load description for ${event.file}:`, error);
                            return <div>More details coming soon.</div>;
                        }
                    })
                );
                setEventDescriptions(descriptions);
                
                // Start with upcoming events tab if there are any, otherwise show previous
                const upcomingEvents = eventData.filter((e: EventData) => e.type === 'upcoming');
                if (upcomingEvents.length > 0) {
                    setFilteredEvents(upcomingEvents);
                    setActiveTab('upcoming');
                } else {
                    setFilteredEvents(eventData.filter((e: EventData) => e.type === 'previous'));
                    setActiveTab('previous');
                }
            },
        });
    }, []);

    const handleTabChange = (type: 'upcoming' | 'previous') => {
        setActiveTab(type);
        const filtered = events.filter((event) => event.type === type);
        // Reverse the order for previous events to show most recent first
        if (type === 'previous') {
            setFilteredEvents(filtered.reverse());
        } else {
            setFilteredEvents(filtered);
        }
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
                                                    src={`events/${event.image}.png`}
                                                    alt={event.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Event Details */}
                                        <div className="md:w-2/3 p-6">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{event.name}</h3>
                                            
                                            {/* Event Info */}
                                            <div className="space-y-2 mb-4 text-sm">
                                                <div className="flex items-center text-gray-600">
                                                    <span className="font-medium w-20">Timeline:</span>
                                                    <span>{event.timeline}</span>
                                                </div>
                                                <div className="flex items-center text-gray-600">
                                                    <span className="font-medium w-20">Location:</span>
                                                    <span>{event.location}</span>
                                                </div>
                                            </div>
                                            
                                            {/* Event Description */}
                                            <div className="text-gray-700 leading-relaxed prose prose-sm max-w-none">
                                                {eventDescriptions[events.findIndex(e => e.file === event.file)]}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
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
