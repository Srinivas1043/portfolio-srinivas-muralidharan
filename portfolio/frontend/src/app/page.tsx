'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './contexts/ThemeContext';

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const certifications = [
    {
      title: "Certified Data Engineer Associate",
      issuer: "Databricks",
      date: "Oct 2025",
      skills: ["Azure Databricks", "Apache Spark", "Data Streaming"],
      id: "162449464"
    },
    {
      title: "Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "Sep 2022",
      id: "I400-1964"
    },
    {
      title: "Professional Cloud DevOps Engineer",
      issuer: "Google Cloud",
      date: "In Progress"
    },
    {
      title: "LLMOps Basics",
      issuer: "DeepLearning.AI",
      date: "Aug 2025",
      skills: ["LLMOps"]
    },
    {
      title: "Cypher Fundamentals",
      issuer: "Neo4j",
      date: "Mar 2024",
      id: "80a5a38a"
    },
    {
      title: "Graph Data Modeling",
      issuer: "Neo4j",
      date: "Mar 2024",
      id: "8e96b761"
    },
    {
      title: "Neo4j Fundamentals",
      issuer: "Neo4j",
      date: "Mar 2024",
      id: "e0bb5598"
    },
    {
      title: "Generative AI Fundamentals Accreditation",
      issuer: "Databricks",
      date: "Oct 2023",
      id: "E-1Q55ZV",
      skills: ["AI"]
    },
    {
      title: "Azure Data Engineer Associate",
      issuer: "Microsoft",
      date: "Mar 2022",
      id: "990963600"
    },
    {
      title: "Azure Cosmos DB Developer Prioritized",
      issuer: "Microsoft",
      date: "Sep 2022"
    },
    {
      title: "LangChain for LLM Application Development",
      issuer: "DeepLearning.AI",
      skills: ["LangChain", "LLMs"]
    }
  ];

  const projects = [
    {
      title: "AI-Powered Healthcare Startup",
      description: "Developing an AI-driven healthcare analytics platform for early disease detection.",
      tech: ["AI/ML", "Healthcare Tech", "Product Strategy"],
      impact: "In Development"
    },
    {
      title: "Referral Revenue Optimization",
      description: "Implemented an AI-powered referral system that increased revenue by 32%.",
      tech: ["Python", "Machine Learning", "Azure"],
      impact: "32% Revenue Increase"
    },
    {
      title: "Consent Management Platform",
      description: "Engineered an advanced consent management system improving accuracy by 45%.",
      tech: ["Python", "NLP", "Databricks"],
      impact: "45% Accuracy Improvement"
    },
    {
      title: "Multi-Country NLP Classifier",
      description: "Deployed NLP classifiers achieving 90% accuracy across 8+ international markets.",
      tech: ["Python", "Hugging Face", "MLOps"],
      impact: "90% Accuracy"
    },
    {
      title: "Google Maps Migration",
      description: "Optimized data pipeline performance, reducing runtime from 18h to 7h.",
      tech: ["Python", "Apache Spark", "Azure"],
      impact: "61% Faster Runtime"
    }
  ];

  const experiences = [
    {
      title: "AI Scientist & Senior Data Engineer",
      company: "AniCura",
      period: "2024 - Present",
      description: "Leading AI initiatives and advanced data engineering projects in healthcare. designing scalable architectures for complex medical data."
    },
    {
      title: "Data Engineer",
      company: "FrieslandCampina",
      period: "2023 - 2024",
      description: "Developed scalable data pipelines and ML solutions for consumer analytics, driving data-informed decision making."
    },
    {
      title: "Data Engineer",
      company: "Macaw",
      period: "2021 - 2022",
      description: "Specialized in cloud data architectures and enterprise analytics solutions for diverse clients."
    }
  ];

  return (
    <div className="min-h-screen bg-transparent transition-colors duration-500 font-sans selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-200">

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-[-1] bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card backdrop-blur-md border-b border-white/20 dark:border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-serif font-bold tracking-tight cursor-pointer hover:opacity-80 transition-opacity bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300"
          >
            SM.
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {['About', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 tech-border ${activeSection === item.toLowerCase()
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-800 dark:text-slate-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8 animate-fade-in">
          {['About', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-2xl font-serif font-medium text-slate-900 dark:text-slate-100"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => { toggleTheme(); setIsMenuOpen(false); }}
            className="mt-8 px-6 py-2 border border-slate-200 dark:border-slate-700 rounded-full"
          >
            Switch Theme
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-200/20 to-purple-200/20 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full mb-8 border border-blue-100 dark:border-blue-800">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                Available for Innovation
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
              Engineering Data <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                For Society.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-12 max-w-2xl">
              I am a <span className="font-semibold text-slate-900 dark:text-white">Data Specialist and Architect</span> deeply focused on AI and Tech Development. My passion lies in solving complex problems to create meaningful social impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center sm:justify-start"
              >
                View Selected Work
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 border border-slate-200 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                More About Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden glass-card relative group">
                {/* Placeholder for potential profile image */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <span className="text-9xl opacity-20 font-serif">SM</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white font-serif italic text-lg">"Innovating for a better tomorrow"</p>
                </div>
              </div>
              {/* Decor element */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            </div>

            <div className="md:col-span-7">
              <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">About Me</h2>
              <h3 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-8">
                Bridging the gap between technical complexity and social impact.
              </h3>

              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                <p>
                  With a strong foundation in <span className="text-slate-900 dark:text-white font-medium">Data Engineering and AI</span>, I specialize in building robust, scalable architectures that empower organizations to make data-driven decisions.
                </p>
                <p>
                  My expertise spans across the modern data stack—from <span className="text-slate-900 dark:text-white font-medium">Azure and Databricks</span> to advanced Graph Databases like Neo4j. But beyond the tech, I am driven by a mission: to leverage these powerful tools to solve real-world problems that support and improve society.
                </p>
                <p>
                  Whether it's optimizing healthcare diagnostics or ensuring ethical data governance, I believe in technology as a force for good.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-slate-900 dark:text-white mb-1">5+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-900 dark:text-white mb-1">15+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-slate-50/50 dark:bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">Career</h2>
              <h3 className="text-4xl font-serif font-bold text-slate-900 dark:text-white">Professional Journey</h3>
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card hover:bg-white dark:hover:bg-slate-900 p-8 rounded-xl transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-blue-500"
              >
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-3 text-slate-500 dark:text-slate-400 font-medium font-mono text-sm">
                    {exp.period}
                  </div>
                  <div className="md:col-span-9">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.company}
                      </h3>
                      <span className="text-lg text-slate-700 dark:text-slate-300 font-medium">{exp.title}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 bg-grid-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-slate-950 dark:via-transparent dark:to-slate-950 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">Expertise</h2>
            <h3 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
              Certifications & Credentials
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Continuous learning is core to my professional philosophy. Here are some of the specialized certifications I've earned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-card p-6 rounded-xl card-hover flex flex-col justify-between h-full bg-slate-50/50 dark:bg-slate-900/50">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md">
                      {cert.issuer}
                    </span>
                    {cert.date && <span className="text-xs text-slate-400 font-mono">{cert.date}</span>}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  {cert.id && <p className="text-xs text-slate-400 font-mono mb-4">ID: {cert.id}</p>}
                </div>

                {cert.skills && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        #{skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">Portfolio</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-16">Selected Projects</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.impact && (
                      <span className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                        {project.impact}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-light text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-md font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-8">
            Let's build something meaningful.
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 font-light max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, from technical consulting to full-time roles in AI and Data Engineering.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:sm1043@gmail.com"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
            >
              Contact Me
            </a>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/srinivas-m-8019ba199/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/Srinivas1043"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} Srinivas Muralidharan</p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <span>Next.js</span>
            <span>•</span>
            <span>Tailwind</span>
            <span>•</span>
            <span>Vercel</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
