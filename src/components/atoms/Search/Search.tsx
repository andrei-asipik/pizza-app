import styles from './Search.module.css';
import { forwardRef } from 'react';
import classNames from 'classnames';
import { SearchProps } from './Search.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input(
  { className, isValid = true, ...props },
  ref,
) {
  return (
    <div className={styles['input-wrapper']}>
      <input
        ref={ref}
        className={classNames(styles['input'], className, {
          [styles['invalid']]: isValid,
        })}
        {...props}
      />
      <img
        className={styles['icon']}
        src="/search-icon.svg"
        alt="search-icon"
      />
    </div>
  );
});

export default Search;
