export type SaddleMaterial = {
  materialId: string;
  amount: number | "";
};

export type Saddle = {
  id: string;
  name: string;
  defense: number;
  materials: SaddleMaterial[];
};