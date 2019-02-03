import * as React from 'react';

import { ascend, prop, descend, sortWith } from 'ramda';

import { heroes, HeroType, getFeaturesCount } from './heroes';
import { colors } from './colors';

type PickedHeroesType = Array<HeroType['name']>;

type SortableColumnType = 'name' | 'species' | 'class' | 'cost';

const Feature = ({ name }: { name: string }) => (
  <span style={{ color: colors.features[name] }}>{name}</span>
);

const getHeroesComparators = (
  column: SortableColumnType,
  sortAscending: boolean
) => {
  switch (column) {
    case 'name':
      return [sortAscending ? ascend(prop('name')) : descend(prop('name'))];
    case 'species':
      return [
        sortAscending
          ? ascend(({ species }) => species[0])
          : descend(({ species }) => species[0]),
        ascend(prop('cost')),
      ];
    case 'class':
      return [
        sortAscending ? ascend(prop('className')) : descend(prop('className')),
        ascend(prop('cost')),
      ];
    default:
      return [
        sortAscending ? ascend(prop('cost')) : descend(prop('cost')),
        ascend(prop('name')),
      ];
  }
};

class HeroesTable extends React.Component<
  {
    heroes: Array<HeroType>;
    pickedHeroes: PickedHeroesType;
    onPickedHeroesChange: (newPickedHeroes: PickedHeroesType) => void;
    onSort: (column: SortableColumnType) => void;
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
    const { heroes, pickedHeroes, onSort } = this.props;

    return (
      <table>
        <thead style={{ color: 'White' }}>
          <tr>
            <th
              onClick={() => {
                onSort('name');
              }}
            >
              Name
            </th>
            <th
              onClick={() => {
                onSort('species');
              }}
            >
              Species
            </th>
            <th
              onClick={() => {
                onSort('class');
              }}
            >
              Class
            </th>
            {/* <th>Ability</th> */}
            <th
              onClick={() => {
                onSort('cost');
              }}
            >
              Cost
            </th>
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
                cursor: 'pointer',
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

type HeroesListState = {
  pickedHeroes: PickedHeroesType;
  sortBy: SortableColumnType;
  sortAscending: boolean;
};

export class HeroesList extends React.Component<{}, HeroesListState> {
  state: HeroesListState = {
    pickedHeroes: [],
    sortBy: 'cost',
    sortAscending: true,
  };

  handlePickedHeroesChange = (newPickedHeroes: PickedHeroesType) => {
    this.setState({
      pickedHeroes: newPickedHeroes,
    });
  };

  handleSort = (column: SortableColumnType) => {
    this.setState(({ sortBy, sortAscending }) => ({
      sortBy: column,
      sortAscending: sortBy === column ? !sortAscending : sortAscending,
    }));
  };

  render() {
    const { pickedHeroes, sortBy, sortAscending } = this.state;

    return (
      <div style={{ width: '100%' }}>
        <h1 style={{ color: 'White' }}>
          Click on heroes to add/remove them to/from your team.
        </h1>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <HeroesTable
              heroes={
                sortWith(
                  getHeroesComparators(sortBy, sortAscending),
                  heroes
                ).slice(0, Math.ceil(heroes.length / 2)) as Array<HeroType>
              }
              pickedHeroes={pickedHeroes}
              onPickedHeroesChange={this.handlePickedHeroesChange}
              onSort={this.handleSort}
            />
          </div>
          <div style={{ flex: 1 }}>
            <HeroesTable
              heroes={
                sortWith(
                  getHeroesComparators(sortBy, sortAscending),
                  heroes
                ).slice(Math.ceil(heroes.length / 2), heroes.length) as Array<
                  HeroType
                >
              }
              pickedHeroes={pickedHeroes}
              onPickedHeroesChange={this.handlePickedHeroesChange}
              onSort={this.handleSort}
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
