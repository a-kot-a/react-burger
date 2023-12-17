import * as types from './BurgerConstructor.actions';
import burgerConstructorReducer, { initialState } from './BurgerConstructor.reducers';
import { ingredients, ingredient, bun } from './../../tests';

describe('BurgerConstructor reducer', () => {
  it('should return the initial state', () => {
    expect(burgerConstructorReducer(undefined, {})).toEqual(initialState);
  })

  it('should handle BURGER_CONSTRUCTOR_ADD', () => {
    expect(
      burgerConstructorReducer(initialState, { type: types.BURGER_CONSTRUCTOR_ADD, ingredient })
    ).toEqual({
      ...initialState,
      ingredients: [
        ...initialState.ingredients.concat(ingredient)
      ],
    })
  })

  it('should handle BURGER_CONSTRUCTOR_ADD_BUN', () => {
    expect(
      burgerConstructorReducer(initialState, { type: types.BURGER_CONSTRUCTOR_ADD_BUN, ingredient: bun })
    ).toEqual({
      ...initialState,
      bun,
    })
  })

  it('should handle BURGER_CONSTRUCTOR_DELETE', () => {
    expect(
      burgerConstructorReducer({
        ...initialState,
        ingredients: [
          ...initialState.ingredients.concat(ingredient)
        ],
      },
      { type: types.BURGER_CONSTRUCTOR_DELETE, id: ingredient.id }
    )
    ).toEqual({
      ...initialState,
      ingredients: [
        ...initialState.ingredients.filter(i => i.id !== id)
      ],
    })
  })

  it('should handle BURGER_CONSTRUCTOR_SORT', () => {
    const dragIndex = 1;
    const hoverIndex = 0;

    const ingredientsSort = [...ingredients];

    ingredientsSort.splice(hoverIndex, 0, ingredientsSort.splice(dragIndex, 1)[0]);

    expect(
      burgerConstructorReducer({
        ...initialState,
        ingredients,
      },
      { type: types.BURGER_CONSTRUCTOR_SORT, dragIndex, hoverIndex }
    )
    ).toEqual({
      ...initialState,
      ingredients: ingredientsSort,
      })
  })

  it('should handle BURGER_CONSTRUCTOR_CLEAR', () => {
    expect(
      burgerConstructorReducer({
        ...initialState,
        ingredients: [
          ...initialState.ingredients.concat(ingredient)
        ],
      },
      { type: types.BURGER_CONSTRUCTOR_CLEAR }
    )
    ).toEqual(initialState);
  })
})
