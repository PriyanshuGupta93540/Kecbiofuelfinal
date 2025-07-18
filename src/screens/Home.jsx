"use client";

import React from 'react'

import HeroBanner from '../app/Components/HeroBanner'
import BannerContent from '../app/Components/BannerContent'
import Navbar from '../app/Components/Navbar'
import Home2ndsection from '../app/Components/Home2ndsection';
import Home3rdsection from '../app/Components/Home3rdsection';
import Home4thsection from '../app/Components/Home4thsection';
import Home5thsection from '../app/Components/Home5thsection';
import Faq from '../app/Components/Faq';
import Homeservices from '../app/Components/Homeservices';
import Home6thsection from '../app/Components/Home6thsection';
import Footer from '../app/Components/Footer';
import BlogSection from '../app/Components/BlogSectionhome';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner backgroundImage="/images/biofuelbanner1.jpg">
        <BannerContent
          subtitle="Energizing a Sustainable Tomorrow"
          title="Unleashing Sustainable Energy Solutions"
          showVideo={true}
          showSocialLinks={true}
          ctaText="Learn More →"
          onCtaClick={() => console.log('CTA clicked!')}
        />
      </HeroBanner>
      <Home2ndsection />
      <Home3rdsection />
      <Home4thsection />
      <Homeservices />
      <Home6thsection />
      <Home5thsection />
      <Faq />
      <BlogSection />
      <Footer />
    </div>
  )
}

export default Home
