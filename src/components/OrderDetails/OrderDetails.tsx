import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'Services/store';
import { orderDetailsFetch } from 'Services/OrderDetails/OrderDetails.fetch';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetailsStyles from './OrderDetails.module.css';
import { IIngredient } from 'Types/Ingredient';

function IngredientDetails({ isModal }: { isModal?: boolean }) {
  const { ingredients: ingredientsOptions } = useSelector(state => state.burgerIngredients);
  const { id } = useParams();

  const order = useSelector((state) => {
    let order = state.feed.orders.find((i) => i.number === Number(id));

    if(order) {
      return order;
    }

    order = state.orders.orders.find((i) => i.number === Number(id));

    if(order) {
      return order;
    }

    return state.orderDetails.order;
  });

  const dispatch = useDispatch();

  React.useEffect(() => {
    if(!order) {
      // @ts-ignore
      dispatch(orderDetailsFetch(id));
    }
  }, [dispatch, id, order])

  if(order === undefined) {
    return <Navigate to='/404' />
  }

  if(!order) {
    return null;
  }
  const statuses: { [key: string]: string } = {
    created: 'Создан',
    pending: 'Готовится',
    done: 'Выполнен',
  };

  const {
    number,
    name,
    status,
    createdAt,
    ingredients,
  } = order;

  const uniqueIngredients = ingredients.filter((v, i, a) => a.indexOf(v) === i);

  const totalPrice = ingredients.reduce((acc: number, i: string) => acc + (ingredientsOptions.find(j => j._id === i)?.price || 0), 0);

  const renderIngredient = (_id: string) => {
    const ingredient: IIngredient | undefined = ingredientsOptions.find(i => i._id === _id);

    if(!ingredient) {
      return null;
    }

    const { name, image_mobile, price } = ingredient;
    const count = ingredients.filter(i => i === _id).length;

    return (
      <div key={ _id } className={ `${ OrderDetailsStyles.compositionItem }` }>
        <div className={ `${ OrderDetailsStyles.compositionIngredient } mr-4` }>
          <div className={ OrderDetailsStyles.compositionIngredientBody }>
            <img className={ OrderDetailsStyles.compositionIngredientImg } src={ image_mobile } alt={ name } />
          </div>
        </div>
        <p className={ `${ OrderDetailsStyles.compositionName } text text_type_main-default` }>
          { name }
        </p>
        <div className={ OrderDetailsStyles.compositionPrice }>
          <p className="text text_type_digits-default mr-2">
            { `${ count } x ${ price.toLocaleString('ru') }` }
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    );
  }

  return (
    <section className={`
      ${ OrderDetailsStyles.OrderDetails }
      ${ isModal ? OrderDetailsStyles.OrderDetailsModModal : '' }
    `}>
      <p className={ `${ OrderDetailsStyles.number } text text_type_digits-default` }>
        #{ number }
      </p>
      <p className={ `${ OrderDetailsStyles.name } text text_type_main-medium mt-10` }>
        { name }
      </p>
      <p className={`
        ${ OrderDetailsStyles.status }
        ${ status === 'done' ? OrderDetailsStyles.statusModDone : '' }
        text text_type_main-default mt-3
      `}>
        { statuses[status] }
      </p>
      <p className={ `${ OrderDetailsStyles.compositionTopic } text text_type_main-medium mt-15` }>
        Состав:
      </p>
      <div className={ `${ OrderDetailsStyles.compositionList } mt-6` }>
        {
          uniqueIngredients.map(i => ( renderIngredient(i)))
        }
      </div>
      <div className={ `${ OrderDetailsStyles.footer } mt-10` }>
        <p className={ `${ OrderDetailsStyles.date } text text_type_main-default text_color_inactive` }>
          <FormattedDate date={ new Date(createdAt) } />
        </p>
        <div className={ `${ OrderDetailsStyles.price }` }>
          <p className="text text_type_digits-default mr-2">
            { totalPrice.toLocaleString('ru') }
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
}

export default IngredientDetails;
