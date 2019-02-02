import * as React from 'react';

import { heroes, HeroType, getFeaturesCount } from './heroes';
import { colors } from './colors';

type PickedHeroesType = Array<HeroType['name']>;

type HeroesListState = {
  pickedHeroes: PickedHeroesType;
};

const Feature = ({ name }: { name: string }) => (
  <span style={{ color: colors.features[name] }}>{name}</span>
);

class HeroesTable extends React.Component<
  {
    heroes: Array<HeroType>;
    pickedHeroes: PickedHeroesType;
    onPickedHeroesChange: (newPickedHeroes: PickedHeroesType) => void;
  },
  {}
> {
  handleHeroClick = (heroName: HeroType['name']) => {
    const index = this.props.pickedHeroes.indexOf(heroName);

    if (index === -1) {
      this.props.onPickedHeroesChange([...this.props.pickedHeroes, heroName]);
    } else {
      const newPickedHeroes = [...this.props.pickedHeroes];

      newPickedHeroes.splice(index, 1);

      this.props.onPickedHeroesChange(newPickedHeroes);
    }
  };

  render() {
    const { heroes, pickedHeroes } = this.props;

    return (
      <table>
        <thead style={{ color: 'White' }}>
          <tr>
            <th>Name</th>
            <th>Species</th>
            <th>Class</th>
            {/* <th>Ability</th> */}
            <th>Cost</th>
          </tr>
        </thead>

        <tbody>
          {heroes.map(({ name, species, className, cost }) => (
            <tr
              key={name}
              onClick={() => {
                this.handleHeroClick(name);
              }}
              style={{
                backgroundColor:
                  pickedHeroes.indexOf(name) === -1 ? 'Black' : 'DarkSlateGrey',
              }}
            >
              <td style={{ color: colors.cost[cost], fontWeight: 'bold' }}>
                {name}
              </td>
              <td>
                {species.map(speciesName => (
                  <React.Fragment key={speciesName}>
                    <Feature name={speciesName} />{' '}
                  </React.Fragment>
                ))}
              </td>
              <td>
                <Feature name={className} />
              </td>
              {/* <td> </td> */}
              <td style={{ color: 'White' }}>{cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export class HeroesList extends React.Component<{}, HeroesListState> {
  state: HeroesListState = {
    pickedHeroes: [],
  };

  render() {
    const { pickedHeroes } = this.state;

    return (
      <div style={{ width: '100%' }}>
        <h1 style={{ color: 'White' }}>
          Click on heroes to add/remove them to/from your team.
        </h1>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <HeroesTable
              heroes={heroes.slice(0, 28)}
              pickedHeroes={pickedHeroes}
              onPickedHeroesChange={newPickedHeroes => {
                this.setState({
                  pickedHeroes: newPickedHeroes,
                });
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <HeroesTable
              heroes={heroes.slice(28, 55)}
              pickedHeroes={pickedHeroes}
              onPickedHeroesChange={newPickedHeroes => {
                this.setState({
                  pickedHeroes: newPickedHeroes,
                });
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: 'White' }}>
              <h2>Team size: {pickedHeroes.length}</h2>

              {getFeaturesCount(pickedHeroes).map(
                ({ feature, count, activePerks }) => (
                  <div key={feature} style={{ margin: '10px' }}>
                    <Feature name={feature} /> x {count}
                    {activePerks.map(({ requiredCount, description }) => (
                      <div key={requiredCount}>
                        ({requiredCount}): {description}
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
