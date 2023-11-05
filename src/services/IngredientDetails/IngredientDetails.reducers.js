import { fromJS } from 'immutable';
import {
  INGREDIENT_DETAILS_ADD,
  INGREDIENT_DETAILS_DELETE,
} from './IngredientDetails.actions';

const initialState = fromJS({
  ingredient: {},
});

const handleAddIngredientDetails = (state, action) =>
  state.set('ingredient', action.ingredient);

const handledDeleteIngredientDetails = () => initialState;

const ingredientDetailsReducer = (state = initialState, action) => {
  const handlers = {
    [INGREDIENT_DETAILS_ADD]: handleAddIngredientDetails,
    [INGREDIENT_DETAILS_DELETE]: handledDeleteIngredientDetails,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default ingredientDetailsReducer;
