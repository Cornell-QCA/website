import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faTree } from '@fortawesome/free-solid-svg-icons';

const Logo: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 flex justify-center items-center opacity-30">
        <img src="logo.png" alt="Background Logo" className="w-3/4 h-auto" />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full p-8 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Cornell Quantum Computing Association
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          A team of undergraduate students researching quantum computing
        </p>
        <div className="flex space-x-6">
          <a href="https://www.github.com/Cornell-QCA" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.instagram.com/cornellqca" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com/company/quantum-computing-association-at-cornell/" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://discord.gg/HT5wWmFSGT" aria-label="Discord">
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </a>
          <a href="https://linktr.ee/cuquantumcomputing" aria-label="Email">
            <FontAwesomeIcon icon={faTree} size="2x" />
          </a>
          <a href="https://forms.gle/Pyi1S9zRKhbHu3UQA" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Logo;