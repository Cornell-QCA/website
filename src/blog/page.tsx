import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import BlogPost from './BlogPost';

interface Blog {
    title: string;
    subheading: string;
    author: string;
    date: string;
    file: string;
}

const BlogPage: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const hash = window.location.hash.slice(1); // Remove the # character

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const csvResponse = await fetch('/data/csv/blogs.csv');
                const csvText = await csvResponse.text();
                const { data } = Papa.parse(csvText, { header: true });

                const sortedBlogs = (data as Blog[]).sort((a, b) => {
                    const dateComparison = new Date(b.date).getTime() - new Date(a.date).getTime();
                    return dateComparison !== 0 ? dateComparison : a.title.localeCompare(b.title);
                });

                // Fetch and parse markdown content for each blog
                const blogsWithContent = await Promise.all(
                    sortedBlogs.map(async (blog) => {
                        try {
                            return {
                                ...blog,
                            };
                        } catch (error) {
                            console.error(`Error fetching blog ${blog.file}:`, error);
                            return blog;
                        }
                    })
                );

                setBlogs(blogsWithContent);
            } catch (error) {
                console.error('Error fetching or parsing blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    // If we have a specific blog hash, show that blog post
    if (hash) {
        const blog = blogs.find(b => b.file === hash);
        if (blog) {
            return <BlogPost blog={blog} />;
        }
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-12">QCA Blog</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                            <h3 className="text-xl text-gray-600 mb-4">{blog.subheading}</h3>
                            <div className="text-sm text-gray-500 mb-4">
                                <span>{blog.author} • </span>
                                <span>{new Date(blog.date).toLocaleDateString()}</span>
                            </div>
                            <a 
                                href={`#blog/#${blog.file}`}
                                className="mt-4 px-6 py-2 bg-qca_red_dark-500 text-white rounded hover:bg-qca_red_dark-600 inline-block"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
