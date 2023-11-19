import { request } from 'Utils/request';
import {
  ingredientsFetchRequest,
  ingredientsFetchSuccess,
  ingredientsFetchError,
} from './BurgerIngredients.actions';

export const ingredientsFetch = () => dispatch => {
  dispatch(ingredientsFetchRequest())

  request('ingredients')
    .then(result => dispatch(ingredientsFetchSuccess(result.data)))
    .catch(errors => dispatch(ingredientsFetchError(errors)))
}
