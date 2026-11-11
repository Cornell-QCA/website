import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeChat: React.FC = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <div className="px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-center max-w-2xl mx-auto py-12 sm:py-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Coffee Chats
          </h1>
          <div className="w-16 sm:w-24 h-px bg-gray-300 mx-auto mb-6" />
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
            Coffee chats are currently paused. We are not scheduling one-on-one
            coffee chats at this time.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-qca_red_dark-500 text-white rounded-lg hover:bg-qca_red_dark-600 shadow-md hover:shadow-lg transition-all duration-200 font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeChat;
