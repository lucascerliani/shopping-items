import { getCategories } from '@services';
import { useEffect, useState } from 'react';
import { initializeState } from '../slices/categorySlice';
import { useDispatch } from 'react-redux';

export const useGetCategories = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const categoriesList = async () => {
      const data = await getCategories();

      setLoading(false);

      dispatch(initializeState(data));
    };
    categoriesList();
  }, []);

  return { loading };
};
