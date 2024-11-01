import { Link } from 'react-router-dom';
import Logo from '../assets/logogreen.svg';

const NavbarCheckout = () => {
  return (
    <header className='flex justify-center w-full py-2 px-4 lg:py-5 lg:px-6 text-white border-0 bg-white md:pt-2.5 border-b border-neutral-200'>
      <div className='flex gap-[clamp(1rem,3vw,3rem)] items-center w-full md:h-[60px] max-w-screen-3xl py-6 px-4 md:px-6 lg:px-10 3xl:px-0 mx-auto sticky top-0'>
        <Link to='/' className='h-6 md:h-7 -mt-1.5'>
          <img
            src={Logo}
            alt='Logo'
            width={175}
            height={50}
            className='w-[175px] md:h-6 md:w-[176px] lg:w-[12.5rem] lg:h-[1.75rem]'
          />
        </Link>
      </div>
    </header>
  );
};

export default NavbarCheckout;
