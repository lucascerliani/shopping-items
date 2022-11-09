import { Template, CategoriesAndItems } from '@components';

const FavouritesLayout = () => {
  return (
    <Template pageTitle="Favourite items">
      <CategoriesAndItems favourites />
    </Template>
  );
};

export default FavouritesLayout;
