import { combineReducers } from 'redux';

import burgerIngredients from './BurgerIngredients/BurgerIngredients.reducers';
import ingredientDetails from './IngredientDetails/IngredientDetails.reducers';
import burgerConstructor from './BurgerConstructor/BurgerConstructor.reducers';
import orderDetails from './OrderDetails/OrderDetails.reducers';
import login from './Login/Login.reducers';
import profile from './Profile/Profile.reducers';
import registration from './Registration/Registration.reducers';
import forgotPassword from './ForgotPassword/ForgotPassword.reducers';
import resetPassword from './ResetPassword/ResetPassword.reducers';

export default combineReducers({
  burgerIngredients,
  ingredientDetails,
  burgerConstructor,
  orderDetails,
  login,
  profile,
  registration,
  forgotPassword,
  resetPassword,
});
