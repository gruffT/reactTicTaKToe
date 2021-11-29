import React from 'react';
import {render,screen,fireEvent} from '@testing-library/react';
import {Reset} from './Reset';
import {StatusContext} from '../Status/StatusContext';
import {GridContext} from '../GameGrid/GridContext';
import {WINNER_X, INIT, VALUE_X} from '../Status/Statuses';

describe('Reset', () => {
  it('should reset Grid state and game status to initial state on click', () => {
    const setStatus = jest.fn();
    const setGridValue = jest.fn();
    render(
      <GridContext.Provider value={[
        [VALUE_X, setGridValue], [undefined, setGridValue], [VALUE_X, setGridValue], 
        [undefined, setGridValue], [VALUE_X, setGridValue], [undefined, setGridValue], 
        [VALUE_X, setGridValue], [undefined, setGridValue], [VALUE_X, setGridValue], 
      ]}>
        <StatusContext.Provider value={[WINNER_X, setStatus]}>
          <Reset />
        </StatusContext.Provider>
      </GridContext.Provider>
    );
    fireEvent.click(screen.getByText('Reset'));
    expect(setStatus).toHaveBeenCalledTimes(1);
    expect(setStatus).toHaveBeenCalledWith(INIT);
    expect(setGridValue).toHaveBeenCalledTimes(9);
    expect(setGridValue).toHaveBeenCalledWith(undefined);
  });
});