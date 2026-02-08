import React from 'react';
import { ExternalLink } from 'lucide-react';

export interface Project {
  projectName: string;
  projectType?: string;
  industry?: string;
  problemSolved?: string[];
  techStack?: string[];
  resultsHighlights?: string[];
  image?: string;
  note?: string;
}

const DEFAULT_IMAGE = '/images/enterprise-admin-system.jpg';

const ProjectCard: React.FC<Project> = ({
  projectName,
  projectType,
  industry,
  problemSolved,
  techStack,
  resultsHighlights,
  image,
  note,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full relative shadow">
      <img src={image || DEFAULT_IMAGE} alt={projectName} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg font-bold mb-1 text-[#0D1E4C] leading-snug" style={{ fontSize: '1.25rem' }}>{projectName}</h2>
        {projectType && <div className="text-base font-semibold mb-1 text-[#C48CB3]">{projectType}</div>}
        {industry && <div className="text-base mb-2 text-[#26415E] opacity-80">{industry}</div>}
        {problemSolved && problemSolved.length > 0 && (
          <ol className="mb-4 list-decimal list-inside text-base text-[#26415E] opacity-90 pl-2">
            {problemSolved.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        )}
        {techStack && techStack.length > 0 && (
          <div className="mb-4 text-xs flex flex-wrap gap-1">
            {techStack.map((tech, idx) => (
              <span key={idx} className="bg-[#E5C9D7] text-[#0D1E4C] rounded px-2 py-0.5 font-mono font-semibold border border-[#C48CB3]">{tech}</span>
            ))}
          </div>
        )}
        {resultsHighlights && resultsHighlights.length > 0 && (
          <ul className="mb-4 list-disc list-inside text-base text-[#0d1e4c] font-bold pl-2">
            {resultsHighlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
        {note && note.startsWith('http') ? (
          <a
            href={note}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 flex items-center gap-1 text-base font-bold text-[#0D1E4C] hover:text-[#C48CB3] transition"
            style={{ letterSpacing: 1 }}
          >
            查看案例 <ExternalLink size={18} />
          </a>
        ) : note ? (
          <div className="mt-auto text-sm font-bold text-gray-600 italic border-t pt-2">{note}</div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard; 