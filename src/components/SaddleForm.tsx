import { useState } from "react";
import { MATERIALS } from "../data/materials";

import type { Saddle, SaddleMaterial } from '../types';

type Props = {
  onAdd: (saddle: Saddle) => void;
};

export default function SaddleForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [defense, setDefense] = useState<number | "">("");
  const [materials, setMaterials] = useState<SaddleMaterial[]>(
    MATERIALS.map((m) => ({ materialId: m.id, amount: "" }))
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const usedMaterials = materials
      .filter((m) => m.amount !== "" && m.amount > 0)
      .map((m) => ({ ...m, amount: Number(m.amount) }));
    onAdd({
      id: crypto.randomUUID(),
      name,
      defense: defense === "" ? 0 : defense,
      materials: usedMaterials,
    });
    setName("");
    setDefense("");
    setMaterials(MATERIALS.map((m) => ({ materialId: m.id, amount: "" })));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded shadow space-y-4 max-w-md"
    >
      <h2 className="text-xl font-bold">サドル登録</h2>

      <div>
        <label className="block font-semibold mb-1">サドル名</label>
        <input
          className="border rounded p-2 w-full bg-white text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">防御力</label>
        <input
          className="border rounded p-2 w-full bg-white text-black"
          type="number"
          step="0.1"
          value={defense}
          onChange={(e) => {
            const val = e.target.value;
            setDefense(val === "" ? "" : parseFloat(val));
          }}
          placeholder="0"
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">必要素材</label>
        <div className="grid grid-cols-2 gap-2 max-h-64 overflow-auto">
          {materials.map((mat, idx) => {
            const matInfo = MATERIALS.find((m) => m.id === mat.materialId)!;
            return (
              <div key={mat.materialId} className="flex items-center space-x-2">
                <span className="w-28">{matInfo.name.ja}</span>
                <input
                  type="number"
                  min={0}
                  className="border rounded p-1 w-20 bg-white text-black"
                  value={mat.amount}
                  onChange={(e) => {
                    const val = e.target.value;
                    const newMats = [...materials];
                    newMats[idx].amount = val === "" ? "" : parseInt(val) || 0;
                    setMaterials(newMats);
                  }}
                  placeholder="0"
                />
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        登録
      </button>
    </form>
  );
}
