
import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';

const ReferenceSection = () => {
  const references = [
    {
      name: 'Dr. John Smith',
      title: 'Professor of Computer Science',
      organization: 'MIT',
      email: 'john.smith@mit.edu',
      phone: '+1 (555) 123-4567',
      location: 'Cambridge, MA',
      relationship: 'PhD Supervisor'
    },
    {
      name: 'Prof. Jane Doe',
      title: 'Director of AI Research',
      organization: 'Stanford University',
      email: 'jane.doe@stanford.edu',
      phone: '+1 (555) 987-6543',
      location: 'Stanford, CA',
      relationship: 'Research Collaborator'
    },
    {
      name: 'Dr. Michael Johnson',
      title: 'Senior Research Scientist',
      organization: 'Google DeepMind',
      email: 'michael.johnson@google.com',
      phone: '+1 (555) 456-7890',
      location: 'Mountain View, CA',
      relationship: 'Former Manager'
    }
  ];

  return (
    <section id="reference" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">References</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Professional references who can speak to my expertise and character.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((reference, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center mr-4">
                  <User className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{reference.name}</h3>
                  <p className="text-purple-400 text-sm">{reference.relationship}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-gray-300 font-semibold">{reference.title}</p>
                  <p className="text-gray-400">{reference.organization}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-400">
                    <Mail size={16} className="mr-2" />
                    <a href={`mailto:${reference.email}`} className="hover:text-purple-400 transition-colors">
                      {reference.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Phone size={16} className="mr-2" />
                    <span>{reference.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    <span>{reference.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferenceSection;
