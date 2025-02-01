import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My Portfolio</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    borderRadius: '10px',
    width: 'fit-content',
    margin: 'auto',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.2)'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold'
  }
};

export default Header;
