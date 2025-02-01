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
    position: 'fixed', // Always visible
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Slight dark background for contrast
    padding: '10px 20px',
    borderRadius: '8px',
    zIndex: 1000
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
