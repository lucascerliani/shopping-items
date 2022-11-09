import { db } from '../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { getCategory } from './getCategory';

export const deleteItem = async (categoryName: string, itemName: string) => {
  const categoryObj = await getCategory(categoryName);

  const itemToRemoveIndex = categoryObj.items.indexOf(
    categoryObj.items.find((itemObj: any) => itemObj.item === itemName)
  );

  categoryObj.items.splice(itemToRemoveIndex, 1);

  const categoryRef = doc(db, 'categories', categoryObj.id);

  await updateDoc(categoryRef, categoryObj);
};
