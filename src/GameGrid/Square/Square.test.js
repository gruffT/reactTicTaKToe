import React from 'react';
import {render,screen,fireEvent} from '@testing-library/react';
import {StatusContext} from '../../Status/StatusContext';
import {Square,VALUE_O,VALUE_X} from './Square';
import {NEXT_PLAYER_X,NEXT_PLAYER_O} from '../../Status/Statuses';

describe('Square', () => {
  const setState = jest.fn();
  const setStatus = jest.fn();

  beforeEach(() => {
      jest.clearAllMocks();
  });

  it('should display a value X based on the params', () => {
      render(<Square value={VALUE_X} />);
      expect(screen.getByText(VALUE_X)).toBeInTheDocument();
  });

  it('should display a value O based on the params', () => {
      render(<Square value={VALUE_O} />);
      expect(screen.getByText(VALUE_O)).toBeInTheDocument();
  });

  it('should display no value based on the params', () => {
      render(<Square value={undefined} />);
      expect(screen.queryByText(VALUE_O)).not.toBeInTheDocument();
      expect(screen.queryByText(VALUE_X)).not.toBeInTheDocument();
  });

  it('should be able to set state provided if value is undefined on click with value based on context', () => {
    render(
      <StatusContext.Provider value={[NEXT_PLAYER_X, setStatus]}>
        <Square value={undefined} setState={setState} />
      </StatusContext.Provider>
    );
    fireEvent.click(screen.getByTitle('square'));
    expect(setState).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenCalledWith(VALUE_X);
  });

  it('should not set state on click if value is defined', () => {
    render(
      <StatusContext.Provider value={[NEXT_PLAYER_X, setStatus]}>
        <Square value={VALUE_X} setState={setState} />
      </StatusContext.Provider>
    );
    fireEvent.click(screen.getByTitle('square'));
    expect(setState).toHaveBeenCalledTimes(0);
    expect(setStatus).toHaveBeenCalledTimes(0);
  });
});