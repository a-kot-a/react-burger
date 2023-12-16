import {
  INGREDIENT_DETAILS_ADD,
  INGREDIENT_DETAILS_DELETE,
  TAddIngredientDetailsActions,
  IAddIngredientDetailsAction,
} from './IngredientDetails.actions';
import { IIngredient } from 'Types/Ingredient';

export type TIngredientDetailsState = {
  ingredient: null | IIngredient;
};

const initialState: TIngredientDetailsState = {
  ingredient: null,
};

const handleAddIngredientDetails = (state: TIngredientDetailsState, action: IAddIngredientDetailsAction): TIngredientDetailsState => ({
  ...state,
  ingredient: action.ingredient,
})

const handledDeleteIngredientDetails = (): TIngredientDetailsState => initialState;

const ingredientDetailsReducer = (state: TIngredientDetailsState = initialState, action: TAddIngredientDetailsActions):  TIngredientDetailsState => {
  const handlers: { [key: string]: Function } = {
    [INGREDIENT_DETAILS_ADD]: handleAddIngredientDetails,
    [INGREDIENT_DETAILS_DELETE]: handledDeleteIngredientDetails,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default ingredientDetailsReducer;
