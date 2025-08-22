import React from 'react';

const Apply: React.FC = () => {
    const isRecruiting = true;

    return isRecruiting ? (
        <div className='max-w-screen-xl mx-auto'>
            <div className="px-6 py-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Recruitment</h2>
                    <div className="w-24 h-px bg-qca_red_dark-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        All QCA subteams are recruiting new members for Fall 2025! 
                        Follow our recruitment timeline below to join our team
                    </p>
                </div>

                {/* Call to Action */}
                <div className='flex justify-center mb-16'>
                    <button className="text-lg px-12 py-4 bg-qca_red_dark-500 text-white rounded-lg hover:bg-qca_red_dark-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200" onClick={() => window.open('https://www.cornellqca.com', '_blank')}>
                        Apply Now!
                    </button>
                </div>

                {/* Timeline Section */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Recruitment Timeline</h3>
                    <div className="relative">
                        <div className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-qca_red_dark-500 to-qca_red_dark-300 h-full"></div>

                        {/* Coffee Chats */}
                        <div className="relative mb-8">
                            <div className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-qca_red_dark-500 border-4 border-white shadow-lg"></div>
                            <div className="ml-20 bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-200">
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">Coffee Chats</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    If you want to learn more about QCA, feel free to schedule a{' '}
                                    <a href="/coffee" className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2">
                                        coffee chat
                                    </a>{' '}
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
                                    Information sessions will be held at{' '}
                                    <span className="font-semibold text-gray-900">TBA, 2025</span>{' '}
                                    and{' '}
                                    <span className="font-semibold text-gray-900">TBA, 2025</span>{' '}
                                    in Phillips 219.
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
                                        <span className="font-semibold text-gray-900">TBA at 11:59pm</span>.{' '}
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
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="px-4 mt-8">
            <h2 className="text-4xl font-bold text-center mb-8">Recruitment</h2>
            <p className="text-lg text-center mb-12">
                QCA is not currently recruiting. Please check back later for
                updates on our recruitment cycle.
            </p>


        </div>
    );
};

export default Apply;