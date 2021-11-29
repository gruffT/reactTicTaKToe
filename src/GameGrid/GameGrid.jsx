import React, {useEffect, useContext} from 'react';
import {Square} from './Square/Square';
import {StatusContext} from '../Status/StatusContext';
import {GridContext} from '../GameGrid/GridContext';
import {checkForWinner} from './WinnerCheck';
import {WINNER_X,WINNER_O,TIE, NEXT_PLAYER_X, NEXT_PLAYER_O} from '../Status/Statuses';

export type GameGridParams = {}

export const GameGrid:FC<GameGridParams> = () => {
  const setStatus = useContext(StatusContext)[1];
  const grid = useContext(GridContext);
  useEffect(() => {
    const result = checkForWinner(grid.map(([value,setValue]) => value));
    switch(result) {
      case WINNER_X:
      case WINNER_O:
      case TIE:
        setStatus(result);
        break;
      default:
        setStatus(status => status === NEXT_PLAYER_X ? NEXT_PLAYER_O : NEXT_PLAYER_X);
        break;
    }
  }, [grid, setStatus]);
  return (
    <div className="gridContainer">
      <div data-testid="gameGrid" className="grid">
        {grid.map(([squareValue,setSquareValue],idx) => <Square value={squareValue} setState={setSquareValue} key={idx}/>)}
      </div>
    </div>
  )
}