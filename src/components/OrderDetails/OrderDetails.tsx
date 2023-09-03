import OrderDetailsStyles from './OrderDetails.module.css';

import icon from './i/icon.svg';

function OrderDetails() {
  return (
    <section className={ OrderDetailsStyles.orderDetails }>
      <p className={ `${ OrderDetailsStyles.number } text text_type_digits-large mt-6` }>
        034536
      </p>
      <p className={ `${ OrderDetailsStyles.topic } text text_type_main-medium mt-8` }>
        идентификатор заказа
      </p>
      <div className={ `${ OrderDetailsStyles.icon } mt-15` }>
        <img src={ icon } alt='Галочка' />
      </div>
      <p className={ `${ OrderDetailsStyles.status } text text_type_main-default mt-15` }>
        Ваш заказ начали готовить
      </p>
      <p className={ `${ OrderDetailsStyles.text } text text_type_main-default mt-2` }>
        Дождитесь готовности на орбитальной станции
      </p>
    </section>
  );
}

export default OrderDetails;
