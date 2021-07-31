import React, {useState, createContext} from 'react';

export const CatContext = createContext();

export const CatProvider = props => {
  const [catSelected, setCatSelected] = useState([]);
  
  return(
    <CatContext.Provider value={[catSelected, setCatSelected]}>
      {props.children}
    </CatContext.Provider>
  );
};

