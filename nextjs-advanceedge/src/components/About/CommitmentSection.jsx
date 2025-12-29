'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function CommitmentSection() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setMessage({ type: 'error', text: 'Please enter your email address' });
      return;
    }

    if (!emailRegex.test(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' });
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: 'success',
          text: '✓ Successfully submitted! Check your email for updates.',
        });
        setEmail('');
        setTimeout(() => setMessage({ type: '', text: '' }), 5000);
      } else {
        setMessage({
          type: 'error',
          text: data.message || 'Failed to submit. Please try again.',
        });
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'An error occurred. Please try again later.',
      });
      console.error('Newsletter submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
  className=" relative overflow-hidden py-10 md:py-20 px-5 bg-[#09172E] bg-[url('/about/g-map.webp')] bg-left bg-no-repeat ">


      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF9A28]/10 rounded-full blur-3xl -ml-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF9A28]/5 rounded-full blur-3xl -mr-48 -mb-48 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight"
            style={{ animation: 'fadeInDown 0.8s ease-out' }}
          >
            Our Commitment:
          </h2>
          <h3
            className="text-4xl md:text-5xl font-light text-gray-300 mb-6"
            style={{ animation: 'fadeInDown 0.8s ease-out 100ms both' }}
          >
            Trust, Confidentiality & Excellence
          </h3>
          <div
            className="w-20 h-1 bg-[#FF9A28] mx-auto mb-8"
            style={{ animation: 'scaleInX 0.6s ease-out 200ms both' }}
          ></div>
          <p
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ animation: 'fadeInUp 0.8s ease-out 300ms both' }}
          >
            We understand the sensitivity and complexity of legal and digital landscapes. Our team operates with the
            highest standards of integrity, discretion, and reliability, ensuring that every solution we provide meets
            compliance, security, and quality benchmarks.
          </p>
        </div>

        {/* Content Grid - NO GAP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch shadow-xl">
          {/* Left - Image */}
          <div style={{ animation: 'slideInLeft 0.8s ease-out 400ms both' }}>
            <div className="relative h-full">
              <div className="rounded-tl-[50px] rounded-bl-[0px] md:rounded-bl-[50px] rounded-tr-[50px] md:rounded-tr-[0px] overflow-hidden shadow-2xl h-full">
                <img
                  src="/about/about-subscribe.webp"
                  alt="Team Meeting Handshake"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Form Card - NO RADIUS ON LEFT */}
          <div
            className="bg-white rounded-tr-[0px]  md:rounded-tr-[50px] rounded-bl-[50px]  md:rounded-bl-[0px]  rounded-br-[50px]  p-10 shadow-2xl grid items-center content-center"
            style={{ animation: 'slideInRight 0.8s ease-out 400ms both' }}
          >
            <h4
              className="text-3xl font-light text-gray-900 mb-4 leading-tight"
              style={{ animation: 'fadeInUp 0.6s ease-out 500ms both' }}
            >
              Ready to Elevate Your Business?
            </h4>

            <p
              className="text-gray-600 mb-8 text-base leading-relaxed"
              style={{ animation: 'fadeInUp 0.6s ease-out 600ms both' }}
            >
              Partner with Advance Edge and experience a smarter way to scale.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div style={{ animation: 'fadeInUp 0.6s ease-out 700ms both' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address*"
                  disabled={loading}
                  required
                  className="w-full px-5 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9A28] focus:border-transparent placeholder-gray-400 text-gray-900 transition-all duration-300 disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#FF9A28] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#e08a1f] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
                style={{ animation: 'fadeInUp 0.6s ease-out 800ms both' }}
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>

              {/* Success/Error Message */}
              {message.text && (
                <div
                  className={`px-4 py-3 rounded-lg text-sm transition-all duration-300 ${
                    message.type === 'success'
                      ? 'bg-green-100 border border-green-300 text-green-700'
                      : 'bg-red-100 border border-red-300 text-red-700'
                  }`}
                  style={{ animation: 'fadeIn 0.3s ease-out' }}
                >
                  {message.text}
                </div>
              )}
            </form>
          </div>
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

        @keyframes scaleInX {
          from {
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        input:focus {
          box-shadow: 0 0 0 3px rgba(255, 154, 40, 0.1);
        }

        button:focus-visible {
          outline: 2px solid #FF9A28;
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
}
