import styles from './Headling.module.css';
import classNames from 'classnames';
import { HeadlingProps } from './Headling.props';

function Headling({ children, className, ...props }: HeadlingProps) {
  return (
    <h1 className={classNames(className, styles['h1'])} {...props}>
      {children}
    </h1>
  );
}

export default Headling;
