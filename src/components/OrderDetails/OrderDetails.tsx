import { useSelector } from 'react-redux';
import { Dna } from 'react-loader-spinner';
import OrderDetailsStyles from './OrderDetails.module.css';

import icon from './i/icon.svg';

function OrderDetails() {
  const { name, number, request } = useSelector((state: any ) => state.orderDetails).toJS();

  return (
    <section className={ OrderDetailsStyles.orderDetails }>
      <div className='mt-6'>
        {
          request &&
            <Dna
              height="120"
              width="120"
              ariaLabel="loading"
              wrapperClass={ OrderDetailsStyles.loader }
            />
        }
        {
          number &&
            <p className={ `${ OrderDetailsStyles.number } text text_type_digits-large` }>
              { number }
            </p>
        }
      </div>
      <p className={ `${ OrderDetailsStyles.topic } text text_type_main-medium mt-8` }>
        идентификатор заказа
      </p>
      <div className={ `${ OrderDetailsStyles.icon } mt-15` }>
        <img src={ icon } alt='Галочка' />
      </div>
      <p className={ `${ OrderDetailsStyles.status } text text_type_main-default mt-15` }>
        { name }
      </p>
      <p className={ `${ OrderDetailsStyles.status } text text_type_main-default mt-5` }>
        Ваш заказ начали готовить
      </p>
      <p className={ `${ OrderDetailsStyles.text } text text_type_main-default mt-2` }>
        Дождитесь готовности на орбитальной станции
      </p>
    </section>
  );
}

export default OrderDetails;
