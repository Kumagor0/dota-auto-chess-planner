import { toPairs, countBy } from 'ramda';
import { featuresPerks } from './featuresPerks';

export type HeroType = {
  name: string;
  species: Array<string>;
  className: string;
  cost: number;
  code: string;
};

export type HeroNamesType = Array<HeroType['name']>;

export const heroes: Array<HeroType> = [
  { name: 'Axe', species: ['Orc'], className: 'Warrior', cost: 1, code: 'ax' },
  {
    name: 'Enchantress',
    species: ['Beast'],
    className: 'Druid',
    cost: 1,
    code: 'en',
  },
  {
    name: 'Ogre Magi',
    species: ['Ogre'],
    className: 'Mage',
    cost: 1,
    code: 'om',
  },
  {
    name: 'Tusk',
    species: ['Beast'],
    className: 'Warrior',
    cost: 1,
    code: 'tu',
  },
  {
    name: 'Drow Ranger',
    species: ['Undead'],
    className: 'Hunter',
    cost: 1,
    code: 'dr',
  },
  {
    name: 'Bounty Hunter',
    species: ['Goblin'],
    className: 'Assassin',
    cost: 1,
    code: 'bh',
  },
  {
    name: 'Clockwerk',
    species: ['Goblin'],
    className: 'Mech',
    cost: 1,
    code: 'cw',
  },
  {
    name: 'Shadow Shaman',
    species: ['Troll'],
    className: 'Shaman',
    cost: 1,
    code: 'sh',
  },
  {
    name: 'Bat Rider',
    species: ['Troll'],
    className: 'Knight',
    cost: 1,
    code: 'br',
  },
  {
    name: 'Tinker',
    species: ['Goblin'],
    className: 'Mech',
    cost: 1,
    code: 'ti',
  },
  {
    name: 'Anti Mage',
    species: ['Elf'],
    className: 'Demon Hunter',
    cost: 1,
    code: 'am',
  },
  {
    name: 'Tiny',
    species: ['Element'],
    className: 'Warrior',
    cost: 1,
    code: 'tn',
  },
  {
    name: 'Mars',
    species: ['God'],
    className: 'Warrior',
    cost: 1,
    code: 'ms',
  },
  {
    name: 'Crystal Maiden',
    species: ['Human'],
    className: 'Mage',
    cost: 2,
    code: 'cm',
  },
  {
    name: 'Beast Master',
    species: ['Orc'],
    className: 'Hunter',
    cost: 2,
    code: 'be',
  },
  {
    name: 'Juggernaut',
    species: ['Orc'],
    className: 'Warrior',
    cost: 2,
    code: 'jn',
  },
  {
    name: 'Timbersaw',
    species: ['Goblin'],
    className: 'Mech',
    cost: 2,
    code: 'ts',
  },
  {
    name: 'Pain Queen',
    species: ['Demon'],
    className: 'Assassin',
    cost: 2,
    code: 'qp',
  },
  {
    name: 'Puck',
    species: ['Elf', 'Dragon'],
    className: 'Mage',
    cost: 2,
    code: 'pu',
  },
  {
    name: 'Witch Doctor',
    species: ['Troll'],
    className: 'Warlock',
    cost: 2,
    code: 'wd',
  },
  {
    name: 'Slardar',
    species: ['Naga'],
    className: 'Warrior',
    cost: 2,
    code: 'sl',
  },
  {
    name: 'Chaos Knight',
    species: ['Demon'],
    className: 'Knight',
    cost: 2,
    code: 'ck',
  },
  {
    name: 'Treant Protector',
    species: ['Elf'],
    className: 'Druid',
    cost: 2,
    code: 'tp',
  },
  {
    name: 'Morphling',
    species: ['Element'],
    className: 'Assassin',
    cost: 2,
    code: 'mo',
  },
  { name: 'Luna', species: ['Elf'], className: 'Knight', cost: 2, code: 'lu' },
  { name: 'Furion', species: ['Elf'], className: 'Druid', cost: 2, code: 'fu' },
  {
    name: 'Lycan',
    species: ['Human', 'Beast'],
    className: 'Warrior',
    cost: 3,
    code: 'ly',
  },
  {
    name: 'Venomancer',
    species: ['Beast'],
    className: 'Warlock',
    cost: 3,
    code: 'vm',
  },
  {
    name: 'Omni Knight',
    species: ['Human'],
    className: 'Knight',
    cost: 3,
    code: 'ok',
  },
  {
    name: 'Razor',
    species: ['Element'],
    className: 'Mage',
    cost: 3,
    code: 'rz',
  },
  {
    name: 'Wind Ranger',
    species: ['Elf'],
    className: 'Hunter',
    cost: 3,
    code: 'wr',
  },
  {
    name: 'Phantom Assassin',
    species: ['Elf'],
    className: 'Assassin',
    cost: 3,
    code: 'pa',
  },
  {
    name: 'Abaddon',
    species: ['Undead'],
    className: 'Knight',
    cost: 3,
    code: 'ab',
  },
  // {
  //   name: 'Sand King',
  //   species: ['Beast'],
  //   className: 'Assassin',
  //   cost: 3,
  //   code: 'sk',
  // },
  // {
  //   name: 'Slark',
  //   species: ['Naga'],
  //   className: 'Assassin',
  //   cost: 3,
  //   code: 'mu',
  // },
  {
    name: 'Sniper',
    species: ['Dwarf'],
    className: 'Hunter',
    cost: 3,
    code: 'sn',
  },
  {
    name: 'Terrorblade',
    species: ['Demon'],
    className: 'Demon Hunter',
    cost: 3,
    code: 'tb',
  },
  {
    name: 'Viper',
    species: ['Dragon'],
    className: 'Assassin',
    cost: 3,
    code: 'vp',
  },
  {
    name: 'Shadow Fiend',
    species: ['Demon'],
    className: 'Warlock',
    cost: 3,
    code: 'sf',
  },
  { name: 'Lina', species: ['Human'], className: 'Mage', cost: 3, code: 'li' },
  // {
  //   name: 'Riki',
  //   species: ['Satyr'],
  //   className: 'Assassin',
  //   cost: 3,
  //   code: 'rk',
  // },
  {
    name: 'Mirana',
    species: ['Elf'],
    className: 'Hunter',
    cost: 3,
    code: 'mr',
  },
  {
    name: 'Doom',
    species: ['Demon'],
    className: 'Warrior',
    cost: 4,
    code: 'do',
  },
  {
    name: 'Kunkka',
    species: ['Human'],
    className: 'Warrior',
    cost: 4,
    code: 'ku',
  },
  {
    name: 'Troll Warlord',
    species: ['Troll'],
    className: 'Warrior',
    cost: 4,
    code: 'tw',
  },
  {
    name: 'Light Keeper',
    species: ['Human'],
    className: 'Mage',
    cost: 4,
    code: 'lk',
  },
  {
    name: 'Necrophos',
    species: ['Undead'],
    className: 'Warlock',
    cost: 4,
    code: 'ne',
  },
  {
    name: 'Templar Assassin',
    species: ['Elf'],
    className: 'Assassin',
    cost: 4,
    code: 'ta',
  },
  {
    name: 'Alchemist',
    species: ['Goblin'],
    className: 'Warlock',
    cost: 4,
    code: 'al',
  },
  {
    name: 'Disruptor',
    species: ['Orc'],
    className: 'Shaman',
    cost: 4,
    code: 'di',
  },
  {
    name: 'Medusa',
    species: ['Naga'],
    className: 'Hunter',
    cost: 4,
    code: 'me',
  },
  {
    name: 'Dragon Knight',
    species: ['Human', 'Dragon'],
    className: 'Knight',
    cost: 4,
    code: 'dk',
  },
  {
    name: 'Lone Druid',
    species: ['Beast'],
    className: 'Druid',
    cost: 4,
    code: 'ld',
  },
  {
    name: 'Gyrocopter',
    species: ['Dwarf'],
    className: 'Mech',
    cost: 5,
    code: 'gc',
  },
  { name: 'Lich', species: ['Undead'], className: 'Mage', cost: 5, code: 'ch' },
  {
    name: 'Tide Hunter',
    species: ['Naga'],
    className: 'Hunter',
    cost: 5,
    code: 'th',
  },
  {
    name: 'Enigma',
    species: ['Element'],
    className: 'Warlock',
    cost: 5,
    code: 'ng',
  },
  {
    name: 'Techies',
    species: ['Goblin'],
    className: 'Mech',
    cost: 5,
    code: 'te',
  },
  {
    name: 'Death Prophet',
    species: ['Undead'],
    className: 'Warlock',
    cost: 5,
    code: 'dp',
  },
  {
    name: 'Zeus',
    species: ['God'],
    className: 'Mage',
    cost: 5,
    code: 'zs',
  },
];

export const getFeaturesList = (names: Array<HeroType['name']>) =>
  names
    .map(heroName => {
      const hero = heroes.find(({ name }) => name === heroName);

      return hero ? [...hero.species, hero.className] : [];
    })
    .reduce((prev, cur) => prev.concat(cur), []);

export const getFeaturesCount = (names: Array<HeroType['name']>) => {
  const allFeatures = getFeaturesList(names);

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

export const heroNamesToString = (heroNames: HeroNamesType) =>
  heroNames
    .map(heroName => {
      const hero = heroes.find(({ name }) => name === heroName);
      return hero ? hero.code : '';
    })
    .sort()
    .join('');

export const stringToHeroNames = (heroesString: string) => {
  const heroCodes = heroesString.match(/.{2}/g);

  if (!heroCodes) {
    return [];
  }

  return Array.from(
    new Set(
      heroCodes
        .map(heroCode => heroes.find(({ code }) => code === heroCode))
        .filter(hero => !!hero)
        .map(hero => (hero ? hero.name : ''))
    )
  );
};
