// src/components/MaterialList.tsx
import { MATERIALS } from '../data/materials';

export const MaterialList = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">素材リスト</h2>
      <ul className="space-y-2">
        {MATERIALS.map((mat) => (
          <li key={mat.id} className="border rounded p-2 shadow">
            <strong>{mat.name.ja} / {mat.name.en}</strong>（最大スタック: {mat.stackSize} {mat.unit}）
          </li>
        ))}
      </ul>
    </div>
  );
};
