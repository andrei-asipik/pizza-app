import { useSelector } from 'react-redux';
import Headling from '../../components/atoms/Headling/Headling';
import { RootState } from '../../store/store';
import CartItem from '../../components/molecules/CartItem/CartItem';
import { useEffect, useState } from 'react';
import { store } from '../../store/store';
import { PREFIX } from '../../helpers/API';
import axios from 'axios';
import { Product } from '../../intefaces/product.interface';
import { v4 as uuidv4 } from 'uuid';
import styles from './Cart.module.css';

function Cart() {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const items = useSelector((state: RootState) => state.cart.items);

  const getItem = async (id: number) => {
    const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
    return data;
  };

  const loadAllItems = async () => {
    const res = await Promise.all(items.map((i) => getItem(i.id)));
    setCartProducts(res);
  };

  useEffect(() => {
    loadAllItems();
    console.log('cartProducts:', cartProducts);
    console.log('store.getState().cart:', store.getState().cart);
  }, []);

  return (
    <>
      <Headling>Корзина</Headling>
      <div className={styles['cart-list']}>
        {/* {isLoading && <div>Загружаем продукты...</div>}
        {!isLoading && products.length > 0 && <MenuList products={products} />}
        {!isLoading && products.length === 0 && <div>Ничего не нашлось</div>}
        {error && <div>{error}</div>} */}

        {items.map((i) => {
          const product = cartProducts.find((p) => p.id === i.id);
          if (!product) {
            return;
          }
          const { id, name, price, image } = product;
          return (
            <CartItem
              key={uuidv4()}
              id={id}
              title={name}
              price={price}
              image={image}
            />
          );
        })}
      </div>
    </>
  );
}

export default Cart;
