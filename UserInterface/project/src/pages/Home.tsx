import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;