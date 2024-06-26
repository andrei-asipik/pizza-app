import Headling from '../../components/Headling/Headling';
import ProductCart from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../components/intefaces/product.interface';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Menu() {
  const [products, setProducts] = useState<Product[]>([]);

  const getMenu = async () => {
    try {
      const res = await fetch(`${PREFIX}/products`);
      if (!res.ok) {
        return;
      }

      const data: Product[] = await res.json();
      setProducts(data);
    } catch (e) {
      console.error(e);
      return;
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <div className={styles['head']}>
        <Headling className="Head">Menu</Headling>
        <Search placeholder="Введите блюдо или состав" />
      </div>
      {products.map((productItem) => {
        const { id, name, price, ingredients, image, rating } = productItem;
        return (
          <ProductCart
            key={uuidv4()}
            id={id}
            title={name}
            price={price}
            description={ingredients.join(', ')}
            image={image}
            rating={rating}
          />
        );
      })}
    </>
  );
}

export default Menu;
