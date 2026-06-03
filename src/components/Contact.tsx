import { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'akoredesimbiat8@gmail.com', href: 'mailto:akoredesimbiat8@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+234 906 885 8983', href: 'tel:+2349068858983' },
  { icon: Linkedin, label: 'LinkedIn', value: 'olorunfunmi-simbiat-akorede', href: 'https://linkedin.com/in/olorunfunmi-simbiat-akoredeb426b132b' },
  { icon: MapPin, label: 'Location', value: 'Ibadan, Nigeria', href: null },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const mailto = `mailto:akoredesimbiat8@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase">Contact</span>
            <span className="flex-1 h-px bg-neutral-800" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work <span className="text-amber-400">Together</span>
          </h2>
          <p className="text-neutral-400 mb-12 max-w-lg">
            Open to project management roles, consulting engagements, and collaborative opportunities. Let's connect and build something great.
          </p>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4 hover:border-amber-500/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors duration-300">
                    <Icon size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="text-sm text-neutral-300 hover:text-amber-400 transition-colors duration-200 font-medium"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-neutral-300 font-medium">{value}</span>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-6 p-5 bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-xl">
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Currently available for new opportunities. Whether you need a project coordinator, operations lead, or a hands-on PM — I'd love to hear from you.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-400 mb-1.5 font-medium">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all duration-200 placeholder-neutral-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-1.5 font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all duration-200 placeholder-neutral-600"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-neutral-400 mb-1.5 font-medium">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all duration-200 placeholder-neutral-600"
                  placeholder="Project inquiry, collaboration..."
                />
              </div>
              <div>
                <label className="block text-xs text-neutral-400 mb-1.5 font-medium">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all duration-200 placeholder-neutral-600 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 text-sm"
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
