// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const App: React.FC = () => {
const [activeTab, setActiveTab] = useState('about-us');
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [reservationData, setReservationData] = useState({
name: '',
phone: '',
date: '',
time: '',
guests: 2
});
const [showConfirmation, setShowConfirmation] = useState(false);
const handleReservationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const { name, value } = e.target;
setReservationData({
...reservationData,
[name]: value
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
: Math.max(reservationData.guests - 1, 1)
});
};
return (
<div className="min-h-screen bg-[#FFFDD0] text-gray-800 font-sans">
{/* Header */}
<header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
<div className="container mx-auto px-6 py-3 flex justify-between items-center">
<div className="flex items-center">
<h1 className="text-2xl font-serif text-[#800000] font-bold">Prasad Food Divine</h1>
</div>
{/* Mobile menu button */}
<div className="md:hidden">
<button
onClick={() => setIsMenuOpen(!isMenuOpen)}
className="text-gray-700 cursor-pointer !rounded-button whitespace-nowrap"
>
<i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
</button>
</div>
{/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-8">
{['Home', 'About Us', 'Franchise', 'Careers', 'Book a Table'].map((item) => {
if (item === 'Home') {
return (
<a
key={item}
href="https://readdy.ai/home/55548fe4-7589-4e6a-8f24-b1011f92292e/dbde8e9e-afc8-408a-8679-4ca616319c1c"
data-readdy="true"
className={`font-medium text-base cursor-pointer transition-colors hover:text-[#FF9933] !rounded-button whitespace-nowrap ${
activeTab === item.toLowerCase().replace(/\s+/g, '-')
? 'text-[#FF9933] border-b-2 border-[#FF9933]'
: 'text-gray-700'
}`}
>
{item}
</a>
);
} else if (item === 'Franchise') {
return (
<a
key={item}
href="https://readdy.ai/home/55548fe4-7589-4e6a-8f24-b1011f92292e/e6cdc837-976b-431b-89dd-35f32894b498"
data-readdy="true"
className={`font-medium text-base cursor-pointer transition-colors hover:text-[#FF9933] !rounded-button whitespace-nowrap ${
activeTab === item.toLowerCase().replace(/\s+/g, '-')
? 'text-[#FF9933] border-b-2 border-[#FF9933]'
: 'text-gray-700'
}`}
>
{item}
</a>
);
} else if (item === 'Careers') {
return (
<a
key={item}
href="https://readdy.ai/home/55548fe4-7589-4e6a-8f24-b1011f92292e/7ecae00c-8d2c-4ee6-bbb3-eb143e49bde9"
data-readdy="true"
className={`font-medium text-base cursor-pointer transition-colors hover:text-[#FF9933] !rounded-button whitespace-nowrap ${
activeTab === item.toLowerCase().replace(/\s+/g, '-')
? 'text-[#FF9933] border-b-2 border-[#FF9933]'
: 'text-gray-700'
}`}
>
{item}
</a>
);
} else {
return (
<button
key={item}
onClick={() => setActiveTab(item.toLowerCase().replace(/\s+/g, '-'))}
className={`font-medium text-base cursor-pointer transition-colors hover:text-[#FF9933] !rounded-button whitespace-nowrap ${
activeTab === item.toLowerCase().replace(/\s+/g, '-')
? 'text-[#FF9933] border-b-2 border-[#FF9933]'
: 'text-gray-700'
}`}
>
{item}
</button>
);
}
})}
</nav>
</div>
{/* Mobile Navigation */}
{isMenuOpen && (
<div className="md:hidden bg-white border-t border-gray-200">
<div className="container mx-auto px-6 py-3">
{['Home', 'About Us', 'Franchise', 'Careers', 'Book a Table'].map((item) => {
if (item === 'Home') {
return (
<a
key={item}
href="https://readdy.ai/home/55548fe4-7589-4e6a-8f24-b1011f92292e/dbde8e9e-afc8-408a-8679-4ca616319c1c"
data-readdy="true"
className={`block py-2 px-4 w-full text-left cursor-pointer transition-colors hover:text-[#FF9933] !rounded-button whitespace-nowrap ${
activeTab === item.toLowerCase().replace(/\s+/g, '-')
? 'text-[#FF9933] font-medium'
: 'text-gray-700'
}`}
>
{item}
</a>
);
} else if (item === 'Franchise') {
return (
<a
key={item}
href="https://readdy.ai/home/55548fe4-7589-4e6a-8f24-b1011f92292e/e6cdc837-976b-431b-89dd-35f32894b498"
data-readdy="true"
className={`block py-2 px-4 w-full text-left cursor-pointer transition-colors hover:text-[#FF9933] !rounded-button whitespace-nowrap ${
activeTab === item.toLowerCase().replace(/\s+/g, '-')
? 'text-[#FF9933] font-medium'
: 'text-gray-700'
}`}
>
{item}
</a>
);
} else if (item === 'Careers') {
return (
<a
key={item}
href="https://readdy.ai/home/55548fe4-7589-4e6a-8f24-b1011f92292e/7ecae00c-8d2c-4ee6-bbb3-eb143e49bde9"
data-readdy="true"
className={`block py-2 px-4 w-full text-left cursor-pointer transition-colors hover:text-[#FF9933] !rounded-button whitespace-nowrap ${
activeTab === item.toLowerCase().replace(/\s+/g, '-')
? 'text-[#FF9933] font-medium'
: 'text-gray-700'
}`}
>
{item}
</a>
);
} else {
return (
<button
key={item}
onClick={() => {
setActiveTab(item.toLowerCase().replace(/\s+/g, '-'));
setIsMenuOpen(false);
}}
className={`block py-2 px-4 w-full text-left cursor-pointer transition-colors hover:text-[#FF9933] !rounded-button whitespace-nowrap ${
activeTab === item.toLowerCase().replace(/\s+/g, '-')
? 'text-[#FF9933] font-medium'
: 'text-gray-700'
}`}
>
{item}
</button>
);
}
})}
</div>
</div>
)}
</header>
<main className="pt-16">
{activeTab === 'about-us' && (
<div>
{/* Hero Section */}
<div className="relative h-[600px] overflow-hidden">
<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%2520Indian%2520restaurant%2520interior%2520with%2520warm%2520ambient%2520lighting%252C%2520traditional%2520decorative%2520elements%252C%2520ornate%2520wooden%2520furniture%252C%2520and%2520soft%2520saffron%2520and%2520gold%2520accents.%2520The%2520left%2520side%2520has%2520a%2520gradient%2520that%2520seamlessly%2520blends%2520with%2520text%2520overlay%2520area%252C%2520while%2520the%2520right%2520shows%2520beautiful%2520dining%2520space%2520with%2520sophisticated%2520table%2520settings%2520and%2520cultural%2520artwork%2520on%2520walls&width=1440&height=800&seq=10&orientation=landscape')`,
}}
></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#800000]/80 to-transparent"></div>
<div className="container mx-auto px-6 h-full flex flex-col justify-center items-start relative z-10 text-white">
<h2 className="text-5xl md:text-6xl font-serif mb-6 max-w-xl leading-tight">Our Story</h2>
<p className="text-xl mb-8 max-w-lg">Discover the journey of Prasad Food Divine, where tradition meets innovation in creating authentic vegetarian culinary experiences.</p>
<button
onClick={() => {
const element = document.getElementById('history-section');
element?.scrollIntoView({ behavior: 'smooth' });
}}
className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
>
Learn More
</button>
</div>
</div>
{/* History & Mission Section */}
<div id="history-section" className="py-16 bg-white">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2">
<h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-6">Our History</h2>
<p className="text-gray-700 mb-4">
Founded in 1995 by the Sharma family, Prasad Food Divine began as a small family-run establishment dedicated to preserving the authentic flavors of traditional Indian vegetarian cuisine.
</p>
<p className="text-gray-700 mb-4">
What started as a modest 20-seat restaurant has now grown into one of the most respected vegetarian dining establishments in the country, serving over 500,000 satisfied guests annually.
</p>
<p className="text-gray-700 mb-6">
Throughout our journey, we have remained true to our founding principles: using only the freshest ingredients, preparing food with devotion, and treating our guests as family.
</p>
<div className="bg-[#FFFDD0] p-6 rounded-lg border-l-4 border-[#800000] shadow-md">
<h3 className="text-xl font-serif text-[#800000] mb-3">Our Mission</h3>
<p className="text-gray-700">
To serve divine vegetarian food that nourishes the body and delights the soul, while honoring the rich culinary traditions of India and promoting sustainable dining practices.
</p>
</div>
</div>
<div className="md:w-1/2 grid grid-cols-2 gap-4">
<div className="overflow-hidden rounded-lg shadow-md h-64">
<img
src="https://readdy.ai/api/search-image?query=Vintage%2520photograph%2520of%2520an%2520Indian%2520family%2520restaurant%2520from%2520the%25201990s%252C%2520showing%2520the%2520original%2520small%2520establishment%2520with%2520traditional%2520decor%252C%2520the%2520founding%2520family%2520members%2520standing%2520proudly%2520at%2520the%2520entrance%252C%2520with%2520warm%2520lighting%2520and%2520a%2520simple%2520sign%2520board%2520displaying%2520the%2520restaurant%2520name%2520against%2520a%2520nostalgic%2520sepia-toned%2520background&width=400&height=500&seq=11&orientation=portrait"
alt="Prasad Food Divine in 1995"
className="w-full h-full object-cover object-top"
/>
</div>
<div className="overflow-hidden rounded-lg shadow-md h-64">
<img
src="https://readdy.ai/api/search-image?query=Professional%2520Indian%2520chef%2520in%2520traditional%2520white%2520uniform%2520and%2520toque%2520carefully%2520preparing%2520an%2520elaborate%2520vegetarian%2520dish%2520in%2520a%2520traditional%2520kitchen%2520with%2520copper%2520utensils%2520and%2520spice%2520containers%2520visible%2520in%2520the%2520background%252C%2520focused%2520expression%2520showing%2520dedication%2520to%2520culinary%2520craft%2520against%2520a%2520warm-toned%2520nostalgic%2520background&width=400&height=500&seq=12&orientation=portrait"
alt="Our traditional cooking methods"
className="w-full h-full object-cover object-top"
/>
</div>
<div className="overflow-hidden rounded-lg shadow-md h-64 col-span-2">
<img
src="https://readdy.ai/api/search-image?query=Modern%2520elegant%2520Indian%2520restaurant%2520interior%2520showing%2520the%2520evolution%2520from%2520small%2520establishment%2520to%2520upscale%2520dining%2520venue%252C%2520with%2520beautiful%2520table%2520settings%252C%2520traditional%2520yet%2520contemporary%2520decor%252C%2520soft%2520ambient%2520lighting%252C%2520and%2520subtle%2520cultural%2520elements%2520integrated%2520into%2520the%2520sophisticated%2520design%2520against%2520a%2520warm%2520neutral%2520background&width=800&height=400&seq=13&orientation=landscape"
alt="Prasad Food Divine today"
className="w-full h-full object-cover object-top"
/>
</div>
</div>
</div>
</div>
</div>
{/* Values Section */}
<div className="py-16 bg-[#FFFDD0]">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">Our Core Values</h2>
<p className="text-gray-700 max-w-3xl mx-auto">
These principles guide everything we do, from sourcing ingredients to serving our guests.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{[
{
icon: "fa-leaf",
title: "Purity",
description: "We use only the freshest, highest-quality vegetarian ingredients, sourced responsibly and prepared with care."
},
{
icon: "fa-heart",
title: "Devotion",
description: "Every dish is prepared with love and respect for the ingredients, the traditions, and the guests we serve."
},
{
icon: "fa-seedling",
title: "Sustainability",
description: "We are committed to environmentally conscious practices throughout our operations, from farm to table."
}
].map((value, index) => (
<div key={index} className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
<div className="w-16 h-16 bg-[#800000]/10 rounded-full flex items-center justify-center mx-auto mb-4">
<i className={`fas ${value.icon} text-2xl text-[#800000]`}></i>
</div>
<h3 className="text-xl font-serif text-[#800000] mb-3">{value.title}</h3>
<p className="text-gray-600">{value.description}</p>
</div>
))}
</div>
</div>
</div>
{/* Culinary Philosophy */}
<div className="py-16 bg-white">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">Our Culinary Philosophy</h2>
<p className="text-gray-700 max-w-3xl mx-auto">
At Prasad Food Divine, we believe that vegetarian cuisine can be just as rich, diverse, and satisfying as any other. Our approach combines time-honored traditions with contemporary techniques.
</p>
</div>
<div className="flex flex-col md:flex-row gap-8 mb-12">
<div className="md:w-1/2 overflow-hidden rounded-lg shadow-md">
<img
src="https://readdy.ai/api/search-image?query=Professional%2520Indian%2520chef%2520working%2520in%2520a%2520modern%2520kitchen%252C%2520carefully%2520arranging%2520and%2520garnishing%2520an%2520artistic%2520vegetarian%2520dish%2520with%2520colorful%2520ingredients%2520and%2520microgreens.%2520The%2520kitchen%2520features%2520state-of-the-art%2520equipment%2520alongside%2520traditional%2520spice%2520containers%2520and%2520cooking%2520utensils%252C%2520showing%2520the%2520blend%2520of%2520tradition%2520and%2520innovation%2520against%2520a%2520clean%2520neutral%2520background&width=700&height=500&seq=14&orientation=landscape"
alt="Chef preparing traditional dish with modern techniques"
className="w-full h-full object-cover"
/>
</div>
<div className="md:w-1/2 flex flex-col justify-center">
<p className="text-gray-700 mb-6">
Our chefs are trained in both classical Indian cooking techniques and modern culinary arts, allowing them to create dishes that honor tradition while embracing innovation.
</p>
<p className="text-gray-700 mb-6">
We believe in the power of spices not just as flavor enhancers, but as elements that bring balance and wellness. Each spice blend is crafted in-house according to recipes that have been perfected over generations.
</p>
<p className="text-gray-700">
Our commitment to vegetarian cuisine is rooted in the principles of compassion, sustainability, and the rich vegetarian traditions of India that date back thousands of years.
</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{[
{
icon: "fa-book",
title: "Traditional Recipes",
description: "We preserve authentic recipes passed down through generations, maintaining the integrity of classic Indian vegetarian cuisine."
},
{
icon: "fa-carrot",
title: "Fresh Ingredients",
description: "We source the freshest seasonal produce and highest quality spices to ensure every dish bursts with natural flavor."
},
{
icon: "fa-lightbulb",
title: "Modern Innovation",
description: "While honoring tradition, we embrace contemporary techniques and presentations to create unique culinary experiences."
}
].map((pillar, index) => (
<div key={index} className="bg-[#FFFDD0] rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
<div className="w-16 h-16 bg-[#FF9933]/20 rounded-full flex items-center justify-center mx-auto mb-4">
<i className={`fas ${pillar.icon} text-2xl text-[#FF9933]`}></i>
</div>
<h3 className="text-xl font-serif text-[#800000] mb-3">{pillar.title}</h3>
<p className="text-gray-700">{pillar.description}</p>
</div>
))}
</div>
</div>
</div>
{/* Meet Our Team */}
<div className="py-16 bg-[#FFFDD0]">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">Meet Our Team</h2>
<p className="text-gray-700 max-w-3xl mx-auto">
The heart and soul of Prasad Food Divine is our dedicated team of culinary professionals who bring passion and expertise to every dish.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{[
{
name: "Chef Rajiv Sharma",
role: "Head Chef & Founder",
bio: "With over 30 years of experience, Chef Rajiv brings traditional family recipes and innovative techniques to create our signature dishes.",
image: "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520distinguished%2520Indian%2520male%2520head%2520chef%2520in%2520his%252050s%2520wearing%2520a%2520white%2520chef%2520uniform%2520with%2520traditional%2520elements%252C%2520standing%2520confidently%2520with%2520arms%2520crossed%2520and%2520a%2520warm%2520smile%252C%2520against%2520a%2520neutral%2520restaurant%2520kitchen%2520background%2520with%2520soft%2520professional%2520lighting&width=400&height=500&seq=15&orientation=portrait"
},
{
name: "Priya Sharma",
role: "Culinary Director",
bio: "A graduate of the Culinary Institute of India, Priya specializes in reimagining traditional dishes with contemporary presentations.",
image: "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520an%2520elegant%2520Indian%2520female%2520culinary%2520director%2520in%2520her%252040s%2520wearing%2520a%2520stylish%2520chef%2520jacket%2520with%2520traditional%2520embroidery%2520details%252C%2520looking%2520confident%2520and%2520creative%252C%2520against%2520a%2520neutral%2520restaurant%2520background%2520with%2520soft%2520professional%2520lighting%2520that%2520highlights%2520her%2520expertise%2520and%2520leadership&width=400&height=500&seq=16&orientation=portrait"
},
{
name: "Vikram Patel",
role: "Pastry Chef",
bio: "Specializing in both traditional Indian sweets and fusion desserts, Vikram brings artistry and innovation to our dessert menu.",
image: "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520skilled%2520Indian%2520male%2520pastry%2520chef%2520in%2520his%252030s%2520wearing%2520a%2520white%2520chef%2520uniform%252C%2520carefully%2520decorating%2520an%2520elegant%2520dessert%2520with%2520precision%2520tools%252C%2520focused%2520expression%2520showing%2520his%2520attention%2520to%2520detail%252C%2520against%2520a%2520neutral%2520restaurant%2520kitchen%2520background%2520with%2520soft%2520professional%2520lighting&width=400&height=500&seq=17&orientation=portrait"
},
{
name: "Ananya Desai",
role: "Restaurant Manager",
bio: "With a background in hospitality management, Ananya ensures every guest receives an exceptional dining experience.",
image: "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520polished%2520Indian%2520female%2520restaurant%2520manager%2520in%2520her%252030s%2520wearing%2520elegant%2520business%2520attire%2520with%2520subtle%2520traditional%2520elements%252C%2520smiling%2520warmly%2520and%2520professionally%2520while%2520holding%2520a%2520tablet%252C%2520against%2520a%2520neutral%2520upscale%2520restaurant%2520dining%2520room%2520background%2520with%2520soft%2520professional%2520lighting&width=400&height=500&seq=18&orientation=portrait"
}
].map((member, index) => (
<div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
<div className="h-64 overflow-hidden">
<img
src={member.image}
alt={member.name}
className="w-full h-full object-cover object-top"
/>
</div>
<div className="p-6">
<h3 className="text-xl font-serif text-[#800000] mb-1">{member.name}</h3>
<p className="text-[#FF9933] font-medium mb-3">{member.role}</p>
<p className="text-gray-600 text-sm">{member.bio}</p>
</div>
</div>
))}
</div>
</div>
</div>
{/* Restaurant Gallery */}
<div className="py-16 bg-white">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">Our Restaurant</h2>
<p className="text-gray-700 max-w-3xl mx-auto">
Step into the warm and inviting atmosphere of Prasad Food Divine, where every corner is designed to enhance your dining experience.
</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="overflow-hidden rounded-lg shadow-md col-span-1 sm:col-span-2 h-80">
<img
src="https://readdy.ai/api/search-image?query=Elegant%2520Indian%2520restaurant%2520main%2520dining%2520room%2520with%2520sophisticated%2520decor%252C%2520featuring%2520ornate%2520wooden%2520furniture%252C%2520warm%2520ambient%2520lighting%2520from%2520decorative%2520pendant%2520lamps%252C%2520tasteful%2520artwork%2520on%2520walls%252C%2520and%2520beautifully%2520set%2520tables%2520with%2520fine%2520dinnerware%2520and%2520subtle%2520traditional%2520Indian%2520design%2520elements%2520against%2520a%2520neutral%2520background&width=800&height=500&seq=19&orientation=landscape"
alt="Main dining area"
className="w-full h-full object-cover"
/>
</div>
<div className="overflow-hidden rounded-lg shadow-md h-80">
<img
src="https://readdy.ai/api/search-image?query=Upscale%2520Indian%2520restaurant%2520private%2520dining%2520room%2520with%2520elegant%2520decor%252C%2520featuring%2520a%2520beautifully%2520set%2520large%2520table%2520with%2520fine%2520dinnerware%252C%2520soft%2520ambient%2520lighting%2520from%2520decorative%2520fixtures%252C%2520rich%2520textiles%252C%2520and%2520tasteful%2520traditional%2520artwork%2520on%2520walls%2520creating%2520an%2520intimate%2520and%2520exclusive%2520atmosphere%2520against%2520a%2520neutral%2520background&width=500&height=500&seq=20&orientation=squarish"
alt="Private dining room"
className="w-full h-full object-cover"
/>
</div>
<div className="overflow-hidden rounded-lg shadow-md h-80">
<img
src="https://readdy.ai/api/search-image?query=Professional%2520Indian%2520restaurant%2520kitchen%2520with%2520chefs%2520in%2520white%2520uniforms%2520working%2520at%2520modern%2520stainless%2520steel%2520stations%252C%2520preparing%2520vegetarian%2520dishes%2520with%2520colorful%2520fresh%2520ingredients%252C%2520traditional%2520spices%2520in%2520small%2520containers%252C%2520and%2520state-of-the-art%2520equipment%2520in%2520a%2520clean%252C%2520well-organized%2520environment%2520with%2520bright%2520professional%2520lighting&width=500&height=500&seq=21&orientation=squarish"
alt="Our kitchen"
className="w-full h-full object-cover"
/>
</div>
<div className="overflow-hidden rounded-lg shadow-md h-80">
<img
src="https://readdy.ai/api/search-image?query=Elegant%2520outdoor%2520seating%2520area%2520of%2520an%2520upscale%2520Indian%2520restaurant%2520with%2520comfortable%2520furniture%252C%2520ambient%2520string%2520lights%252C%2520lush%2520potted%2520plants%252C%2520and%2520tasteful%2520decor%2520elements%2520creating%2520a%2520serene%2520dining%2520atmosphere%2520under%2520evening%2520sky%2520with%2520subtle%2520traditional%2520Indian%2520design%2520influences%2520against%2520a%2520neutral%2520background&width=500&height=500&seq=22&orientation=squarish"
alt="Outdoor seating"
className="w-full h-full object-cover"
/>
</div>
<div className="overflow-hidden rounded-lg shadow-md col-span-1 sm:col-span-2 h-80">
<img
src="https://readdy.ai/api/search-image?query=Beautifully%2520presented%2520elaborate%2520Indian%2520vegetarian%2520thali%2520on%2520an%2520elegant%2520silver%2520platter%2520with%2520multiple%2520small%2520bowls%2520containing%2520colorful%2520curries%252C%2520dal%252C%2520rice%252C%2520bread%252C%2520pickles%252C%2520and%2520desserts%2520arranged%2520in%2520traditional%2520manner%2520with%2520artistic%2520garnishes%2520and%2520subtle%2520steam%2520rising%2520from%2520hot%2520dishes%2520against%2520a%2520neutral%2520background&width=800&height=500&seq=23&orientation=landscape"
alt="Signature thali presentation"
className="w-full h-full object-cover"
/>
</div>
</div>
</div>
</div>
{/* Awards & Recognition */}
<div className="py-16 bg-[#FFFDD0]">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">Awards & Recognition</h2>
<p className="text-gray-700 max-w-3xl mx-auto">
Over the years, our commitment to excellence has been recognized by critics, food enthusiasts, and industry experts.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{[
{
year: "2023",
award: "Best Vegetarian Restaurant",
organization: "National Restaurant Awards"
},
{
year: "2022",
award: "Excellence in Culinary Innovation",
organization: "Food & Beverage Association"
},
{
year: "2021",
award: "Outstanding Customer Service",
organization: "Hospitality Excellence Awards"
},
{
year: "2020",
award: "Chef of the Year - Rajiv Sharma",
organization: "Culinary Masters Guild"
}
].map((award, index) => (
<div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
<div className="text-[#FF9933] font-medium mb-2">{award.year}</div>
<h3 className="text-xl font-serif text-[#800000] mb-2">{award.award}</h3>
<p className="text-gray-600 text-sm">{award.organization}</p>
</div>
))}
</div>
<div className="mt-12">
<h3 className="text-2xl font-serif text-[#800000] text-center mb-8">What Our Guests Say</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{[
{
quote: "The most authentic vegetarian Indian cuisine I've experienced outside of India. Every dish tells a story of tradition and passion.",
author: "Sarah Johnson",
source: "Food Critic, Culinary Magazine"
},
{
quote: "Prasad Food Divine doesn't just serve meals; they create memorable dining experiences that celebrate the rich heritage of Indian vegetarian cooking.",
author: "Michael Chen",
source: "Food Blogger"
},
{
quote: "From the moment you enter, you're treated like family. The attention to detail in both the food and service is unmatched in the city.",
author: "Priya Patel",
source: "Regular Guest"
}
].map((testimonial, index) => (
<div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
<div className="mb-4 text-[#FF9933]">
<i className="fas fa-quote-left text-2xl"></i>
</div>
<p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
<div className="flex items-center">
<div className="w-10 h-10 bg-[#800000]/10 rounded-full flex items-center justify-center mr-3">
<i className="fas fa-user text-[#800000]"></i>
</div>
<div>
<p className="font-medium text-gray-800">{testimonial.author}</p>
<p className="text-gray-500 text-sm">{testimonial.source}</p>
</div>
</div>
</div>
))}
</div>
</div>
</div>
</div>
{/* Call to Action */}
<div className="py-16 bg-white">
<div className="container mx-auto px-6">
<div className="max-w-4xl mx-auto bg-[#800000] text-white rounded-lg shadow-xl overflow-hidden">
<div className="md:flex">
<div className="md:w-2/3 p-10">
<h2 className="text-3xl font-serif mb-6">Experience Our Divine Cuisine</h2>
<p className="mb-8">
We invite you to visit Prasad Food Divine and experience our commitment to exceptional vegetarian cuisine and warm hospitality.
</p>
<div className="flex flex-col sm:flex-row gap-4">
<button
onClick={() => setActiveTab('book-a-table')}
className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
>
Book a Table
</button>
<a
href="https://readdy.ai/home/55548fe4-7589-4e6a-8f24-b1011f92292e/dbde8e9e-afc8-408a-8679-4ca616319c1c"
data-readdy="true"
className="bg-transparent hover:bg-white/20 text-white border-2 border-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
>
Return to Home
</a>
</div>
</div>
<div className="md:w-1/3 bg-cover bg-center" style={{ backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%2520arrangement%2520of%2520traditional%2520Indian%2520spices%2520in%2520small%2520copper%2520and%2520brass%2520bowls%252C%2520including%2520turmeric%252C%2520red%2520chili%252C%2520cumin%252C%2520coriander%252C%2520cardamom%252C%2520and%2520cinnamon%252C%2520artistically%2520displayed%2520with%2520fresh%2520herbs%2520and%2520subtle%2520lighting%2520highlighting%2520the%2520vibrant%2520colors%2520against%2520a%2520dark%2520textured%2520background&width=400&height=600&seq=24&orientation=portrait')` }}></div>
</div>
</div>
</div>
</div>
</div>
)}
{activeTab === 'book-a-table' && (
<div className="py-16 bg-[#FFFDD0] min-h-[calc(100vh-64px)]">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">Reserve Your Table</h2>
<p className="text-gray-600 max-w-2xl mx-auto">Experience the divine culinary journey at Prasad Food Divine. Book your table now for an unforgettable dining experience.</p>
</div>
<div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
<div className="md:flex">
<div className="md:w-1/2 p-8">
<form onSubmit={handleReservationSubmit} className="space-y-6">
<div>
<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
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
<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
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
<label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
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
<label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
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
<label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
<div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
<button
type="button"
onClick={() => handleGuestChange(false)}
className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer !rounded-button whitespace-nowrap"
disabled={reservationData.guests <= 1}
>
<i className="fas fa-minus"></i>
</button>
<span className="flex-1 text-center py-2">{reservationData.guests}</span>
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
<p className="text-gray-600 mb-4">123 Divine Street, Culinary District<br />New Delhi, India 110001</p>
<p className="text-gray-600">
<i className="fas fa-phone-alt mr-2"></i> +91 98765 43210<br />
<i className="fas fa-envelope mr-2"></i> reservations@prasadfooddivine.com
</p>
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
<h3 className="text-2xl font-serif text-[#800000] mb-2">Reservation Confirmed!</h3>
<p className="text-gray-600 mb-6">Thank you for choosing Prasad Food Divine. We look forward to serving you.</p>
<div className="bg-gray-50 rounded-md p-4 text-left mb-6">
<div className="grid grid-cols-2 gap-2">
<div className="text-gray-500">Name:</div>
<div>{reservationData.name || 'Not provided'}</div>
<div className="text-gray-500">Date:</div>
<div>{reservationData.date || 'Not provided'}</div>
<div className="text-gray-500">Time:</div>
<div>{reservationData.time || 'Not provided'}</div>
<div className="text-gray-500">Guests:</div>
<div>{reservationData.guests}</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button
className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-2 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
onClick={() => {
setShowConfirmation(false);
setActiveTab('home');
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
{/* Footer */}
<footer className="bg-[#800000] text-white py-12">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h3 className="text-xl font-serif mb-4">Prasad Food Divine</h3>
<p className="mb-4">Divine Food, Delivered with Devotion.</p>
<div className="flex space-x-4">
<a href="#" className="text-white hover:text-[#FF9933] transition-colors cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="#" className="text-white hover:text-[#FF9933] transition-colors cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
<a href="#" className="text-white hover:text-[#FF9933] transition-colors cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
<a href="#" className="text-white hover:text-[#FF9933] transition-colors cursor-pointer">
<i className="fab fa-youtube"></i>
</a>
</div>
</div>
<div>
<h3 className="text-xl font-serif mb-4">Contact Us</h3>
<p className="mb-2">
<i className="fas fa-map-marker-alt mr-2"></i> 123 Divine Street, Culinary District, New Delhi
</p>
<p className="mb-2">
<i className="fas fa-phone-alt mr-2"></i> +91 98765 43210
</p>
<p className="mb-2">
<i className="fas fa-envelope mr-2"></i> info@prasadfooddivine.com
</p>
</div>
<div>
<h3 className="text-xl font-serif mb-4">Opening Hours</h3>
<p className="mb-2">Monday - Friday: 11:00 AM - 10:00 PM</p>
<p className="mb-2">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
<p className="mb-2">Special Hours on Festivals</p>
</div>
</div>
<div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
<p>&copy; {new Date().getFullYear()} Prasad Food Divine. All rights reserved.</p>
</div>
</div>
</footer>
</div>
);
};
export default App