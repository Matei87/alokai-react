import {
  SfAccordionItem,
  SfListItem,
  SfIconChevronLeft,
  SfIconCheck,
} from '@storefront-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectParam, selectProducts } from '../store/selectors';
import { useAppDispatch } from '../store/hooks';
import { setParam } from '../store/slice';

const CategoryFilter = () => {
  const [opened, setOpened] = useState(true);
  const dispatch = useAppDispatch();

  const param = useSelector(selectParam);
  const products = useSelector(selectProducts);

  const categories = [
    'all',
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <SfAccordionItem
      open={opened}
      onToggle={() => setOpened(!opened)}
      className='w-full'
      summary={
        <div className='flex justify-between p-2 mb-2 bg-neutral-100 md:rounded-md px-4 py-2 text-sm font-bold font-headingstracking-widest uppercase'>
          <p className='font-medium'>Category</p>
          <SfIconChevronLeft
            className={`${
              opened ? 'rotate-90' : '-rotate-90'
            } text-neutral-500`}
          />
        </div>
      }
    >
      <ul className='mt-2 mb-6'>
        {categories.map((category) => (
          <li key={category}>
            <SfListItem
              size='sm'
              as='a'
              className={`${
                param === category &&
                'bg-primary-100 hover:bg-primary-100 font-medium'
              } first-of-type:mt-2 rounded-md active:bg-primary-100`}
              onClick={(el) =>
                dispatch(setParam(el.target.textContent.toLowerCase()))
              }
              slotSuffix={
                category === param && (
                  <SfIconCheck size='sm' className='text-primary-700' />
                )
              }
            >
              <span className='flex items-center'>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </SfListItem>
          </li>
        ))}
      </ul>
    </SfAccordionItem>
  );
};

export default CategoryFilter;
