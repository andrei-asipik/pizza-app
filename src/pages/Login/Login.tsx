import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
import { FormEvent, useEffect } from 'react';
import Headling from '../../components/atoms/Headling/Headling';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { login, userActions } from '../../store/user.slice';

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, loginErrorMessage } = useSelector(
    (state: RootState) => state.user,
  );

  useEffect(() => {
    if (jwt) {
      navigate('/');
    }
  }, [jwt, navigate]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(userActions.clearLoginError());
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
  };

  const sendLogin = async (email: string, password: string) => {
    dispatch(login({ email, password }));
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
        {loginErrorMessage && (
          <div className={styles['error']}>{loginErrorMessage}</div>
        )}
        <Button appearance="big" className={styles['button']}>
          Вход
        </Button>
      </form>
      <div className={styles['links']}>
        <div>Нет аккаунта?</div>
        <Link to="/auth/register">Зарегистрироваться</Link>
      </div>
    </div>
  );
}

export default Login;
