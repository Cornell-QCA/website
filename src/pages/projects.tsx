import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import Link from '../components/project';

interface ProjectData {
  title: string;
  group: string;
  file: string;
  link: string;
  status: 'active' | 'past';
  descriptionNode?: React.ReactNode;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    Papa.parse('/data/csv/projects.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: async (result: any) => {
        const projectData = result.data as ProjectData[];

        // Fetch and parse markdown files
        const projectsWithDesc = await Promise.all(
          projectData.map(async (project) => {
            try {
              const response = await fetch(`/data/projects/${project.file}.md`);
              const markdown = await response.text();
              const html = DOMPurify.sanitize(marked.parse(markdown) as string);
              return {
                ...project,
                descriptionNode: <div dangerouslySetInnerHTML={{ __html: html }} />
              };
            } catch (error) {
              return {
                ...project,
                descriptionNode: <div>Project details coming soon.</div>
              };
            }
          })
        );
        setProjects(projectsWithDesc);
      },
    });
  }, []);

  const activeProjects = projects.filter(p => p.status !== 'past');
  const pastProjects = projects.filter(p => p.status === 'past');

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

        <div className="max-w-6xl mx-auto">
          {/* Active Projects Selection */}
          {activeProjects.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-2">Current Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activeProjects.map((project, index) => (
                  <Link
                    key={`active-${index}`}
                    title={project.title}
                    group={project.group}
                    link={project.link}
                  >
                    {project.descriptionNode}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Past Projects Selection */}
          {pastProjects.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-2">Past Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-90 transition-opacity hover:opacity-100">
                {pastProjects.map((project, index) => (
                  <Link
                    key={`past-${index}`}
                    title={project.title}
                    group={project.group}
                    link={project.link}
                  >
                    {project.descriptionNode}
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Projects;