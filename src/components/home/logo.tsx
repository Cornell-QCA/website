import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Logo: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[500px]">
      <div className="absolute inset-0 flex justify-center items-center opacity-30">
        <img 
          src="logo.png" 
          alt="Background Logo" 
          className="w-3/4 sm:w-2/3 md:w-3/4 h-auto max-w-md sm:max-w-lg md:max-w-2xl" 
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full p-4 sm:p-6 md:p-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
          Quantum Computing Association @ Cornell
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-2xl px-2">
          A team of undergraduate students researching quantum computing
        </p>
        <div className="flex space-x-4 sm:space-x-6">
          <a 
            href="https://www.github.com/Cornell-QCA" 
            aria-label="GitHub"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" className="text-xl sm:text-2xl" />
          </a>
          <a 
            href="https://www.instagram.com/cornellqca" 
            aria-label="Instagram"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-xl sm:text-2xl" />
          </a>
          <a 
            href="https://www.linkedin.com/company/quantum-computing-association-at-cornell/" 
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-xl sm:text-2xl" />
          </a>
          <a 
            href="https://discord.gg/HT5wWmFSGT" 
            aria-label="Discord"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faDiscord} size="2x" className="text-xl sm:text-2xl" />
          </a>
          {/* <a href="https://linktr.ee/cuquantumcomputing" aria-label="Email">
            <FontAwesomeIcon icon={faTree} size="2x" />
          </a> */}
          {/* <a href="https://forms.gle/Pyi1S9zRKhbHu3UQA" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Logo;