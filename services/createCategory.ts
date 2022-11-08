import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { getCategories } from './getCategories';
import { CreateCategory } from './types';

export async function createCategory(
  categoryObj: CreateCategory
): Promise<void> {
  await validateCategory(categoryObj);

  const categoriesCollectionRef = collection(db, 'categories');

  await addDoc(categoriesCollectionRef, categoryObj);
}

async function validateCategory(categoryObj: CreateCategory): Promise<void> {
  const categoriesList = await getCategories();

  const categoriesNames = categoriesList.map(
    (category: CreateCategory) => category.category
  );

  const categoriesColors = categoriesList.map(
    (category: CreateCategory) => category.color
  );

  if (
    categoriesNames.some(
      (categoryName: string) => categoryName === categoryObj.category
    )
  ) {
    throw new Error('Category name already exists');
  }

  if (
    categoriesColors.some(
      (categoryColor: string) => categoryColor === categoryObj.color
    )
  ) {
    throw new Error('Another category already has this color');
  }
}
