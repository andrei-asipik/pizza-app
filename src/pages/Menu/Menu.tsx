import Headling from '../../components/Headling/Headling';
import ProductCart from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
// import { v4 as uuidv4 } from 'uuid';

function Menu() {
  return (
    <>
      <div className={styles['head']}>
        <Headling className="Head">Menu</Headling>
        <Search placeholder="Введите блюдо или состав" />
      </div>
      <div>
        <ProductCart
          id={1}
          title={'title'}
          price={0}
          description={'description'}
          image={'/demo.png'}
          rating={0}
        />
      </div>
    </>
  );
}

export default Menu;
