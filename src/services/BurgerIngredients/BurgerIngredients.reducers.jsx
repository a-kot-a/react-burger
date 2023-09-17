import { fromJS } from 'immutable';
import {
  INGREDIENTS_FETCH_REQUEST,
  INGREDIENTS_FETCH_SUCCESS,
  INGREDIENTS_FETCH_ERROR,
} from './BurgerIngredients.actions';

const initialState = fromJS({
  ingredients: [],
  request: false,
  error: null,
});

const handleIngredientsFetchRequest = state =>
  state.set('request', false)
    .set('ingredients', [])
    .set('request', true);

const handleIngredientsFetchSuccess = (state, action) =>
  state.set('request', false)
    .set('request', false)
    .set('ingredients', action.data);

const handleIngredientsFetchError = (state, action) =>
  state.set('request', false)
    .set('ingredients', [])
    .set('error', action.errors);

const burgerIngredientsReducer = (state = initialState, action) => {
  const handlers = {
    [INGREDIENTS_FETCH_REQUEST]: handleIngredientsFetchRequest,
    [INGREDIENTS_FETCH_SUCCESS]: handleIngredientsFetchSuccess,
    [INGREDIENTS_FETCH_ERROR]: handleIngredientsFetchError,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default burgerIngredientsReducer;
