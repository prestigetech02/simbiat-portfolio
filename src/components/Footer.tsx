import { Briefcase, Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/60 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center">
            <Briefcase size={14} className="text-neutral-950" />
          </div>
          <span className="text-neutral-400 text-sm">Simbiat Akorede</span>
        </div>
        <p className="text-neutral-600 text-xs">
          &copy; {year} Olorunfunmi Simbiat Akorede. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:akoredesimbiat8@gmail.com"
            className="text-neutral-500 hover:text-amber-400 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://linkedin.com/in/olorunfunmi-simbiat-akoredeb426b132b"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-amber-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
