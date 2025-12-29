"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [virtualAgentsDropdownOpen, setVirtualAgentsDropdownOpen] = useState(false);
  const pathname = usePathname();


  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);


  const services = [
    { name: "Case Acquisition", href: "/services/masstort-case-acquisition-services" },
    { 
      name: "Virtual Agents", 
      href: "/services/virtual-legal-agents-services",
      subItems: [
        { name: "Intake Specialists", href: "/services/virtual-legal-agents-services/intake-specialists" }

      ]
    },
    { name: "Digital Solutions", href: "/services/legal-digital-marketing-solutions" },
  ];


  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar (Desktop only) */}
      <div
        className={`hidden md:block transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0d1e] h-0 opacity-0 overflow-hidden"
            : "bg-[#0a0d1e] h-auto opacity-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 text-sm font-dm text-white">
            <span className="text-gray-100">Mon – Sun: 9:00 am – 8:00pm</span>


            <div className="flex items-center space-x-6">
              <a
                href="mailto:info@advanceedgellc.com"
                className="flex items-center space-x-2 hover:text-orange-400"
              >
                <FaEnvelope className="text-orange-400" />
                <span>info@advanceedgellc.com</span>
              </a>


              <a className="flex items-center space-x-2 hover:text-orange-400">
                <FaMapMarkerAlt className="text-orange-400" />
                <span>1008 Hamilton St, Immokalee, FL 34142</span>
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Main Nav */}
      <nav
        className={`transition-all duration-500 py-2 ${
          !scrolled && "lg:py-4"
        } ${
          scrolled
            ? "lg:bg-white/95 lg:backdrop-blur-lg lg:shadow-2xl"
            : "lg:bg-transparent lg:backdrop-blur-0"
        } bg-white/95 backdrop-blur-lg shadow-lg lg:shadow-none`}
      >
        <div className="container mx-auto px-4">
          {/* Wrapper */}
          <div
            className={`flex justify-between items-center pb-0 transition-all duration-300
              ${scrolled ? "border-b-0" : "lg:border-b lg:border-[#827a7a]"}
            `}
          >
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center transition-transform hover:scale-105 duration-300 pb-3
                ${
                  scrolled
                    ? "border-r-0"
                    : "lg:border-r lg:border-[#827a7a]"
                }
              `}
            >
              <Image
                src="/Logo-ae.webp"
                alt="AdvanceEdge"
                width={180}
                height={40}
                className="object-contain"
                priority
              />
            </Link>


            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8 font-dm">
              <Link
                href="/"
                className={`transition-colors font-medium relative group text-sm uppercase ${
                  isActive("/")
                    ? "text-orange-400"
                    : scrolled
                    ? "text-slate-900 hover:text-orange-400"
                    : "text-white hover:text-orange-400"
                }`}
              >
                HOME
              </Link>


              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center space-x-1 text-sm uppercase font-medium transition-colors ${
                    isActive("/services")
                      ? "text-orange-400"
                      : scrolled
                      ? "text-slate-900 hover:text-orange-400"
                      : "text-white hover:text-orange-400"
                  }`}
                >
                  <span>SERVICES</span>
                  <FaChevronDown className="text-xs group-hover:rotate-180 transition-transform" />
                </button>


                <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-2xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {services.map((service, index) => (
                    <div key={service.href}>
                      <div className="relative group/submenu">
                        <Link
                          href={service.href}
                          className={`flex items-center justify-between px-6 py-4 transition-colors ${
                            isActive(service.href)
                              ? "bg-orange-50 text-orange-600"
                              : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                          } ${index === 0 ? "rounded-t-lg" : ""} ${
                            index === services.length - 1 && !service.subItems ? "rounded-b-lg" : ""
                          }`}
                        >
                          <span>{service.name}</span>
                          {service.subItems && (
                            <FaChevronDown className="text-xs group-hover/submenu:rotate-180 transition-transform" />
                          )}
                        </Link>

                        {/* Submenu for Virtual Agents */}
                        {service.subItems && (
                          <div className="absolute left-full top-0 ml-2 w-48 bg-white shadow-2xl rounded-lg opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 translate-x-2 group-hover/submenu:translate-x-0">
                            {service.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={`block px-6 py-4 transition-colors ${
                                  isActive(subItem.href)
                                    ? "bg-orange-50 text-orange-600"
                                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                                } ${subIndex === 0 ? "rounded-t-lg" : ""} ${
                                  subIndex === service.subItems.length - 1 ? "rounded-b-lg" : ""
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              <Link
                href="/about"
                className={`transition-colors font-medium text-sm uppercase ${
                  isActive("/about")
                    ? "text-orange-400"
                    : scrolled
                    ? "text-slate-900 hover:text-orange-400"
                    : "text-white hover:text-orange-400"
                }`}
              >
                ABOUT
              </Link>


              <Link
                href="/blog"
                className={`transition-colors font-medium text-sm uppercase ${
                  isActive("/blog")
                    ? "text-orange-400"
                    : scrolled
                    ? "text-slate-900 hover:text-orange-400"
                    : "text-white hover:text-orange-400"
                }`}
              >
                BLOG
              </Link>


              <Link
                href="/contact"
                className={`transition-colors font-medium text-sm uppercase ${
                  isActive("/contact")
                    ? "text-orange-400"
                    : scrolled
                    ? "text-slate-900 hover:text-orange-400"
                    : "text-white hover:text-orange-400"
                }`}
              >
                CONTACT
              </Link>
            </div>


            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center space-x-4 font-dm">
              <a
                href="tel:832.937.7738"
                className={`flex items-center space-x-2 transition-colors ${
                  scrolled
                    ? "text-slate-900 hover:text-orange-400"
                    : "text-white hover:text-orange-400"
                }`}
              >
                <FaPhone className="text-lg" />
                <span className="font-semibold text-xl leading-none">
                  832.937.7738
                </span>
              </a>


              <Link href="/book-a-call" target="_blank"
  rel="noopener noreferrer" className="flex justify-center gap-2 items-center shadow-xl text-sm bg-gray-50 backdrop-blur-md font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-orange-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-6 py-3 overflow-hidden border-2 rounded-full group text-gray-800" onClick={() => setMobileMenuOpen(false)} > BOOK A CALL <svg className="w-6 h-6 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg" > <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-gray-800 group-hover:fill-gray-800" ></path> </svg> </Link>
            </div>


            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden relative flex items-center justify-center w-11 h-11 rounded-full border border-orange-300/70 shadow-md backdrop-blur-md transition-all duration-300 ${
                mobileMenuOpen
                  ? "bg-orange-500 text-white rotate-90"
                  : "bg-white/80 text-slate-900"
              }`}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>


          {/* MOBILE MENU */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white shadow-xl rounded-lg mt-3 p-4 space-y-4">


              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-900 font-medium"
              >
                Home
              </Link>


              <div>
                <p className="font-medium text-slate-900 mb-2">Services</p>
                <div className="pl-4 space-y-3">
                  {services.map((service) => (
                    <div key={service.href}>
                      <Link
                        href={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-gray-700 font-medium mb-2"
                      >
                        {service.name}
                      </Link>
                      
                      {/* Mobile Submenu */}
                      {service.subItems && (
                        <div className="pl-4 space-y-2">
                          {service.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-gray-600 text-base hover:text-orange-500"
                            >
                              → {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>


              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-900 font-medium"
              >
                About
              </Link>


              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-900 font-medium"
              >
                Blog
              </Link>


              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-900 font-medium"
              >
                Contact
              </Link>
              <Link href="/contact" className="flex justify-center gap-2 items-center shadow-xl text-sm bg-gray-50 backdrop-blur-md font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-orange-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-6 py-3 overflow-hidden border-2 rounded-full group text-gray-800" onClick={() => setMobileMenuOpen(false)} > BOOK A CALL <svg className="w-6 h-6 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg" > <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-gray-800 group-hover:fill-gray-800" ></path> </svg> </Link>
            </div>
            
          )}
        </div>
      </nav>
    </header>
  );
}
