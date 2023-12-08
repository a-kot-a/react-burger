import { request } from 'Utils/request';
import { AppThunk } from 'Types/Store';
import {
  ingredientsFetchRequest,
  ingredientsFetchSuccess,
  ingredientsFetchError,
} from './BurgerIngredients.actions';

export const ingredientsFetch = (): AppThunk => dispatch => {
  dispatch(ingredientsFetchRequest())

  request('ingredients')
    .then(result => dispatch(ingredientsFetchSuccess(result.data)))
    .catch(errors => dispatch(ingredientsFetchError(errors)))
}
