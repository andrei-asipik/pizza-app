// import { MouseEvent } from 'react';
// import { Link } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import styles from './CartItem.module.css';
import { CartItemProps } from './CartItem.props';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../../../store/store';
// import { cartActions } from '../../../store/cart.slice';

function CartItem(props: CartItemProps) {
  // const dispatch = useDispatch<AppDispatch>();
  const { price, title, image, id } = props;
  const count = 1;

  console.log(price, title, image, id);

  // const add = () => {
  //   dispatch(cartActions.add(id));
  // };

  return (
    <div className={styles['list']}>
      <div className={styles['item']}>
        <div
          className={styles['image']}
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className={styles['info']}>
          <div className={styles['title']}>{title}</div>
          <div className={styles['price']}>{price}$</div>
        </div>
        <div className={styles['controls']}>
          <Button isRound className={styles['minus']}>
            <img src="../../../public/minus.svg" />
          </Button>
          <span>{count}</span>
          <Button isRound className={styles['plus']}>
            <img src="../../../public/plus.svg" />
          </Button>
          <Button isRound className={styles['transparent']}>
            <img src="../../../public/cross-mark.svg" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
