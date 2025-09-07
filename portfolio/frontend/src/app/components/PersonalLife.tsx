'use client';

import React from 'react';

const PersonalLife = () => {
  const interests = [
    {
      title: 'Cricket Analytics',
      icon: '🏏',
      description: 'Passionate about cricket scoring and analytics. Combining my love for the sport with data science to analyze player performance and game statistics.',
      highlights: [
        'Developed cricket scoring applications',
        'Performance analytics for players',
        'Match prediction algorithms',
        'Statistical analysis of game patterns'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Yoga & Fitness',
      icon: '🧘‍♂️',
      description: 'Dedicated practitioner of yoga and fitness enthusiast. Believing in the balance of mind, body, and spirit for optimal performance in all areas of life.',
      highlights: [
        'Daily yoga and meditation practice',
        'Strength training and cardio',
        'Mindfulness and wellness coaching',
        'Holistic health approach'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Travel & Exploration',
      icon: '✈️',
      description: 'Avid traveler exploring different cultures, cuisines, and landscapes. Each journey brings new perspectives and inspiration for creative problem-solving.',
      highlights: [
        'Explored 25+ countries',
        'Cultural immersion experiences',
        'Photography and storytelling',
        'Adventure sports and hiking'
      ],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Book Writing',
      icon: '📚',
      description: 'Currently working on publications related to AI, healthcare, and data science. Passionate about sharing knowledge and insights with the broader community.',
      highlights: [
        'AI and healthcare research papers',
        'Technical writing and documentation',
        'Knowledge sharing blog posts',
        'Industry conference presentations'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Food & AI Research',
      icon: '🔬',
      description: 'Exploring the intersection of artificial intelligence and nutrition science. Researching how AI can revolutionize personalized nutrition and food systems.',
      highlights: [
        'Personalized nutrition algorithms',
        'Food recommendation systems',
        'Nutritional data analysis',
        'Sustainable food tech research'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Photography',
      icon: '📸',
      description: 'Capturing moments and stories through the lens. Specializing in travel, nature, and street photography with a focus on authentic human experiences.',
      highlights: [
        'Travel and landscape photography',
        'Street photography projects',
        'Digital art and editing',
        'Visual storytelling techniques'
      ],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const blogPosts = [
    {
      title: 'The Future of AI in Healthcare',
      excerpt: 'Exploring how artificial intelligence is transforming medical diagnosis and treatment planning.',
      date: 'December 2024',
      readTime: '8 min read',
      category: 'AI & Healthcare'
    },
    {
      title: 'Building Scalable Data Pipelines',
      excerpt: 'Best practices for designing and implementing robust data engineering solutions.',
      date: 'November 2024',
      readTime: '12 min read',
      category: 'Data Engineering'
    },
    {
      title: 'Cricket Analytics: Beyond the Numbers',
      excerpt: 'How data science is revolutionizing cricket strategy and player performance analysis.',
      date: 'October 2024',
      readTime: '6 min read',
      category: 'Sports Analytics'
    }
  ];

  return (
    <section id="personal" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Personal Life & Interests
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Beyond the world of data and algorithms, I'm passionate about life's diverse experiences 
            and continuous learning in various domains.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{interest.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {interest.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {interest.description}
              </p>

              <div className="space-y-2">
                {interest.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${interest.color}`}></div>
                    <span className="text-gray-600 dark:text-gray-400 text-xs">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Photo Gallery Placeholder */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Life in Pictures
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Photo gallery coming soon - featuring travel adventures, cricket moments, and life experiences
            </p>
          </div>
        </div>

        {/* Blog Teaser */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Blog Posts
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sharing insights on technology, life, and everything in between
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    {post.category}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-2 mb-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="mt-4">
                  <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
              View All Posts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalLife;
