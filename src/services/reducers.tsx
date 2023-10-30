import { combineReducers } from 'redux';

import burgerIngredients from './BurgerIngredients/BurgerIngredients.reducers';
import ingredientDetails from './IngredientDetails/IngredientDetails.reducers';
import burgerConstructor from './BurgerConstructor/BurgerConstructor.reducers';
import orderDetails from './OrderDetails/OrderDetails.reducers';

export default combineReducers({
  burgerIngredients,
  ingredientDetails,
  burgerConstructor,
  orderDetails,
});
