import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Card from '../components/people/card';
import { marked } from 'marked';

interface CoffeeChatData {
  name: string;
  linkedin: string;
  calendly: string;
  heading: string;
}

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
    <div className='flex flex-col items-center mx-auto py-8'>
      <h1 className='text-4xl font-bold text-center mb-4'>Coffee Chats</h1>
      <p className='text-center text-lg mb-4'>
        Coffee Chats are a great way to get to know other members of the club. 
        They are informal 1-on-1 conversations where you can learn more about 
        each other's interests, experiences, and goals. 
      </p>
      <p className='text-center text-lg mb-8'>
        To sign up for a coffee chat, click on a member's profile and fill out
        their Calendly form. 
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {people.map((person, index) => (
          <Card
            key={index}
            image={person.linkedin}
            title={person.name}
            subtitle={person.heading}
            link={`https://calendly.com/${person.calendly}`}
          >
            <div dangerouslySetInnerHTML={{ __html: bios[person.linkedin] || '' }} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CoffeeChat;