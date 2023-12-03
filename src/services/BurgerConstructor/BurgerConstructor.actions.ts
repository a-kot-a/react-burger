import { IIngredient } from 'Types/Ingredient';

export const BURGER_CONSTRUCTOR_ADD: 'BURGER_CONSTRUCTOR_ADD' = 'BURGER_CONSTRUCTOR_ADD';
export const BURGER_CONSTRUCTOR_ADD_BUN: 'BURGER_CONSTRUCTOR_ADD_BUN' = 'BURGER_CONSTRUCTOR_ADD_BUN';
export const BURGER_CONSTRUCTOR_DELETE: 'BURGER_CONSTRUCTOR_DELETE' = 'BURGER_CONSTRUCTOR_DELETE';
export const BURGER_CONSTRUCTOR_SORT: 'BURGER_CONSTRUCTOR_SORT' = 'BURGER_CONSTRUCTOR_SORT';
export const BURGER_CONSTRUCTOR_CLEAR: 'BURGER_CONSTRUCTOR_CLEAR' = 'BURGER_CONSTRUCTOR_CLEAR';

export interface IBurgerConstructorAddAction {
  readonly type: typeof BURGER_CONSTRUCTOR_ADD;
  readonly ingredient: IIngredient;
}

export interface IBurgerConstructorAddBunAction {
  readonly type: typeof BURGER_CONSTRUCTOR_ADD_BUN;
  readonly ingredient: IIngredient;
}

export interface IBurgerConstructorDeleteAction {
  readonly type: typeof BURGER_CONSTRUCTOR_DELETE;
  readonly id: string;
}

export interface IBurgerConstructorSortAction {
  readonly type: typeof BURGER_CONSTRUCTOR_SORT;
  readonly dragIndex: number;
  readonly hoverIndex: number;
}

export interface IBurgerConstructorClearAction {
  readonly type: typeof BURGER_CONSTRUCTOR_CLEAR;
}

export type TBurgerConstructorActions =
  | IBurgerConstructorAddAction
  | IBurgerConstructorAddBunAction
  | IBurgerConstructorDeleteAction
  | IBurgerConstructorSortAction
  | IBurgerConstructorClearAction;

export const burgerConstructorAdd = (ingredient: IIngredient): IBurgerConstructorAddAction => ({
  type: BURGER_CONSTRUCTOR_ADD,
  ingredient,
});

export const burgerConstructorAddBun = (ingredient: IIngredient): IBurgerConstructorAddBunAction => ({
  type: BURGER_CONSTRUCTOR_ADD_BUN,
  ingredient,
});

export const burgerConstructorDelete = (id: string): IBurgerConstructorDeleteAction => ({
  type: BURGER_CONSTRUCTOR_DELETE,
  id,
});

export const burgerConstructorSort = (dragIndex: number, hoverIndex: number): IBurgerConstructorSortAction => ({
  type: BURGER_CONSTRUCTOR_SORT,
  dragIndex,
  hoverIndex,
});

export const burgerConstructorClear = (): IBurgerConstructorClearAction => ({
  type: BURGER_CONSTRUCTOR_CLEAR,
});
