import {
  INGREDIENTS_FETCH_REQUEST,
  INGREDIENTS_FETCH_SUCCESS,
  INGREDIENTS_FETCH_ERROR,
  TIngredientsFetchActions,
  IIngredientsFetchSuccessAction,
  IIngredientsFetchErrorAction
} from './BurgerIngredients.actions';
import { IIngredient } from 'Types/Ingredient';

export type TBurgerIngredientsState = {
  ingredients: ReadonlyArray<IIngredient>;
  request: boolean;
  error: null | string;
};

const initialState: TBurgerIngredientsState = {
  ingredients: [],
  request: false,
  error: null,
};

const handleIngredientsFetchRequest = (state: TBurgerIngredientsState): TBurgerIngredientsState => ({
  ...state,
  ingredients: [],
  request: true,
  error: null,
});

const handleIngredientsFetchSuccess = (state: TBurgerIngredientsState, action: IIngredientsFetchSuccessAction): TBurgerIngredientsState => ({
  ...state,
  ingredients: action.ingredients,
  request: false,
  error: null,
});

const handleIngredientsFetchError = (state: TBurgerIngredientsState, action: IIngredientsFetchErrorAction): TBurgerIngredientsState => ({
  ...state,
  ingredients: [],
  request: false,
  error: action.errors,
});

const burgerIngredientsReducer = (state: TBurgerIngredientsState = initialState, action: TIngredientsFetchActions): TBurgerIngredientsState => {
  const handlers: { [key: string]: Function } = {
    [INGREDIENTS_FETCH_REQUEST]: handleIngredientsFetchRequest,
    [INGREDIENTS_FETCH_SUCCESS]: handleIngredientsFetchSuccess,
    [INGREDIENTS_FETCH_ERROR]: handleIngredientsFetchError,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default burgerIngredientsReducer;
