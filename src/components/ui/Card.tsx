import React from 'react';

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <div className={`bg-beluga-light border border-slate-700 rounded-xl p-6 hover:border-beluga-accent transition-colors duration-300 ${className}`}>
      {children}
    </div>
  );
};
