import { Template, CategoriesAndItems } from '@components';
import { useGetCategories } from '@hooks';

const HomeLayout = () => {
  const { categories, loading } = useGetCategories();

  return (
    <Template pageTitle="All items">
      <CategoriesAndItems itemsByCategory={categories} loading={loading} />
    </Template>
  );
};

export default HomeLayout;
