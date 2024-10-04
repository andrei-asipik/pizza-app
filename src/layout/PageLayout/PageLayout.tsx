import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './PageLayout.module.css';
import Button from '../../components/Button/Button';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getProfile, userActions } from '../../store/user.slice';
import { useEffect } from 'react';

function PageLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const profile = useSelector((state: RootState) => state.user.profile);
  const items = useSelector((state: RootState) => state.cart.items);

  const activeLink = (isActive: boolean) => {
    return classNames(styles['link'], { [styles.active]: isActive });
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const logout = () => {
    dispatch(userActions.logout());
    navigate('/auth/login');
  };

  return (
    <div className={styles['layout']}>
      <div className={styles['sidebar']}>
        <div className={styles['user']}>
          <img className={styles['avatar']} src="/avatar.png" alt="avatar" />
          <div className={styles['name']}>{profile?.name}</div>
          <div className={styles['email']}>{profile?.email}</div>
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
            Корзина {items.reduce((acc, item) => (acc += item.count), 0)}
          </NavLink>
        </div>
        <Button className={styles['exit']} onClick={() => logout()}>
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

export default PageLayout;
