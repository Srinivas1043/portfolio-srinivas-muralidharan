'use client';

import React, { useState } from 'react';

const ExperienceProjects = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      title: 'AI Scientist & Senior Data Engineer',
      company: 'AniCura',
      period: '2024 - Present',
      description: 'Leading AI initiatives and advanced data engineering projects, focusing on healthcare data analytics and predictive modeling.',
      technologies: ['Azure', 'Databricks', 'PySpark', 'MLOps', 'Python', 'AI/ML'],
      achievements: [
        'Implemented AI-driven analytics platform for veterinary healthcare',
        'Optimized data pipelines reducing processing time by 60%',
        'Led cross-functional team of 8 engineers and data scientists'
      ]
    },
    {
      title: 'Data Engineer',
      company: 'FrieslandCampina',
      period: '2023 - 2024',
      description: 'Developed scalable data pipelines and ML solutions for consumer goods analytics and supply chain optimization.',
      technologies: ['Azure', 'SQL', 'Python', 'ETL', 'Machine Learning'],
      achievements: [
        'Built real-time supply chain analytics platform',
        'Reduced data processing costs by 40%',
        'Implemented ML models for demand forecasting'
      ]
    },
    {
      title: 'Data Engineer',
      company: 'Amazon',
      period: '2022 - 2023',
      description: 'Built large-scale data processing systems and analytics solutions for e-commerce platform optimization.',
      technologies: ['AWS', 'Spark', 'Python', 'Kafka', 'Redis', 'PostgreSQL'],
      achievements: [
        'Designed and implemented distributed data processing systems',
        'Improved data pipeline reliability by 99.9%',
        'Processed petabytes of customer interaction data'
      ]
    },
    {
      title: 'Data Engineer',
      company: 'Macaw',
      period: '2021 - 2022',
      description: 'Specialized in cloud data architectures and analytics solutions for various enterprise clients.',
      technologies: ['Azure', 'Power BI', 'SQL Server', 'Python', 'CI/CD'],
      achievements: [
        'Delivered 15+ successful data migration projects',
        'Established best practices for cloud data architecture',
        'Mentored junior engineers and analysts'
      ]
    }
  ];

  const projects = [
    {
      title: 'Referral Revenue Optimization',
      category: 'Business Intelligence',
      description: 'Developed AI-powered referral system that increased referral revenue by 32% through intelligent matching and prediction algorithms.',
      technologies: ['Python', 'Machine Learning', 'Azure', 'SQL'],
      impact: '32% increase in referral revenue',
      status: 'Completed',
      highlights: [
        'Built recommendation engine for optimal referral matching',
        'Implemented real-time analytics dashboard',
        'Reduced manual processing time by 75%'
      ]
    },
    {
      title: 'Consent Management Platform',
      category: 'Data Privacy',
      description: 'Created advanced consent management system with 45% improved accuracy in privacy compliance and data handling.',
      technologies: ['Python', 'NLP', 'Azure', 'Databricks'],
      impact: '45% improved accuracy',
      status: 'Completed',
      highlights: [
        'Automated consent classification using NLP',
        'Implemented GDPR compliance monitoring',
        'Built real-time consent tracking system'
      ]
    },
    {
      title: 'Multi-Country NLP Classifier',
      category: 'Natural Language Processing',
      description: 'Developed NLP classifiers achieving 90% accuracy across 8+ countries for multilingual content analysis.',
      technologies: ['Python', 'Hugging Face', 'Transformers', 'MLOps'],
      impact: '90% accuracy across 8+ countries',
      status: 'Completed',
      highlights: [
        'Handled 12+ languages with high accuracy',
        'Deployed scalable MLOps pipeline',
        'Reduced manual content review by 80%'
      ]
    },
    {
      title: 'Google Maps Data Migration',
      category: 'Data Engineering',
      description: 'Optimized Google Maps scraper migration, dramatically reducing runtime from 18 hours to 7 hours.',
      technologies: ['Python', 'Apache Spark', 'Google APIs', 'Azure'],
      impact: 'Reduced runtime 18h → 7h',
      status: 'Completed',
      highlights: [
        'Redesigned data extraction pipeline',
        'Implemented parallel processing architecture',
        'Improved data quality by 95%'
      ]
    },
    {
      title: 'Glaucoma Detection System',
      category: 'Computer Vision',
      description: 'Built CNN-based glaucoma detection system using OCT scans for early diagnosis and medical imaging analysis.',
      technologies: ['Python', 'TensorFlow', 'Computer Vision', 'Medical Imaging'],
      impact: 'Early glaucoma detection',
      status: 'Research',
      highlights: [
        'Achieved 94% accuracy in glaucoma detection',
        'Processed 10,000+ OCT scan images',
        'Collaborated with medical professionals'
      ]
    },
    {
      title: 'Knowledge Graph Platform',
      category: 'AI & Knowledge Systems',
      description: 'Developing advanced knowledge graph platform for enterprise data integration and intelligent insights.',
      technologies: ['Neo4j', 'Python', 'NLP', 'Graph Algorithms'],
      impact: 'Enterprise knowledge integration',
      status: 'In Progress',
      highlights: [
        'Building enterprise-scale knowledge graphs',
        'Implementing graph-based AI reasoning',
        'Developing semantic search capabilities'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Research':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transforming data into insights across healthcare, retail, and technology sectors
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-1 shadow-sm border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'experience'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'projects'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Featured Projects
            </button>
          </div>
        </div>

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 text-sm">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1 mb-2">
                      {project.title}
                    </h3>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">
                    Impact: {project.impact}
                  </div>
                  <ul className="list-disc list-inside space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 text-xs">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceProjects;
