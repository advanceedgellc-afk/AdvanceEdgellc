'use client';

import React from 'react';

export default function MapSection() {
  return (
    <section className="w-full py-0 px-0 relative overflow-hidden">
      {/* Map Container */}
      <div className="relative w-full h-[600px] bg-gray-200">
        {/* Embedded Google Maps iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.9333549600133!2d-81.45903312457726!3d26.425627176940893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dba6c23726c47f%3A0x733857a8229919e!2s1008%20Hamilton%20St%2C%20Immokalee%2C%20FL%2034142%2C%20USA!5e0!3m2!1sen!2sin!4v1765476957967!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{
            border: 0,
            animation: 'fadeIn 1s ease-out',
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Advance Edge LLC Location - 1008 Hamilton St, Immokalee, FL 34142"
        ></iframe>



        

        {/* Watermark/Attribution */}
        <div className="absolute bottom-4 left-4 text-xs text-gray-500 z-0">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            Google Maps
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}