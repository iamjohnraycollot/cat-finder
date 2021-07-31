import React, {useState, createContext} from 'react';

export const CatContext = createContext();

export const CatProvider = props => {
  const [cats, setCats] = useState([]);
  
  return(
    <CatContext.Provider value={[cats, setCats]}>
      {props.children}
    </CatContext.Provider>
  );
};

