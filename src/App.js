import React from 'react';
import NameBanner from './components/NameBanner';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <NameBanner />  {/* Always visible at the top */}
      <Header />
      <p>Welcome to my portfolio!</p>
    </div>
  );
};

export default App;
