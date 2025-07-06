export type Material = {
  id: string;
  name: {
    ja: string;
    en: string;
  }; // アイテム名
  unit: string; // 単位(個,枚 等)
  stackSize: number; // 1スタックの数
};

export const MATERIALS: Material[] = [
  {
    id: 'hide',
    name: { ja: '皮', en: 'Hide' },
    unit: '枚',
    stackSize: 200,
  },
  {
    id: 'fiber',
    name: { ja: '繊維', en: 'Fiber' },
    unit: '個',
    stackSize: 300,
  },
  {
    id: 'metal_ingot',
    name: { ja: '金属のインゴット', en: 'Metal Ingot' },
    unit: '個',
    stackSize: 300,
  },
  {
    id: 'cementing_paste',
    name: { ja: 'セメント', en: 'Cementing Paste' },
    unit: '個',
    stackSize: 100,
  },
];
