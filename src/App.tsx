import * as React from 'react';

import { HeroesList } from './HeroesList';

class App extends React.Component {
  public render() {
    return (
      <div
        className="App"
        style={{ backgroundColor: 'Black', fontSize: '20px' }}
      >
        <HeroesList />
      </div>
    );
  }
}

export default App;
