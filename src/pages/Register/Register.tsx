import { Link } from 'react-router-dom';
import styles from './Register.module.css';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { FormEvent } from 'react';
import Headling from '../../components/Headling/Headling';

function Register() {
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    console.log('submit');
    // dispatch(userActions.clearLoginError());
    // const target = e.target as typeof e.target & LoginForm;
    // const { email, password } = target;
    // await sendLogin(email.value, password.value);
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
          <Input id="name" name="name" type="text" placeholder="Имя" />
        </div>
        {/* {loginErrorMessage && (
          <div className={styles['error']}>{loginErrorMessage}</div>
        )} */}
        <Button appearance="big" className={styles['button']}>
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles['links']}>
        <div>Усть аккаунт?</div>
        <Link to="/auth/login">Войти</Link>
      </div>
    </div>
  );
}

export default Register;

//;

// export type LoginForm = {
//   email: {
//     value: string;
//   };
//   password: {
//     value: string;
//   };
// };

// function Login() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch<AppDispatch>();
//   const { jwt, loginErrorMessage } = useSelector(
//     (state: RootState) => state.user,
//   );

//   useEffect(() => {
//     if (jwt) {
//       navigate('/');
//     }
//   }, [jwt, navigate]);

//   const submit = async (e: FormEvent) => {
//     e.preventDefault();
//     dispatch(userActions.clearLoginError());
//     const target = e.target as typeof e.target & LoginForm;
//     const { email, password } = target;
//     await sendLogin(email.value, password.value);
//   };

//   const sendLogin = async (email: string, password: string) => {
//     dispatch(login({ email, password }));
//   };

//   return (
//     <div className={styles['login']}>
//       <Headling>Вход</Headling>

//       <form className={styles['form']} onSubmit={submit}>
//         <div className={styles['field']}>
//           <label htmlFor="email">Ваш email</label>
//           <Input id="email" name="email" placeholder="Email" />
//         </div>
//         <div className={styles['field']}>
//           <label htmlFor="password">Ваш пароль</label>
//           <Input
//             id="password"
//             name="password"
//             type="password"
//             placeholder="Пароль"
//           />
//         </div>
//         {loginErrorMessage && (
//           <div className={styles['error']}>{loginErrorMessage}</div>
//         )}
//         <Button appearance="big" className={styles['button']}>
//           Вход
//         </Button>
//       </form>
//       <div className={styles['links']}>
//         <div>Нет аккаунта?</div>
//         <Link to="/auth/register">Зарегистрироваться</Link>
//       </div>
//     </div>
//   );
// }

// export default Login;
