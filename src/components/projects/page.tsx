import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Project from './project';
import { marked } from 'marked';

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
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            group={project.group + ' Group'}
            link={project.link}
          >{projectDescriptions[index]}</Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;