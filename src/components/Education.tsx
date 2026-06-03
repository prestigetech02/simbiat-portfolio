import { useRef } from 'react';
import { GraduationCap, Award, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const education = [
  {
    degree: 'Higher National Diploma (HND)',
    field: 'Business Administration',
    school: 'Gateway ICT Polytechnic, Saapade',
    period: '2022 – 2024',
    grade: 'Distinction',
    gradeColor: 'text-amber-400',
  },
  {
    degree: 'National Diploma (ND)',
    field: 'Business Administration',
    school: 'DS Adegbenro ICT Polytechnic, Itori',
    period: '2019 – 2021',
    grade: 'Upper Credit',
    gradeColor: 'text-sky-400',
  },
];

const certifications = [
  {
    name: 'Agile Project Management',
    issuer: 'HP LIFE',
    icon: Award,
    color: 'amber',
  },
  {
    name: 'HubSpot CRM Fundamentals',
    issuer: 'HubSpot Academy',
    icon: Award,
    color: 'sky',
  },
  {
    name: 'Soft Skills Training',
    issuer: 'Jobberman',
    icon: Star,
    color: 'emerald',
    sub: 'Communication, Workplace Ethics & Professional Skills',
  },
];

const leadership = [
  {
    title: 'Platoon Leader',
    org: 'NYSC Orientation Camp',
    period: '2025',
    desc: 'Led and coordinated 200+ participants in daily operations, managed communication between camp officials and participants, and resolved conflicts to maintain team productivity.',
  },
  {
    title: 'Director of Creativity & Innovation',
    org: 'NAPS',
    period: '2024 – 2025',
    desc: 'Led student development project initiatives, coordinated virtual teams, and facilitated stakeholder engagement across regional teams.',
  },
  {
    title: 'General Secretary',
    org: 'Student Union Government (SUG)',
    period: '2023 – 2024',
    desc: 'Managed organizational documentation, coordinated executive meetings, and monitored implementation of strategic decisions and operational plans.',
  },
];

const colorMap: Record<string, string> = {
  amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
  sky: 'bg-sky-500/10 border-sky-500/30 text-sky-400',
  emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
};

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section id="education" className="py-24 md:py-32 bg-neutral-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase">Background</span>
            <span className="flex-1 h-px bg-neutral-800" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Education &amp; <span className="text-amber-400">Credentials</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="lg:col-span-1">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-5">
                <GraduationCap size={15} className="text-amber-400" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-neutral-500">{edu.period}</span>
                      <span className={`text-xs font-semibold ${edu.gradeColor}`}>{edu.grade}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-0.5">{edu.degree}</h4>
                    <p className="text-xs text-amber-400 mb-2">{edu.field}</p>
                    <p className="text-xs text-neutral-500">{edu.school}</p>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <h3 className="flex items-center gap-2 text-sm font-semibold text-neutral-400 uppercase tracking-widest mt-8 mb-5">
                <Award size={15} className="text-amber-400" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className={`border rounded-xl p-4 transition-all duration-300 hover:scale-[1.01] ${colorMap[cert.color]}`}
                  >
                    <div className="text-sm font-semibold mb-0.5">{cert.name}</div>
                    <div className="text-xs opacity-70">{cert.issuer}</div>
                    {cert.sub && <div className="text-xs opacity-60 mt-1">{cert.sub}</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div className="lg:col-span-2">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-5">
                <Star size={15} className="text-amber-400" />
                Leadership Experience
              </h3>
              <div className="space-y-5">
                {leadership.map((l) => (
                  <div
                    key={l.title}
                    className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
                          {l.title}
                        </h4>
                        <p className="text-sm text-amber-400">{l.org}</p>
                      </div>
                      <span className="text-xs text-neutral-500 bg-neutral-800 px-3 py-1 rounded-full flex-shrink-0 h-fit">
                        {l.period}
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed">{l.desc}</p>
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
