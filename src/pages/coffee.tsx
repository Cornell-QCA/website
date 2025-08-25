import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { marked } from 'marked';

interface CoffeeChatData {
  name: string;
  linkedin: string;
  team: string;
  calendly: string;
  role: string;
  major: string;
}

const getTeamColors = (team?: string) => {
  switch (team?.toLowerCase()) {
    case 'theory':
      return {
        role: 'bg-qca_red_dark-100 text-qca_red_dark-700',
        hover: 'group-hover:text-qca_red_dark-600'
      };
    case 'hardware':
      return {
        role: 'bg-qca_blue-100 text-qca_blue-700',
        hover: 'group-hover:text-qca_blue-600'
      };
    case 'algos':
      return {
        role: 'bg-qca_green-100 text-qca_green-700',
        hover: 'group-hover:text-qca_green-600'
      };
    case 'bizops':
      return {
        role: 'bg-qca_purple-100 text-qca_purple-700',
        hover: 'group-hover:text-qca_purple-600'
      };
    case 'education':
      return {
        role: 'bg-qca_orange-100 text-qca_orange-700',
        hover: 'group-hover:text-qca_orange-600'
      };
    default:
      return {
        role: 'bg-gray-100 text-gray-700',
        hover: 'group-hover:text-gray-600'
      };
  }
};

const CoffeeChat: React.FC = () => {
  const [people, setPeople] = useState<CoffeeChatData[]>([]);
  const [bios, setBios] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    Papa.parse('data/csv/coffee_chats.csv', {
      download: true,
      header: true,
      complete: (result: any) => {
        setPeople(result.data);

        result.data.forEach(async (person: CoffeeChatData) => {
          const response = await fetch(`data/coffee_bios/${person.linkedin}.md`);
          const markdown = await response.text();
          const htmlContent: string = marked.parse(markdown).toString()

          setBios((prevBios) => ({
            ...prevBios,
            [person.linkedin]: htmlContent,
          }));
        });
      },
    });
  }, []);

  return (
    <div className='w-full max-w-screen-xl mx-auto'>
      <div className="px-4 sm:px-6 py-6 sm:py-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Coffee Chats</h1>
          <div className="w-16 sm:w-24 h-px bg-qca_red_dark-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 mb-3">
            Coffee Chats are a great way to get to know other members of the club. 
            They are informal 1-on-1 conversations where you can learn more about 
            each other's interests, experiences, and goals.
          </p>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
            To sign up for a coffee chat, click on a member's profile and fill out
            their Calendly form.
          </p>
        </div>

        {/* Coffee Chat Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {people.map((person, index) => {
              const colors = getTeamColors(person.team);
              return (
                <a href={`https://calendly.com/${person.calendly}`} target="_blank" rel="noopener noreferrer" className="group" key={index}>
                  <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1 h-full flex flex-col">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" 
                        src={`people/${person.linkedin}.jpg`} 
                        alt={person.name} 
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className={`font-semibold text-gray-900 text-center mb-2 ${colors.hover} transition-colors`}>
                        {person.name}
                      </h3>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 justify-center mb-3">
                        <span className={`inline-block px-3 py-1 ${colors.role} text-xs font-medium rounded-full`}>
                          {person.role}
                        </span>
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          {person.major}
                        </span>
                      </div>
                      
                      {/* Bio content */}
                      <div className="text-gray-600 text-sm text-center flex-1">
                        <div dangerouslySetInnerHTML={{ __html: bios[person.linkedin] || '' }} />
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeChat;