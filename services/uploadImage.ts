import { ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../config/firebase';
import { v4 } from 'uuid';

export async function uploadImage(image: File): Promise<string> {
  const imagePath = `images/${image.name + v4()}`;

  const imageRef = ref(storage, imagePath);

  await uploadBytes(imageRef, image);

  return imagePath;
}
