import { Link } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ErrorStyles from './Error.module.css';

import img from './i/img.jpg';

function NotFound() {
  return (
    <div className={ `mt-15 ${ ErrorStyles.error}` }>
      <div className={ ErrorStyles.img }>
        <img src={ img } alt='stellar burgers' />
      </div>
      <h1 className={ `mt-10 text text_type_main-medium ${ ErrorStyles.topic }` }>Кажется вас унесло<br />в&nbsp;открытый космос</h1>
      <p className={ `mt-6 text text_type_main-default ${ ErrorStyles.text }` }>Вернитесь в&nbsp;зал для продолжения трапезы</p>
      <Link to='/' className={ `mt-10 ${ ErrorStyles.link }` }>
        <Button htmlType="button" type="primary" size="large">где мой бургер</Button>
      </Link>
    </div>
  );
}

export default NotFound;
