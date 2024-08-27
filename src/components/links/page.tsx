import React from 'react';
import Link from './link';


const Links: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Important Links</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        
        <Link
          title = {'Hi'}
          link = {'http://www.google.com'}
          desc = {'SOmething'}
          ></Link>

      </div>
    </div>
  );
};

export default Links;