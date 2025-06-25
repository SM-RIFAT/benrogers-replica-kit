
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Ph.D. in Computer Science',
      institution: 'University Name',
      location: 'City, Country',
      period: '2020 - 2024',
      description: 'Focus on Deep Learning and Neural Networks'
    },
    {
      degree: 'M.Sc. in Computer Science',
      institution: 'University Name',
      location: 'City, Country',
      period: '2018 - 2020',
      description: 'Specialization in Machine Learning and AI'
    },
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'University Name',
      location: 'City, Country',
      period: '2014 - 2018',
      description: 'Foundation in Computer Science and Programming'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Education</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            My academic journey and qualifications in the field of computer science and artificial intelligence.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="text-purple-400 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  </div>
                  <h4 className="text-lg text-gray-300 mb-2">{edu.institution}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3">
                    <div className="flex items-center text-gray-400 mb-1 sm:mb-0">
                      <Calendar size={16} className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-400">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
