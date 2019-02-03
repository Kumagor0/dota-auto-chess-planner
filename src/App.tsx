import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as queryString from 'query-string';

import { stringToHeroNames } from './heroes';
import { HeroesListWithRouter } from './HeroesList';

class App extends React.Component {
  public render() {
    return (
      <div
        className="App"
        style={{ backgroundColor: 'Black', fontSize: '20px' }}
      >
        <BrowserRouter>
          <Route
            path="/"
            render={({ location: { search } }) => {
              const { heroes: heroesString } = queryString.parse(search);

              if (!heroesString || typeof heroesString !== 'string') {
                return <HeroesListWithRouter pickedHeroes={[]} />;
              }

              return (
                <HeroesListWithRouter
                  pickedHeroes={stringToHeroNames(heroesString)}
                />
              );
            }}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
