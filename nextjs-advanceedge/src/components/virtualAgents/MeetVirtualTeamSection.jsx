'use client';

import React from 'react';

export default function MeetVirtualTeamSection() {
  const agents = [
    { id: 1, name: 'Attorney', image: '/virtualAgents/Team/Attorney.webp' },
    { id: 2, name: 'Records Retrieval\nSpecialist', image: '/virtualAgents/Team/Rec-retrieval.webp' },
    { id: 3, name: 'Medical Record\nReviewer', image: '/virtualAgents/Team/med-reviewer.webp' },
    { id: 4, name: 'Legal Assistant', image: '/virtualAgents/Team/Legal_Assistant.webp' },
    { id: 5, name: 'Paralegal', image: '/virtualAgents/Team/Paralegal-f.webp' },
    { id: 6, name: 'Case Manager', image: '/virtualAgents/Team/Case_Manager.webp' },
    { id: 7, name: 'Contract\nSpecialist', image: '/virtualAgents/Team/contract_specialist.webp' },
    { id: 8, name: 'Intake Specialist', image: '/virtualAgents/Team/intake-f.webp' },
    { id: 9, name: 'Bookkeeper', image: '/virtualAgents/Team/Book-Keeper.webp' },
    { id: 10, name: 'Marketing\nExecutive', image: '/virtualAgents/Team/marketing-m.webp' },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0f1419] to-[#1a2332] py-10 md:py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Meet Your Virtual Team
          </h2>
          <div className="w-16 h-1 bg-[#FF9A28] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg">
            10 Specialized Roles to Enhance Your Firm's Efficiency
          </p>
        </div>

        {/* Team Grid - 5 columns on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {agents.map((agent, idx) => (
            <div
              key={agent.id}
              className="group relative rounded-2xl overflow-hidden h-56 cursor-pointer opacity-0 animate-fadeInUp shadow-xl"
              style={{
                animationDelay: `${idx * 60}ms`,
                animationFillMode: 'forwards',
              }}
            >
              {/* Agent Image */}
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-full object-cover"
              />

              {/* Light Blue Transparent Overlay - Always Visible */}
              <div className="absolute inset-0 bg-[#7eb3ff]/70 group-hover:bg-[#7eb3ff]/0 transition-all duration-300 flex items-end p-4">
                <p className="text-white text-center font-light text-xl group-hover:text-lg leading-tight w-full drop-shadow-lg transition-all duration-300">
                  {agent.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}