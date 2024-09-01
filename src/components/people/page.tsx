import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Card from './card';

interface Person {
  name: string;
  linkedin: string;
  title: string;
  club_status: string;
  subteam: string;
}

const People: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [filteredPeople, setFilteredPeople] = useState<Person[]>([]);
  const [activeStatus, setActiveStatus] = useState<string>('member');
  const [activeSubteam, setActiveSubteam] = useState<string>('');

  useEffect(() => {
    // Load and parse the CSV
    Papa.parse('data/csv/people.csv', {
      download: true,
      header: true,
      complete: (result: any) => {
        setPeople(result.data);
        setFilteredPeople(
          result.data.filter(
            (person: Person) => person.club_status.toLowerCase() === 'member'
          )
        );
      },
    });
  }, []);

  const handleStatusChange = (status: string) => {
    setActiveStatus(status);
    applyFilters(status, activeSubteam);
  };

  const handleSubteamChange = (subteam: string) => {
    if (activeSubteam === subteam) {
      setActiveSubteam(''); // Deselect the current subteam filter
      applyFilters(activeStatus, '');
    } else {
      setActiveSubteam(subteam);
      applyFilters(activeStatus, subteam);
    }
  };

  const applyFilters = (status: string, subteam: string) => {
    setFilteredPeople(
      people.filter(
        (person) =>
          (status === '' ||
            person.club_status.toLowerCase() === status.toLowerCase()) &&
          (subteam === '' ||
            person.subteam.toLowerCase() === subteam.toLowerCase())
      )
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-4">People</h1>
      <p className="text-center text-gray-600 mb-8"></p>

      {/* First Row of Filters: Member, Faculty, Alumni */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => handleStatusChange('member')}
          className={`px-4 py-2 mx-2 font-semibold ${
            activeStatus === 'member'
              ? 'text-qca_red_dark-400'
              : 'border-white'
          }`}
        >
          Members
        </button>
        <button
          onClick={() => handleStatusChange('advisor')}
          className={`px-4 py-2 mx-2 font-semibold ${
            activeStatus === 'advisor'
              ? 'text-qca_red_dark-400'
              : 'border-white'
          }`}
        >
          Faculty
        </button>
        <button
          onClick={() => handleStatusChange('alumni')}
          className={`px-4 py-2 mx-2 font-semibold ${
            activeStatus === 'alumni'
              ? 'text-qca_red_dark-400'
              : 'border-white'
          }`}
        >
          Alumni
        </button>
      </div>

      {/* Second Row of Filters: Theory, Hardware, Algos */}
      {/* <div className="flex justify-center mb-8">
        <button
          onClick={() => handleSubteamChange('theory')}
          className={`px-4 py-2 mx-2 font-semibold ${
            activeSubteam === 'theory'
              ? 'text-qca_red_dark-400'
              : 'border-white'
          }`}
        >
          Theory
        </button>
        <button
          onClick={() => handleSubteamChange('hardware')}
          className={`px-4 py-2 mx-2 font-semibold ${
            activeSubteam === 'hardware'
              ? 'text-qca_red_dark-400'
              : 'border-white'
          }`}
        >
          Hardware
        </button>
        <button
          onClick={() => handleSubteamChange('algos')}
          className={`px-4 py-2 mx-2 font-semibold ${
            activeSubteam === 'algos'
              ? 'text-qca_red_dark-400'
              : 'border-white'
          }`}
        >
          Algos
        </button> 
      </div> */}

      {/* Cards Display */}
      <div className="place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
  );
};

export default People;