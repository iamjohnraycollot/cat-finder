import React, {useState, createContext} from 'react';

export const CatSelectedContext = createContext();

export const CatSelectedProvider = props => {
  const [catsSelected, setCatsSelected] = useState('');
  
  return(
    <CatSelectedProvider.Provider value={[catsSelected, setCatsSelected]}>
      {props.children}
    </CatSelectedProvider.Provider>
  );
};

