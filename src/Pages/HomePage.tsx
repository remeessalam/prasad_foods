// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [reservationData, setReservationData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleReservationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReservationData({
      ...reservationData,
      [name]: value,
    });
  };
  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };
  const handleGuestChange = (increment: boolean) => {
    setReservationData({
      ...reservationData,
      guests: increment
        ? Math.min(reservationData.guests + 1, 20)
        : Math.max(reservationData.guests - 1, 1),
    });
  };
  return (
    <div className="min-h-screen bg-[#FFFDD0] text-gray-800 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif text-[#800000] font-bold">
              Prasad Food Divine
            </h1>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 cursor-pointer !rounded-button whitespace-nowrap"
            >
              <i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
              ></i>
            </button>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About Us", "Franchise", "Careers", "Book a Table"].map(
              (item) =>
                item === "About Us" ? (
                  <a
                    key={item}
                    href="https://readdy.ai/home/55548fe4-7589-4e6a-8f24-b1011f92292e/4d9982ae-d11e-4141-8ae7-fed2c2929483"
                    data-readdy="true"
                    className={`font-medium text-base cursor-pointer transition-colors hover:text-[#FF9933] !rounded-button whitespace-nowrap ${
                      activeTab === item.toLowerCase().replace(/\s+/g, "-")
                        ? "text-[#FF9933] border-b-2 border-[#FF9933]"
                        : "text-gray-700"
                    }`}
                  >
                    {item}
                  </a>
                ) : item === "Franchise" ? (
                  <a
                    key={item}
                    href="https://readdy.ai/home/55548fe4-7589-4e6a-8f24-b1011f92292e/2ec43b81-6225-4d15-86fd-371899cdb5a2"
                    data-readdy="true"
                    className={`font-medium text-base cursor-pointer transition-colors hover:text-[#FF9933] !rounded-button whitespace-nowrap ${
                      activeTab === item.toLowerCase().replace(/\s+/g, "-")
                        ? "text-[#FF9933] border-b-2 border-[#FF9933]"
                        : "text-gray-700"
                    }`}
                  >
                    {item}
                  </a>
                ) : item === "Careers" ? (
                  <a
                    key={item}
                    href="https://readdy.ai/home/55548fe4-7589-4e6a-8f24-b1011f92292e/a1032f0d-8f4a-4836-8387-42b5e4fb8375"
                    data-readdy="true"
                    className={`font-medium text-base cursor-pointer transition-colors hover:text-[#FF9933] !rounded-button whitespace-nowrap ${
                      activeTab === item.toLowerCase().replace(/\s+/g, "-")
                        ? "text-[#FF9933] border-b-2 border-[#FF9933]"
                        : "text-gray-700"
                    }`}
                  >
                    {item}
                  </a>
                ) : (
                  <button
                    key={item}
                    onClick={() =>
                      setActiveTab(item.toLowerCase().replace(/\s+/g, "-"))
                    }
                    className={`font-medium text-base cursor-pointer transition-colors hover:text-[#FF9933] !rounded-button whitespace-nowrap ${
                      activeTab === item.toLowerCase().replace(/\s+/g, "-")
                        ? "text-[#FF9933] border-b-2 border-[#FF9933]"
                        : "text-gray-700"
                    }`}
                  >
                    {item}
                  </button>
                )
            )}
          </nav>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-6 py-3">
              {["Home", "About Us", "Franchise", "Careers", "Book a Table"].map(
                (item) =>
                  item === "About Us" ? (
                    <a
                      key={item}
                      href="https://readdy.ai/home/55548fe4-7589-4e6a-8f24-b1011f92292e/4d9982ae-d11e-4141-8ae7-fed2c2929483"
                      data-readdy="true"
                      className={`block py-2 px-4 w-full text-left cursor-pointer transition-colors hover:text-[#FF9933] !rounded-button whitespace-nowrap ${
                        activeTab === item.toLowerCase().replace(/\s+/g, "-")
                          ? "text-[#FF9933] font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {item}
                    </a>
                  ) : item === "Franchise" ? (
                    <a
                      key={item}
                      href="https://readdy.ai/home/55548fe4-7589-4e6a-8f24-b1011f92292e/2ec43b81-6225-4d15-86fd-371899cdb5a2"
                      data-readdy="true"
                      className={`block py-2 px-4 w-full text-left cursor-pointer transition-colors hover:text-[#FF9933] !rounded-button whitespace-nowrap ${
                        activeTab === item.toLowerCase().replace(/\s+/g, "-")
                          ? "text-[#FF9933] font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {item}
                    </a>
                  ) : (
                    <button
                      key={item}
                      onClick={() => {
                        setActiveTab(item.toLowerCase().replace(/\s+/g, "-"));
                        setIsMenuOpen(false);
                      }}
                      className={`block py-2 px-4 w-full text-left cursor-pointer transition-colors hover:text-[#FF9933] !rounded-button whitespace-nowrap ${
                        activeTab === item.toLowerCase().replace(/\s+/g, "-")
                          ? "text-[#FF9933] font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {item}
                    </button>
                  )
              )}
            </div>
          </div>
        )}
      </header>
      <main className="pt-16">
        {activeTab === "home" && (
          <div>
            {/* Hero Section */}
            <div className="relative h-[600px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20Indian%20vegetarian%20restaurant%20interior%20with%20warm%20ambient%20lighting%2C%20traditional%20decorative%20elements%2C%20and%20beautifully%20plated%20colorful%20vegetarian%20dishes%20in%20the%20foreground.%20The%20space%20features%20ornate%20wooden%20furniture%2C%20soft%20saffron%20and%20gold%20accents%2C%20with%20a%20serene%20and%20inviting%20atmosphere%20that%20combines%20luxury%20with%20traditional%20Indian%20aesthetics&width=1440&height=800&seq=1&orientation=landscape')`,
                  filter: "brightness(0.7)",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/70 to-transparent"></div>
              <div className="container mx-auto px-6 h-full flex flex-col justify-center items-start relative z-10 text-white">
                <h2 className="text-5xl md:text-6xl font-serif mb-6 max-w-xl leading-tight">
                  Divine Food, Delivered with Devotion
                </h2>
                <p className="text-xl mb-8 max-w-lg">
                  Experience the authentic flavors of India through our
                  carefully crafted vegetarian cuisine.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setActiveTab("book-a-table")}
                    className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    Book a Table
                  </button>
                  <button className="bg-transparent hover:bg-white/20 text-white border-2 border-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                    Explore Our Menu
                  </button>
                </div>
              </div>
            </div>
            {/* Featured Dishes */}
            <div className="py-16 bg-white">
              <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                    Our Signature Dishes
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover our chef's specially crafted dishes that blend
                    traditional recipes with modern presentation.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Paneer Makhani",
                      description:
                        "Cottage cheese cubes in a rich, buttery tomato sauce",
                      image:
                        "https://readdy.ai/api/search-image?query=Paneer%20Makhani%20dish%20with%20soft%20paneer%20cubes%20in%20a%20rich%2C%20creamy%20orange-red%20tomato%20and%20butter%20sauce%2C%20garnished%20with%20fresh%20cream%20and%20coriander%20leaves%2C%20served%20in%20an%20elegant%20copper%20bowl%20against%20a%20simple%20neutral%20background%20that%20highlights%20the%20vibrant%20colors%20of%20the%20dish&width=600&height=400&seq=2&orientation=landscape",
                    },
                    {
                      name: "Masala Dosa",
                      description:
                        "Crispy rice crepe filled with spiced potato filling",
                      image:
                        "https://readdy.ai/api/search-image?query=Masala%20Dosa%20-%20a%20crispy%20golden-brown%20rice%20crepe%20folded%20over%20a%20spiced%20potato%20filling%2C%20served%20on%20a%20banana%20leaf%20with%20coconut%20chutney%20and%20sambar%20on%20the%20side%2C%20presented%20on%20an%20elegant%20plate%20against%20a%20simple%20neutral%20background%20that%20highlights%20the%20traditional%20South%20Indian%20dish&width=600&height=400&seq=3&orientation=landscape",
                    },
                    {
                      name: "Vegetable Biryani",
                      description:
                        "Fragrant basmati rice with mixed vegetables and aromatic spices",
                      image:
                        "https://readdy.ai/api/search-image?query=Vegetable%20Biryani%20with%20fragrant%20long-grain%20basmati%20rice%20layered%20with%20colorful%20mixed%20vegetables%2C%20garnished%20with%20fried%20onions%2C%20mint%20leaves%2C%20and%20saffron%20strands%2C%20served%20in%20a%20traditional%20copper%20serving%20dish%20against%20a%20simple%20neutral%20background%20that%20highlights%20the%20aromatic%20Indian%20rice%20dish&width=600&height=400&seq=4&orientation=landscape",
                    },
                    {
                      name: "Palak Paneer",
                      description:
                        "Spinach curry with soft cottage cheese cubes",
                      image:
                        "https://readdy.ai/api/search-image?query=Palak%20Paneer%20with%20creamy%20spinach%20curry%20and%20soft%20white%20cottage%20cheese%20cubes%2C%20garnished%20with%20a%20swirl%20of%20cream%20and%20cumin%20seeds%2C%20served%20in%20an%20elegant%20black%20bowl%20against%20a%20simple%20neutral%20background%20that%20highlights%20the%20vibrant%20green%20color%20of%20the%20dish&width=600&height=400&seq=5&orientation=landscape",
                    },
                    {
                      name: "Chana Masala",
                      description: "Spiced chickpeas in a tangy tomato sauce",
                      image:
                        "https://readdy.ai/api/search-image?query=Chana%20Masala%20with%20tender%20chickpeas%20in%20a%20rich%2C%20spiced%20tomato%20and%20onion%20gravy%2C%20garnished%20with%20fresh%20coriander%20and%20ginger%20juliennes%2C%20served%20in%20a%20traditional%20copper%20bowl%20against%20a%20simple%20neutral%20background%20that%20highlights%20the%20rustic%20North%20Indian%20dish&width=600&height=400&seq=6&orientation=landscape",
                    },
                    {
                      name: "Gulab Jamun",
                      description:
                        "Soft milk solids dumplings soaked in rose-scented syrup",
                      image:
                        "https://readdy.ai/api/search-image?query=Gulab%20Jamun%20dessert%20with%20golden-brown%20soft%20milk%20solid%20dumplings%20soaked%20in%20rose%20and%20cardamom%20scented%20sugar%20syrup%2C%20garnished%20with%20saffron%20strands%20and%20chopped%20pistachios%2C%20served%20in%20an%20elegant%20silver%20bowl%20against%20a%20simple%20neutral%20background%20that%20highlights%20the%20sweet%20Indian%20dessert&width=600&height=400&seq=7&orientation=landscape",
                    },
                  ].map((dish, index) => (
                    <div
                      key={index}
                      className="group relative rounded-lg overflow-hidden shadow-lg h-72 cursor-pointer"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url('${dish.image}')` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-serif mb-2">
                          {dish.name}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {dish.description}
                        </p>
                        <button className="mt-4 bg-[#FF9933] hover:bg-[#e88a2a] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Why Choose Us Section */}
            <div className="py-16 bg-white">
              <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                    Why Choose Us
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Experience the perfect blend of tradition and innovation in
                    every dish we serve.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: "fa-leaf",
                      title: "Pure Vegetarian",
                      description:
                        "We take pride in serving 100% vegetarian cuisine prepared with the finest ingredients.",
                    },
                    {
                      icon: "fa-award",
                      title: "Authentic Recipes",
                      description:
                        "Our recipes are passed down through generations, preserving authentic Indian flavors.",
                    },
                    {
                      icon: "fa-heart",
                      title: "Made with Love",
                      description:
                        "Every dish is prepared with devotion and served with care to ensure the best dining experience.",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="text-center p-6 bg-[#FFFDD0] rounded-lg hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300 cursor-pointer"
                    >
                      <div className="w-16 h-16 bg-[#800000] rounded-full flex items-center justify-center mx-auto mb-4">
                        <i
                          className={`fas ${feature.icon} text-2xl text-white`}
                        ></i>
                      </div>
                      <h3 className="text-xl font-serif text-[#800000] mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Hygiene Practices Section */}
            <div className="py-16 bg-gradient-to-b from-[#FFF8DC] to-white">
              <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                    Our Commitment to Excellence
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Experience dining with complete peace of mind, backed by our
                    unwavering dedication to cleanliness and safety.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: "fa-hand-sparkles",
                      title: "Pristine Environment",
                      description:
                        "Regular deep cleaning and sanitization of all surfaces, ensuring a spotless dining space.",
                      color: "from-blue-50 to-blue-100",
                    },
                    {
                      icon: "fa-certificate",
                      title: "Quality Certified",
                      description:
                        "FSSAI certified kitchen operations with strict adherence to international safety standards.",
                      color: "from-green-50 to-green-100",
                    },
                    {
                      icon: "fa-shield-virus",
                      title: "Safety First",
                      description:
                        "Comprehensive safety protocols including daily health checks and proper protective equipment.",
                      color: "from-yellow-50 to-yellow-100",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className={`relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-50`}
                      ></div>
                      <div className="relative p-8">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <i
                            className={`fas ${feature.icon} text-2xl text-[#800000]`}
                          ></i>
                        </div>
                        <h3 className="text-xl font-serif text-[#800000] mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-16 max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-10 flex flex-col justify-center">
                      <h3 className="text-2xl font-serif text-[#800000] mb-6">
                        Safety Measures in Action
                      </h3>
                      <div className="space-y-6">
                        {[
                          {
                            title: "Regular Sanitization",
                            description:
                              "Thorough cleaning of all surfaces every 2 hours",
                          },
                          {
                            title: "Staff Protection",
                            description:
                              "Mandatory use of masks, gloves, and hairnets",
                          },
                          {
                            title: "Health Monitoring",
                            description:
                              "Daily temperature checks and health screening",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4"
                          >
                            <div className="flex-shrink-0 w-12 h-12 bg-[#FFF8DC] rounded-full flex items-center justify-center">
                              <i className="fas fa-check text-[#800000]"></i>
                            </div>
                            <div>
                              <h4 className="font-medium text-[#800000] mb-1">
                                {item.title}
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex space-x-4 mt-8">
                        <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                          <i className="fas fa-star text-green-600"></i>
                          <span className="text-sm font-medium text-green-800">
                            FSSAI Certified
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                          <i className="fas fa-award text-blue-600"></i>
                          <span className="text-sm font-medium text-blue-800">
                            ISO 22000:2018
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-full min-h-[400px]">
                      <div
                        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
                        style={{
                          backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20and%20pristine%20modern%20restaurant%20kitchen%20with%20chefs%20in%20professional%20attire%20preparing%20food%20with%20utmost%20care%20and%20attention%20to%20hygiene%2C%20featuring%20gleaming%20stainless%20steel%20equipment%20and%20organized%20workstations%20in%20warm%20lighting%20against%20a%20clean%20background&width=800&height=600&seq=13&orientation=landscape')`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonials Section */}
            <div className="py-16 bg-[#FFFDD0]">
              <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                    What Our Guests Say
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Hear from our valued guests about their dining experience at
                    Prasad Food Divine.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Priya Sharma",
                      role: "Food Blogger",
                      image:
                        "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Indian%20woman%20in%20her%20early%2030s%20with%20a%20warm%20smile%20wearing%20elegant%20traditional%20attire%20against%20a%20simple%20neutral%20background%20that%20highlights%20her%20natural%20beauty%20and%20confidence&width=200&height=200&seq=9&orientation=squarish",
                      text: "The attention to detail in every dish is remarkable. The flavors are authentic and the presentation is modern. A perfect blend of tradition and innovation.",
                    },
                    {
                      name: "Rajesh Kumar",
                      role: "Business Executive",
                      image:
                        "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Indian%20man%20in%20his%20mid%2040s%20wearing%20a%20business%20suit%20with%20a%20confident%20smile%20against%20a%20simple%20neutral%20background%20that%20conveys%20professionalism%20and%20trustworthiness&width=200&height=200&seq=10&orientation=squarish",
                      text: "Prasad Food Divine has become our go-to place for family celebrations. The ambiance is perfect and the service is impeccable.",
                    },
                    {
                      name: "Sarah Williams",
                      role: "Food Critic",
                      image:
                        "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20woman%20in%20her%20late%2030s%20with%20a%20sophisticated%20look%20wearing%20modern%20professional%20attire%20against%20a%20simple%20neutral%20background%20that%20highlights%20her%20expertise%20and%20authority&width=200&height=200&seq=11&orientation=squarish",
                      text: "A vegetarian heaven! The innovative take on traditional Indian dishes is refreshing. Each visit is a new culinary adventure.",
                    },
                  ].map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-serif text-[#800000]">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                      <div className="mt-4 text-[#FF9933]">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-10">
                  <button className="bg-[#800000] hover:bg-[#6a0000] text-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                    View All Reviews
                  </button>
                </div>
              </div>
            </div>
            {/* Welcome Section */}
            <div className="py-16 bg-[#FFFDD0]">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2 p-10">
                      <h2 className="text-3xl font-serif text-[#800000] mb-6">
                        Welcome to Prasad Food Divine
                      </h2>
                      <p className="text-gray-600 mb-4">
                        At Prasad Food Divine, we believe that food is not just
                        sustenance but a divine offering. Our restaurant brings
                        you the authentic flavors of India through our carefully
                        crafted vegetarian cuisine.
                      </p>
                      <p className="text-gray-600 mb-6">
                        Every dish is prepared with devotion, using traditional
                        recipes passed down through generations, and served in
                        an ambiance that soothes the soul.
                      </p>
                      <button
                        onClick={() => setActiveTab("about-us")}
                        className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-2 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                      >
                        Learn More About Us
                      </button>
                    </div>
                    <div
                      className="md:w-1/2 bg-cover bg-center h-80 md:h-auto"
                      style={{
                        backgroundImage: `url('https://readdy.ai/api/search-image?query=Traditional%20Indian%20vegetarian%20thali%20with%20various%20colorful%20dishes%20arranged%20on%20a%20silver%20platter%2C%20including%20rice%2C%20dal%2C%20vegetables%2C%20paneer%2C%20chutney%2C%20raita%2C%20and%20roti%2C%20beautifully%20presented%20with%20decorative%20elements%20against%20a%20simple%20neutral%20background%20that%20highlights%20the%20diverse%20flavors%20of%20Indian%20cuisine&width=600&height=600&seq=8&orientation=squarish')`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "book-a-table" && (
          <div className="py-16 bg-[#FFFDD0] min-h-[calc(100vh-64px)]">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                  Reserve Your Table
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Experience the divine culinary journey at Prasad Food Divine.
                  Book your table now for an unforgettable dining experience.
                </p>
              </div>
              <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 p-8">
                    <form
                      onSubmit={handleReservationSubmit}
                      className="space-y-6"
                    >
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={reservationData.name}
                          onChange={handleReservationChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={reservationData.phone}
                          onChange={handleReservationChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="date"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Date
                          </label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={reservationData.date}
                            onChange={handleReservationChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="time"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Time
                          </label>
                          <input
                            type="time"
                            id="time"
                            name="time"
                            value={reservationData.time}
                            onChange={handleReservationChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="guests"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Number of Guests
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                          <button
                            type="button"
                            onClick={() => handleGuestChange(false)}
                            className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer !rounded-button whitespace-nowrap"
                            disabled={reservationData.guests <= 1}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <span className="flex-1 text-center py-2">
                            {reservationData.guests}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleGuestChange(true)}
                            className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer !rounded-button whitespace-nowrap"
                            disabled={reservationData.guests >= 20}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-full bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                        >
                          Book Now
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="md:w-1/2 bg-gray-200 min-h-[400px] flex items-center justify-center">
                    <div className="text-center p-8">
                      <i className="fas fa-map-marker-alt text-4xl text-[#800000] mb-4"></i>
                      <h3 className="text-xl font-medium mb-2">Our Location</h3>
                      <p className="text-gray-600 mb-4">
                        123 Divine Street, Culinary District
                        <br />
                        New Delhi, India 110001
                      </p>
                      <p className="text-gray-600">
                        <i className="fas fa-phone-alt mr-2"></i> +91 98765
                        43210
                        <br />
                        <i className="fas fa-envelope mr-2"></i>{" "}
                        reservations@prasadfooddivine.com
                      </p>
                      <div className="mt-6">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2536900776364!2d77.20651841508096!3d28.56270198244407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMzJzQ1LjciTiA3N8KwMTInMjkuNSJF!5e0!3m2!1sen!2sin!4v1624532516001!5m2!1sen!2sin"
                          width="100%"
                          height="200"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          title="Restaurant Location"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Confirmation Modal */}
            {showConfirmation && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-check text-2xl text-green-600"></i>
                    </div>
                    <h3 className="text-2xl font-serif text-[#800000] mb-2">
                      Reservation Confirmed!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for choosing Prasad Food Divine. We look forward
                      to serving you.
                    </p>
                    <div className="bg-gray-50 rounded-md p-4 text-left mb-6">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-gray-500">Name:</div>
                        <div>{reservationData.name || "Not provided"}</div>
                        <div className="text-gray-500">Date:</div>
                        <div>{reservationData.date || "Not provided"}</div>
                        <div className="text-gray-500">Time:</div>
                        <div>{reservationData.time || "Not provided"}</div>
                        <div className="text-gray-500">Guests:</div>
                        <div>{reservationData.guests}</div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-2 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                        onClick={() => {
                          setShowConfirmation(false);
                          setActiveTab("home");
                        }}
                      >
                        Return to Home
                      </button>
                      <button
                        className="bg-transparent hover:bg-gray-100 text-gray-700 border border-gray-300 px-6 py-2 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                        onClick={() => setShowConfirmation(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Special Offers Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
              Special Offers & Events
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our exclusive dining experiences and special promotions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Weekend Brunch Special",
                description:
                  "Enjoy our lavish vegetarian brunch with complimentary dessert",
                validity: "Every Saturday & Sunday",
                discount: "20% OFF",
                image:
                  "https://readdy.ai/api/search-image?query=Luxurious%20Indian%20vegetarian%20brunch%20spread%20with%20colorful%20dishes%2C%20fresh%20fruits%2C%20and%20desserts%20beautifully%20arranged%20on%20an%20elegant%20table%20with%20ambient%20lighting%20against%20a%20simple%20neutral%20background&width=400&height=300&seq=15&orientation=landscape",
              },
              {
                title: "Corporate Lunch Deal",
                description: "Perfect for business meetings and team lunches",
                validity: "Monday to Friday",
                discount: "15% OFF",
                image:
                  "https://readdy.ai/api/search-image?query=Professional%20setup%20of%20Indian%20vegetarian%20business%20lunch%20with%20elegant%20plating%20and%20sophisticated%20table%20arrangement%20in%20warm%20lighting%20against%20a%20simple%20neutral%20background&width=400&height=300&seq=16&orientation=landscape",
              },
              {
                title: "Festival Special Thali",
                description:
                  "Traditional festive thali with special seasonal items",
                validity: "Limited Time Offer",
                discount: "Special Price",
                image:
                  "https://readdy.ai/api/search-image?query=Elaborate%20Indian%20festive%20thali%20with%20multiple%20vegetarian%20dishes%2C%20sweets%2C%20and%20traditional%20decorations%20arranged%20beautifully%20in%20warm%20lighting%20against%20a%20simple%20neutral%20background&width=400&height=300&seq=17&orientation=landscape",
              },
            ].map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#800000] text-white px-4 py-2 rounded-full text-sm font-medium">
                    {offer.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-[#800000] mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <i className="far fa-clock mr-2"></i>
                    <span>{offer.validity}</span>
                  </div>
                  <button className="w-full bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-2 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Gallery Section */}
      <div className="py-16 bg-[#FFFDD0]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
              Our Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a visual journey through our restaurant's ambiance and
              signature dishes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "https://readdy.ai/api/search-image?query=Elegant%20Indian%20restaurant%20interior%20with%20warm%20lighting%2C%20traditional%20decor%20elements%2C%20and%20comfortable%20seating%20arrangements%20creating%20an%20inviting%20atmosphere%20against%20a%20simple%20neutral%20background&width=400&height=300&seq=18&orientation=landscape",
              "https://readdy.ai/api/search-image?query=Artistic%20plating%20of%20modern%20Indian%20vegetarian%20dish%20with%20vibrant%20colors%20and%20garnishes%20showcasing%20culinary%20creativity%20in%20warm%20lighting%20against%20a%20simple%20neutral%20background&width=400&height=300&seq=19&orientation=landscape",
              "https://readdy.ai/api/search-image?query=Traditional%20Indian%20bread%20basket%20with%20variety%20of%20freshly%20baked%20naan%2C%20roti%2C%20and%20kulcha%20arranged%20beautifully%20with%20garnishes%20in%20warm%20lighting%20against%20a%20simple%20neutral%20background&width=400&height=300&seq=20&orientation=landscape",
              "https://readdy.ai/api/search-image?query=Elegant%20table%20setting%20in%20Indian%20restaurant%20with%20brass%20cutlery%2C%20fresh%20flowers%2C%20and%20ambient%20lighting%20creating%20sophisticated%20dining%20experience%20against%20a%20simple%20neutral%20background&width=400&height=300&seq=21&orientation=landscape",
              "https://readdy.ai/api/search-image?query=Collection%20of%20colorful%20Indian%20vegetarian%20curries%20in%20copper%20serving%20bowls%20with%20fresh%20herbs%20and%20spices%20in%20warm%20lighting%20against%20a%20simple%20neutral%20background&width=400&height=300&seq=22&orientation=landscape",
              "https://readdy.ai/api/search-image?query=Assortment%20of%20Indian%20vegetarian%20desserts%20beautifully%20plated%20with%20edible%20flowers%20and%20gold%20leaf%20in%20elegant%20presentation%20against%20a%20simple%20neutral%20background&width=400&height=300&seq=23&orientation=landscape",
            ].map((image, index) => (
              <div
                key={index}
                className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${image}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white/90 hover:bg-white text-[#800000] px-6 py-2 rounded-md font-medium transition-all transform translate-y-4 group-hover:translate-y-0 !rounded-button whitespace-nowrap">
                    View Larger
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#800000] to-[#4a0000] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <i className="fas fa-om text-3xl text-[#FF9933] mr-3"></i>
                <h3 className="text-2xl font-serif">Prasad Food Divine</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Experience the divine blend of traditional Indian flavors with
                modern culinary artistry. Every dish is crafted with devotion to
                provide you with an unforgettable dining experience.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF9933] flex items-center justify-center transition-all duration-300"
                >
                  <i className="fab fa-facebook-f text-lg"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF9933] flex items-center justify-center transition-all duration-300"
                >
                  <i className="fab fa-instagram text-lg"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF9933] flex items-center justify-center transition-all duration-300"
                >
                  <i className="fab fa-twitter text-lg"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF9933] flex items-center justify-center transition-all duration-300"
                >
                  <i className="fab fa-youtube text-lg"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-serif mb-6 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#FF9933]"></span>
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#FF9933] transition-colors flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2"></i>Our
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#FF9933] transition-colors flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2"></i>Book a
                    Table
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#FF9933] transition-colors flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2"></i>About
                    Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#FF9933] transition-colors flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2"></i>Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#FF9933] transition-colors flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2"></i>Private
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-serif mb-6 relative inline-block">
                Contact & Hours
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#FF9933]"></span>
              </h4>
              <div className="space-y-4">
                <p className="flex items-start text-gray-300">
                  <i className="fas fa-map-marker-alt mt-1.5 mr-3 text-[#FF9933]"></i>
                  <span>
                    123 Divine Street,
                    <br />
                    Culinary District, New Delhi
                  </span>
                </p>
                <p className="flex items-center text-gray-300">
                  <i className="fas fa-phone-alt mr-3 text-[#FF9933]"></i>
                  <span>+91 98765 43210</span>
                </p>
                <p className="flex items-center text-gray-300">
                  <i className="fas fa-envelope mr-3 text-[#FF9933]"></i>
                  <span>info@prasadfooddivine.com</span>
                </p>
                <div className="pt-4">
                  <p className="text-sm text-gray-300">
                    <span className="font-medium text-white">Mon - Fri:</span>{" "}
                    11:00 AM - 10:00 PM
                  </p>
                  <p className="text-sm text-gray-300">
                    <span className="font-medium text-white">Sat - Sun:</span>{" "}
                    10:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="text-gray-300 text-sm">
                <p>
                  &copy; {new Date().getFullYear()} Prasad Food Divine. All
                  rights reserved.
                </p>
              </div>
              <div className="flex items-center justify-start md:justify-end space-x-6">
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#FF9933] text-sm transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#FF9933] text-sm transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#FF9933] text-sm transition-colors"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default App;
