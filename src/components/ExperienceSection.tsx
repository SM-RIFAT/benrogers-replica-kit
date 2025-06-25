
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      position: 'Senior Deep Learning Researcher',
      company: 'Tech Company Name',
      location: 'City, Country',
      period: '2023 - Present',
      description: 'Leading research initiatives in deep learning and AI, developing state-of-the-art models for computer vision and natural language processing applications.',
      achievements: [
        'Developed novel neural network architectures',
        'Published 5+ research papers in top-tier venues',
        'Led a team of 10+ researchers and engineers'
      ]
    },
    {
      position: 'Deep Learning Engineer',
      company: 'AI Startup',
      location: 'City, Country',
      period: '2021 - 2023',
      description: 'Designed and implemented deep learning solutions for various industry applications, focusing on computer vision and predictive analytics.',
      achievements: [
        'Built scalable ML pipelines processing 1M+ data points daily',
        'Improved model accuracy by 25% through novel optimization techniques',
        'Mentored junior developers in deep learning best practices'
      ]
    },
    {
      position: 'Research Assistant',
      company: 'University Research Lab',
      location: 'City, Country',
      period: '2019 - 2021',
      description: 'Conducted research in machine learning and neural networks, contributing to multiple research projects and publications.',
      achievements: [
        'Co-authored 3 research papers in peer-reviewed journals',
        'Developed novel algorithms for image recognition',
        'Presented research at international conferences'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Experience</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            My professional journey in deep learning and artificial intelligence research and development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Briefcase className="text-purple-400 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                  </div>
                  <h4 className="text-lg text-gray-300 mb-2">{exp.company}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3">
                    <div className="flex items-center text-gray-400 mb-1 sm:mb-0">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-4">{exp.description}</p>
              
              <div>
                <h5 className="text-white font-semibold mb-2">Key Achievements:</h5>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
