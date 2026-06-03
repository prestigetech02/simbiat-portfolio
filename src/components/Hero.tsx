import { useEffect, useRef } from 'react';
import { ArrowDown, MapPin, Mail, Linkedin, ChevronRight } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 200);
  }, []);

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-neutral-950"
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-amber-400/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-800/20 rounded-full blur-3xl" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status pill */}
        <div className="animate-fadeInDown inline-flex items-center gap-2 bg-neutral-800/80 border border-neutral-700/60 text-neutral-300 text-xs font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to new opportunities
        </div>

        {/* Main heading */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
        >
          Olorunfunmi{' '}
          <span className="text-amber-400">Simbiat</span>
          <br />
          <span className="text-neutral-300">Akorede</span>
        </h1>

        {/* Role */}
        <p className="animate-fadeInUp text-lg sm:text-xl md:text-2xl text-neutral-400 font-light mb-4 tracking-wide">
          Project Manager &amp; Operations Coordinator
        </p>

        {/* Location + experience */}
        <div className="animate-fadeInUp flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500 mb-10">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-amber-400" />
            Ibadan, Nigeria
          </span>
          <span className="w-1 h-1 rounded-full bg-neutral-600 hidden sm:block" />
          <span className="flex items-center gap-1.5">
            <ChevronRight size={14} className="text-amber-400" />
            3+ Years Experience
          </span>
        </div>

        {/* CTA buttons */}
        <div className="animate-fadeInUp flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 text-sm"
          >
            View My Work
          </button>
          <a
            href="mailto:akoredesimbiat8@gmail.com"
            className="w-full sm:w-auto border border-neutral-700 hover:border-amber-500/60 text-neutral-300 hover:text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-neutral-800/60 text-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="animate-fadeInUp flex items-center justify-center gap-5">
          <a
            href="mailto:akoredesimbiat8@gmail.com"
            className="flex items-center gap-2 text-neutral-500 hover:text-amber-400 text-xs transition-colors duration-300"
          >
            <Mail size={15} />
            akoredesimbiat8@gmail.com
          </a>
          <span className="w-px h-4 bg-neutral-700" />
          <a
            href="https://linkedin.com/in/olorunfunmi-simbiat-akoredeb426b132b"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-neutral-500 hover:text-amber-400 text-xs transition-colors duration-300"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600 hover:text-amber-400 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={18} />
      </button>
    </section>
  );
}
