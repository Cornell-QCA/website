import React from 'react';
import Section from './section';

const Apply: React.FC = () => {
    const isRecruiting = true;

    return isRecruiting ? (
        <div className="px-4 mt-8">
            <h2 className="text-4xl font-bold text-center mb-8">Recruitment</h2>
            <p className="text-lg text-center mb-12">
                QCA is recruiting for the Business Operations subteam for
                Spring 2024! The full timeline is shown below.
            </p>

            <div className='flex justify-center text-lg mb-8'>
                <button className="text-lg px-10 py-4 bg-qca_red_dark-500 text-white rounded hover:bg-qca_red_dark-600" onClick={() => window.open('https://forms.gle/yRWfJwQL3FxruKEM8', '_blank')}>
                    Apply Now!
                </button>
            </div>

            <div className="relative">
                <div className="absolute top-0 mx-4 w-1 bg-qca_red_dark-500 h-full"></div>

                {/* <Section title="Coffee Chats">
                    <p>
                        If you want to learn more about QCA, feel free
                        to schedule a  <a href="/#coffee"
                        className="text-qca_red_dark-400">coffee chat</a> with a
                        member! Coffee chats are optional but are strongly
                        encouraged.
                    </p>
                </Section> */}
{/* 
                <Section title="Information Sessions">
                    <p>
                        Information sessions will be held at <strong>5pm on
                            Sunday, September 8th, 2024</strong> and <strong>5pm
                                on Monday, September 9th, 2024</strong> in Phillips 219.
                    </p>
                </Section> */}

                <Section title="Application">
                    <p>
                        The Quantum Computing Association is recruiting both
                        freshmen and upperclassmen this semester!
                    </p>
                    <p className="mt-4">
                        Applications are due on <strong>Thursday, January
                        30th at 11:59pm</strong>. Candidates will be
                        contacted to schedule interviews after all applications
                        are reviewed.
                    </p>
                </Section>

                {/* Interviews */}
                <Section title="Interviews">
                    <p>
                        We will reach out to select applicants to conduct
                        interviews over the following weeks. These will be
                        both technical and behavioral. More information and
                        interview materials will be sent to selected
                        applicants!
                    </p>
                </Section>
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