'use client';

import React, { useState } from 'react';

const PublicationsAwards = () => {
  const [activeTab, setActiveTab] = useState('publications');

  const publications = [
    {
      title: 'Advanced Sentiment Analysis for Consumer Complaint Classification',
      authors: 'Srinivas Muralidharan, et al.',
      journal: 'International Journal of Data Science and Analytics',
      year: '2024',
      type: 'Journal Article',
      abstract: 'This paper presents a novel approach to sentiment analysis specifically designed for consumer complaint classification, achieving state-of-the-art results across multiple domains.',
      keywords: ['Sentiment Analysis', 'NLP', 'Consumer Analytics', 'Machine Learning'],
      status: 'Published',
      citations: 23,
      doi: '10.1007/s41060-024-00XXX',
      link: '#'
    },
    {
      title: 'Knowledge Graphs for Healthcare: A Comprehensive Survey',
      authors: 'Srinivas Muralidharan, Dr. Jane Smith, Prof. John Doe',
      journal: 'IEEE Transactions on Knowledge and Data Engineering',
      year: '2024',
      type: 'Survey Paper',
      abstract: 'A comprehensive review of knowledge graph applications in healthcare, covering current methodologies, challenges, and future directions.',
      keywords: ['Knowledge Graphs', 'Healthcare', 'AI', 'Medical Informatics'],
      status: 'Under Review',
      citations: 0,
      doi: 'Pending',
      link: '#'
    },
    {
      title: 'Automated Consumer Complaint Classification Using Deep Learning',
      authors: 'Srinivas Muralidharan, Research Team',
      journal: 'Proceedings of the International Conference on AI and Data Science',
      year: '2023',
      type: 'Conference Paper',
      abstract: 'Implementation of deep learning models for automated classification of consumer complaints with high accuracy and efficiency.',
      keywords: ['Deep Learning', 'Classification', 'Consumer Analytics', 'Automation'],
      status: 'Published',
      citations: 45,
      doi: '10.1145/3583XXX.35831XX',
      link: '#'
    },
    {
      title: 'Real-time Data Pipeline Optimization for Large-scale Analytics',
      authors: 'Srinivas Muralidharan, Engineering Team',
      journal: 'Journal of Big Data Engineering',
      year: '2023',
      type: 'Technical Paper',
      abstract: 'Novel approaches to optimizing real-time data pipelines for large-scale analytics, reducing latency and improving throughput.',
      keywords: ['Data Engineering', 'Real-time Analytics', 'Pipeline Optimization', 'Big Data'],
      status: 'Published',
      citations: 18,
      doi: '10.1186/s40537-023-00XXX',
      link: '#'
    },
    {
      title: 'AI-Driven Nutrition Personalization: A Machine Learning Approach',
      authors: 'Srinivas Muralidharan, Nutrition Research Lab',
      journal: 'Food and AI Research Quarterly',
      year: '2024',
      type: 'Research Article',
      abstract: 'Exploring the application of machine learning in personalized nutrition recommendations based on individual health profiles and preferences.',
      keywords: ['AI', 'Nutrition', 'Personalization', 'Healthcare'],
      status: 'In Preparation',
      citations: 0,
      doi: 'Pending',
      link: '#'
    }
  ];

  const certifications = [
    {
      title: 'Azure Data Engineer Associate',
      issuer: 'Microsoft',
      year: '2024',
      credentialId: 'AZ-104-XXXX',
      level: 'Professional',
      skills: ['Azure Data Factory', 'Azure Synapse', 'Data Lake', 'ETL/ELT'],
      badge: '🥇'
    },
    {
      title: 'Databricks Certified Data Engineer Professional',
      issuer: 'Databricks',
      year: '2024',
      credentialId: 'DBX-DE-PRO-XXX',
      level: 'Professional',
      skills: ['Apache Spark', 'Delta Lake', 'MLflow', 'Data Engineering'],
      badge: '🎖️'
    },
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      credentialId: 'AWS-SAA-XXXX',
      level: 'Associate',
      skills: ['Cloud Architecture', 'AWS Services', 'System Design', 'Security'],
      badge: '🏆'
    },
    {
      title: 'Generative AI Fundamentals',
      issuer: 'Google Cloud',
      year: '2024',
      credentialId: 'GCP-GAI-XXX',
      level: 'Specialist',
      skills: ['LLMs', 'Generative AI', 'Prompt Engineering', 'AI Ethics'],
      badge: '🤖'
    },
    {
      title: 'Machine Learning Engineering',
      issuer: 'Stanford University',
      year: '2023',
      credentialId: 'CS229-MLE-XXX',
      level: 'Advanced',
      skills: ['MLOps', 'Model Deployment', 'Feature Engineering', 'ML Systems'],
      badge: '🎓'
    },
    {
      title: 'Data Science Professional Certificate',
      issuer: 'IBM',
      year: '2022',
      credentialId: 'IBM-DS-PROF-XXX',
      level: 'Professional',
      skills: ['Python', 'SQL', 'Data Visualization', 'Statistical Analysis'],
      badge: '📊'
    }
  ];

  const awards = [
    {
      title: 'Best Data Engineering Project',
      organization: 'Tech Innovation Awards 2024',
      year: '2024',
      description: 'Recognized for outstanding innovation in data pipeline optimization and real-time analytics implementation.',
      category: 'Technical Excellence'
    },
    {
      title: 'Outstanding Research Contribution',
      organization: 'International AI Conference',
      year: '2023',
      description: 'Awarded for significant contributions to consumer complaint classification using advanced NLP techniques.',
      category: 'Research'
    },
    {
      title: 'Employee of the Year',
      organization: 'AniCura',
      year: '2024',
      description: 'Recognized for exceptional performance and leadership in AI initiatives and team development.',
      category: 'Leadership'
    },
    {
      title: 'Innovation in Healthcare AI',
      organization: 'Healthcare Technology Summit',
      year: '2024',
      description: 'Acknowledged for pioneering work in applying AI solutions to veterinary healthcare analytics.',
      category: 'Innovation'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'In Preparation':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Professional':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'Specialist':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Associate':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Publications & Recognition
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Contributing to the scientific community through research publications, 
            professional certifications, and industry recognition.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-1 shadow-sm border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('publications')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'publications'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Publications
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'certifications'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Certifications
            </button>
            <button
              onClick={() => setActiveTab('awards')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'awards'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Awards
            </button>
          </div>
        </div>

        {/* Publications Tab */}
        {activeTab === 'publications' && (
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(pub.status)}`}>
                        {pub.status}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{pub.type}</span>
                      {pub.citations > 0 && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {pub.citations} citations
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {pub.authors} • {pub.journal} ({pub.year})
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {pub.abstract}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>DOI: {pub.doi}</span>
                  <a
                    href={pub.link}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                  >
                    View Publication →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{cert.badge}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{cert.year}</span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    Credential ID: {cert.credentialId}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    Key Skills:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Awards Tab */}
        {activeTab === 'awards' && (
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {award.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {award.organization}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 leading-relaxed">
                      {award.description}
                    </p>
                    <span className="inline-block px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full">
                      {award.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicationsAwards;
