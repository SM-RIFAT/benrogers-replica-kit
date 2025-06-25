
import React from 'react';
import { Brain, Database, Cpu, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      icon: <Brain size={40} />,
      title: 'Deep Learning',
      description: 'Expert in neural networks, CNNs, RNNs, and transformer architectures'
    },
    {
      icon: <Cpu size={40} />,
      title: 'Machine Learning',
      description: 'Proficient in supervised, unsupervised, and reinforcement learning'
    },
    {
      icon: <Database size={40} />,
      title: 'Data Science',
      description: 'Advanced skills in data analysis, visualization, and big data processing'
    },
    {
      icon: <BookOpen size={40} />,
      title: 'Research',
      description: 'Published researcher with expertise in AI innovation and methodology'
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
            I'm a passionate deep learning expert with extensive experience in developing cutting-edge AI solutions. 
            My research focuses on advancing the state-of-the-art in neural networks, computer vision, and natural language processing. 
            I believe in the transformative power of AI to solve complex real-world problems.
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
          <h3 className="text-2xl font-bold text-white mb-8">Technologies & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'NumPy', 'Pandas', 'Scikit-learn', 'CUDA', 'Docker', 'AWS', 'Google Cloud'].map((tech) => (
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
