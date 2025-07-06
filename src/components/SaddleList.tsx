import { MATERIALS } from "../data/materials";

import type { Saddle } from '../types';

type Props = {
  saddles: Saddle[];
};

export default function SaddleList({ saddles }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">登録済みのサドル</h2>
      {saddles.map((saddle) => (
        <div key={saddle.id} className="border p-4 rounded shadow bg-white">
          <div className="font-bold">{saddle.name}（防御力: {saddle.defense}）</div>
          <ul className="ml-4 list-disc">
            {saddle.materials.map((mat) => {
              const matInfo = MATERIALS.find((m) => m.id === mat.materialId);
              return (
                <li key={mat.materialId}>
                  {matInfo?.name.ja} × {mat.amount}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
