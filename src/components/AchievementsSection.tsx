
import React from 'react';
import { Trophy, Award, Star, Medal } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Trophy size={32} />,
      title: 'Best Paper Award',
      description: 'International Conference on Machine Learning (ICML) 2023',
      year: '2023'
    },
    {
      icon: <Award size={32} />,
      title: 'Outstanding Research Excellence Award',
      description: 'University Research Excellence Program',
      year: '2023'
    },
    {
      icon: <Star size={32} />,
      title: 'Top 1% Researcher',
      description: 'ResearchGate Platform Recognition',
      year: '2022'
    },
    {
      icon: <Medal size={32} />,
      title: 'AI Innovation Grant',
      description: 'National Science Foundation ($50,000)',
      year: '2022'
    },
    {
      icon: <Trophy size={32} />,
      title: 'Hackathon Winner',
      description: 'Global AI Challenge - Computer Vision Track',
      year: '2021'
    },
    {
      icon: <Award size={32} />,
      title: 'Dean\'s List',
      description: 'Graduated Summa Cum Laude',
      year: '2020'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Achievements</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Recognition and awards for contributions to deep learning research and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="text-purple-400 mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-400 mb-3">
                {achievement.description}
              </p>
              <span className="inline-block px-3 py-1 bg-purple-800/20 text-purple-300 rounded-full text-sm">
                {achievement.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
