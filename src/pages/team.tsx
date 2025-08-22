import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Card from '../components/card';

interface Person {
    name: string;
    linkedin: string;
    title: string;
    club_status: string;
}

const People: React.FC = () => {
    const [people, setPeople] = useState<Person[]>([]);
    const [filteredPeople, setFilteredPeople] = useState<Person[]>([]);
    const [activeTab, setActiveTab] = useState<string>('member');

    useEffect(() => {
        // Load and parse the CSV
        Papa.parse('data/csv/people.csv', {
            download: true,
            header: true,
            complete: (result: any) => {
                setPeople(result.data);
                setFilteredPeople(result.data.filter((person: Person) => person.club_status.toLowerCase() === 'member'));
            },
        });
    }, []);

    const handleTabChange = (status: string) => {
        setActiveTab(status);
        setFilteredPeople(people.filter((person) => person.club_status.toLowerCase() === status.toLowerCase()));
    };

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="px-6 py-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
                    <div className="w-24 h-px bg-qca_red_dark-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        Meet the passionate individuals driving quantum computing research and education at Cornell.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-100 rounded-lg p-1">
                        <button
                            onClick={() => handleTabChange('member')}
                            className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                                activeTab === 'member' 
                                    ? 'bg-qca_red_dark-500 text-white shadow-sm' 
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Members
                        </button>
                        <button
                            onClick={() => handleTabChange('advisor')}
                            className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                                activeTab === 'advisor' 
                                    ? 'bg-qca_red_dark-500 text-white shadow-sm' 
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Faculty
                        </button>
                        <button
                            onClick={() => handleTabChange('alumni')}
                            className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                                activeTab === 'alumni' 
                                    ? 'bg-qca_red_dark-500 text-white shadow-sm' 
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Alumni
                        </button>
                    </div>
                </div>

                {/* People Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredPeople.map((person, index) => (
                            <Card
                                key={index}
                                image={person.linkedin}
                                title={person.name}
                                subtitle={person.title}
                                link={`https://www.linkedin.com/in/${person.linkedin}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default People;
