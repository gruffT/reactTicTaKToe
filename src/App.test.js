import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should contain status element', () => {
      render(<App/>);
      expect(screen.getByText('Next player: X')).toBeInTheDocument();
  });

  it('should contain game grid', () => {
      render(<App/>);
      expect(screen.getByTestId('gameGrid')).toBeInTheDocument();
  });

  it('should contain a reset button', () => {
      render(<App/>);
      expect(screen.getByText('Reset')).toBeInTheDocument();
  });

  it('should reset a board correctly for empty board', () => {
      render(<App/>);
      fireEvent.click(screen.getByText('Reset'));
      expect(screen.getByText('Next player: X')).toBeInTheDocument();
  });
});