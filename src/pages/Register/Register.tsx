import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
import { FormEvent, useEffect } from 'react';
import Headling from '../../components/atoms/Headling/Headling';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { register, userActions } from '../../store/user.slice';

export type RegisterForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
  name: {
    value: string;
  };
};

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, registerErrorMessage } = useSelector(
    (state: RootState) => state.user,
  );

  useEffect(() => {
    if (jwt) {
      navigate('/');
    }
  }, [jwt, navigate]);

  const sendRegister = async (
    email: string,
    password: string,
    name: string,
  ) => {
    dispatch(register({ email, password, name }));
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(userActions.clearRegisterError());
    const target = event.target as typeof event.target & RegisterForm;
    const { email, password, name } = target;
    await sendRegister(email.value, password.value, name.value);
  };

  return (
    <div className={styles['login']}>
      <Headling>Регистрация</Headling>

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
        <div className={styles['field']}>
          <label htmlFor="password">Ваше имя</label>
          <Input id="name" name="name" placeholder="Имя" />
        </div>
        {registerErrorMessage && (
          <div className={styles['error']}>{registerErrorMessage}</div>
        )}
        <Button appearance="big" className={styles['button']}>
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles['links']}>
        <div>Есть аккаунт?</div>
        <Link to="/auth/login">Войти</Link>
      </div>
    </div>
  );
}

export default Register;
