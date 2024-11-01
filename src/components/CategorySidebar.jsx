import { selectParam } from '../store/selectors';
import { useAppSelector } from '../store/hooks';
import CategoryFilter from './CategoryFilter';

const CategorySidebar = () => {
  const param = useAppSelector(selectParam);

  return (
    <>
      <h2 className='text-3xl font-bold'>
        {param === 'all'
          ? 'All Categories'
          : param.charAt(0).toUpperCase() + param.slice(1).replace('%20', ' ')}
      </h2>
      <CategoryFilter />
    </>
  );
};

export default CategorySidebar;
