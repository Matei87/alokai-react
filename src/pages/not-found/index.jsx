import { Link } from 'react-router-dom';
import { SfIconArrowBack } from '@storefront-ui/react';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col gap-4 w-full h-screen justify-center items-center'>
      <h1 className='text-5xl font-bold'>Not Found</h1>
      <p>Sorry, the page you are looking for is not found.</p>

      <Link
        to='/'
        className='justify-center font-bold text-5xl focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent hidden md:flex'
      >
        <SfIconArrowBack size='lg' /> Back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
