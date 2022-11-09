import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../config/firebase';

export async function getImageUrl(image: string): Promise<string> {
  const imageRef = ref(storage, image);

  const imageUrl = await getDownloadURL(imageRef);

  return imageUrl;
}
