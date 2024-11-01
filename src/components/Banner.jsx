import { Link } from 'react-router-dom';
import { SfButton } from '@storefront-ui/react';

const Banner = ({ product }) => {
  const { title, description, image } = product;

  return (
    <div className='min-h-[600px] w-full shrink-0'>
      <div className='md:flex md:flex-row-reverse md:justify-center min-h-[600px] max-w-[1536px] mx-auto'>
        <div className='p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4'>
          <p
            data-testid='section-subtitle'
            className='typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase'
          >
            SPECIAL OFFER
          </p>
          <h1 className='typography-headline-2 md:typography-headline-1 md:leading-[67.5px] font-bold mt-2 mb-4'>
            {title}
          </h1>
          <p
            data-testid='section-description'
            className='typography-text-base md:typography-text-lg'
          >
            {description}
          </p>
          <div className='flex flex-col md:flex-row gap-4 mt-6'>
            <Link
              // to={`/alokai-react/category/${category}`}
              to='/alokai-react/category/'
            >
              <SfButton data-testid='button-order-now' size='lg' as='a'>
                Browse category
              </SfButton>
            </Link>
          </div>
        </div>
        <div className='flex md:basis-2/4 justify-center align-center'>
          <img
            src={image}
            alt={title}
            className='object-contain object-left'
            crossOrigin='anonymous'
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
