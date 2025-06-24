import React, { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("franchise");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    investment: "",
    experience: "",
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      const mapChart = echarts.init(mapRef.current);
      const mapOption = {
        animation: false,
        tooltip: {
          trigger: "item",
        },
        visualMap: {
          min: 0,
          max: 3,
          left: "left",
          top: "bottom",
          text: ["High", "Low"],
          inRange: {
            color: ["#FF9933", "#800000"],
          },
        },
        series: [
          {
            type: "map",
            map: "India",
            label: {
              show: true,
            },
            data: [
              { name: "Delhi", value: 3 },
              { name: "Mumbai", value: 2 },
              { name: "Bangalore", value: 2 },
              { name: "Chennai", value: 1 },
              { name: "Kolkata", value: 1 },
            ],
          },
        ],
      };
      mapChart.setOption(mapOption);

      const handleResize = () => {
        mapChart.resize();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        mapChart.dispose();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the minimum investment required?",
      answer:
        "The minimum investment required is ₹50 Lakhs, which includes the franchise fee, setup costs, equipment, initial inventory, and working capital for the first few months.",
    },
    {
      question: "How long does it take to break even?",
      answer:
        "On average, our franchisees achieve break-even within 12-18 months of operation, depending on location, local market conditions, and operational efficiency.",
    },
    {
      question: "What kind of training and support do you provide?",
      answer:
        "We provide comprehensive training including a 4-week program at our headquarters, on-site training during launch, regular refresher courses, marketing support, operational guidance, and continuous business development assistance.",
    },
    {
      question: "What is the typical size requirement for a restaurant?",
      answer:
        "Our standard restaurant format requires approximately 1,500-2,000 sq. ft. of space. We also offer smaller express formats starting from 800 sq. ft. for high-traffic locations.",
    },
    {
      question: "Can I own multiple franchises?",
      answer:
        "Yes, we encourage multi-unit ownership. Many of our successful franchisees operate multiple locations. We offer special incentives and support for multi-unit franchisees.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-serif text-[#800000] font-bold">
                Prasad Food Divine
              </h1>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i
                  className={`fas ${
                    isMenuOpen ? "fa-times" : "fa-bars"
                  } text-xl`}
                ></i>
              </button>
            </div>

            <nav
              className={`${
                isMenuOpen
                  ? "block absolute top-16 left-0 right-0 bg-white shadow-md p-4"
                  : "hidden"
              } md:relative md:flex md:items-center md:space-x-8 md:shadow-none md:p-0`}
            >
              <a
                href="https://readdy.ai/home/55548fe4-7589-4e6a-8f24-b1011f92292e/4d9982ae-d11e-4141-8ae7-fed2c2929483"
                data-readdy="true"
                className="block py-2 md:py-0 text-gray-700 hover:text-[#FF9933] cursor-pointer !rounded-button whitespace-nowrap"
              >
                Home
              </a>
              <a
                href="#"
                className="block py-2 md:py-0 text-gray-700 hover:text-[#FF9933] cursor-pointer !rounded-button whitespace-nowrap"
              >
                About Us
              </a>
              <a
                href="#"
                className="block py-2 md:py-0 text-[#FF9933] border-b-2 border-[#FF9933] cursor-pointer !rounded-button whitespace-nowrap"
              >
                Franchise
              </a>
              <a
                href="#"
                className="block py-2 md:py-0 text-gray-700 hover:text-[#FF9933] cursor-pointer !rounded-button whitespace-nowrap"
              >
                Careers
              </a>
              <a
                href="#"
                className="block py-2 md:py-0 text-gray-700 hover:text-[#FF9933] cursor-pointer !rounded-button whitespace-nowrap"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <div className="relative h-[600px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20elegant%20restaurant%20interior%20with%20warm%20lighting%20and%20traditional%20Indian%20decor%20elements%2C%20showing%20successful%20franchise%20business%20atmosphere.%20Professional%20setup%20with%20contemporary%20dining%20space%20and%20cultural%20touches%20creating%20an%20inviting%20ambiance%20against%20a%20neutral%20background%20that%20allows%20text%20overlay&width=1440&height=600&seq=1&orientation=landscape')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/90 to-transparent"></div>
          <div className="container mx-auto px-6 h-full flex items-center relative">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-serif mb-6">
                Join the Prasad Food Divine Family
              </h1>
              <p className="text-xl mb-8">
                Be part of India's fastest-growing vegetarian restaurant chain
                with over 25 years of excellence and 50+ successful locations
                nationwide.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("application-form");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-8 py-4 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-serif text-[#800000]">
                  Why Choose Our Franchise?
                </h2>
                <p className="text-gray-600">
                  Join a legacy of culinary excellence and proven business
                  success. Our franchise model combines traditional values with
                  modern business practices.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#FFFDD0] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl font-bold text-[#800000] mb-2">
                      25+
                    </div>
                    <div className="text-gray-600">Years of Excellence</div>
                  </div>
                  <div className="bg-[#FFFDD0] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl font-bold text-[#800000] mb-2">
                      50+
                    </div>
                    <div className="text-gray-600">Locations</div>
                  </div>
                  <div className="bg-[#FFFDD0] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl font-bold text-[#800000] mb-2">
                      1M+
                    </div>
                    <div className="text-gray-600">Happy Customers</div>
                  </div>
                  <div className="bg-[#FFFDD0] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl font-bold text-[#800000] mb-2">
                      35%
                    </div>
                    <div className="text-gray-600">Average ROI</div>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20Indian%20restaurant%20owner%20standing%20proudly%20in%20front%20of%20their%20successful%20franchise%20location%2C%20modern%20storefront%20with%20elegant%20signage%20and%20warm%20lighting%2C%20showing%20business%20achievement%20and%20entrepreneurial%20success%20against%20a%20clean%20architectural%20background&width=600&height=500&seq=2&orientation=portrait"
                  alt="Successful franchise owner"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FFFDD0]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif text-[#800000] text-center mb-16">
              Investment & Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#FF9933]/20 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-coins text-2xl text-[#FF9933]"></i>
                </div>
                <h3 className="text-2xl font-serif text-[#800000] mb-4">
                  Investment Required
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FF9933] mr-2"></i>
                    Initial Investment: ₹50-75 Lakhs
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FF9933] mr-2"></i>
                    Franchise Fee: ₹10 Lakhs
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FF9933] mr-2"></i>
                    Royalty: 5% of Revenue
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FF9933] mr-2"></i>
                    Marketing Fee: 2% of Revenue
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#FF9933]/20 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-star text-2xl text-[#FF9933]"></i>
                </div>
                <h3 className="text-2xl font-serif text-[#800000] mb-4">
                  Franchise Benefits
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FF9933] mr-2"></i>
                    Proven Business Model
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FF9933] mr-2"></i>
                    Comprehensive Training
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FF9933] mr-2"></i>
                    Marketing Support
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FF9933] mr-2"></i>
                    Operational Guidance
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#FF9933]/20 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-hands-helping text-2xl text-[#FF9933]"></i>
                </div>
                <h3 className="text-2xl font-serif text-[#800000] mb-4">
                  Support System
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FF9933] mr-2"></i>
                    Site Selection Assistance
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FF9933] mr-2"></i>
                    Staff Training Programs
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FF9933] mr-2"></i>
                    Quality Control Systems
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FF9933] mr-2"></i>
                    Regular Business Reviews
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif text-[#800000] text-center mb-16">
              Territory Availability
            </h2>
            <div className="max-w-4xl mx-auto">
              <div
                ref={mapRef}
                className="w-full h-[500px] rounded-lg shadow-lg"
              ></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-[#FFFDD0] p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-serif text-[#800000] mb-3">
                    High Demand Areas
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <i className="fas fa-map-marker-alt text-[#FF9933] mr-2"></i>
                      Delhi NCR
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-map-marker-alt text-[#FF9933] mr-2"></i>
                      Mumbai Metropolitan
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-map-marker-alt text-[#FF9933] mr-2"></i>
                      Bangalore Urban
                    </li>
                  </ul>
                </div>
                <div className="bg-[#FFFDD0] p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-serif text-[#800000] mb-3">
                    Growing Markets
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <i className="fas fa-map-marker-alt text-[#FF9933] mr-2"></i>
                      Pune
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-map-marker-alt text-[#FF9933] mr-2"></i>
                      Hyderabad
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-map-marker-alt text-[#FF9933] mr-2"></i>
                      Ahmedabad
                    </li>
                  </ul>
                </div>
                <div className="bg-[#FFFDD0] p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-serif text-[#800000] mb-3">
                    Emerging Opportunities
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <i className="fas fa-map-marker-alt text-[#FF9933] mr-2"></i>
                      Tier 2 Cities
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-map-marker-alt text-[#FF9933] mr-2"></i>
                      Tourist Destinations
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-map-marker-alt text-[#FF9933] mr-2"></i>
                      Highway Locations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FFFDD0]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif text-[#800000] text-center mb-16">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajesh Kumar",
                  location: "Mumbai Central",
                  story:
                    "Started with one outlet in 2018, now operating 3 successful locations across Mumbai.",
                  image:
                    "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20successful%20Indian%20restaurant%20franchise%20owner%20in%20his%2040s%20wearing%20business%20attire%2C%20standing%20confidently%20in%20his%20restaurant%20with%20a%20warm%20smile%2C%20showing%20achievement%20and%20leadership%20against%20a%20clean%20modern%20restaurant%20background&width=400&height=400&seq=3&orientation=squarish",
                },
                {
                  name: "Priya Sharma",
                  location: "Bangalore",
                  story:
                    "Achieved break-even within 8 months. Known for exceptional customer service standards.",
                  image:
                    "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20successful%20Indian%20female%20restaurant%20entrepreneur%20in%20her%2030s%20in%20smart%20business%20attire%2C%20standing%20confidently%20in%20her%20modern%20restaurant%20interior%2C%20expressing%20success%20and%20determination%20against%20an%20elegant%20dining%20space%20background&width=400&height=400&seq=4&orientation=squarish",
                },
                {
                  name: "Amit Patel",
                  location: "Delhi",
                  story:
                    "First-time restaurateur who built a loyal customer base within the first year.",
                  image:
                    "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20Indian%20male%20restaurant%20owner%20in%20his%20early%2030s%20in%20business%20casual%20attire%2C%20standing%20proudly%20in%20his%20successful%20restaurant%2C%20showing%20entrepreneurial%20spirit%20and%20achievement%20against%20a%20contemporary%20dining%20area%20background&width=400&height=400&seq=5&orientation=squarish",
                },
              ].map((story, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-[#800000] mb-2">
                      {story.name}
                    </h3>
                    <p className="text-[#FF9933] font-medium mb-3">
                      {story.location}
                    </p>
                    <p className="text-gray-600">{story.story}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif text-[#800000] text-center mb-16">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              {faqData.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full p-5 bg-[#FFFDD0] rounded-lg text-left font-medium text-[#800000] hover:bg-[#FFFDD0]/80 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    <span>{faq.question}</span>
                    <i
                      className={`fas ${
                        activeFaq === index
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      } text-[#FF9933]`}
                    ></i>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeFaq === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-5 bg-white border border-[#FFFDD0] rounded-b-lg text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="application-form" className="py-20 bg-[#FFFDD0]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-xl">
              <h2 className="text-4xl font-serif text-[#800000] text-center mb-10">
                Start Your Journey
              </h2>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Preferred Location
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Investment Capital (in Lakhs)
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent appearance-none"
                      value={formData.investment}
                      onChange={(e) =>
                        setFormData({ ...formData, investment: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Previous Experience
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="text-center mt-8">
                  <button
                    type="submit"
                    className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-10 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#800000] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">Prasad Food Divine</h3>
              <p className="mb-4">
                Join our growing family of successful franchisees.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-[#FF9933] transition-colors cursor-pointer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#FF9933] transition-colors cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#FF9933] transition-colors cursor-pointer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#FF9933] transition-colors cursor-pointer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Contact Us</h3>
              <p className="mb-2">
                <i className="fas fa-map-marker-alt mr-2"></i> Corporate Office:
                123 Business Park, New Delhi
              </p>
              <p className="mb-2">
                <i className="fas fa-phone-alt mr-2"></i> +91 98765 43210
              </p>
              <p className="mb-2">
                <i className="fas fa-envelope mr-2"></i>{" "}
                franchise@prasadfooddivine.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF9933] transition-colors cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF9933] transition-colors cursor-pointer"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF9933] transition-colors cursor-pointer"
                  >
                    Investment Details
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF9933] transition-colors cursor-pointer"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Prasad Food Divine. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
