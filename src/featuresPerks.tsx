export const species = [
  'Dragon',
  'Elf',
  'Undead',
  'Orc',
  'Goblin',
  'Element',
  'Human',
  'Naga',
  'Satyr',
  'Troll',
  'Beast',
  'God',
  'Demon',
];

export const featuresPerks = {
  Dragon: {
    3: 'All friendly dragons have 100 mana when battle starts.',
  },
  Elf: {
    3: 'Evasion increased by 20% for all friendly elfs.',
    6: 'Evasion increased by 25% for all friendly elfs.',
    9: 'Evasion increased by 30% for all friendly elfs.',
  },
  Undead: {
    2: 'Armor decreased by 4 for all enemies.',
    4: 'Armor decreased by 6 for all enemies.',
  },
  Orc: {
    2: 'Max HP increased by 250 for all friendly orcs.',
    4: 'Max HP increased by 350 for all friendly orcs.',
  },
  Goblin: {
    3: 'Armor and hp regeneration increased by 15 for a random ally.',
    6: 'Armor and hp regeneration increased by 15 for all allies.',
  },
  Element: {
    2: 'All friendly elements have 30% chance to turn attacker into stone for 4s when attacked by melee chesses.',
    4: 'All allies have 30% chance to turn attacker into stone for 4s when attacked by melee chesses.',
  },
  Human: {
    2: 'All friendly humans have 20% chance to silence target for 4s on damage deal.',
    4: 'All friendly humans have 25% chance to silence target for 4s on damage deal.',
    6: 'All friendly humans have 30% chance to silence target for 4s on damage deal.',
  },
  Naga: {
    2: 'Magic resistance increased by 35 for all allies.',
    // 4: 'Magic resistance increased by 30 for all allies.',
  },
  Satyr: {
    1: "Hides your bench from other players' vision when there are Satyrs in your waiting bench. Hides your pieces on the chess board until the battle begins if you have a Satyr on the board.",
  },
  Troll: {
    2: 'Attack speed increased by 35 for all friendly trolls.',
    4: 'Attack speed increased by 30 for all allies.',
  },
  Beast: {
    2: 'Attack damage increased by 10% for all allies.',
    4: 'Attack damage increased by 20% for all allies.',
    // 6: 'Attack damage increased by 25% for all allies.',
  },
  God: {
    1: 'All allies cooldown gets reduced by 50%.',
  },
  Demon: {
    1: 'Deal 50% extra pure damage to the target.',
  },
  Assassin: {
    3: 'All friendly assasins have 15% chance to deal 3.5x damage.',
    6: 'All friendly assasins have 15% chance to deal 4.5x damage.',
    // 9: 'All friendly assasins have an additional 20% chance to deal 5x damage.',
  },
  Druid: {
    2: 'two ★druids can upgrade to a ★★druid.',
    4: 'two ★★druids can upgrade to a ★★★druid.',
  },
  Hunter: {
    3: 'All friendly hunters have +30 base attack damage, and have +30% chance to pierce through evasion.',
    6: 'All friendly hunters have additional +40 base attack damage and +40% chance to pierce through evasion.',
  },
  Knight: {
    3: 'All friedly knights have 40% chance to proc a damage-reducing shield.',
    6: 'All allies have 40% chance to proc a damage-reducing shield.',
  },
  Mage: {
    3: 'Magic resistance decreased by 40% for all enemies.',
    6: 'Magic resistance decreased by an additional 40% for all enemies.',
  },
  Mech: {
    2: 'HP regeneration increased by 15 for all friendly mechs.',
    4: 'HP regeneration increased by 25 for all friendly mechs.',
  },
  Priest: {
    1: 'Reduce damage to your courier by 20%.',
  },
  Shaman: {
    2: 'Hex an enemy when battle starts.',
  },
  Warlock: {
    3: 'All allies have +15% lifesteal and +15% spell lifesteal.',
    6: 'Warlocks: All allies have +25% lifesteal and +25% spell lifesteal.',
  },
  Warrior: {
    3: 'Armor increased by 5 for all friendly warriors.',
    6: 'Armor increased by an additional 7 for all friendly warriors.',
    9: 'Armor increased by an additional 9 for all friendly warriors.',
  },
  'Demon Hunter': {
    1: 'Negate enemy demon power.',
    2: 'All friendly demons retain their Fel Power',
  },
};
