// import { MouseEvent } from 'react';
// import { Link } from 'react-router-dom';
import styles from './CartItem.module.css';
import { CartItemProps } from './CartItem.props';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { cartActions } from '../../../store/cart.slice';

function CartItem(props: CartItemProps) {
  console.log(props);
  const dispatch = useDispatch<AppDispatch>();
  const { price, title, image, id } = props;

  const add = () => {
    dispatch(cartActions.add(id));
  };

  return (
    <div className={styles['link']}>
      <div className={styles['card']}>
        <div
          className={styles['header']}
          style={{ backgroundImage: `url('${image}')` }}
        >
          <div className={styles['price']}>
            {price}&nbsp;
            <span className="currency">$</span>
          </div>
          <button className={styles['add-to-cart']} onClick={add}>
            <img src="/add-to-cart-icon.svg" alt="add-to-cart-icon" />
          </button>
        </div>

        <div className={styles['title']}>{title}</div>
      </div>
    </div>
  );
}

export default CartItem;
