import { Template, CategoriesAndItems } from '@components';
import { useGetCategories } from '@hooks';

const FavouritesLayout = () => {
  const { categories, loading } = useGetCategories();

  return (
    <Template pageTitle="Favourite items">
      <CategoriesAndItems
        itemsByCategory={categories}
        loading={loading}
        favourites
      />
    </Template>
  );
};

export default FavouritesLayout;
