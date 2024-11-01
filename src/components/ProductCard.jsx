import {
  SfRating,
  SfCounter,
  SfButton,
  useDisclosure,
} from '@storefront-ui/react';
import { useAppDispatch } from '../store/hooks.js';
import { addToCart } from '../store/slice.js';
import { Link } from 'react-router-dom';
import MiniBag from './MiniBag.jsx';

const ProductCard = ({ product }) => {
  const { isOpen, open, close } = useDisclosure({ initialValue: false });
  const dispatch = useAppDispatch();
  const { id, image, title, price, rating } = product;

  return (
    <div className='border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]'>
      <div className='p-4'>
        <Link to={`/product/${id}`} className='block'>
          <img
            src={image}
            alt='Great product'
            className='object-contain h-auto rounded-md aspect-square'
            width='300'
            height='300'
          />
        </Link>
      </div>
      <div className='p-4 border-t border-neutral-200  flex flex-col gap-2'>
        <p>{title?.slice(0, 25)}</p>

        <div className='flex items-center'>
          <SfRating size='xs' value={rating?.rate} max={5} />
          <SfCounter size='xs'>{rating?.count}</SfCounter>
        </div>
        <span className='block font-bold typography-text-lg'>${price}</span>
        <SfButton
          size='sm'
          onClick={() => {
            dispatch(addToCart(product));
            open();
          }}
          className='uppercase'
        >
          Add to bag
        </SfButton>
      </div>
      <MiniBag isOpen={isOpen} close={close} />
    </div>
  );
};

export default ProductCard;
