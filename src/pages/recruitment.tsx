import React from 'react';
import { Link } from 'react-router-dom';

const RecruitmentTimeline: React.FC<{ isRecruiting: boolean }> = ({ isRecruiting }) => {
    return (
        <div className={`max-w-4xl mx-auto mt-16 transition-all duration-500 ${!isRecruiting ? 'opacity-50 grayscale-[40%]' : 'opacity-100'}`}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                {isRecruiting ? "Recruitment Timeline" : "Past Recruitment Cycle (Reference)"}
            </h3>
            <div className="relative">
                <div className="absolute left-8 md:top-16 top-28 w-0.5 bg-gradient-to-b from-qca_red_dark-500 to-qca_red_dark-300 md:h-[calc(100%-8rem)] h-[calc(100%-15rem)]"></div>

                {/* Coffee Chats */}
                <div className="relative mb-8">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-qca_red_dark-500 border-4 border-white shadow-lg"></div>
                    <div className="ml-20 bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-200">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Coffee Chats</h4>
                        <p className="text-gray-700 leading-relaxed">
                            If you want to learn more about QCA, feel free to schedule a{' '}
                            <Link to="/coffee" className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2">
                                coffee chat
                            </Link>{' '}
                            with a member! Coffee chats are optional but are strongly encouraged.
                        </p>
                    </div>
                </div>

                {/* Information Sessions */}
                <div className="relative mb-8">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-qca_red_dark-500 border-4 border-white shadow-lg"></div>
                    <div className="ml-20 bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-200">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Information Sessions</h4>
                        <p className="text-gray-700 leading-relaxed">
                            Our information session will be held on{' '}
                            <span className="font-semibold text-gray-900">September 17th @ 5PM</span>{' '}
                            in Phillips 407.
                        </p>
                    </div>
                </div>

                {/* Application */}
                <div className="relative mb-8">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-qca_red_dark-500 border-4 border-white shadow-lg"></div>
                    <div className="ml-20 bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-200">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Application</h4>
                        <div className="text-gray-700 leading-relaxed space-y-3">
                            <p>
                                The Quantum Computing Association is recruiting both freshmen and upperclassmen this semester!
                            </p>
                            <p>
                                Applications are due on{' '}
                                <span className="font-semibold text-gray-900">September 19th at 11:59pm</span>.{' '}
                                Candidates will be contacted to schedule interviews after all applications are reviewed.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Interviews */}
                <div className="relative mb-8">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-qca_red_dark-500 border-4 border-white shadow-lg"></div>
                    <div className="ml-20 bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-200">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Interviews</h4>
                        <p className="text-gray-700 leading-relaxed">
                            We will reach out to select applicants to conduct interviews over the following weeks.
                            These will be both technical and behavioral. More information and interview materials will
                            be sent to selected applicants!
                        </p>
                    </div>
                </div>

                {/* Offer Date */}
                <div className="relative mb-8">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-qca_red_dark-500 border-4 border-white shadow-lg"></div>
                    <div className="ml-20 bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-200">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Offers</h4>
                        <p className="text-gray-700 leading-relaxed">
                            After all interviews are completed, we will send out offers to our new members!
                            Our tentative offer date is <span className="font-semibold text-gray-900">September 29th</span>. 
                            This is subject to change, but it should remain fairly close to this date.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const ActiveRecruitmentHero = () => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Recruitment</h2>
        <div className="w-24 h-px bg-qca_red_dark-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mt-6">
            All QCA subteams are recruiting new members for Fall 2025!
            Follow our recruitment timeline below to join our team.
        </p>
        <div className='flex justify-center mt-10 mb-8'>
            <button className="text-lg px-12 py-4 bg-qca_red_dark-500 text-white rounded-lg hover:bg-qca_red_dark-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200" onClick={() => window.open('https://forms.gle/jyCjxkbUAPkNmC2J7', '_blank')}>
                Apply Now!
            </button>
        </div>
    </div>
);


const OffCycleHero = () => {
    // Toggle this to false if leadership decides against continuous evaluation to avoid capacity burden
    const ALLOW_CONTINUOUS_EVALUATION = true; 

    return (
        <div className="text-center mb-12 bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Applications are Closed</h2>
            <div className="w-24 h-px bg-gray-300 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-6">
                Our formal recruitment cycle has concluded for the semester. You can review our previous process below as a reference for the next recruitment period. Please note that exact dates will vary.
            </p>
            
            {ALLOW_CONTINUOUS_EVALUATION && (
                <div className="mt-8 bg-white border-l-4 border-qca_red_dark-500 rounded-lg shadow-md p-6 sm:p-8 max-w-3xl mx-auto text-left flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg transition-shadow duration-300">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Evaluation</h3>
                        <p className="text-gray-600">
                            We maintain an open-door policy for individuals with rigorous technical experience. If you are highly self-motivated and enjoy tackling difficult problems in quantum computing, we welcome you to reach out.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <Link to="/contact" className="inline-block px-8 py-3 bg-white text-qca_red_dark-500 border-2 border-qca_red_dark-500 rounded-lg font-medium hover:bg-qca_red_dark-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};


const Apply: React.FC = () => {
    // Default to false off-season
    const isRecruiting = false;

    return (
        <div className='max-w-screen-xl mx-auto min-h-screen relative'>
            <div className="px-6 py-12">
                {isRecruiting ? <ActiveRecruitmentHero /> : <OffCycleHero />}
                <RecruitmentTimeline isRecruiting={isRecruiting} />
            </div>
        </div>
    );
};

export default Apply;
