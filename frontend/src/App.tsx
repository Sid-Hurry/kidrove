import { useState } from 'react';

// --- PROFESSIONAL VECTOR SVG ICONS ---
const AgeIcon = () => (
  <svg className="w-6 h-6 text-[#1C221E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-6 h-6 text-[#1C221E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const LaptopIcon = () => (
  <svg className="w-6 h-6 text-[#1C221E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const RupeeIcon = () => (
  <svg className="w-6 h-6 text-[#1C221E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5h6M9 9h6M9 5a3 3 0 110 6h3l-3 5M9 5v6" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-6 h-6 text-[#1C221E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const BrainIcon = ({ className = "w-6 h-6 text-[#F5F4EB]" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 113.536 0V21h2v-5.464a5.002 5.002 0 011.002-1.002z" />
  </svg>
);

const RobotIcon = ({ className = "w-6 h-6 text-[#1C221E]" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 4H3m18-4h-2m2 4h-2M7 7h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2zm2 4h2m4 0h2m-6 4h4" />
  </svg>
);

const SignalIcon = ({ className = "w-6 h-6 text-[#F5F4EB]" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CodeIcon = ({ className = "w-6 h-6 text-[#1C221E]" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const PuzzleIcon = ({ className = "w-6 h-6 text-[#F5F4EB]" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>
);

const LightningIcon = () => (
  <svg className="w-6 h-6 text-[#3F634D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-6 h-6 text-[#3F634D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-8 h-8 text-[#3F634D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const WarningIcon = () => (
  <svg className="w-5 h-5 text-orange-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

// Interfaces for structured data
interface FAQItem {
  question: string;
  answer: string;
}

interface OutcomeItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  crescentColor: string;
}

interface DetailItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  crescentColor: string;
  bgColor: string;
  borderColor: string;
}

export default function App() {
  // --- STATE FOR REGISTRATION FORM ---
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // --- STATE FOR FAQ ACCORDION ---
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  // --- STATIC DATA ---
  const workshopDetails: DetailItem[] = [
    { icon: <AgeIcon />, value: '8–14 Years', label: 'Age Group', crescentColor: 'bg-[#3F634D]/20', bgColor: 'bg-[#D4E0D1]/20', borderColor: 'border-[#3F634D]/10' },
    { icon: <CalendarIcon />, value: '4 Weeks', label: 'Duration', crescentColor: 'bg-[#5F72BE]/20', bgColor: 'bg-[#C7D2FE]/20', borderColor: 'border-[#5F72BE]/10' },
    { icon: <LaptopIcon />, value: 'Online', label: 'Mode', crescentColor: 'bg-[#DC7A31]/20', bgColor: 'bg-[#FED7AA]/20', borderColor: 'border-[#DC7A31]/10' },
    { icon: <RupeeIcon />, value: '₹2,999', label: 'Workshop Fee', crescentColor: 'bg-[#14B8A6]/20', bgColor: 'bg-[#99F6E4]/20', borderColor: 'border-[#14B8A6]/10' },
    { icon: <RocketIcon />, value: '15 July 2026', label: 'Start Date', crescentColor: 'bg-[#EAB308]/20', bgColor: 'bg-[#FEF08A]/20', borderColor: 'border-[#EAB308]/10' },
  ];

  const learningOutcomes: OutcomeItem[] = [
    {
      icon: <BrainIcon className="w-6 h-6 text-[#F5F4EB]" />,
      title: 'Learn AI Basics',
      description: 'Discover how computers think, recognize images, and process human languages in a fun way.',
      bgColor: 'bg-[#3F634D]',
      textColor: 'text-[#F5F4EB]',
      crescentColor: 'bg-[#537D63]',
    },
    {
      icon: <RobotIcon className="w-6 h-6 text-[#1C221E]" />,
      title: 'Build Virtual Robots',
      description: 'Design structures and program virtual robot systems to complete tasks.',
      bgColor: 'bg-[#D4E0D1]',
      textColor: 'text-[#1C221E]',
      crescentColor: 'bg-[#A8BCA5]',
    },
    {
      icon: <SignalIcon className="w-6 h-6 text-[#F5F4EB]" />,
      title: 'Understand Sensors',
      description: 'Explore how infrared, ultrasonic, and color sensors let robots interact with their environment.',
      bgColor: 'bg-[#5F72BE]',
      textColor: 'text-[#F5F4EB]',
      crescentColor: 'bg-[#7689D4]',
    },
    {
      icon: <CodeIcon className="w-6 h-6 text-[#1C221E]" />,
      title: 'Learn Coding Logic',
      description: 'Master basic programming structures like loops, conditionals, variables, and functions.',
      bgColor: 'bg-[#E4E3DA]',
      textColor: 'text-[#1C221E]',
      crescentColor: 'bg-[#C5C4B7]',
    },
    {
      icon: <PuzzleIcon className="w-6 h-6 text-[#F5F4EB]" />,
      title: 'Improve Problem Solving',
      description: 'Build strong critical thinking skills by debugging code and solving mechanical puzzles.',
      bgColor: 'bg-[#DC7A31]',
      textColor: 'text-[#F5F4EB]',
      crescentColor: 'bg-[#E39556]',
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: 'Who can join the workshop?',
      answer: 'The workshop is designed for kids aged 8 to 14 years old. Whether your child is a complete beginner or already knows some basic coding, they will find the camp challenging and highly engaging!',
    },
    {
      question: 'Do kids need prior programming or robotics experience?',
      answer: 'No prior experience is required! We start from absolute basics—learning how coding logic works using visual drag-and-drop tools and interactive simulator projects.',
    },
    {
      question: 'Will my child receive a certificate?',
      answer: 'Yes! Every participant who completes their final project will receive an official digital certificate of achievement from Kidrove to celebrate their creations.',
    },
    {
      question: 'What hardware/software is needed for the online class?',
      answer: 'A standard laptop or computer (Windows, macOS, or Chrome OS) with a stable internet connection, a web browser, and a working camera/microphone for interactive video sessions is all you need.',
    },
  ];

  // --- FORM SUBMIT HANDLER ---
  const handleSubmitEnquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormError(null);

    // Frontend validation
    if (!name.trim() || name.trim().length < 2) {
      setFormError('Name must be at least 2 characters long.');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setFormError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    const phoneRegex = /^\+?[0-9\s\-]{10,15}$/;
    if (!phoneRegex.test(phone.trim())) {
      setFormError('Please enter a valid 10-15 digit phone number.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phoneNumber: phone.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
      } else {
        setFormError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setFormError('Network error. Make sure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F5F4EB] text-[#1C221E] font-nunito select-none selection:bg-[#3F634D]/20 selection:text-[#3F634D]">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F4EB]/90 backdrop-blur-md border-b border-[#E4E3DA] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="flex gap-1">
              <span className="w-3 h-6 rounded-full bg-[#3F634D]"></span>
              <span className="w-3 h-6 rounded-full bg-[#DC7A31]"></span>
              <span className="w-3 h-6 rounded-full bg-[#5F72BE]"></span>
            </div>
            <span className="font-outfit font-black text-2xl tracking-tight text-[#1C221E]">
              Kidrove
            </span>
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 font-outfit font-bold text-sm tracking-wide uppercase">
            <a href="#details" className="hover:text-[#3F634D] transition-colors">Workshop</a>
            <a href="#features" className="hover:text-[#3F634D] transition-colors">Features</a>
            <a href="#faq" className="hover:text-[#3F634D] transition-colors">FAQ</a>
            <a href="#register" className="hover:text-[#3F634D] transition-colors">Contact</a>
          </div>

          {/* CTA */}
          <a
            href="#register"
            className="font-outfit font-bold text-xs uppercase tracking-wider px-6 py-3 bg-[#3F634D] hover:bg-[#324f3d] text-[#F5F4EB] rounded-full transition-all duration-200"
          >
            Enroll Now
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Side */}
          <div className="lg:col-span-6 text-left">
            <h1 className="font-outfit font-black text-4xl sm:text-5xl lg:text-6xl text-[#1C221E] leading-[1.1] mb-6 animate-fade-in-up">
              AI & Robotics <br />
              <span className="text-[#3F634D]">Summer Workshop</span>
            </h1>
            <p className="text-slate-600 font-bold text-lg md:text-xl max-w-xl mb-10 leading-relaxed animate-fade-in-up delay-100">
              Unleash your child's creativity! Join our fun, hands-on online camp to learn coding logic, build virtual robotics, and explore the wonders of AI.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-200">
              <a
                href="#register"
                className="font-outfit font-bold text-sm uppercase tracking-wider px-8 py-4 bg-[#3F634D] hover:bg-[#324f3d] text-[#F5F4EB] rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Get Started
              </a>
              <a
                href="#details"
                className="font-outfit font-bold text-sm uppercase tracking-wider px-8 py-4 border-2 border-[#1C221E] hover:bg-[#1C221E] hover:text-[#F5F4EB] rounded-full transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Illustration Side - Stylized Cream/Green SVG Robot Mascot */}
          <div className="lg:col-span-6 flex justify-center mt-6 lg:mt-0 animate-fade-in-up delay-300">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center animate-float">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Accent Shapes */}
                <path d="M40,30 C60,10 140,10 160,30" fill="none" stroke="#D4E0D1" strokeWidth="6" strokeDasharray="5 5" />
                
                {/* Floating Shadow */}
                <ellipse cx="100" cy="170" rx="35" ry="6" fill="#D4E0D1" opacity="0.8" />
                
                {/* Robot neck */}
                <rect x="92" y="105" width="16" height="15" rx="4" fill="#5F72BE" />
                
                {/* Head */}
                <rect x="65" y="45" width="70" height="65" rx="24" fill="#3F634D" />
                {/* Face screen */}
                <rect x="73" y="53" width="54" height="41" rx="14" fill="#F5F4EB" />
                {/* Eyes - with Blinking Animation */}
                <circle cx="90" cy="71" r="5" fill="#1C221E" className="animate-blink" />
                <circle cx="110" cy="71" r="5" fill="#1C221E" className="animate-blink" />
                {/* Cute smile */}
                <path d="M94,80 Q100,86 106,80" stroke="#1C221E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                
                {/* Antenna - with pulsing light */}
                <line x1="100" y1="45" x2="100" y2="28" stroke="#3F634D" strokeWidth="5" strokeLinecap="round" />
                <circle cx="100" cy="24" r="8" fill="#DC7A31" className="animate-pulse-slow" />
                
                {/* Torso */}
                <rect x="68" y="115" width="64" height="52" rx="18" fill="#DC7A31" />
                {/* Core energy circle - with pulsing center */}
                <circle cx="100" cy="140" r="12" fill="#F5F4EB" />
                <circle cx="100" cy="140" r="6" fill="#3F634D" className="animate-pulse-slow" />

                {/* Left/Right arms */}
                <rect x="44" y="118" width="14" height="36" rx="7" fill="#5F72BE" transform="rotate(20 44 118)" />
                <rect x="142" y="118" width="14" height="36" rx="7" fill="#5F72BE" transform="rotate(-20 142 118)" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* 3. WORKSHOP DETAILS SECTION */}
      <section id="details" className="py-24 border-t border-[#E4E3DA] bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-outfit font-black text-3xl sm:text-4xl mb-3">
              Workshop Details
            </h2>
            <p className="text-slate-500 font-bold max-w-md mx-auto">
              Everything you need to know about the upcoming summer session.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {workshopDetails.map((detail, idx) => (
              <div
                key={idx}
                className={`${detail.bgColor} border ${detail.borderColor} p-6 rounded-[2rem] flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2`}
              >
                {/* Vector icon with crescent base */}
                <div className="relative w-16 h-16 flex items-center justify-center mb-4">
                  {/* Half-circle base */}
                  <div className={`absolute bottom-0 left-0 right-0 h-8 rounded-b-full ${detail.crescentColor}`}></div>
                  <span className="relative z-10">{detail.icon}</span>
                </div>
                <h3 className="font-outfit font-black text-xl mb-1 text-[#1C221E]">
                  {detail.value}
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {detail.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURES SECTION */}
      <section id="features" className="py-24 border-t border-[#E4E3DA]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-outfit font-black text-3xl sm:text-4xl mb-3">
              Designed for Your Child's Developing Brain
            </h2>
            <p className="text-slate-500 font-bold max-w-md mx-auto">
              Practical skills, conceptual logic, and direct hands-on projects.
            </p>
          </div>

          {/* Outcomes Cards Grid - Asymmetric colors inspired by Kiddo's */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningOutcomes.map((item, index) => (
              <div
                key={index}
                className={`border border-[#E4E3DA] p-8 rounded-[2.5rem] flex flex-col items-start transition-all duration-300 hover:scale-[1.02] ${item.bgColor} ${item.textColor}`}
              >
                <div className="relative w-14 h-14 flex items-center justify-center mb-6">
                  {/* Flat crescent background block */}
                  <div className={`absolute bottom-0 left-0 right-0 h-7 rounded-b-full ${item.crescentColor}`}></div>
                  <span className="relative z-10">{item.icon}</span>
                </div>
                <h3 className="font-outfit font-black text-2xl mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm font-bold opacity-90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section id="faq" className="py-24 border-t border-[#E4E3DA] bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-outfit font-black text-3xl sm:text-4xl mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 font-bold">
              Got questions? We have answers to help you get started.
            </p>
          </div>

          {/* Accordion FAQs */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFAQIndex === idx;
              return (
                <div key={idx} className="border border-[#E4E3DA] rounded-2xl overflow-hidden transition-all duration-200">
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between text-left p-6 font-outfit font-bold text-lg text-[#1C221E] hover:bg-[#F5F4EB]/30 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-transform duration-300 ${
                      isOpen ? 'bg-[#3F634D] text-white rotate-180' : 'bg-slate-100 text-slate-600'
                    }`}>
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-6 pt-0 border-t border-[#E4E3DA] bg-[#F5F4EB]/20 text-slate-600 text-sm leading-relaxed font-semibold">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. REGISTRATION FORM SECTION */}
      <section id="register" className="py-24 border-t border-[#E4E3DA]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Info Column */}
            <div className="lg:col-span-5 text-left">
              <h2 className="font-outfit font-black text-3xl sm:text-4xl text-[#1C221E] mb-6 leading-tight">
                Begin Their Learning Adventure Today
              </h2>
              <p className="text-slate-600 font-bold text-lg mb-8 leading-relaxed">
                Secure a seat for your child today! Fill out the quick registration form, and our education advisors will reach out with onboarding materials, batch timings, and installation guides.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white border border-[#E4E3DA] rounded-2xl">
                  <span className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
                    <LightningIcon />
                  </span>
                  <div>
                    <h4 className="font-outfit font-bold text-[#1C221E]">Fast Enrollment</h4>
                    <p className="text-xs text-slate-500 font-bold">Takes less than 1 minute to submit.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white border border-[#E4E3DA] rounded-2xl">
                  <span className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
                    <LockIcon />
                  </span>
                  <div>
                    <h4 className="font-outfit font-bold text-[#1C221E]">Secure Processing</h4>
                    <p className="text-xs text-slate-500 font-bold">Safe ₹2,999 enrollment confirmation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="w-full max-w-lg mx-auto bg-white border border-[#E4E3DA] rounded-[2.5rem] p-8 md:p-10">
                {success ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-[#D4E0D1] text-[#3F634D] rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckIcon />
                    </div>
                    <h3 className="font-outfit font-black text-2xl text-[#1C221E] mb-3">
                      Awesome! You're Registered!
                    </h3>
                    <p className="text-slate-600 font-bold mb-6 px-4">
                      We have received your enquiry. Our team will contact you shortly on your registered email & phone number with the next steps.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="font-outfit font-bold text-xs uppercase tracking-wider px-6 py-3 bg-[#3F634D] hover:bg-[#324f3d] text-[#F5F4EB] rounded-full transition-all duration-200"
                    >
                      Register Another Child
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitEnquiry} className="space-y-6">
                    <h3 className="font-outfit font-black text-2xl text-[#1C221E] text-center mb-6">
                      Reserve Your Spot
                    </h3>

                    {formError && (
                      <div className="p-4 bg-orange-50 border border-orange-200 text-orange-800 text-xs font-bold rounded-2xl flex items-center gap-2">
                        <WarningIcon />
                        <span>{formError}</span>
                      </div>
                    )}

                    {/* Name Field */}
                    <div>
                      <label className="block text-[#1C221E] font-outfit font-bold text-sm mb-2 pl-1">
                        Child's Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Aarav Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-5 py-4 bg-[#F5F4EB]/30 border border-[#E4E3DA] rounded-2xl focus:outline-none focus:border-[#3F634D] focus:ring-1 focus:ring-[#3F634D] transition-all duration-200 font-bold"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-[#1C221E] font-outfit font-bold text-sm mb-2 pl-1">
                        Parent's Email
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. parent@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-4 bg-[#F5F4EB]/30 border border-[#E4E3DA] rounded-2xl focus:outline-none focus:border-[#3F634D] focus:ring-1 focus:ring-[#3F634D] transition-all duration-200 font-bold"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label className="block text-[#1C221E] font-outfit font-bold text-sm mb-2 pl-1">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-5 py-4 bg-[#F5F4EB]/30 border border-[#E4E3DA] rounded-2xl focus:outline-none focus:border-[#3F634D] focus:ring-1 focus:ring-[#3F634D] transition-all duration-200 font-bold"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full font-outfit font-bold text-sm uppercase tracking-wider py-4 px-6 bg-[#3F634D] hover:bg-[#324f3d] text-[#F5F4EB] rounded-2xl shadow-sm hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        'Submit Registration'
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-400 font-bold">
                      By registering, you agree to our privacy policy and terms.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-[#E4E3DA] bg-white text-center">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span className="w-2.5 h-5 rounded-full bg-[#3F634D]"></span>
              <span className="w-2.5 h-5 rounded-full bg-[#DC7A31]"></span>
              <span className="w-2.5 h-5 rounded-full bg-[#5F72BE]"></span>
            </div>
            <span className="font-outfit font-black text-xl tracking-tight text-[#1C221E]">
              Kidrove
            </span>
          </div>
          
          <p className="text-sm font-bold text-slate-500">
            &copy; {new Date().getFullYear()} Kidrove. All rights reserved. Made for young creators.
          </p>
        </div>
      </footer>
    </div>
  );
}
