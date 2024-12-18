// App.tsx
import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Advantages from './components/Advantages/Advantages';
import Footer from './components/Footer/Footer';
import SocialIcons from './components/SocialIcons/SocialIcons';

const App: React.FC = () => (
  <>
    <Header />
    <HeroSection />
    <SocialIcons />
    <Advantages />
    <Footer />
  </>
);

export default App;
