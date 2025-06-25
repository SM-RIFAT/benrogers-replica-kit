
import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      icon: <Code size={40} />,
      title: 'Frontend Development',
      description: 'Expert in React, TypeScript, and modern CSS frameworks'
    },
    {
      icon: <Zap size={40} />,
      title: 'Backend Development',
      description: 'Proficient in Node.js, Python, and database management'
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces'
    },
    {
      icon: <Users size={40} />,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication skills'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with over 5 years of experience creating digital solutions 
            that bridge the gap between design and functionality. I love turning complex problems 
            into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105"
            >
              <div className="text-purple-400 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Figma'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full hover:bg-purple-800 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
