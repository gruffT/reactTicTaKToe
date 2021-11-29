import React from 'react';
import './static/style/main.css';
import {Status} from './Status/Status';
import StatusContextProvider from './Status/StatusContext';
import {GameGrid} from './GameGrid/GameGrid';
import GridContextProvider from './GameGrid/GridContext';
import {Reset} from './Reset/Reset';
import './static/style/grid.css';

class App extends React.Component {
  render() {
    return (
      <StatusContextProvider>
        <GridContextProvider>
          <div className="gameContainer">
            <Status/>
            <GameGrid/>
            <Reset />
          </div>
        </GridContextProvider>
      </StatusContextProvider>  
    );
  }
}
export default App