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

// Добавляем новый тип для ингредиента
export interface CraftIngredient {
  id: string;   // ID текстуры (напр. 'gunpowder')
  name: string; // Название на русском (напр. 'Порох')
  isBlock?: boolean; // (опционально) если это блок, а не предмет
}

export interface CraftRecipe extends BaseEntity {
  resultName: string;
  resultDescription: string;
  // Массив теперь хранит объекты CraftIngredient или null
  ingredients: (CraftIngredient | null)[]; 
  sourceInfo: string;
}
