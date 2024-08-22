import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Card from './card';

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
    Papa.parse('/src/data/people.csv', {
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
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-4">People</h1>
      <p className="text-center text-gray-600 mb-8">
      </p>

      <div className="flex justify-center mb-8">
        <button
          onClick={() => handleTabChange('member')}
          className={`px-4 py-2 mx-2 font-semibold ${activeTab === 'member' ? 'text-qca_red_dark-400' : ' border-white'}`}
        >
          Members
        </button>
        <button
          onClick={() => handleTabChange('advisor')}
          className={`px-4 py-2 mx-2 font-semibold ${activeTab === 'advisor' ? 'text-qca_red_dark-400' : ''}`}
        >
          Faculty
        </button>
        <button
          onClick={() => handleTabChange('alumni')}
          className={`px-4 py-2 mx-2 font-semibold ${activeTab === 'alumni' ? 'text-qca_red_dark-400' : ''}`}
        >
          Alumni
        </button>
      </div>

      {/* center the cards and use a grid layout*/}
      <div className=' place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filteredPeople.map((person, index) => (
          <Card
            key={index}
            image={person.linkedin}
            title={person.name}
            subtitle={person.title}
            link={person.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default People;