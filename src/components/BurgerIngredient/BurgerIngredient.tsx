import { useSelector } from 'Services/store';
import { useDrag } from 'react-dnd';
import BurgerIngredientStyles from './BurgerIngredient.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IIngredient } from 'Types/Ingredient';

function BurgerIngredient(
  { ingredient } :
  { ingredient: IIngredient }
) {
  const { bun, ingredients} = useSelector(state => state.burgerConstructor);

  const { _id, image, name, price } = ingredient;

  const [{ opacity }, dragRef] = useDrag(() => ({
    type: 'ingredient.add',
    item: ingredient,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  }));

  const countBun = bun?._id === _id;
  const countIngredient = ingredients.filter(i => i._id === _id).length;

  return (
    <div
      ref={ dragRef }
      className={ BurgerIngredientStyles.card }
      style={{ opacity }}
    >
      <div className="pl-4 pr-4">
        <img src={ image } alt={ name } />
      </div>
      {
        !!countBun &&
          <Counter count={ 2 } size="default" />
      }
      {
        !!countIngredient &&
          <Counter count={ countIngredient } size="default" />
      }
      <div className={ `${ BurgerIngredientStyles.price } mt-1` }>
        <p className="text text_type_digits-default mr-2">{ price }</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={ `${ BurgerIngredientStyles.title } text text_type_main-default mt-2` }>{ name }</p>
    </div>
  );
}

export default BurgerIngredient;
