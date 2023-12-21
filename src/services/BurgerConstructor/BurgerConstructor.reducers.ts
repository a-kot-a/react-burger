import {
  BURGER_CONSTRUCTOR_ADD,
  BURGER_CONSTRUCTOR_ADD_BUN,
  BURGER_CONSTRUCTOR_DELETE,
  BURGER_CONSTRUCTOR_SORT,
  BURGER_CONSTRUCTOR_CLEAR,
  TBurgerConstructorActions,
  IBurgerConstructorAddAction,
  IBurgerConstructorAddBunAction,
  IBurgerConstructorDeleteAction,
  IBurgerConstructorSortAction,
} from './BurgerConstructor.actions';
import { IIngredient } from 'Types/Ingredient';

export type TBurgerConstructorState = {
  bun: null | IIngredient;
  ingredients: ReadonlyArray<IIngredient>;
};

export const initialState: TBurgerConstructorState = {
  bun: null,
  ingredients: [],
};

const handleBurgerConstructorAdd = (state: TBurgerConstructorState, action: IBurgerConstructorAddAction ): TBurgerConstructorState => ({
    ...state,
    ingredients: [
      ...state.ingredients.concat(action.ingredient)
    ],
})

const handleBurgerConstructorAddBun = (state: TBurgerConstructorState, action: IBurgerConstructorAddBunAction): TBurgerConstructorState => ({
  ...state,
  bun: action.ingredient,
});

const handledBurgerConstructorDelete = (state: TBurgerConstructorState, action: IBurgerConstructorDeleteAction): TBurgerConstructorState => ({
  ...state,
  ingredients: [
    ...state.ingredients.filter(i => i.id !== action.id)
  ],
});

const handledBurgerConstructorSort = (state: TBurgerConstructorState, action: IBurgerConstructorSortAction): TBurgerConstructorState => {
  const { dragIndex, hoverIndex } = action;
  const ingredients = [...state.ingredients];

  ingredients.splice(hoverIndex, 0, ingredients.splice(dragIndex, 1)[0]);

  return {
    ...state,
    ingredients,
  };
}

const handledBurgerConstructorClear = (): TBurgerConstructorState => initialState;

const burgerConstructorReducer = (state: TBurgerConstructorState = initialState, action: TBurgerConstructorActions): TBurgerConstructorState => {
  const handlers: { [key: string]: Function } = {
    [BURGER_CONSTRUCTOR_ADD]: handleBurgerConstructorAdd,
    [BURGER_CONSTRUCTOR_ADD_BUN]: handleBurgerConstructorAddBun,
    [BURGER_CONSTRUCTOR_DELETE]: handledBurgerConstructorDelete,
    [BURGER_CONSTRUCTOR_SORT]: handledBurgerConstructorSort,
    [BURGER_CONSTRUCTOR_CLEAR]: handledBurgerConstructorClear,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default burgerConstructorReducer;
