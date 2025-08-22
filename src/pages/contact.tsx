import React from 'react';
import Link from '../components/project';


const Links: React.FC = () => {
    return (
        <div className='max-w-screen-xl'>
            <div className="container mx-auto py-8">
                <h1 className="text-4xl font-bold text-center mb-4">Important Links</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">

                    <Link
                        title={'QCA Feedback Form'}
                        // link={'https://docs.google.com/forms/d/e/1FAIpQLSdeWrH2-RdOJu3I_snCvQfZeDlJ9i-R3bJKfbC9JIYJAjFEAw/viewform'}
                    >
                        Any advice is greatly appreciated!

                    </Link>

                    <Link
                        title={'Fundamentals Syllabus'}
                        // link={'https://docs.google.com/document/d/1KvTScsQTc9c4tDXuHi1S-n7c2LSX-5RnT6j62e1Xst8/edit?usp=drivesdk'}
                    >
                        The syllabus for our intro QC lecture series
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Links;