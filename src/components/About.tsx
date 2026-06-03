import { useRef } from 'react';
import { Target, Users, Zap, TrendingUp } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const highlights = [
  { icon: Target, label: 'Delivery Rate', value: '95%', sub: 'On-time project completion' },
  { icon: Users, label: 'Client Retention', value: '90%+', sub: 'Customer satisfaction' },
  { icon: Zap, label: 'Projects Managed', value: '20+', sub: 'Cross-functional projects' },
  { icon: TrendingUp, label: 'Experience', value: '3+ yrs', sub: 'Professional PM track record' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section id="about" className="py-24 md:py-32 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase">About</span>
            <span className="flex-1 h-px bg-neutral-800" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Driving results through{' '}
                <span className="text-amber-400">strategic coordination</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-5 text-base">
                Results-driven Project Management professional with a strong background in coordinating projects,
                managing operational workflows, tracking deliverables, and collaborating with cross-functional teams
                to achieve organizational objectives.
              </p>
              <p className="text-neutral-400 leading-relaxed text-base">
                Skilled in leveraging industry-leading PM tools including Trello, Asana, Notion, HubSpot CRM,
                Microsoft Excel, and Google Workspace to streamline processes, monitor KPIs, and ensure timely
                project execution across both remote and on-site environments.
              </p>
            </div>

            {/* Photo placeholder with decorative frame */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-72 h-80 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full border border-amber-500/20 rounded-2xl" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-amber-500/10 rounded-xl backdrop-blur" />
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map(({ icon: Icon, label, value, sub }) => (
              <div
                key={label}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-amber-500/40 transition-all duration-300 hover:bg-neutral-800/60 group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <Icon size={18} className="text-amber-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{value}</div>
                <div className="text-xs font-semibold text-neutral-300 mb-1">{label}</div>
                <div className="text-xs text-neutral-500">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
