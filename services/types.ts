export interface CreateCategory {
  category: string;
  color: string;
  items: any[];
}

export interface CreateItem {
  item: string;
  category: string;
  image: File;
}
