import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../intefaces/product.interface';
import { ChangeEvent, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuList';

function Menu() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    getMenu(filter);
  }, [filter]);

  const getMenu = async (name?: string) => {
    try {
      setIsLoading(true);

      const { data } = await axios.get<Product[]>(`${PREFIX}/products`, {
        params: { name },
      });
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

  const updateFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <div className={styles['head']}>
        <Headling>Menu</Headling>
        <Search
          placeholder="Введите блюдо или состав"
          onChange={updateFilter}
        />
      </div>
      <div className={styles['menu-list']}>
        {isLoading && <div>Загружаем продукты...</div>}
        {!isLoading && products.length > 0 && <MenuList products={products} />}
        {!isLoading && products.length === 0 && <div>Ничего не нашлось</div>}
        {error && <div>{error}</div>}
      </div>
    </>
  );
}

export default Menu;
