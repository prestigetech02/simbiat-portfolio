import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const jobs = [
  {
    title: 'Project Coordinator / Operations Assistant',
    company: 'Radiance Skin',
    period: 'Feb 2026 – Present',
    location: 'Nigeria',
    type: 'Full-time',
    color: 'amber',
    bullets: [
      'Coordinate project activities across customer service, logistics, and fulfillment teams, ensuring timely completion of operational deliverables.',
      'Develop and maintain project tracking systems using Microsoft Excel and Google Workspace to monitor progress and improve workflow visibility.',
      'Facilitate stakeholder communication, ensuring alignment on project priorities, timelines, and customer expectations.',
      'Monitor project risks relating to delivery schedules and proactively implement corrective actions to minimize delays.',
      'Prepare operational performance reports and status updates for management decision-making.',
      'Utilize CRM systems to manage project-related communications and maintain accurate project documentation.',
    ],
  },
  {
    title: 'Operations & Project Coordinator',
    company: 'KEA Group',
    period: '2025 – 2026',
    location: 'Nigeria',
    type: 'Full-time',
    color: 'sky',
    bullets: [
      'Managed multiple operational and event-based projects from planning through execution, ensuring adherence to scope and timelines.',
      'Coordinated project schedules, deliverables, and team assignments using Trello, Asana, and Notion.',
      'Conducted project performance tracking and prepared weekly status reports highlighting progress, risks, and improvement opportunities.',
      'Facilitated communication between clients, vendors, and internal teams to ensure successful project delivery.',
      'Organized project meetings, documented action items, and monitored completion of assigned tasks.',
      'Contributed to process improvement initiatives that enhanced team productivity and project execution efficiency.',
    ],
  },
  {
    title: 'Founder & Project Lead',
    company: 'Sole Proprietorship',
    period: '2020 – Present',
    location: 'Nigeria',
    type: 'Entrepreneurial',
    color: 'emerald',
    bullets: [
      'Founded and managed a service-based business, overseeing multiple client projects from initiation through completion.',
      'Developed project plans, timelines, and resource allocation strategies to ensure efficient service delivery.',
      'Managed stakeholder relationships, translating client requirements into actionable project deliverables.',
      'Oversaw budgeting, financial tracking, and operational planning to support business growth.',
      'Implemented structured PM processes that improved customer satisfaction and contributed to 90%+ client retention.',
      'Coordinated external vendors and service providers to ensure quality delivery and project success.',
    ],
  },
  {
    title: 'Project Support Officer / Sales Operations Associate',
    company: 'Mc Ehihi Exquisite Industries Ltd',
    period: '2018 – 2020',
    location: 'Nigeria',
    type: 'Full-time',
    color: 'rose',
    bullets: [
      'Supported project-related sales initiatives through accurate documentation, reporting, and performance tracking.',
      'Maintained project records, client databases, and operational reports for management decision-making.',
      'Assisted in coordinating customer engagement campaigns and monitored progress against established targets.',
      'Collaborated with internal teams to improve workflow efficiency and enhance service delivery.',
      'Prepared regular reports on project activities, customer interactions, and operational outcomes.',
    ],
  },
];

const colorMap: Record<string, string> = {
  amber: 'border-amber-500/60 bg-amber-500/10 text-amber-400',
  sky: 'border-sky-500/60 bg-sky-500/10 text-sky-400',
  emerald: 'border-emerald-500/60 bg-emerald-500/10 text-emerald-400',
  rose: 'border-rose-500/60 bg-rose-500/10 text-rose-400',
};

const dotMap: Record<string, string> = {
  amber: 'bg-amber-400',
  sky: 'bg-sky-400',
  emerald: 'bg-emerald-400',
  rose: 'bg-rose-400',
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section id="experience" className="py-24 md:py-32 bg-neutral-900/40">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase">Experience</span>
            <span className="flex-1 h-px bg-neutral-800" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Professional <span className="text-amber-400">Journey</span>
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-neutral-800" />

            <div className="space-y-10">
              {jobs.map((job, i) => (
                <div
                  key={i}
                  className="relative pl-14 md:pl-20"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Dot */}
                  <div className={`absolute left-2.5 md:left-4 top-5 w-3 h-3 rounded-full ${dotMap[job.color]} ring-4 ring-neutral-900`} />

                  <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-neutral-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors duration-300">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2 text-neutral-400 text-sm">
                          <Briefcase size={13} className="text-amber-400 flex-shrink-0" />
                          <span className="font-medium text-neutral-300">{job.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                        <span className={`inline-flex items-center gap-1.5 border text-xs font-medium px-3 py-1 rounded-full ${colorMap[job.color]}`}>
                          <Calendar size={11} />
                          {job.period}
                        </span>
                        <span className="flex items-center gap-1 text-neutral-500 text-xs">
                          <MapPin size={11} />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-neutral-400 text-sm leading-relaxed">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotMap[job.color]}`} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
