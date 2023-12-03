import { request } from 'Utils/request';
import { AppDispatch, AppThunk } from 'Types/Store';
import {
  ingredientsFetchRequest,
  ingredientsFetchSuccess,
  ingredientsFetchError,
} from './BurgerIngredients.actions';

export const ingredientsFetch = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(ingredientsFetchRequest())

  request('ingredients')
    // @ts-ignore
    .then(result => dispatch(ingredientsFetchSuccess(result.data)))
    .catch(errors => dispatch(ingredientsFetchError(errors)))
}
