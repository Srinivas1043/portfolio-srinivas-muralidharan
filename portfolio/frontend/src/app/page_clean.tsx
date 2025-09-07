import Image from "next/image";
import ChatBot from "./components/ChatBot";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-400 rounded-sm flex items-center justify-center">
                <span className="text-black text-sm font-bold">SM</span>
              </div>
              <span className="text-green-400 font-bold">srinivas.dev</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm">
              <a href="#about" className="text-gray-400 hover:text-green-400 transition-colors">[about]</a>
              <a href="#skills" className="text-gray-400 hover:text-green-400 transition-colors">[skills]</a>
              <a href="#experience" className="text-gray-400 hover:text-green-400 transition-colors">[experience]</a>
              <a href="#projects" className="text-gray-400 hover:text-green-400 transition-colors">[projects]</a>
              <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors">[contact]</a>
            </div>
            <button className="md:hidden text-green-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {/* Terminal Header */}
            <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm ml-4">~/portfolio/srinivas-muralidharan</span>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">$</span>
                  <span className="text-white">whoami</span>
                </div>
                <div className="text-green-400 ml-4">
                  <div>Srinivas Muralidharan</div>
                  <div className="text-gray-400">Data Engineer & Scientist</div>
                </div>
                
                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-green-400">$</span>
                  <span className="text-white">cat bio.txt</span>
                </div>
                <div className="text-gray-300 ml-4 space-y-2">
                  <div>→ 5+ years transforming data into actionable insights</div>
                  <div>→ Specialized in AI, NLP, Knowledge Graphs, LLM</div>
                  <div>→ Expert in PySpark, Databricks, Azure pipelines</div>
                  <div>→ From Chennai, India 🇮🇳</div>
                </div>

                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-green-400">$</span>
                  <span className="text-white">ls -la current_status/</span>
                </div>
                <div className="text-gray-300 ml-4">
                  <div className="text-green-400">✓ Available for new opportunities</div>
                  <div className="text-green-400">✓ Open to AI/ML collaborations</div>
                  <div className="text-green-400">✓ Building the future with data</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#experience"
                className="px-6 py-3 bg-green-400 text-black font-bold rounded hover:bg-green-300 transition-colors"
              >
                &gt; View Experience
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition-colors"
              >
                &gt; Get In Touch
              </a>
            </div>

            {/* AI Assistant Notice */}
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <span>AI assistant available for queries → try the chat bot!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-green-400">// About</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <span className="text-green-400">const</span> <span className="text-blue-400">profile</span> = {'{'}
                </p>
                <div className="ml-4 space-y-2">
                  <p><span className="text-red-400">experience</span>: <span className="text-yellow-400">"5+ years"</span>,</p>
                  <p><span className="text-red-400">expertise</span>: [<span className="text-yellow-400">"Data Engineering"</span>, <span className="text-yellow-400">"AI/ML"</span>, <span className="text-yellow-400">"NLP"</span>],</p>
                  <p><span className="text-red-400">industries</span>: [<span className="text-yellow-400">"Finance"</span>, <span className="text-yellow-400">"FMCG"</span>, <span className="text-yellow-400">"Healthcare"</span>],</p>
                  <p><span className="text-red-400">stack</span>: [<span className="text-yellow-400">"PySpark"</span>, <span className="text-yellow-400">"Databricks"</span>, <span className="text-yellow-400">"Azure"</span>],</p>
                  <p><span className="text-red-400">passion</span>: <span className="text-yellow-400">"Turning data into insights"</span>,</p>
                  <p><span className="text-red-400">location</span>: <span className="text-yellow-400">"Chennai, India"</span></p>
                </div>
                <p>{'}'}</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 text-green-400">// Current Focus</h2>
              <div className="space-y-4">
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">ACTIVE</span>
                  </div>
                  <h3 className="text-white font-bold">Knowledge Graph & LLM Integration</h3>
                  <p className="text-gray-400 text-sm">Building enterprise AI solutions</p>
                </div>
                
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-400 text-sm">LEARNING</span>
                  </div>
                  <h3 className="text-white font-bold">Advanced NLP Techniques</h3>
                  <p className="text-gray-400 text-sm">Exploring latest AI developments</p>
                </div>
                
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-yellow-400 text-sm">RESEARCH</span>
                  </div>
                  <h3 className="text-white font-bold">Functional Medicine & Book Writing</h3>
                  <p className="text-gray-400 text-sm">Personal projects & interests</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-green-400">// Technical Stack</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Data Engineering */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
                <h3 className="text-xl font-bold text-white">Data Engineering</h3>
              </div>
              <div className="space-y-2">
                {['PySpark', 'Databricks', 'Azure', 'ETL/ELT', 'Apache Kafka', 'SQL'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <span className="text-green-400">▸</span>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI/ML */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="text-xl font-bold text-white">AI & Machine Learning</h3>
              </div>
              <div className="space-y-2">
                {['NLP', 'LLM', 'Knowledge Graphs', 'Python', 'TensorFlow', 'PyTorch'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <span className="text-green-400">▸</span>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
                <h3 className="text-xl font-bold text-white">DevOps & Cloud</h3>
              </div>
              <div className="space-y-2">
                {['Docker', 'Kubernetes', 'CI/CD', 'Git', 'Monitoring', 'Azure Cloud'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <span className="text-green-400">▸</span>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-green-400">// Industry Experience</h2>
          
          <div className="space-y-8">
            {[
              {
                industry: 'Finance',
                icon: '💰',
                description: 'Built robust data pipelines for financial analytics and risk assessment',
                tech: ['Real-time Processing', 'Risk Analytics', 'Regulatory Compliance']
              },
              {
                industry: 'FMCG',
                icon: '📦',
                description: 'Developed supply chain analytics and consumer behavior insights',
                tech: ['Supply Chain Optimization', 'Consumer Analytics', 'Demand Forecasting']
              },
              {
                industry: 'Healthcare',
                icon: '🏥',
                description: 'Created patient data analytics and healthcare outcome predictions',
                tech: ['Patient Analytics', 'Outcome Prediction', 'Medical Data Processing']
              }
            ].map((exp, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{exp.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.industry}</h3>
                      <span className="text-green-400 text-sm">5+ YEARS</span>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800 border border-gray-600 text-gray-300 text-sm rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-green-400">// Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'NLP Knowledge Graph Platform',
                status: 'Production',
                description: 'Enterprise knowledge graph system using NLP to extract insights from unstructured data',
                tech: ['NLP', 'Knowledge Graphs', 'PySpark', 'Azure'],
                lines: '15k+'
              },
              {
                name: 'Real-time Data Pipeline',
                status: 'Active',
                description: 'Scalable real-time data processing pipeline for financial analytics using Databricks',
                tech: ['Databricks', 'PySpark', 'Azure', 'Kafka'],
                lines: '12k+'
              },
              {
                name: 'LLM Analytics Platform',
                status: 'Beta',
                description: 'AI-driven analytics platform leveraging Large Language Models for business insights',
                tech: ['LLM', 'AI', 'Python', 'NLP'],
                lines: '8k+'
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-green-400 transition-colors">
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                  <span className="text-green-400 text-sm font-mono">{project.name}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    project.status === 'Production' ? 'bg-green-400 text-black' :
                    project.status === 'Active' ? 'bg-blue-400 text-black' : 'bg-yellow-400 text-black'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800 border border-gray-600 text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{project.lines} lines</span>
                    <div className="flex space-x-4">
                      <a href="#" className="text-green-400 hover:text-green-300">view</a>
                      <a href="#" className="text-blue-400 hover:text-blue-300">code</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-green-400">// Get In Touch</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">→</span>
                    <span className="text-gray-300">email:</span>
                    <a href="mailto:sm1043@gmail.com" className="text-blue-400 hover:text-blue-300">sm1043@gmail.com</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">→</span>
                    <span className="text-gray-300">github:</span>
                    <a href="https://github.com/Srinivas1043" className="text-blue-400 hover:text-blue-300">@Srinivas1043</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">→</span>
                    <span className="text-gray-300">linkedin:</span>
                    <a href="#" className="text-blue-400 hover:text-blue-300">/in/srinivas-muralidharan</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">→</span>
                    <span className="text-gray-300">location:</span>
                    <span className="text-yellow-400">Chennai, India 🇮🇳</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h3 className="text-white font-bold mb-4">Available for:</h3>
                  <div className="space-y-2">
                    {[
                      'Data Engineering Projects',
                      'AI/ML Collaborations', 
                      'Speaking Opportunities',
                      'Technical Consultations',
                      'Cricket discussions! 🏏'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-green-400">✓</span>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h3 className="text-white font-bold mb-4">Send Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white focus:border-green-400 focus:outline-none">
                      <option>Project Discussion</option>
                      <option>Career Opportunity</option>
                      <option>Collaboration</option>
                      <option>Speaking Request</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your message..."
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-green-400 focus:outline-none resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-green-400 text-black font-bold rounded hover:bg-green-300 transition-colors"
                  >
                    &gt; send_message()
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-gray-400 text-sm">
            <p>© 2025 Srinivas Muralidharan | Built with Next.js & ❤️</p>
            <p className="mt-2">
              <span className="text-green-400">status:</span> available for new opportunities
            </p>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <ChatBot />
    </div>
  );
}
