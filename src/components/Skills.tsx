import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const competencies = [
  'Project Planning & Execution',
  'Project Coordination & Administration',
  'Stakeholder Management',
  'Agile Project Management',
  'Task & Milestone Tracking',
  'Resource Allocation & Scheduling',
  'Risk Identification & Mitigation',
  'Process Improvement',
  'Cross-Functional Team Collaboration',
  'Project Reporting & Documentation',
  'Data Analysis & Performance Tracking',
  'Change Management',
  'Vendor & Client Coordination',
  'Meeting Facilitation & Documentation',
];

const tools = [
  { name: 'Asana', level: 90 },
  { name: 'Trello', level: 92 },
  { name: 'Notion', level: 88 },
  { name: 'HubSpot CRM', level: 85 },
  { name: 'Salesgee CRM', level: 80 },
  { name: 'Microsoft Excel', level: 88 },
  { name: 'Google Workspace', level: 90 },
  { name: 'Slack', level: 85 },
  { name: 'Zoom', level: 88 },
  { name: 'Microsoft Office Suite', level: 87 },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section id="skills" className="py-24 md:py-32 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase">Skills</span>
            <span className="flex-1 h-px bg-neutral-800" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Core <span className="text-amber-400">Competencies</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Competency tags */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-6">Expertise Areas</h3>
              <div className="flex flex-wrap gap-2.5">
                {competencies.map((c) => (
                  <span
                    key={c}
                    className="bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-medium px-3 py-2 rounded-lg hover:border-amber-500/40 hover:text-amber-300 hover:bg-neutral-800 transition-all duration-200 cursor-default"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Tool proficiency bars */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-6">Tool Proficiency</h3>
              <div className="space-y-4">
                {tools.map((tool) => (
                  <div key={tool.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-neutral-300 font-medium">{tool.name}</span>
                      <span className="text-xs text-neutral-500">{tool.level}%</span>
                    </div>
                    <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: inView ? `${tool.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
