'use client';

import React from 'react';
import Image from 'next/image';

const About = () => {
  const timeline = [
    {
      year: '2024',
      title: 'AI Scientist & Senior Data Engineer',
      organization: 'AniCura',
      description: 'Leading AI initiatives and advanced data engineering projects.',
      type: 'work'
    },
    {
      year: '2023',
      title: 'Data Engineer',
      organization: 'FrieslandCampina',
      description: 'Developed scalable data pipelines and ML solutions.',
      type: 'work'
    },
    {
      year: '2022',
      title: 'Data Engineer',
      organization: 'Amazon',
      description: 'Built large-scale data processing systems.',
      type: 'work'
    },
    {
      year: '2021',
      title: 'Data Engineer',
      organization: 'Macaw',
      description: 'Specialized in cloud data architectures and analytics.',
      type: 'work'
    },
    {
      year: '2020',
      title: 'MSc in Artificial Intelligence',
      organization: 'Vrije Universiteit Amsterdam',
      description: 'Specialized in machine learning, NLP, and knowledge graphs.',
      type: 'education'
    },
    {
      year: '2019',
      title: 'Azure Data Engineer Associate',
      organization: 'Microsoft',
      description: 'Certified in designing and implementing data solutions on Azure.',
      type: 'certification'
    },
    {
      year: '2019',
      title: 'Databricks Fundamentals',
      organization: 'Databricks',
      description: 'Certified in Databricks platform and Spark technologies.',
      type: 'certification'
    }
  ];

  const getIconForType = (type: string) => {
    switch (type) {
      case 'work':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2H8V6" />
          </svg>
        );
      case 'education':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        );
      case 'certification':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getColorForType = (type: string) => {
    switch (type) {
      case 'work':
        return 'text-blue-500 bg-blue-100 dark:bg-blue-900';
      case 'education':
        return 'text-green-500 bg-green-100 dark:bg-green-900';
      case 'certification':
        return 'text-purple-500 bg-purple-100 dark:bg-purple-900';
      default:
        return 'text-gray-500 bg-gray-100 dark:bg-gray-800';
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experienced Data Engineer and AI Scientist with expertise in transforming complex data 
            into actionable insights across healthcare, finance, and consumer goods industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info & Avatar */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="w-48 h-48 mx-auto lg:mx-0 mb-6 relative">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">SM</span>
                </div>
                {/* Placeholder for actual avatar */}
                {/* <Image
                  src="/avatar.jpg"
                  alt="Srinivas Muralidharan"
                  fill
                  className="rounded-full object-cover"
                /> */}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Srinivas Muralidharan
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Data Engineer & AI Scientist
              </p>
            </div>

            {/* Summary */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Professional Summary
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                With extensive experience in Data Engineering, AI, NLP, and Knowledge Graphs, 
                I've worked with leading companies including AniCura, FrieslandCampina, Amazon, 
                and Macaw. I hold an MSc in AI from Vrije Universiteit Amsterdam and am passionate 
                about leveraging data and AI to solve complex real-world problems.
              </p>
            </div>

            {/* Key Skills */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Core Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Azure', 'Databricks', 'PySpark', 'Hugging Face', 'Git', 'SQL', 
                  'MLOps', 'CI/CD', 'NLP', 'Knowledge Graphs', 'Python', 'Machine Learning'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Journey Timeline
            </h4>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-4 mb-8">
                  {/* Timeline dot */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${getColorForType(item.type)}`}>
                    {getIconForType(item.type)}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h5>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {item.organization}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
