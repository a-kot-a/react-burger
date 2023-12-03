import { useSelector } from 'Services/store';
import { Dna } from 'react-loader-spinner';
import OrderCheckoutStyles from './OrderCheckout.module.css';

import icon from './i/icon.svg';

function OrderCheckout() {
  const { name, number, request } = useSelector(state => state.orderCheckout);

  return (
    <section className={ OrderCheckoutStyles.orderCheckout }>
      <div className='mt-6'>
        {
          request &&
            <Dna
              height="120"
              width="120"
              ariaLabel="loading"
              wrapperClass={ OrderCheckoutStyles.loader }
            />
        }
        {
          number &&
            <p className={ `${ OrderCheckoutStyles.number } text text_type_digits-large` }>
              { number }
            </p>
        }
      </div>
      <p className={ `${ OrderCheckoutStyles.topic } text text_type_main-medium mt-8` }>
        идентификатор заказа
      </p>
      <div className={ `${ OrderCheckoutStyles.icon } mt-15` }>
        <img src={ icon } alt='Галочка' />
      </div>
      <p className={ `${ OrderCheckoutStyles.status } text text_type_main-default mt-15` }>
        { name }
      </p>
      <p className={ `${ OrderCheckoutStyles.status } text text_type_main-default mt-5` }>
        Ваш заказ начали готовить
      </p>
      <p className={ `${ OrderCheckoutStyles.text } text text_type_main-default mt-2` }>
        Дождитесь готовности на орбитальной станции
      </p>
    </section>
  );
}

export default OrderCheckout;
