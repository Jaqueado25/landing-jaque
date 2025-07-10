import React from 'react';

const JaqueLogo = ({ className, hideText }) => (
  <div className={`flex items-center ${className || ''}`}>
    <img src="/android-chrome-512x512.png" alt="Jaque Logo" className="w-16 h-16" />
    {!hideText && (
      <span className="mb-0 text-2xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
        Jaque Automation
      </span>
    )}
  </div>
);

export default JaqueLogo; 