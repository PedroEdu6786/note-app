import React from 'react';
import useGlobalState from '../utils/hooks/useGlobalState';
import Context from './context';

const GlobalStateProvider = ({ children }: any) => {
  return (
    <Context.Provider value={useGlobalState()}>{children}</Context.Provider>
  );
};

export default GlobalStateProvider;
