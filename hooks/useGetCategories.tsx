import { getCategories } from '@services';
import { useEffect, useState } from 'react';
import { initializeState, selectValue } from '../slices/categorySlice';
import { useSelector, useDispatch } from 'react-redux';

export const useGetCategories = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const categories = useSelector(selectValue);

  const dispatch = useDispatch();

  useEffect(() => {
    const categoriesList = async () => {
      const data = await getCategories();

      setLoading(false);

      dispatch(initializeState(data));
    };
    categoriesList();
  }, []);

  return { categories, loading };
};
