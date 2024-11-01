import { selectProducts } from '../../store/selectors.js';
import { useAppSelector } from '../../store/hooks.js';
import Banner from '../../components/Banner';
import Hero from '../../components/Hero';
import ProductSlider from '../../components/ProductSlider';

export default function Home() {
  const products = useAppSelector(selectProducts);

  return (
    <main className='flex flex-col justify-center align-center gap-6 mx-auto max-w-[1536px]'>
      <Hero product={products[1]} />
      <Banner product={products[5]} />
      <ProductSlider products={products.slice(0, 10)} />
    </main>
  );
}
