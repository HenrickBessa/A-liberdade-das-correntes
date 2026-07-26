export interface VerticalItem {
  id: string;
  title: string;
  excerpt?: string;
  order: number;
}

export interface VerticalContent {
  slug: string;
  name: string;
  description: string;
  items: VerticalItem[];
}
