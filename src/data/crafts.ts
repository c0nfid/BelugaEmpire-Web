import { CraftRecipe } from '../types';

const i = (id: string, name: string, isBlock = false) => ({ id, name, isBlock });

export const crafts: CraftRecipe[] = [
  {
    id: 'cr1',
    resultName: 'Броня Глубин',
    resultDescription: 'Позволяет дышать под водой бесконечно.',
    sourceInfo: 'Сердце моря добывается из кладов.',
    ingredients: [
      i('prismarine_shard', 'Осколок призмарина'), i('heart_of_the_sea', 'Сердце моря'), i('prismarine_shard', 'Осколок призмарина'),
      i('diamond', 'Алмаз'), i('netherite_ingot', 'Незеритовый слиток'), i('diamond', 'Алмаз'),
      null, i('diamond', 'Алмаз'), null
    ]
  },
  {
    id: 'cr2',
    resultName: 'TNT-Разрушитель',
    resultDescription: 'Взрывает обсидиан с 3 попытки.',
    sourceInfo: 'Порох выпадает с криперов в данжах.',
    ingredients: [
      i('gunpowder', 'Порох'), i('tnt_side', 'Динамит', true), i('gunpowder', 'Порох'),
      i('tnt_side', 'Динамит', true), i('blaze_rod', 'Огненный стержень'), i('tnt_side', 'Динамит', true),
      i('gunpowder', 'Порох'), i('tnt_side', 'Динамит', true), i('gunpowder', 'Порох')
    ]
  }
];