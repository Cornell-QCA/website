import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-8">
      <div>
        <h1 className="text-5xl font-bold text-gray-800">
          Cornell University Quantum Computing Association
        </h1>
        <p className="text-2xl text-gray-600 mt-4">
          publishing research in <a href="#" className="text-blue-500">computer vision</a>
        </p>
        <div className="flex space-x-4 mt-6">
          <a href="#"><i className="fab fa-github fa-lg"></i></a>
          <a href="#"><i className="fab fa-facebook fa-lg"></i></a>
          <a href="#"><i className="fab fa-twitter fa-lg"></i></a>
          <a href="#"><i className="fas fa-envelope fa-lg"></i></a>
        </div>
      </div>
      <div>
        <img src="/mnt/data/0E996940-D410-4896-87B6-9AFAEFC262C3.jpeg" alt="Graphic" className="w-48 opacity-50" />
      </div>
    </div>
  );
}

export default Page;