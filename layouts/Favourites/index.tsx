import { Template, CategoriesAndItems } from '@components';

const FavouritesLayout = () => {
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
    <Template pageTitle="Favourite items">
      <CategoriesAndItems itemsByCategory={itemsByCategories} favourites />
    </Template>
  );
};

export default FavouritesLayout;
