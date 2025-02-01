import React from 'react';

const NameBanner = () => {
  return (
    <div style={styles.banner}>
      <h1 style={styles.text}>Adrian Salgado Portfolio</h1>
    </div>
  );
};
const styles = {
    banner: {
      position: 'fixed',
      top: '15px',
      left: '20px',
      fontSize: '52px', // Large & visible
      fontWeight: 'bold',
      fontFamily: 'Montserrat, sans-serif',
      zIndex: 1000,
      background: 'linear-gradient(45deg, #D32F2F, #FF5252, #FF8A80)', // Red gradient
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
      textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', // Light shadow for depth
    },
  
  
  

  text: {
    color: '#4CAF50', // Your requested green
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '600',
    fontSize: '24px',
    margin: 0,
    textAlign: 'center'
  }
};

export default NameBanner;
