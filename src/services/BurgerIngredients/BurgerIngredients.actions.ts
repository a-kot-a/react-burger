import { IIngredient } from 'Types/Ingredient';

export const INGREDIENTS_FETCH_REQUEST: 'INGREDIENTS_FETCH_REQUEST' = 'INGREDIENTS_FETCH_REQUEST';
export const INGREDIENTS_FETCH_SUCCESS: 'INGREDIENTS_FETCH_SUCCESS' = 'INGREDIENTS_FETCH_SUCCESS';
export const INGREDIENTS_FETCH_ERROR: 'INGREDIENTS_FETCH_ERROR' = 'INGREDIENTS_FETCH_ERROR';

export interface IIngredientsFetchRequestAction {
  readonly type: typeof INGREDIENTS_FETCH_REQUEST;
}

export interface IIngredientsFetchSuccessAction {
  readonly type: typeof INGREDIENTS_FETCH_SUCCESS;
  readonly ingredients: Array<IIngredient>;
}

export interface IIngredientsFetchErrorAction {
  readonly type: typeof INGREDIENTS_FETCH_ERROR;
  readonly errors: string;
}

export type TIngredientsFetchActions =
  | IIngredientsFetchRequestAction
  | IIngredientsFetchSuccessAction
  | IIngredientsFetchErrorAction;

export const ingredientsFetchRequest = (): IIngredientsFetchRequestAction => ({
  type: INGREDIENTS_FETCH_REQUEST,
});

export const ingredientsFetchSuccess = (ingredients: Array<IIngredient>): IIngredientsFetchSuccessAction => ({
  type: INGREDIENTS_FETCH_SUCCESS,
  ingredients,
});

export const ingredientsFetchError = (errors: string): IIngredientsFetchErrorAction => ({
  type: INGREDIENTS_FETCH_ERROR,
  errors,
});
