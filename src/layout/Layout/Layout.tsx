import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import classNames from 'classnames';

const activeLink = (isActive: boolean) => {
  return classNames(styles['link'], { [styles.active]: isActive });
};

function Layout() {
  return (
    <div className={styles['layout']}>
      <div className={styles['sidebar']}>
        <div className={styles['user']}>
          <img className={styles['avatar']} src="/avatar.png" alt="avatar" />
          <div className={styles['name']}>name</div>
          <div className={styles['email']}>email</div>
        </div>

        <div className={styles['menu']}>
          <NavLink to="/" className={({ isActive }) => activeLink(isActive)}>
            <img src="/menu-icon.svg" alt="menu-icon" />
            Меню
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => activeLink(isActive)}
          >
            <img src="/cart-icon.svg" alt="cart-icon" />
            Корзина
          </NavLink>
        </div>
        <Button className={styles['exit']}>
          <img src="/exit-icon.svg" alt="exit-icon" />
          Выход
        </Button>
      </div>
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
