// App.tsx
import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Advantages from './components/Advantages/Advantages';
import Reviews from './components/Reviews/Reviews';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

const App: React.FC = () => (
  <>
    <Header />
    <HeroSection />
    <Advantages />
    <Reviews />
    <ContactForm />
    <Footer />
  </>
);

export default App;
