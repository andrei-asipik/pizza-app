import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import classNames from 'classnames';

function Button({
  children,
  className,
  appearance = 'small',
  isRound = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(styles['button'], styles['accent'], className, {
        [styles['small']]: appearance === 'small',
        [styles['big']]: appearance === 'big',
        [styles['round']]: isRound,
      })}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
