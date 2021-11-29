import React, {useState, useEffect} from 'react';
import {NEXT_PLAYER_X} from './Statuses';

export const StatusContext = React.createContext('');

const StatusContextProvider = ({children}) => {
  const [status,setStatus] = useState();
  useEffect(() => {
    if(status === undefined) setStatus(NEXT_PLAYER_X);
  }, [status, setStatus]);
  return (
    <StatusContext.Provider value={[status,setStatus]}>
      {children}
    </StatusContext.Provider>
  )
}
export default StatusContextProvider;