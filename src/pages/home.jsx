import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronRight, HeartHandshake, Zap, Headset, BookOpen, Monitor, Twitter, Instagram, Share2, Mail, Phone, MapPin } from 'lucide-react'; 
import { bgcolor } from '../utils';
import Lottie from 'lottie-react';
import Business from '../assets/business-success.json'
import Profit from '../assets/team.json'
import { Link } from 'react-router-dom';


export default function Home() {



  return (
    <div className="min-h-screen bg-white font-inter">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>
      
        <Hero />
        <Offerings />
        <AboutUs />
        <ClientLogoso />
        <WhoWeWorkWIth />
        <WhyWorkWithUs />
    </div>
  );
}



const Hero = () => {
  return (
    <section className={`relative min-h-[60vh] md:min-h-[74vh] flex items-center bg-[${bgcolor}] bg-black overflow-hidden lg:py-0`}>
      
      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-10  ">
      

        {/* Right Side: Infinitely Floating / Shimmering Digital Object Mesh */}
        <div className="lg:col-span-5 hidden md:flex justify-center items-center relative  sm:min-h-[300px]">
          <div className="relative w-32 h-32 sm:w-72 sm:h-72 animate-float-slow flex items-center justify-center">
            
            {/* Outer Abstract Shimmering Neon Border Ring */}
            <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-cyan-400/40 mix-blend-screen animate-pulse-slow p-2">
              <div className="w-full h-full rounded-2xl border border-emerald-400/20 animate-spin [animation-duration:25s]" />
            </div>

            {/* Inner Floating Holographic Core */}
            <div className="w-22 h-22 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-br from-cyan-500/30 via-zinc-900/90 to-emerald-500/20 backdrop-blur-xl shadow-[inset_0_0_20px_rgba(34,211,238,0.2)] border border-white/10 flex flex-col items-center justify-center p-6 gap-3">
              {/* Decorative Tech Core Icon */}
              <div className="w-5.3 h-5.3 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-cyan-400 to-emerald-400 p-[1px]">
                <div className="w-full h-full bg-zinc-950 rounded-xl flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-ping" />
                </div>
              </div>
              <div className="h-1 sm:h-2 w-11 sm:w-24 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 w-1/2 animate-[shimmerGlow_2s_infinite_alternate]" />
              </div>
              <div className="h-0.75 sm:h-1.5 w-7 sm:w-16 bg-zinc-800 rounded-full" />
            </div>

            {/* Accent Glowing Particles Orbiting the Asset */}
            <div className="absolute top-4 left-4 w-4 h-4 bg-cyan-400 rounded-full blur-[2px] animate-ping [animation-duration:3s]" />
            <div className="absolute bottom-6 right-8 w-1.5 sm:w-3 h-1.5 sm:h-3 bg-emerald-400 rounded-full blur-[1px] animate-pulse" />
          </div>
        </div>

 
        {/* Left Side: Impactful Messaging Column */}
        <div className="lg:col-span-5 my-10 text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-zinc-50 tracking-tight">
            Build Your Brand, <br />
            Grow Your Business.
            {/*
            Turn Your Ideas Into Brands, Websites, and Digital{" "}
            <span className="text-cyan-50 bg-gradient-to-r from-green-50 to-green-400 bg-clip-text text-transparent">
              Systems That Drive Revenue.
            </span>*/}
          </h2>
          <div className='pt-0 w-4/5 md:w-3/5 font-LiberalFranklin'>
            <span className='text-neutral-300'> We'll build your website, grow your brand, and automate your processes— so you can focus on your customers.</span>
          </div>
          
          <div className="pt-6 pb-6">
            <Link to='/conversion'>
            <button
              className="relative group px-5 py-3 text-sm font-bold rounded text-black bg-green-400 hover:bg-green-500 transition-all duration-300 transform active:scale-95 hover:cursor-pointer overflow-hidden shadow-[0_0_30px_rgba(74,222,128,0.2)]"
            >
              Get Started!
            </button>
            </Link>
          </div>
        </div>


      </div>
    </section>
  );
}
const Offerings = () =>{

  return(
    <section className={` bg-[${bgcolor}] min-h-[60vh] md:min-h-[74vh] flex items-center overflow-hidden`}>
      <div className='container relative mx-auto px-6 grid grid-cols-1 lg:grid-cols-10'>


      <div className='lg:col-span-5 flex justify-center items-center'>
        <Lottie animationData={Profit} className='h-100 w-100'/>
      </div>

      <div className='col-span-5 flex flex-col justify-center  gap-3 my-10'>
        <div className=' py-3 font-LibreFranklin font-extrabold text-cyan-50 text-3xl lg:text-5xl'>
          <h2 >Attract more customers</h2>
        <h2>With less stress</h2> 
        </div>

       <div className='mb-5 font-Catamaran text-neutral-400 text-md ml-5 flex gap-5 flex-col'>
        <div>
          <h3 className='text-xl md:text-2xl font-extrabold text-cyan-50 '>Grow your brand.</h3>
          <p>Get a full brand kit that turns your idea or business into a booming operation. </p>
        </div>
        <div>
          <h3 className='text-xl md:text-2xl font-extrabold text-cyan-50'>Gain more recognition</h3>
          <span>Access digital solutions to make your brand a competitive force in your market</span>
        </div>
        <div>
          <h3 className='text-xl md:text-2xl font-extrabold text-cyan-50'>Scale your business</h3>
          <span>Run zero to low-cost campaigns that scales growth, maximizes efficiency, and gets you more customer but with less work.</span>
        </div>

         <Link to='/packages' className=' w-[188px] '><button
              className="py-2.5 px-5 font-bold rounded text-black bg-green-400 hover:bg-green-500 transition-all duration-300 transform active:scale-95 hover:cursor-pointer overflow-hidden shadow-[0_0_30px_rgba(74,222,128,0.2)]"
            >
              <span className='flex flex-row '>Explore Packages <ChevronRight /></span>
            </button>
            </Link>
        
       </div>
      </div>      

      </div>
      
    </section>
  )
}
const AboutUs = () =>{
  return(
    <>

    <div className='flex flex-col  py-10 items-center justify-center  min-h-[60vh]bg-neutral-50 overflow-hidden '>
      <h2 className='text-3xl w-full md:w-4/5 mx-auto py-10 sm:text-5xl leading-[1.5] font-Sumana px-5 md:px-10 text-center text-neutral-900'>
        The Astute Company is a contemporary agency connecting strategy, brand and product. We help ambitious
        teams create digital experiences and <span className='text-red-500'> solutions </span> that people 
        <span className='text-red-500'> trust</span>,<span className='text-red-500'> use</span>, 
        and <span className='text-red-500'> believe in.</span>
      </h2>

    </div>
    </>
  )
}
const ClientLogos = () =>{

const logos = [
  {
    name: 'Whatech', url: 'https://i.ibb.co/Z6bLW5b3/whatechi-1.png.co/BVYzqbYm'
  },
   {
    name: 'Clever Investor', url: 'https://i.ibb.co/4RXcpkd5/clvr-logo-1.png://ibb.co/SwM2BSr9'
  },
   {
    name: 'AllCaps', url: 'https://i.ibb.co/GvcQfQ2t/md2x.png://ibb.co/qMkYLYsW'
  },
   {
    name: 'GoldyVhista', url: 'https://i.ibb.co/yF3TWcZV/GDVSTA-1.png://ibb.co/tpdf8Tv3'
  },
   {
    name: 'Fubbi', url: 'https://i.ibb.co/dJfpMpPp/download-3-1.png'
  }
]

return (
  <section className="">
      <div className=" mx-auto px-2 py-12 md:py-20 bg-neutral-80 border border-neutral-100 ">
        {/* Subtle Heading */}
        <p className=" hidden text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-10">
          Powering Growth For Innovative Brands
        </p>

        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center items-center gap-5 md:gap-16 opacity-60">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center group">
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                // We use object-contain to ensure logos aren't stretched
                // Grayscale filter keeps the section clean and professional
                className="h-8 md:h-12 w-auto object-contain filter grayscale transition duration-300 group-hover:grayscale-0 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
)

}

const WhoWeWorkWIth = ()=>{
  return(
    <>

       <div className='flex flex-col min-h-[60vh] md:min-h-[74vh] justify-center items-center mx-auto px-6 py-10 bg-black text-white '>
        <h2 className="pb-1 md:py-10 text-3xl md:text-5xl font-LibreFranklin font-bold mb-6">Who do we work with?</h2>
        <ul className=" inline-block text-left space-y-3">
      {[
              
        "Local merchants building online storefronts to convert and capture more loyal buyers.",
        "Driven Non-profit teams amplifying their message to mobilize donors and supporters.",
        "Early-stage creators building breakthrough brands from the ground up.",
        "Ambitious small businesses ready to boost visibility and capture new market share.",
        "Digital-first brands optimizing user journeys for higher cart values and retention.",
        "Enterprises optimizing platforms for peak performance and profitability.",
        
      ].map((item, index) => (
        <li key={index} className="flex items-center text-md md:text-xl text-neutral-400 ">
          <svg className=" w-4 h-4 mr-2 sm:w-6 sm:h-6 sm:mr-3 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
          {item}
        </li>
      ))}
    </ul>

     <Link to='/conversion' className=' min-w-[208px] pt-10'><button
              className="py-2.5 px-5 font-bold rounded text-black bg-green-400 hover:bg-green-500 transition-all duration-300 transform active:scale-95 hover:cursor-pointer overflow-hidden shadow-[0_0_30px_rgba(74,222,128,0.2)]"
            >
              <span className='flex flex-row '>Book Your Consultation  </span>
            </button>
            </Link>
      </div> 
    </>
  )
}

const WhyWorkWithUs = ()=>{
  return(
    <>
      <div className={`flex flex-col  py-10 items-center justify-center  min-h-[60vh] md:min-h-[74vh] bg-[${bgcolor}] overflow-hidden text-cyan-50`}>
        <h2 className='py-5 text-center mt-5 md:mt-10 md:py-10 text-3xl sm:text-5xl font-extrabold font-LibreFranklin text-cyan-50'>Why Partner With Us?</h2>

        <div className=' pl-5 sm:pl-[15%] md:pl-[25%] flex flex-col w-full '>
         
         <div className='flex flex-row py-3 md:w-1/2 '>
          <div className='w-[25px] mt-2 ml-1 mr-2'>
          <Zap />  
         </div>

         <div className=' flex flex-col'>
          <h3 className='text-lg md:text-2xl font-LibreFranklin font-bold md:mb-2'>Fast Turnaround</h3>
          <p className='text-neutral-500 text-sm leading-[1.5]'> Launch faster. Get to market as quickly as possible and outpace your competition.</p>
         </div>
          </div>

         <div className='flex flex-row py-3 md:w-1/2'>
          <div className='w-[25px] mt-2 ml-1 mr-2'>
          <Headset />
         </div>

         <div className=' flex flex-col'>
          <h3 className='text-lg md:text-2xl font-LibreFranklin font-bold md:mb-2'>Clear Communication</h3>
          <p className='text-neutral-500 text-sm md:text-md leading-[1.5]'>
            Get direct updates and clear timelines which keep you and us fully aligned. Know exactly what we are building, when, and why.
          </p>
         </div>
          </div>

         <div className='flex flex-row py-3 md:w-1/2'>
          <div className='w-[25px] mt-2 ml-1 mr-2'>
          <HeartHandshake />
         </div>

         <div className=' flex flex-col'>
          <h3 className='text-lg md:text-2xl font-LibreFranklin font-bold md:mb-2'>Consistent Support</h3>
          <p className='text-neutral-500 text-sm leading-[1.5] '>
            We proactively monitor, manage, and maintain your assets. This hands-on support helps you scale to new heights. 
          </p>
         </div>
          </div>
          
      </div>

       <Link to='/services' className=' mx-auto mt-10 mb-10 '><button
              className="py-2.5 px-5 md:py-3 md:px-6 font-bold rounded text-black bg-green-400 hover:bg-green-500 transition-all duration-300 transform active:scale-95 hover:cursor-pointer overflow-hidden shadow-[0_0_30px_rgba(74,222,128,0.2)]"
            >
              <span className='flex flex-row '> Our Services </span>
            </button>
            </Link>
      </div>


    </>
  )
}

const LastCTA = () =>{
  return (
    <>
    <div>
      <h1>Are You Ready to Grow?</h1>
    </div>
    </>
  )
}





const AfterHero = () =>{
  return (
    <section id="system" className="pt-20 ">
  <div className="container mx-auto px-6">
    <div className="flex flex-col items-center gap-12">
      
      {/* Left Side: Content */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          The Astutian: A System Built for <span className="text-green-400">Accelerated Growth</span>
        </h2>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Over the years, we’ve built a specialized team of writers and developers organized by industry. Our services cover every step of brand growth and lead magnetization to conversion. This includes but isn’t limited to levers of content creation and the design of web pages tailored to the psychology of your prospective clients. 
        </p>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          Our job is to remove the stress of lead generation and conversion so that you can focus on what you do best:  delivering your services. Even more, our system is designed in a way that <span className=' font-semibold'>we don’t get paid unless we deliver. </span>
        </p>
        
        {/* The "Hook" Box */}
       
      </div>

      {/* Right Side: Feature Grid */}
      <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">

       <div className=" px-6 col-span-1 md:col-span-2 rounded-r-lg">
          <h2 className="text-3xl font-bold ">
           How It Works
          </h2>
        </div>

        <div className="p-6 mx-10 sm:mx-0 rounded-xl border border-gray-700">
          <div className=" text-green-400 font-bold mb-2">Step 1.</div>
          <h4 className="text-xl font-bold mb-2 ">Consultation</h4>
          <p className="text-gray-400 text-sm">Tell us about your services, business goals and KPIs.</p>
        </div>
        
        <div className="p-6 mx-10 sm:mx-0 rounded-xl border border-gray-700">
          <div className=" font-bold mb-2 text-green-400">Step 2.</div>
          <h4 className="text-xl font-bold mb-2">Strategy Design</h4>
          <p className="text-gray-400 text-sm">If we're a good fit with your business, we'll pitch solutions tailored to your business' DNA. </p>
        </div>

        <div className="p-6 mx-10 sm:mx-0 rounded-xl border border-gray-700">
          <div className=" font-bold mb-2 text-green-400">Step 3.</div>
          <h4 className="text-xl font-bold mb-2">Project Launch</h4>
          <p className="text-gray-400 text-sm">With your approval, we launch these solutions. Every solution meets the highest conversion standards before it goes live.</p>
        </div>

        <div className="p-6 mx-10 sm:mx-0 rounded-xl border border-gray-700">
          <div className="text-green-400 font-bold mb-2">Step 4. </div>
          <h4 className="text-xl font-bold mb-2">Result Optimization</h4>
          <p className="text-gray-400 text-sm">We capture and record key metrics from previous launches. These are optimized to get the best results. Our performance-based approach ensures our goals are 100% aligned with yours.</p>
        </div>
      </div>

    </div>
  </div>

  <div className='block pt-10'>
      <button
        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        className=" border border-black-500 px-10 py-4 rounded-full text-gray-900 bg-green-400 hover:bg-green-500 shadow-2xl transition duration-300 transform hover:scale-105"
      >
       <span className='text-xl font-semibold'> Book Your Consultation Slot </span>
      </button>
    </div>
</section>
  )
}


const Pricing = () => {
  const prices = [
    {
      name: "Expertly Crafted, Creative Human Content",
      description: "Best for thought leadership and authority-building.",
      properties: [
        'Tailored SEO Strategy', 
        'Industry-Specific Expertise', 
        'Custom Briefing Process', 
        'Seamless Communication', 
        '2-Layer Quality Control'
      ],
      cta: "Hire the Humans",
      highlight: false
    },
    {
      name: "Efficient and Scalable AI-Assisted Content",
      description: "High-volume output without sacrificing brand voice.",
      properties: [
        "24 hour turnaround times", 
        "Cost-effective Content", 
        "Human Quality Control Process", 
        "Up to 30,000 words per week",
        "AI-Driven Topic Clustering"
      ],
      cta: "Scale Your Content",
      highlight: false
    },
    {
      name: "Highly Converting Websites & Landing Pages",
      description: "Custom-coded sales machines built for results.",
      properties: [
        "Psychology-Backed UI/UX Design",
        "Conversion-Focused Copywriting",
        "Lightning-Fast Technical SEO",
        "Advanced Lead-Capture Integration",
        "Mobile-First Performance Build"
      ],
      cta: "Build My Website",
      highlight: true // We highlight this as the premium service
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Choose Your <span className="text-indigo-400">Growth Engine</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Scalable solutions designed to turn your digital presence into a consistent lead-generation machine.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prices.map((tier, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl flex flex-col border transition-all duration-300 hover:-translate-y-2 ${
                tier.highlight 
                  ? 'bg-gray-800 border-indigo-500 shadow-[0_0_30px_-10px_rgba(99,102,241,0.5)]' 
                  : 'bg-gray-900 border-gray-800 hover:border-indigo-800'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Recommended
                </span>
              )}

              <h3 className="text-xl font-bold mb-3 min-h-[60px]">{tier.name}</h3>
              <p className="text-gray-400 text-sm mb-8">{tier.description}</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.properties.map((prop, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {prop}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition duration-300 ${
                tier.highlight 
                  ? 'bg-indigo-500 hover:bg-indigo-600 text-white' 
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-200'
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// --- Services Section Component ---
const Services = () => {
  const servicePackages = [
    {
      title: "Conversion-Driven Website Design",
      description: "We don't just make it look good—we engineer every page to guide visitors straight to the 'Buy Now' or 'Contact Us' button. Mobile-first, speed-optimized, and built for lead generation.",
      icon: Monitor,
      color: 'rgb(59, 130, 246)', // blue-500
      features: ["Strategic Site Architecture", "Mobile & SEO Optimization", "Integrated Lead Forms", "Launch & Monitoring Support"]
    },
    {
      title: "High-Impact Copywriting",
      description: "Tired of marketing that sounds generic? We craft persuasive, clear messaging for your website, emails, and ads that speaks directly to your ideal client's pain points and positions you as the only solution.",
      icon: BookOpen,
      color: 'rgb(251, 191, 36)', // amber-400
      features: ["Value Proposition Clarity", "SEO-Optimized Headlines", "Persuasive CTAs", "Wireframe-Ready Content"]
    },
    {
      title: "The Astutians' Conversion Accelerator",
      description: "Our signature, combined package. Get a brand-new website launch fully loaded with world-class, conversion-focused copywriting. The fastest path to fetching new, qualified clients.",
      icon: Zap,
      color: 'rgb(16, 185, 129)', // emerald-500
      features: ["Full Website + Copy Package", "4-Week Rapid Launch Timeline", "Post-Launch Conversion Testing", "Dedicated Client Success Manager"]
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          Our Two Levers for Client Acquisition
        </h3>
        <p className="text-xl text-gray-500 text-center max-w-3xl mx-auto mb-16">
          Every service is designed to achieve one thing: higher lead volume and better conversion rates for your business.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {servicePackages.map((pkg, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-xl border-t-4 border-indigo-600 hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2"
            >
              <FeatureIcon icon={pkg.icon} color={pkg.color} />
              <h4 className="mt-4 text-2xl font-bold text-gray-900">{pkg.title}</h4>
              <p className="mt-3 text-gray-600 mb-6 min-h-[5rem]">{pkg.description}</p>
              <ul className="space-y-3 text-base text-gray-700">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 w-full text-center px-4 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-md"
              >
                Start Converting Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Results/Testimonials Section Component ---
const Results = () => {
  const testimonials = [
    { name: "Jessica R., E-Learning Platform", quote: "The new website copy immediately dropped our bounce rate by 18% and increased trial sign-ups. The investment paid for itself in a month.", metric: "18% Lower Bounce Rate" },
    { name: "Michael C., SaaS Startup", quote: "We finally have a site that guides users instead of confusing them. Our demo requests are up 35% since The Astutians launched the design.", metric: "35% More Demo Requests" },
    { name: "Maria L., Legal Services", quote: "They revamped our contact forms and messaging. We're now fetching 2x the quality leads we were before, without increasing our ad spend.", metric: "2X Quality Lead Volume" },
  ];

  return (
    <section id="results" className="py-20 md:py-24 bg-indigo-50/50">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          Results That Convert
        </h3>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16">
          We only partner with businesses ready for serious growth. These are quantifiable results from our clients.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-2xl border-l-4 border-green-500">
              <p className="text-4xl font-extrabold text-indigo-600 mb-4">{t.metric}</p>
              <p className="italic text-gray-700 leading-relaxed">"{t.quote}"</p>
              <p className="mt-4 font-semibold text-sm text-gray-800">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Contact Section Component (includes 'Our Method') ---
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API submission
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className={`py-20 md:py-24 bg-[${bgcolor}]`}>
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-cyan-50 text-center mb-10">
          Are You Ready to Grow?
        </h3>

        
        <div className="max-w-5xl mx-auto bg-gray-50 p-8 md:p-12 rounded-2xl shadow-3xl grid md:grid-cols-2 gap-12">
          
          {/* Our Method Column */}
          <div id="about" className="space-y-6">
            <h4 className="text-2xl font-bold text-gray-900 border-b pb-2 border-indigo-200">
              The Astutians' Conversion Method
            </h4>
            <p className="text-gray-600 text-lg font-medium">
              We don't do 'busy work.' Our entire process is optimized for speed, clarity, and ROI.
            </p>
            
            <ol className="space-y-4 pt-2 list-none">
              <li className="flex items-start">
                <span className="text-2xl font-extrabold text-indigo-600 mr-3 flex-shrink-0">1.</span>
                <div>
                  <h5 className="font-bold text-gray-900">Conversion Audit & Strategy</h5>
                  <p className="text-gray-600 text-sm">We analyze your current digital presence to find the conversion leaks and map out your custom path to growth.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl font-extrabold text-indigo-600 mr-3 flex-shrink-0">2.</span>
                <div>
                  <h5 className="font-bold text-gray-900">Design & Copy Execution</h5>
                  <p className="text-gray-600 text-sm">We build the digital infrastructure (website) and the compelling words (copywriting) simultaneously for maximum impact.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl font-extrabold text-indigo-600 mr-3 flex-shrink-0">3.</span>
                <div>
                  <h5 className="font-bold text-gray-900">Launch & Optimization</h5>
                  <p className="text-gray-600 text-sm">Your new client-fetching machine goes live, and we stay on to monitor performance and make continuous conversion-boosting adjustments.</p>
                </div>
              </li>
            </ol>
          </div>

          {/* Contact Form Column */}
          <div>
            <h4 className="text-2xl font-bold text-gray-900 border-b pb-2 border-green-200">
              Start Your Conversion Audit Now
            </h4>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Business Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">What is your current biggest lead conversion challenge?</label>
                <textarea
                  name="message"
                  id="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-green-500 hover:bg-green-600 transition duration-300 disabled:opacity-50 font-bold transform hover:scale-[1.01]"
              >
                {status === 'sending' ? 'Analyzing...' : 'Schedule Discovery Call'}
              </button>
              {status === 'success' && (
                <p className="text-sm text-green-700 font-semibold text-center mt-2">
                  Success! The Astutians will be in touch within 1 business day.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


// --- Icon Components (for Service Cards) ---
const FeatureIcon = ({ icon: Icon, color }) => (
  <div className={`p-3 rounded-xl bg-opacity-10`} style={{ backgroundColor: color }}>
    <Icon className="w-6 h-6" style={{ color: color }} />
  </div>
);


// --- Hero Section Component ---
const Heros = () => (
  <section  className={`py-24  md:pt-40 bg-[${bgcolor}] `}>
    <div className="container mx-auto px-6 text-center"> 
      <h2 className="text-3xl sm:text-5xl lg:text-7xl font-LibreFranklin font-extrabold mb-6 leading-tight max-w-5xl text-zinc-50 mx-auto">
        Turn Your Ideas Into Brands, Websites,  and Digital  <span className="text-cyan-400?">Systems That Drive Revenue.</span> 
      </h2>

     { /*<ul className=" inline-block text-left mb-10 space-y-3">
      {[
        
        "Quality-checked, human-written content that triggers action.",
        "Websites and landing pages that attract new clients.",
        "Success-proven strategies tailored to your brand's DNA."
      ].map((item, index) => (
        <li key={index} className="flex items-center text-lg md:text-xl text-gray-300">
          <svg className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
          {item}
        </li>
      ))}
    </ul>*/}
    <div className='block pt-10'>
      <button
        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        className=" px-10 py-4 text-xl font-bold rounded text-black bg-green-400 hover:bg-green-500 shadow-2xl transition duration-300 transform hover:scale-105 hover:cursor-pointer"
      >
       Get Started!
      </button>
    </div>

      
    </div>
  </section>
);

const ClientLogoso = () => {
  const logos = [
    { name: 'Whatech', url: 'https://i.ibb.co/Z6bLW5b3/whatechi-1.png' },
    { name: 'Clever Investor', url: 'https://i.ibb.co/4RXcpkd5/clvr-logo-1.png' },
    { name: 'AllCaps', url: 'https://i.ibb.co/GvcQfQ2t/md2x.png' },
    { name: 'GoldyVhista', url: 'https://i.ibb.co/yF3TWcZV/GDVSTA-1.png' },
    { name: 'Fubbi', url: 'https://i.ibb.co/dJfpMpPp/download-3-1.png' }
  ];

  const logos2 = [
    
  ]

  // Duplicate array for a seamless loop
  const doubleLogos = [...logos, ...logos2];

  return (
    <section className="w-full overflow-hidden bg-neutral-80 border-y border-neutral-100 py-5 ">
      {/* Subtle Heading */}

      {/* Marquee Track Container with Gradient Edge Fades */}
      <div className="relative flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,_transparent_0,_black_128px,_black_calc(100%-128px),_transparent_100%)]">
        
        <div className="flex min-w-full shrink-0 items-center justify-around gap-12 md:gap-20 animate-marquee opacity-60 hover:[animation-play-state:paused]">
          {doubleLogos.map((logo, index) => (
            <div key={index} className="flex shrink-0 justify-center items-center group">
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="h-8 md:h-12 w-auto object-contain filter grayscale transition duration-300 group-hover:grayscale-0 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Duplicate Track for Smooth Continuity */}
        <div className="flex min-w-full shrink-0 items-center justify-around gap-12 md:gap-20 animate-marquee opacity-60 hover:[animation-play-state:paused]" aria-hidden="true">
          {doubleLogos.map((logo, index) => (
            <div key={`dup-${index}`} className="flex shrink-0 justify-center items-center group">
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="h-8 md:h-12 w-auto object-contain filter grayscale transition duration-300 group-hover:grayscale-0 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};