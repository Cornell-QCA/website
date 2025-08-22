import React from 'react';

const Blurb: React.FC = () => {

    return (
        <div className="px-6 py-8 text-gray-800 max-w-4xl mx-auto">
            {/* Main heading with underline */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">About the Club</h2>
                <div className="w-full h-px bg-gray-300"></div>
            </div>

            {/* Who We Are Section */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Who We Are</h3>
                <div className="text-base leading-relaxed text-gray-700 space-y-4">
                    <p>
                        The Quantum Computing Association at Cornell University (QCA) is an
                        undergraduate student organization that provides opportunities in quantum
                        computing. We conduct an introductory series of lectures on quantum computing
                        open to the public, and we pursue research projects with active project members.
                        Additionally, we facilitate collaboration between other universities interested
                        in quantum computing, and are proud members of the Quantum Coalition.
                    </p>
                    <p>
                        At Carnegie Mellon Quantum Computing (QC @ CMU), we're the first and only student-led organization dedicated to fostering a 
                        vibrant quantum community and advancing quantum literacy and research on campus.
                    </p>
                </div>
            </div>

            {/* What We Do Section */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Do</h3>
                <ul className="text-base leading-relaxed text-gray-700 space-y-2 ml-4">
                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Lead student-driven research projects
                    </li>
                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Host hands-on workshops and guest speaker events
                    </li>
                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Run introductory lectures on quantum computing
                    </li>
                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Collaborate with faculty and industry experts
                    </li>
                </ul>
            </div>

            {/* Call to action text */}
            <div className="mb-8">
                <p className="text-base leading-relaxed text-gray-700">
                    Join us via the link below to stay informed and access the newest opportunities to make an impact in the quantum computing 
                    community.
                </p>
            </div>

            {/* Discord button */}
            <button className="block text-lg mx-auto px-10 py-4 bg-qca_red_dark-500 text-white rounded hover:bg-qca_red_dark-600" onClick={() => window.open('https://discord.gg/HT5wWmFSGT', '_blank')}>
                Join our Discord!
            </button>
        </div>
    );
};

export default Blurb;