export interface DataItem {
  id: number;
  type: string;
  description: string;
}

export const data: DataItem[] = [
  { id: 0, type: "cat", description: "rudais" },
  { id: 1, type: "cat", description: "melnais" },
  { id: 2, type: "dog", description: "reksis" },
  { id: 3, type: "mouse", description: "mimi" },
  { id: 4, type: "cat", description: "miskastnieciņš" },
  { id: 5, type: "dog", description: "dusmīgais" },
];
