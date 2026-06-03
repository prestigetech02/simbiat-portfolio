import { useState, useEffect } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    navLinks.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-neutral-950/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-neutral-800/60' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleClick('#hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center group-hover:bg-amber-400 transition-colors duration-300">
            <Briefcase size={16} className="text-neutral-950" />
          </div>
          <span className="text-white font-semibold tracking-tight text-sm">Simbiat Akorede</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  active === link.href ? 'text-amber-400' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-amber-400 transition-all duration-300 ${
                    active === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <a
          href="mailto:akoredesimbiat8@gmail.com"
          className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-neutral-300 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-neutral-950/98 border-b border-neutral-800`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className={`w-full text-left text-sm font-medium py-3 px-3 rounded-lg transition-all duration-200 ${
                  active === link.href
                    ? 'text-amber-400 bg-amber-500/10'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="mailto:akoredesimbiat8@gmail.com"
              className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-neutral-950 text-sm font-semibold px-4 py-3 rounded-lg transition-colors duration-300"
              onClick={() => setOpen(false)}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
