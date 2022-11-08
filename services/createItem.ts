import { setDoc } from 'firebase/firestore';
import { getCategories } from './getCategories';
import { getCategory } from './getCategory';
import { CreateItem } from './types';
import { uploadImage } from './uploadImage';

export async function createItem(itemObj: CreateItem) {
  const categories = await getCategories();

  validateItem(itemObj.item, categories);

  const imagePath = await uploadImage(itemObj.image);

  const category = getCategory(itemObj.category);

  const newItem = {
    item: itemObj.item,
    image: imagePath,
    favourite: false,
  };

  const categoryItems = category.items;

  categoryItems.push(newItem);

  await setDoc(category, { ...category, items: categoryItems });
}

function validateItem(item: string, categories: any): void {
  let itemsNames: string[] = [];

  categories.map((categoryObj: any) => {
    return categoryObj.items.map((itemObj: any) =>
      itemsNames.push(itemObj.item)
    );
  });

  console.log(itemsNames);

  if (itemsNames.some((itemName: string) => itemName === item)) {
    throw new Error('Item name already exists');
  }
}
