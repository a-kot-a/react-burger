import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileSetFetch } from 'Services/Profile/Profile.fetch';
import ProfileFormStyles from './ProfileForm.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useForm } from 'Hooks/useForm';

function ProfileForm() {
  const { request, user, error } = useSelector((state: any) => state.profile).toJS();
  const dispatch = useDispatch();
  const inputNameRef = React.useRef<HTMLInputElement>(null);

  const { values, handleChange, setValues } = useForm({
    email: user.email,
    password: '',
    name: user.name,
  });

  const [nameDisabled, setNameDisabled] = React.useState(true);
  const [isNavShow, setIsNavShow] = React.useState(false);

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);

    setIsNavShow(true);
  }

  React.useEffect(() => {
    if(!request)
      setIsNavShow(false);
  }, [request]);

  const onNameClick = () => {
    setNameDisabled(false);

    setTimeout(() => inputNameRef.current?.focus(), 0)
  }

  const onNameBlur = () => {
    setNameDisabled(true);
  }

  const handleCancel = () => {
    setValues({
      ...values,
      ...user,
      password: '',
    })

    setIsNavShow(false);
  }

  const handleSave = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(profileSetFetch(values) as any);
  }

  return (
    <form className={ ProfileFormStyles.form } onSubmit={ handleSave }>
      <Input
        name={'name'}
        value={values.name}
        type={'text'}
        placeholder={'Имя'}
        onChange={onChange}
        extraClass="mb-6"
        icon="EditIcon"
        disabled={nameDisabled}
        ref={inputNameRef}
        onIconClick={onNameClick}
        onBlur={onNameBlur}
      />
      <EmailInput
        name={'email'}
        value={values.email}
        placeholder="Логин"
        onChange={onChange}
        extraClass="mb-6"
        isIcon={true}
      />
      <PasswordInput
        name={'password'}
        value={values.password}
        onChange={onChange}
        extraClass="mb-6"
        icon="EditIcon"
      />
      {
        error &&
          <p className="input__error text_type_main-default">
            { error }
          </p>
      }
      {
        isNavShow &&
          <div className={ ProfileFormStyles.nav }>
            <Button
              htmlType="button"
              type="secondary"
              size="medium"
              extraClass="pl-2 pr-2 mr-5"
              onClick={ handleCancel }
            >
              Отмена
            </Button>
            <Button
              htmlType="submit"
              type="primary"
              size="medium"
              disabled={ request }
            >
              Сохранить
            </Button>
          </div>
      }
    </form>
  );
}

export default ProfileForm;
