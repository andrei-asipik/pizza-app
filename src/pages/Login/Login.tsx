import { Link } from 'react-router-dom';
import Headling from '../../components/Headling/Headling';
import styles from './Login.module.css';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { FormEvent } from 'react';

function Login() {
  const submit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className={styles['login']}>
      <Headling>Вход</Headling>

      <form className={styles['form']} onSubmit={submit}>
        <div className={styles['field']}>
          <label htmlFor="email">Ваш email</label>
          <Input id="email" name="email" placeholder="Email" />
        </div>
        <div className={styles['field']}>
          <label htmlFor="password">Ваш пароль</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
          />
        </div>
        <Button appearance="big">Вход</Button>
      </form>
      <div className={styles['links']}>
        <div>Нет акканута?</div>
        <Link to="/auth/register">Зарегистрироваться</Link>
      </div>
    </div>
  );
}

export default Login;
