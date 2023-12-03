import { IIngredient } from 'Types/Ingredient';

export const INGREDIENT_DETAILS_ADD: 'INGREDIENT_DETAILS_ADD' = 'INGREDIENT_DETAILS_ADD';
export const INGREDIENT_DETAILS_DELETE: 'INGREDIENT_DETAILS_DELETE' = 'INGREDIENT_DETAILS_DELETE';

export interface IAddIngredientDetailsAction {
  readonly type: typeof INGREDIENT_DETAILS_ADD;
  readonly ingredient: IIngredient;
}

export interface IDeleteIngredientDetailsAction {
  readonly type: typeof INGREDIENT_DETAILS_DELETE;
}

export type TAddIngredientDetailsActions =
  | IAddIngredientDetailsAction
  | IDeleteIngredientDetailsAction;

export const addIngredientDetails = (ingredient: IIngredient): IAddIngredientDetailsAction => ({
  type: INGREDIENT_DETAILS_ADD,
  ingredient,
});

export const deleteIngredientDetails = (): IDeleteIngredientDetailsAction => ({
  type: INGREDIENT_DETAILS_DELETE,
});
