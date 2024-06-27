import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../components/intefaces/product.interface';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuList';

function Menu() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const getMenu = async () => {
    try {
      setIsLoading(true);
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
      setProducts(data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        setError(e.message);
      }
      setIsLoading(false);
      return;
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <div className={styles['head']}>
        <Headling>Menu</Headling>
        <Search placeholder="Введите блюдо или состав" />
      </div>
      <div className={styles['menu-list']}>
        {isLoading ? <div>Загружаем...</div> : <MenuList products={products} />}
        {error && <div>{error}</div>}
      </div>
    </>
  );
}

export default Menu;
