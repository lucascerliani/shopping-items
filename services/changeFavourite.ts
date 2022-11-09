import { db } from 'config/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { getCategory } from './getCategory';

export const changeFavourite = async (
  categoryName: string,
  itemName: string,
  value: boolean
) => {
  const categoryObj = await getCategory(categoryName);

  categoryObj.items.find((item: any) => item.item === itemName)!.favourite =
    value;

  const categoryRef = doc(db, 'categories', categoryObj.id);

  await updateDoc(categoryRef, categoryObj);
};
