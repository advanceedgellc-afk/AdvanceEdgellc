'use client';

import { useBookingModal } from "@/context/BookingModalContext";
export default function ScaleYourFirmSection() {    
    const { openBookingModal } = useBookingModal();

  return (
    <section className="bg-white py-10 md:py-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-0">
           {/* Left Image */}
           <div className="animate-fadeInRight w-full h-full py-0">
            <img 
              src="/digitalSolutions/digital-success-new.webp " 
              alt="Professional man with glasses holding tablet"
              className="rounded-r-3xl shadow-2xl w-full h-full object-cover"
            />
          </div>
          {/* Right Content */}
          <div className="animate-fadeInLeft">
            

            <h1 className="text-3xl md:text-[30px] font-light text-gray-900 mb-8 leading-tight">
                      Build. Grow. Dominate.<br/>
                      Your Digital Success Starts Here.
            </h1>
  {/* Orange Underline */}
  <div className="w-16 h-1 bg-[#FF9A28] mb-6"></div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Your website is more than just an online presence—it’s your 24/7 marketing engine. At AdvanceEdge, we provide cutting-edge web development and digital marketing solutions designed to attract, engage, and convert your audience.

           </p>

            {/* Quote Section with Image */}
            <div className=" flex gap-4">
              <img 
                src="/virtualAgents/left-quote.png" 
                alt="Quote mark"
                className="w-12 h-auto flex-shrink-0"
              />
              <p className="text-lg italic text-gray-800">
              Whether you need a high-converting website or a data-driven marketing strategy, we’ve got you covered.
              </p>
            </div>
            {/* CTA Button */}
        <div className="flex justify-center gap-3 mt-12 opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
        <button
                type="button"
                onClick={openBookingModal}
                className="inline-flex justify-center gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md font-semibold border-gray-50  isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FF9A28] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2  rounded-full group text-gray-800 font-dm"
              >
                BOOK A CALL
                <svg
                  className="w-7 h-7 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1.5 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
        </div>
          </div>

          
        </div>

      
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
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

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}