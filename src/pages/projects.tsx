import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { marked } from 'marked';
import Link from '../components/project';

interface ProjectData {
  title: string;
  group: string;
  file: string;
  link: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [projectDescriptions, setProjectDescriptions] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    Papa.parse('data/csv/projects.csv', {
      download: true,
      header: true,
      complete: async (result: any) => {
        const projectData = result.data;
        setProjects(projectData);

        // Fetch and parse markdown files
        const descriptions = await Promise.all(
          projectData.map(async (project: ProjectData) => {
            const response = await fetch(`data/projects/${project.file}.md`);
            const markdown = await response.text();
            return <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />;
          })
        );
        setProjectDescriptions(descriptions);
      },
    });
  }, []);

  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className="px-6 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
          <div className="w-24 h-px bg-qca_red_dark-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Explore the research projects our teams are working on across theory, algorithms, and hardware.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link
                key={index}
                title={project.title}
                group={project.group}
                link={project.link}
              >
                {projectDescriptions[index]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;