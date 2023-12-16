import { combineReducers } from 'redux';

import burgerIngredients from './BurgerIngredients/BurgerIngredients.reducers';
import ingredientDetails from './IngredientDetails/IngredientDetails.reducers';
import burgerConstructor from './BurgerConstructor/BurgerConstructor.reducers';
import orderCheckout from './OrderCheckout/OrderCheckout.reducers';
import orderDetails from './OrderDetails/OrderDetails.reducers';
import login from './Login/Login.reducers';
import profile from './Profile/Profile.reducers';
import registration from './Registration/Registration.reducers';
import forgotPassword from './ForgotPassword/ForgotPassword.reducers';
import resetPassword from './ResetPassword/ResetPassword.reducers';
import feed from './Feed/Feed.reducers';
import orders from './Orders/Orders.reducers';

export default combineReducers({
  burgerIngredients,
  ingredientDetails,
  burgerConstructor,
  orderCheckout,
  orderDetails,
  login,
  profile,
  registration,
  forgotPassword,
  resetPassword,
  feed,
  orders,
});
