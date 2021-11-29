import React, {FC} from 'react';
import {StatusContext} from './StatusContext';

export type StatusParams = {}

export const Status:FC<StatusParams> = () => {
  return (
    <StatusContext.Consumer>
      {([status,setStatus]) => (
        <div className="status">
          {status}
        </div>
      )
    }
    </StatusContext.Consumer>
  );
}