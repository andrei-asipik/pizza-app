import Button from '../../atoms/Button/Button';
import styles from './CartItem.module.css';
import { CartItemProps } from './CartItem.props';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { cartActions } from '../../../store/cart.slice';

function CartItem(props: CartItemProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { price, title, image, id, count } = props;
  // const count = 1;

  console.log(price, title, image, id);

  const increase = () => {
    dispatch(cartActions.add(id));
  };

  const decrease = () => {
    // dispatch(cartActions.add(id));
  };
  const remove = () => {
    // dispatch(cartActions.add(id));
  };

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
          <Button isRound className={styles['minus']} onClick={decrease}>
            <img src="../../../public/minus.svg" alt="remove" />
          </Button>
          <span>{count}</span>
          <Button isRound className={styles['plus']} onClick={increase}>
            <img src="../../../public/plus.svg" alt="add" />
          </Button>
          <Button isRound className={styles['transparent']} onClick={remove}>
            <img src="../../../public/cross-mark.svg" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
