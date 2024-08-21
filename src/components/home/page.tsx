import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Page: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-8">
      <div>
        <h1 className="text-5xl font-bold text-gray-800 mt-10">
          Cornell Quantum Computing Association
        </h1>
        <p className="text-2xl text-gray-600 mt-4">
          A team of undergraduate students researching quantum computing
        </p>
        <div className="flex space-x-4 mt-6">
          <a href="https://www.github.com/Cornell-QCA"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
          <a href="https://www.instagram.com/cornellqca"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
          <a href="https://www.linkedin.com/company/quantum-computing-association-at-cornell/"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
          <a href="https://forms.gle/Pyi1S9zRKhbHu3UQA"><FontAwesomeIcon icon={faEnvelope} size="lg" /></a>
        </div>
      </div>
      <div>
        <img src="public/logo.png" alt="Graphic" className="w-64" />
      </div>
    </div>
  );
}

export default Page;