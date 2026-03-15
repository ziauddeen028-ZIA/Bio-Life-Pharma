import React from 'react';
import biolifeLogo from '../assets/images/bio-logo.png';

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={biolifeLogo} 
        alt="Bio Life Pharma Logo" 
        className="h-14 md:h-18 w-auto object-contain mix-blend-multiply"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
