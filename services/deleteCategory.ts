import { getCategory } from './getCategory';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from 'config/firebase';

export async function deleteCategory(categoryName: string): Promise<void> {
  const categoryObj = await getCategory(categoryName);

  await deleteDoc(doc(db, 'categories', categoryObj.id));
}
