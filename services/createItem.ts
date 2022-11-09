import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { getCategories } from './getCategories';
import { getCategory } from './getCategory';
import { getImageUrl } from './getImageUrl';
import { CreateItem } from './types';
import { uploadImage } from './uploadImage';

export async function createItem(itemObj: CreateItem): Promise<void> {
  const categories = await getCategories();

  validateItem(itemObj.item, categories);

  const imagePath = await uploadImage(itemObj.image);

  const imageUrl = await getImageUrl(imagePath);

  const categoryObj = await getCategory(itemObj.category);

  const newItem = {
    item: itemObj.item,
    image: imageUrl,
    favourite: false,
  };

  const categoryItems = categoryObj.items;

  categoryItems.push(newItem);

  const categoryRef = doc(db, 'categories', categoryObj.id);

  await updateDoc(categoryRef, { items: categoryItems });
}

function validateItem(item: string, categories: any): void {
  let itemsNames: string[] = [];

  categories.map((categoryObj: any) => {
    return categoryObj.items.map((itemObj: any) =>
      itemsNames.push(itemObj.item)
    );
  });

  if (
    itemsNames.some(
      (itemName: string) => itemName.toLowerCase() === item.toLowerCase()
    )
  ) {
    throw new Error('Item name already exists');
  }
}
