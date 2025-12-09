import { CraftRecipe } from '../types';

export const crafts: CraftRecipe[] = [
  {
    id: 'cr1',
    resultName: 'Броня Глубин',
    resultDescription: 'Позволяет дышать под водой бесконечно.',
    sourceInfo: 'Сердце моря добывается из кладов.',
    ingredients: [
      'Призмарин', 'Сердце моря', 'Призмарин',
      'Алмаз', 'Незерит', 'Алмаз',
      null, 'Алмаз', null
    ]
  },
  {
    id: 'cr2',
    resultName: 'TNT-Разрушитель',
    resultDescription: 'Взрывает обсидиан с 3 попытки.',
    sourceInfo: 'Порох выпадает с криперов в данжах.',
    ingredients: [
      'Порох', 'Динамит', 'Порох',
      'Динамит', 'Огненный стержень', 'Динамит',
      'Порох', 'Динамит', 'Порох'
    ]
  }
];
