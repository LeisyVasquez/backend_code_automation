import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import reducer from '../store';
import ProductsHeader from './ProductsHeader';
import CourseCard from './CourseCard';

function Products() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (

    <FusePageCarded 
      header={<ProductsHeader />}
      content={<CourseCard />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default withReducer('eCommerceApp', reducer)(Products);
