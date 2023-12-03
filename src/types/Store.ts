import type { ThunkAction } from 'redux-thunk';
import type {} from 'redux-thunk/extend-redux'

import rootReducer from 'Services/reducers';
import { TBurgerConstructorActions } from 'Services/BurgerConstructor/BurgerConstructor.actions';
import { TIngredientsFetchActions } from 'Services/BurgerIngredients/BurgerIngredients.actions';
import { TForgotPasswordFetchActions } from 'Services/ForgotPassword/ForgotPassword.actions';
import { TAddIngredientDetailsActions } from 'Services/IngredientDetails/IngredientDetails.actions';
import { TLoginFetchActions } from 'Services/Login/Login.actions';
import { TOrderCheckoutFetchActions } from 'Services/OrderCheckout/OrderCheckout.actions';
import { TOrderDetailsFetchActions } from 'Services/OrderDetails/OrderDetails.actions';
import { TProfileFetchActions } from 'Services/Profile/Profile.actions';
import { TRegistrationFetchActions } from 'Services/Registration/Registration.actions';
import { TResetPasswordFetchActions } from 'Services/ResetPassword/ResetPassword.actions';
import { TFeedActions } from 'Services/Feed/Feed.actions';
import { TOrdersActions } from 'Services/Orders/Orders.actions';

type TAppActions =
  | TBurgerConstructorActions
  | TIngredientsFetchActions
  | TForgotPasswordFetchActions
  | TAddIngredientDetailsActions
  | TLoginFetchActions
  | TOrderCheckoutFetchActions
  | TOrderDetailsFetchActions
  | TProfileFetchActions
  | TRegistrationFetchActions
  | TResetPasswordFetchActions
  | TFeedActions
  | TOrdersActions;

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TAppActions>;
export type AppDispatch<TReturnType = void> = (action: TAppActions | AppThunk) => TReturnType;
