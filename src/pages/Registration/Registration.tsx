import { useDispatch, useSelector } from 'Services/store';
import { Link } from 'react-router-dom';
import { registrationFetch } from 'Services/Registration/Registration.fetch';
import RegistrationStyles from './Registration.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useForm } from 'Hooks/useForm';

function Registration() {
  const { request, error } = useSelector((state) => state.registration);
  const dispatch = useDispatch();
  const { values, handleChange } = useForm({
    email: '',
    password: '',
    name: '',
  });

  const handleRegistration = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // @ts-ignore
    dispatch(registrationFetch(values));
  }

  return (
    <div className={ RegistrationStyles.registration }>
      <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
      <form className={ RegistrationStyles.form } onSubmit={ handleRegistration }>
        <Input
          name={'name'}
          value={values.name}
          type={'text'}
          placeholder={'Имя'}
          onChange={handleChange}
          extraClass="mb-6"
        />
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
        <div className={ RegistrationStyles.nav }>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            disabled={ request }
          >
            Зарегистрироваться
          </Button>
        </div>
        <div className={ `mt-20 ${ RegistrationStyles.footer }` }>
          <p className="text text_type_main-default text_color_inactive">
            Уже зарегистрированы?
            <Link to='/login'>
              <Button htmlType="button" type="secondary" size="medium" extraClass={ RegistrationStyles.link }>
                Войти
              </Button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Registration;
