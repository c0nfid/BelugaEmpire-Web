import { Boss } from '../types';

export const bosses: Boss[] = [
  {
    id: 'b1',
    name: 'Кракен',
    type: 'clan',
    hp: 15000,
    mechanics: '3 фазы, призыв щупалец, затопление арены.',
    rewards: 'Легендарные трезубцы, Сфера воды, +1000 кланового рейтинга.',
    tags: ['Подходит для кланов', 'Сложный'],
    killsCount: 12
  },
  {
    id: 'b2',
    name: 'Страж Руин',
    type: 'group',
    hp: 5000,
    mechanics: 'Лазерные атаки, шипы из земли.',
    rewards: 'Эпическая броня, древние обломки.',
    tags: ['Для группы 3-5 чел'],
    killsCount: 84
  },
  {
    id: 'b3',
    name: 'Утопленник-Гигант',
    type: 'solo',
    hp: 800,
    mechanics: 'Притягивание удочкой, яд.',
    rewards: 'Ресурсы, опыт, монеты.',
    tags: ['Для соло игры'],
    killsCount: 1542
  }
];
