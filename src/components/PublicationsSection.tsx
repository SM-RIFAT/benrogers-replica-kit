
import React from 'react';
import { FileText, ExternalLink, Users } from 'lucide-react';

const PublicationsSection = () => {
  const publications = [
    {
      title: 'Deep Learning Approaches for Computer Vision Applications',
      authors: 'S M Golam Rifat, Co-author Name',
      journal: 'Journal of Artificial Intelligence Research',
      year: '2024',
      type: 'Journal Article',
      url: '#'
    },
    {
      title: 'Novel Neural Network Architectures for Natural Language Processing',
      authors: 'S M Golam Rifat, Co-author Name, Another Author',
      conference: 'International Conference on Machine Learning (ICML)',
      year: '2023',
      type: 'Conference Paper',
      url: '#'
    },
    {
      title: 'Advances in Reinforcement Learning for Autonomous Systems',
      authors: 'S M Golam Rifat',
      journal: 'IEEE Transactions on Neural Networks',
      year: '2023',
      type: 'Journal Article',
      url: '#'
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Publications</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            My research contributions to the field of deep learning and artificial intelligence.
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <FileText className="text-purple-400 mr-3" size={20} />
                    <span className="px-3 py-1 bg-purple-800/20 text-purple-300 rounded-full text-sm">
                      {pub.type}
                    </span>
                    <span className="ml-3 text-gray-400">{pub.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{pub.title}</h3>
                  
                  <div className="flex items-center text-gray-400 mb-2">
                    <Users size={16} className="mr-2" />
                    <span>{pub.authors}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {pub.journal || pub.conference}
                  </p>
                </div>
                
                <a
                  href={pub.url}
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>View</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
