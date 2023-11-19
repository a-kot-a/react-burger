import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import { forgotPasswordFetch } from 'Services/ForgotPassword/ForgotPassword.fetch';
import ForgotPasswordStyles from './ForgotPassword.module.css';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useForm } from 'Hooks/useForm';

function ForgotPassword() {
  const { request, success, error } = useSelector((state: any) => state.forgotPassword).toJS();
  const dispatch = useDispatch();
  const { values, handleChange } = useForm({
    email: '',
  });

  const handleForgotPassword = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(forgotPasswordFetch(values) as any);
  }

  if (success) {
    localStorage.setItem('forgotPassword', 'true');

    return <Navigate to={'/reset-password'} />
  }

  return (
    <div className={ ForgotPasswordStyles.forgotPassword }>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <form className={ ForgotPasswordStyles.form } onSubmit={ handleForgotPassword }>
        <EmailInput
          name={'email'}
          value={values.email}
          placeholder="Укажите e-mail"
          onChange={handleChange}
          extraClass="mb-6"
        />
        {
          error &&
            <p className="input__error text_type_main-default">
              { error }
            </p>
        }
        <div className={ ForgotPasswordStyles.nav }>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            disabled={ request }
          >
            Восстановить
          </Button>
        </div>
        <div className={ `mt-20 ${ ForgotPasswordStyles.footer }` }>
          <p className="text text_type_main-default text_color_inactive">
            Вспомнили пароль?
            <Link to='/login'>
              <Button htmlType="button" type="secondary" size="medium" extraClass={ ForgotPasswordStyles.link }>
                Войти
              </Button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
