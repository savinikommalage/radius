import React from 'react';

const Logo = ({ className = "w-6 h-6 md:w-8 md:h-8" }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
    <circle cx="50" cy="50" r="50" />
  </svg>
);

export default Logo;
