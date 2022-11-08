import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

export async function getCategories(): Promise<any> {
  const categoriesCollectionRef = collection(db, 'categories');

  const data = await getDocs(categoriesCollectionRef);

  return data.docs.map((doc) => doc.data());
}
