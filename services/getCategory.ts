import { collection, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';

export function getCategory(categoryName: string): any {
  const categoriesRef = collection(db, 'categories');

  const category = query(categoriesRef, where('category', '==', categoryName));

  console.log(category);

  return category;
}
