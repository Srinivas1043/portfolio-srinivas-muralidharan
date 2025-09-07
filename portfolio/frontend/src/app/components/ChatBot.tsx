'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Srinivas's AI assistant. I can tell you more about his experience, projects, interests, or answer any questions about his background. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Knowledge base about Srinivas
  const knowledgeBase = {
    experience: {
      keywords: ['experience', 'work', 'job', 'career', 'years', 'background'],
      response: "Srinivas has 5+ years of experience as a Data Engineer and Scientist across finance, FMCG, and healthcare industries. He specializes in building scalable data pipelines using PySpark, Databricks, and Azure, with a focus on production-ready solutions and DevOps practices."
    },
    skills: {
      keywords: ['skills', 'technologies', 'tech', 'tools', 'programming', 'languages'],
      response: "His core expertise includes Data Engineering (PySpark, Databricks, Azure, ETL/ELT), AI & Machine Learning (NLP, LLM, Knowledge Graphs), and DevOps & Cloud (CI/CD, Azure, Monitoring). He's particularly passionate about NLP and Large Language Models."
    },
    projects: {
      keywords: ['projects', 'work', 'portfolio', 'built', 'created', 'developed'],
      response: "Some of his notable projects include: 1) NLP Knowledge Graph Platform - An enterprise system using NLP to extract insights from unstructured data, 2) Real-time Data Pipeline for financial analytics using Databricks, and 3) LLM-powered Analytics platform for business insights."
    },
    personal: {
      keywords: ['personal', 'hobbies', 'interests', 'cricket', 'travel', 'yoga', 'dhoni', 'sadhguru', 'chennai'],
      response: "Srinivas is from Chennai, India. He's passionate about cricket (big MS Dhoni fan!), loves traveling and exploring new places, enjoys reading and research, practices yoga for fitness, and finds inspiration in Sadhguru's teachings. He's also interested in functional medicine and book writing."
    },
    location: {
      keywords: ['where', 'location', 'from', 'chennai', 'india'],
      response: "Srinivas is originally from Chennai, India. Chennai is known as the 'Detroit of India' for its automobile industry and is also a major IT hub in South India."
    },
    education: {
      keywords: ['education', 'study', 'degree', 'university', 'college'],
      response: "Srinivas has a robust engineering background that laid the foundation for his data engineering and science career. His technical expertise spans multiple domains from traditional engineering to cutting-edge AI technologies."
    },
    ai: {
      keywords: ['ai', 'artificial intelligence', 'nlp', 'llm', 'machine learning', 'knowledge graphs'],
      response: "Srinivas is deeply passionate about AI, particularly Natural Language Processing (NLP) and Large Language Models (LLM). He has extensive experience with Knowledge Graphs and turning complex data into actionable insights. He loves working on AI solutions that support businesses in meeting their strategic needs."
    },
    contact: {
      keywords: ['contact', 'email', 'reach', 'connect', 'hire', 'collaboration'],
      response: "You can reach Srinivas at sm1043@gmail.com. He's always open to discussing data engineering opportunities, AI projects, career discussions, or even just having a chat about cricket! Feel free to connect with him on LinkedIn or GitHub as well."
    },
    default: {
      keywords: [],
      response: "That's an interesting question! While I'd love to help, I might not have specific information about that. You can ask me about Srinivas's experience, skills, projects, personal interests, or how to contact him. Is there something specific about his background you'd like to know?"
    }
  };

  const findBestResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Great to meet you! I'm here to tell you all about Srinivas Muralidharan. What would you like to know? You can ask about his experience, skills, projects, personal interests, or anything else!";
    }

    // Find the best matching category
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (category !== 'default') {
        const matches = data.keywords.some(keyword => lowerMessage.includes(keyword));
        if (matches) {
          return data.response;
        }
      }
    }

    return knowledgeBase.default.response;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findBestResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg transition-all duration-300 z-50 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-blue-600 hover:bg-blue-700'
        } text-white flex items-center justify-center`}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col z-50">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                AI
              </div>
              <div>
                <h3 className="font-semibold">Srinivas's AI Assistant</h3>
                <p className="text-xs text-blue-100">Ask me anything about Srinivas!</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Srinivas..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
