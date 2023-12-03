import { useSelector } from 'Services/store';
import { IOrder } from 'Types/Order';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderItemStyles from './OrderItem.module.css';

function OrderItem({
  showStatus = false,
  createdAt,
  name,
  number,
  status,
  ingredients,
}: IOrder & { showStatus?: boolean }) {
  const { ingredients: ingredientsOptions } = useSelector(state => state.burgerIngredients);

  const uniqueIngredients = ingredients.filter((v, i, a) => a.indexOf(v) === i);

  const totalPrice = ingredients.reduce((acc: number, i: string) => acc + (ingredientsOptions.find(j => j._id === i)?.price || 0), 0);

  const statuses: { [key: string]: string } = {
    created: 'Создан',
    pending: 'Готовится',
    done: 'Выполнен',
  };

  return (
    <section className={ `${ OrderItemStyles.OrderItem } p-6` }>
      <div className={ OrderItemStyles.head }>
        <p className={ `${ OrderItemStyles.number } text text_type_digits-default` }>
          #{ number }
        </p>
        <p className={ `${ OrderItemStyles.date } text text_type_main-default text_color_inactive` }>
          <FormattedDate date={ new Date(createdAt) } />
        </p>
      </div>
      <h2 className={ `${ OrderItemStyles.name } text text_type_main-medium mt-6` }>
        { name }
      </h2>
      {
        showStatus &&
          <p className={`
            ${ OrderItemStyles.status }
            ${ status === 'done' ? OrderItemStyles.statusModDone : '' }
            text text_type_main-default mt-2
          `}>
            { statuses[status] }
          </p>
      }
      <div className={ `${ OrderItemStyles.footer } mt-6` }>
        <div className={ OrderItemStyles.ingredients }>
          {
            uniqueIngredients.slice(0, 6).map((i, key) => (
              <div key={ i } className={ OrderItemStyles.ingredient }>
                <div className={ OrderItemStyles.ingredientBody }>
                  <img className={ OrderItemStyles.ingredientImg } src={ ingredientsOptions.find(j => j._id === i)?.image_mobile } alt={ i } />
                  {
                    key === 0 && uniqueIngredients.length > 6 &&
                    <p className={ `${ OrderItemStyles.ingredientMore } text text_type_main-default` } >
                      +{ uniqueIngredients.length - 6 }
                    </p>
                  }
                </div>
              </div>
            ))
          }
        </div>
        <div className={ `${ OrderItemStyles.price }` }>
          <p className="text text_type_digits-default mr-2">{ totalPrice.toLocaleString('ru') }</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
}

export default OrderItem;
