export type ServerType = 'survival' | 'anarchy';

export interface BaseEntity {
  id: string;
  server?: ServerType | 'global'; // Для фильтрации в будущем
}

export interface Privilege extends BaseEntity {
  name: string;
  price: number;
  features: string[];
}

export interface CurrencyPackage extends BaseEntity {
  amount: number;
  price: number;
  description: string;
}

export interface CustomItem extends BaseEntity {
  name: string;
  type: 'weapon' | 'armor' | 'tool' | 'artifact';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  description: string;
}

export interface Boss extends BaseEntity {
  name: string;
  type: 'clan' | 'solo' | 'group';
  hp: number;
  mechanics: string;
  rewards: string;
  tags: string[];
  killsCount: number;
}

export interface Clan extends BaseEntity {
  rank: number;
  name: string;
  rating: number;
  members: number;
  pvpKills: number;
  bossKills: number;
  online: number;
}

export interface Pet extends BaseEntity {
  name: string;
  type: string;
  buffs: string;
  howToGet: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface CraftRecipe extends BaseEntity {
  resultName: string;
  resultDescription: string;
  ingredients: (string | null)[]; // 9 слотов, null если пусто
  sourceInfo: string;
}
