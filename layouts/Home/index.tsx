import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectValue } from '../../slices/counterSlice';
import { Template, CategoriesAndItems } from '@components';

const HomeLayout = () => {
  const count = useSelector(selectValue);

  const dispatch = useDispatch();

  const itemsByCategories = [
    {
      category: 'Cleaning',
      color: 'red',
      items: [
        {
          item: 'Mr. Músculo',
          image: '/ariel.jpg',
          favourite: false,
        },
        {
          item: 'Ayudín',
          image: '/ariel.jpg',
          favourite: true,
        },
        {
          item: 'Cif',
          image: '/ariel.jpg',
          favourite: false,
        },
        {
          item: 'Ala',
          image: '/ariel.jpg',
          favourite: true,
        },
        {
          item: 'Blem',
          image: '/ariel.jpg',
          favourite: false,
        },
        {
          item: 'Skip',
          image: '/ariel.jpg',
          favourite: true,
        },
        {
          item: 'Sun',
          image: '/ariel.jpg',
          favourite: false,
        },
      ],
    },
  ];

  return (
    <Template pageTitle="All items">
      <CategoriesAndItems itemsByCategory={itemsByCategories} />
    </Template>
  );
};

export default HomeLayout;
