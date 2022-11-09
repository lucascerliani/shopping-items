import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';

export async function getCategory(categoryName: string): Promise<any> {
  const categoriesRef = collection(db, 'categories');

  const queryObj = query(categoriesRef, where('category', '==', categoryName));

  const queryData = await getDocs(queryObj);

  const categoryObj = queryData.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  })[0];

  return categoryObj;
}
