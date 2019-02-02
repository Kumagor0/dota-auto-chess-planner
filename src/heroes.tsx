import { toPairs, countBy } from 'ramda';
import { featuresPerks } from './featuresPerks';

export type HeroType = {
  name: string;
  species: Array<string>;
  className: string;
  cost: number;
};

export const heroes: Array<HeroType> = [
  { name: 'Axe', species: ['Orc'], className: 'Warrior', cost: 1 },
  { name: 'Enchantress', species: ['Beast'], className: 'Druid', cost: 1 },
  { name: 'Ogre Magi', species: ['Ogre'], className: 'Mage', cost: 1 },
  { name: 'Tusk', species: ['Beast'], className: 'Warrior', cost: 1 },
  { name: 'Drow Ranger', species: ['Undead'], className: 'Hunter', cost: 1 },
  {
    name: 'Bounty Hunter',
    species: ['Goblin'],
    className: 'Assassin',
    cost: 1,
  },
  { name: 'Clockwerk', species: ['Goblin'], className: 'Mech', cost: 1 },
  { name: 'Shadow Shaman', species: ['Troll'], className: 'Shaman', cost: 1 },
  { name: 'Bat Rider', species: ['Troll'], className: 'Knight', cost: 1 },
  { name: 'Tinker', species: ['Goblin'], className: 'Mech', cost: 1 },
  { name: 'Anti Mage', species: ['Elf'], className: 'Demon Hunter', cost: 1 },
  { name: 'Tiny', species: ['Element'], className: 'Warrior', cost: 1 },
  { name: 'Crystal Maiden', species: ['Human'], className: 'Mage', cost: 2 },
  { name: 'Beast Master', species: ['Orc'], className: 'Hunter', cost: 2 },
  { name: 'Juggernaut', species: ['Orc'], className: 'Warrior', cost: 2 },
  { name: 'Timbersaw', species: ['Goblin'], className: 'Mech', cost: 2 },
  { name: 'Pain Queen', species: ['Demon'], className: 'Assassin', cost: 2 },
  { name: 'Puck', species: ['Elf', 'Dragon'], className: 'Mage', cost: 2 },
  { name: 'Witch Doctor', species: ['Troll'], className: 'Warlock', cost: 2 },
  { name: 'Slardar', species: ['Naga'], className: 'Warrior', cost: 2 },
  { name: 'Chaos Knight', species: ['Demon'], className: 'Knight', cost: 2 },
  { name: 'Treant Protector', species: ['Elf'], className: 'Druid', cost: 2 },
  { name: 'Morphling', species: ['Element'], className: 'Assassin', cost: 2 },
  { name: 'Luna', species: ['Elf'], className: 'Knight', cost: 2 },
  { name: 'Furion', species: ['Elf'], className: 'Druid', cost: 2 },
  { name: 'Lycan', species: ['Human', 'Beast'], className: 'Warrior', cost: 3 },
  { name: 'Venomancer', species: ['Beast'], className: 'Warlock', cost: 3 },
  { name: 'Omni Knight', species: ['Human'], className: 'Knight', cost: 3 },
  { name: 'Razor', species: ['Element'], className: 'Mage', cost: 3 },
  { name: 'Wind Ranger', species: ['Elf'], className: 'Hunter', cost: 3 },
  {
    name: 'Phantom Assassin',
    species: ['Elf'],
    className: 'Assassin',
    cost: 3,
  },
  { name: 'Abaddon', species: ['Undead'], className: 'Knight', cost: 3 },
  { name: 'Sand King', species: ['Beast'], className: 'Assassin', cost: 3 },
  { name: 'Slark', species: ['Naga'], className: 'Assassin', cost: 3 },
  { name: 'Sniper', species: ['Dwarf'], className: 'Hunter', cost: 3 },
  {
    name: 'Terrorblade',
    species: ['Demon'],
    className: 'Demon Hunter',
    cost: 3,
  },
  { name: 'Viper', species: ['Dragon'], className: 'Assassin', cost: 3 },
  { name: 'Shadow Fiend', species: ['Demon'], className: 'Warlock', cost: 3 },
  { name: 'Lina', species: ['Human'], className: 'Mage', cost: 3 },
  { name: 'Doom', species: ['Demon'], className: 'Warrior', cost: 4 },
  { name: 'Kunkka', species: ['Human'], className: 'Warrior', cost: 4 },
  { name: 'Troll Warlord', species: ['Troll'], className: 'Warrior', cost: 4 },
  { name: 'Light Keeper', species: ['Human'], className: 'Mage', cost: 4 },
  { name: 'Necrophos', species: ['Undead'], className: 'Warlock', cost: 4 },
  {
    name: 'Templar Assassin',
    species: ['Elf'],
    className: 'Assassin',
    cost: 4,
  },
  { name: 'Alchemist', species: ['Goblin'], className: 'Warlock', cost: 4 },
  { name: 'Disruptor', species: ['Orc'], className: 'Shaman', cost: 4 },
  { name: 'Medusa', species: ['Naga'], className: 'Hunter', cost: 4 },
  {
    name: 'Dragon Knight',
    species: ['Human', 'Dragon'],
    className: 'Knight',
    cost: 4,
  },
  { name: 'Lone Druid', species: ['Beast'], className: 'Druid', cost: 4 },
  { name: 'Gyrocopter', species: ['Dwarf'], className: 'Mech', cost: 5 },
  { name: 'Lich', species: ['Undead'], className: 'Mage', cost: 5 },
  { name: 'Tide Hunter', species: ['Naga'], className: 'Hunter', cost: 5 },
  { name: 'Enigma', species: ['Element'], className: 'Warlock', cost: 5 },
  { name: 'Techies', species: ['Goblin'], className: 'Mech', cost: 5 },
];

export const getFeaturesCount = (names: Array<HeroType['name']>) => {
  const allFeatures = names
    .map(heroName => {
      const hero = heroes.find(({ name }) => name === heroName);

      return hero ? [...hero.species, hero.className] : [];
    })
    .reduce((prev, cur) => prev.concat(cur), []);

  return toPairs(countBy(x => x, allFeatures))
    .sort(([, count1], [, count2]) => count2 - count1)
    .map(([feature, count]) => {
      const allPerks = featuresPerks[feature];

      const activePerks = toPairs(allPerks)
        .filter(([requiredCount, perk]) => count >= +requiredCount)
        .map(([requiredCount, description]) => ({
          requiredCount,
          description,
        }));

      return {
        feature,
        count,
        activePerks,
      };
    });
};
