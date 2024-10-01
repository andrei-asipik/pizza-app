import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './PageLayout.module.css';
import Button from '../../components/Button/Button';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { userActions } from '../../store/user.slice';

function PageLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const activeLink = (isActive: boolean) => {
    return classNames(styles['link'], { [styles.active]: isActive });
  };

  const logout = () => {
    dispatch(userActions.logout());
    navigate('/auth/login');
  };

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
