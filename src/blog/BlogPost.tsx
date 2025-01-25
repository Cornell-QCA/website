import React from 'react';

interface BlogPostProps {
    blog: {
        title: string;
        subheading: string;
        author: string;
        date: string;
        content?: string;
    };
}

const BlogPost: React.FC<BlogPostProps> = ({ blog }) => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <a 
                href="#" 
                className="inline-block mb-8 text-qca_red_dark-500 hover:text-qca_red_dark-600"
            >
                ← Back to Blog List
            </a>
            <article>
                <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                <h2 className="text-2xl text-gray-600 mb-4">{blog.subheading}</h2>
                <div className="text-sm text-gray-500 mb-8">
                    <span>{blog.author} • </span>
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
                {blog.content && (
                    <div 
                        className="prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                )}
            </article>
        </div>
    );
};

export default BlogPost;
