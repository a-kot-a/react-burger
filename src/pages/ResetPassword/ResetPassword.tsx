import { useDispatch, useSelector } from 'Services/store';
import { Navigate, Link } from 'react-router-dom';
import { resetPasswordFetch } from 'Services/ResetPassword/ResetPassword.fetch';
import ResetPasswordStyles from './ResetPassword.module.css';
import { PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useForm } from 'Hooks/useForm';

function ResetPassword() {
  const { request, success, error } = useSelector((state) => state.resetPassword);
  const dispatch = useDispatch();
  const { values, handleChange } = useForm({
    password: '',
    token: '',
  });

  const handleResetPasswordFetch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // @ts-ignore
    dispatch(resetPasswordFetch(values));
  }

  if (success) {
    localStorage.removeItem('forgotPassword');

    return <Navigate to={'/'} />
  }

  if(!localStorage.getItem('forgotPassword') ) {
    return <Navigate to={'/forgot-password'} />
  }

  return (
    <div className={ ResetPasswordStyles.resetPassword }>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <form className={ ResetPasswordStyles.form } onSubmit={ handleResetPasswordFetch }>
        <PasswordInput
          name={'password'}
          value={values.password}
          placeholder={'Введите новый пароль'}
          onChange={handleChange}
          extraClass="mb-6"
        />
        <Input
          name={'token'}
          value={values.token}
          placeholder={'Введите код из письма'}
          type={'text'}
          onChange={handleChange}
          extraClass="mb-6"
        />
        {
          error &&
            <p className="input__error text_type_main-default">
              { error }
            </p>
        }
        <div className={ ResetPasswordStyles.nav }>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            disabled={ request }
          >
            Сохранить
          </Button>
        </div>
        <div className={ `mt-20 ${ ResetPasswordStyles.footer }` }>
          <p className="text text_type_main-default text_color_inactive">
            Вспомнили пароль?
            <Link to='/login'>
              <Button htmlType="button" type="secondary" size="medium" extraClass={ ResetPasswordStyles.link }>
                Войти
              </Button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
