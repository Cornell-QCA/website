import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

const Blurb: React.FC = () => {
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        const fetchBlurb = async () => {
            try {
                const response = await fetch('data/blurb.md');
                if (!response.ok) {
                    throw new Error('Failed to fetch the blurb content.');
                }

                const markdown = await response.text();

                const htmlContent = marked(markdown);

                Promise.all([htmlContent]).then(([htmlContent]) => {
                    setContent(htmlContent);
                }, (error) => {
                    console.error('Error parsing the blurb:', error);
                }
                );
            } catch (error) {
                console.error('Error fetching or parsing the blurb:', error);
            }
        };

        fetchBlurb();
    }, []);

    return (
        <div className="px-4 text-gray-800">
            <h2 className="text-4xl font-bold text-center mb-6">About</h2>
            <div
                className="text-lg leading-relaxed text-center mb-4"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
};

export default Blurb;