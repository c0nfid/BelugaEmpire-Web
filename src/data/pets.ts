import { Pet } from '../types';

export const pets: Pet[] = [
  { id: 'pet1', name: 'Мини-Кит', type: 'support', buffs: 'Регенерация II в воде', howToGet: 'Дроп с Кракена', rarity: 'legendary' },
  { id: 'pet2', name: 'Боевой Краб', type: 'combat', buffs: '+10% урона по бронированным целям', howToGet: 'Магазин / Квесты', rarity: 'epic' },
  { id: 'pet3', name: 'Чайка', type: 'farm', buffs: 'Шанс удвоить улов на рыбалке', howToGet: 'Крафт', rarity: 'common' },
];
