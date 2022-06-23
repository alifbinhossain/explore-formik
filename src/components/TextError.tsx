import React from 'react';

const TextError: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className='text-red-600'>{children}</div>;
};

export default TextError;
