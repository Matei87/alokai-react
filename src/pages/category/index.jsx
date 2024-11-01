import { selectParam, selectProducts } from '../../store/selectors.js';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks.js';
import CategorySidebar from '../../components/CategorySidebar';
import ProductCard from '../../components/ProductCard';

const Category = () => {
  const products = useAppSelector(selectProducts);
  const param = useAppSelector(selectParam);
  const { slug } = useParams();

  const productFiltered =
    products.filter((el) => el.category === param).length === 0
      ? products
      : products.filter((el) => el.category === param);

  console.log('Category ', slug, productFiltered);

  return (
    <div className='flex justify-center items-center gap-12 md:py-16 md:items-start md:mx-auto xl:max-w-[1536px]'>
      <aside className='hidden md:flex w-3/12 flex-col justify-center gap-4 mx-auto'>
        <CategorySidebar />
      </aside>
      <main className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {productFiltered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
};

export default Category;
