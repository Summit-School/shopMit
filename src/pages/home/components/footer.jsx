import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; 2023 Your E-commerce Website. All rights reserved.</p>
        <p>Contact: contact@example.com</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  background: '#f2f2f2',
  padding: '20px 0',
  // position: 'absolute',
  bottom: 0,
  width: '100%',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

export default Footer;
