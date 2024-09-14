import React, { createContext, useContext } from 'react';
import resource from '../utils/resource';

const TextContext = createContext();

export const TextProvider = ({ children }) => {
  return (
    <TextContext.Provider value={resource}>
      {children}
    </TextContext.Provider>
  );
};

export const useTexts = () => {
  return useContext(TextContext);
};
