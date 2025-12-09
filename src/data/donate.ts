import { Privilege, CurrencyPackage } from '../types';

export const privileges: Privilege[] = [
  {
    id: 'p1',
    name: 'Beluga+',
    price: 150,
    features: ['Цветной ник', 'Кит старт+', 'Доступ к /fly в лобби'],
    server: 'survival'
  },
  {
    id: 'p2',
    name: 'Emperor',
    price: 450,
    features: ['Все от Beluga+', 'Приват 3 регионов', '/feed раз в 10 мин', 'Питомцы 1 уровня'],
    server: 'survival'
  },
  {
    id: 'p3',
    name: 'Poseidon',
    price: 990,
    features: ['Всё от Emperor', 'Кастомный плащ', '/repair', 'Доступ к клановым войнам', 'x1.5 Опыта'],
    server: 'survival'
  },
];

export const currencyPackages: CurrencyPackage[] = [
  { id: 'c1', amount: 250, price: 100, description: 'Хватит на пару ключей', server: 'global' },
  { id: 'c2', amount: 500, price: 190, description: 'Выгодный старт', server: 'global' },
  { id: 'c3', amount: 1000, price: 350, description: 'Для торговли на аукционе', server: 'global' },
  { id: 'c4', amount: 2500, price: 800, description: 'Король экономики', server: 'global' },
];
