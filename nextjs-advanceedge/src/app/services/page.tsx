import Link from "next/link";
import { FaGavel, FaUserTie, FaBullhorn, FaArrowRight } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaGavel className="text-6xl text-blue-600" />,
      title: "Case Acquisition",
      description: "Generate high-quality leads with our proven case acquisition strategies tailored specifically for law firms. Our comprehensive approach includes targeted outreach, lead qualification, and conversion optimization.",
      features: [
        "Qualified lead generation",
        "Multi-channel acquisition strategies",
        "Lead nurturing and conversion",
        "Performance analytics and reporting"
      ],
      href: "/services/case-acquisition",
    },
    {
      icon: <FaUserTie className="text-6xl text-blue-600" />,
      title: "Virtual Agents",
      description: "Professional virtual agents who seamlessly integrate with your team to handle client intake, scheduling, and administrative tasks, allowing your attorneys to focus on casework.",
      features: [
        "Client intake management",
        "Calendar and scheduling",
        "Document preparation",
        "24/7 availability options"
      ],
      href: "/services/virtual-agents",
    },
    {
      icon: <FaBullhorn className="text-6xl text-blue-600" />,
      title: "Digital Marketing",
      description: "Cutting-edge digital marketing strategies designed to increase your online visibility, attract ideal clients, and establish your firm as a thought leader in your practice areas.",
      features: [
        "SEO and content marketing",
        "Social media management",
        "PPC advertising campaigns",
        "Brand development and strategy"
      ],
      href: "/services/digital-marketing",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive solutions designed to empower your legal practice
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-4xl font-bold mb-4 text-slate-800">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <svg
                          className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:space-x-3 transition-all"
                  >
                    <span>Learn More</span>
                    <FaArrowRight />
                  </Link>
                </div>

                <div className="flex-1">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-80 flex items-center justify-center">
                    <div className="text-8xl text-blue-600 opacity-20">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-slate-800">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our services can transform your practice
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
