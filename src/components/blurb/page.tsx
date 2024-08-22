import React from 'react';

const Blurb: React.FC = () => {
    return (
        <div className="container mx-auto px-4 text-gray-800">
            <h2 className="text-3xl font-bold text-center mb-6">About</h2>
            <p className="text-lg leading-relaxed mb-4">
                The Cornell University Quantum Computing Association (Cornell
                QCA) is an undergraduate student organization that provides
                opportunities in quantum computing.  We conduct an introductory
                series of lectures on quantum computing open to the public, and
                we pursue research projects with active project members.
                Additionally, we facilitate collaboration between other
                universities interested in quantum computing, and are proud
                members of the <a
                href="https://www.quantumcoalition.io/">Quantum Coalition</a>.
                <br/><br/> Our team is spread across various disciplines in
                quantum computing, and are split into three subteams: Hardware,
                Theory, and Algorithms.  Each team hosts its own weekly meetings and
                works on projects.
            </p>
        </div>
    );
};

export default Blurb;