import React, {useState} from 'react';

export const GridContext = React.createContext([]);

const GridContextProvider = ({children}) => {
  const grid = [
    useState(),useState(),useState(),
    useState(),useState(),useState(),
    useState(),useState(),useState(),
  ];
  return (
    <GridContext.Provider value={grid}>
      {children}
    </GridContext.Provider>
  )
}
export default GridContextProvider;