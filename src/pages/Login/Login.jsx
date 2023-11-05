import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginFetch } from '../../services/Login/Login.fetch';
import LoginStyles from './Login.module.css';
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useForm } from 'Hooks/useForm';

function Login() {
  const { request, error } = useSelector(state => state.login).toJS();
  const dispatch = useDispatch();
  const { values, handleChange } = useForm({
    email: '',
    password: '',
  });

  const handleLogin = e => {
    e.preventDefault();

    dispatch(loginFetch(values));
  }

  return (
    <div className={ LoginStyles.login }>
      <h1 className="text text_type_main-medium mb-6">Вход</h1>
      <form className={ LoginStyles.form } onSubmit={ handleLogin }>
        <EmailInput
          name={'email'}
          value={values.email}
          placeholder="E-mail"
          onChange={handleChange}
          extraClass="mb-6"
        />
        <PasswordInput
          name={'password'}
          value={values.password}
          onChange={handleChange}
          extraClass="mb-6"
        />
        {
          error &&
            <p className="input__error text_type_main-default">
              { error }
            </p>
        }
        <div className={ LoginStyles.nav }>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            disabled={ request }
          >
            Войти
          </Button>
        </div>
        <div className={ `mt-20 ${ LoginStyles.footer }` }>
          <p className="text text_type_main-default text_color_inactive">
            Вы — новый пользователь?
            <Link to='/register'>
              <Button htmlType="submit" type="secondary" size="medium" extraClass={ LoginStyles.link }>
                Зарегистрироваться
              </Button>
            </Link>
          </p>
          <p className="text text_type_main-default text_color_inactive mt-4">
            Забыли пароль?
            <Link to='/forgot-password'>
              <Button htmlType="button" type="secondary" size="medium" extraClass={ LoginStyles.link }>
                Восстановить пароль
              </Button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
