import React, {FC, useContext} from 'react';
import {GridContext} from '../GameGrid/GridContext';
import {StatusContext} from '../Status/StatusContext';

export const Reset:FC = () => {
  const setStatus = useContext(StatusContext)[1];
  const grid = useContext(GridContext);
  const handleClick = () => {
    setStatus(undefined);
    grid.forEach(square => {
      const setSquareValue = square[1];
      setSquareValue(undefined);
    });
  };
  return (
    <div>
      <input type="button" className="reset" data-testid="reset" value="Reset" onClick={() => handleClick()}/>
    </div>
  );
}