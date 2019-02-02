import * as React from 'react';

import { heroes, HeroType, getFeaturesCount } from './heroes';
import { colors } from './colors';

type State = {
  pickedHeroes: Array<HeroType['name']>;
};

const Feature = ({ name }: { name: string }) => (
  <span style={{ color: colors.features[name] }}>{name}</span>
);

export class HeroesList extends React.Component<{}, State> {
  state: State = {
    pickedHeroes: [],
  };

  handleHeroClick = (heroName: HeroType['name']) => {
    const index = this.state.pickedHeroes.indexOf(heroName);

    if (index === -1) {
      this.setState({
        pickedHeroes: [...this.state.pickedHeroes, heroName],
      });
    } else {
      const newPickedHeroes = [...this.state.pickedHeroes];

      newPickedHeroes.splice(index, 1);

      this.setState({
        pickedHeroes: newPickedHeroes,
      });
    }
  };

  render() {
    const { pickedHeroes } = this.state;

    return (
      <div style={{ width: '100%' }}>
        <h1 style={{ color: 'White' }}>
          Click on heroes to add/remove them to/from your team.
        </h1>
        {/* <Grid>
          <Grid.Column width={8}> */}
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <div style={{ flex: 1 }}>
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
                        pickedHeroes.indexOf(name) === -1
                          ? 'Black'
                          : 'DarkSlateGrey',
                    }}
                    // active={pickedHeroes.indexOf(name) !== -1}
                  >
                    <td
                      style={{ color: colors.cost[cost], fontWeight: 'bold' }}
                    >
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
            {/* </Grid.Column>
          <Grid.Column width={8}> */}
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
                    {/* <br /> */}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {/* </Grid.Column>
        </Grid> */}
      </div>
    );
  }
}
