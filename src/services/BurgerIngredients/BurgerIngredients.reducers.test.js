import * as types from './BurgerIngredients.actions';
import resetPasswordReducer, { initialState } from './BurgerIngredients.reducers';
import { ingredients } from './../../tests';

describe('BurgerIngredients reducer', () => {
  it('should return the initial state', () => {
    expect(resetPasswordReducer(undefined, {})).toEqual(initialState);
  })

  it('should handle INGREDIENTS_FETCH_REQUEST', () => {
    expect(
      resetPasswordReducer(initialState, { type: types.INGREDIENTS_FETCH_REQUEST })
    ).toEqual({
      ...initialState,
      request: true,
    })
  })

  it('should handle INGREDIENTS_FETCH_SUCCESS', () => {
    expect(
      resetPasswordReducer(initialState, { type: types.INGREDIENTS_FETCH_SUCCESS, ingredients })
    ).toEqual({
      ...initialState,
      ingredients,
    })
  })

  it('should handle INGREDIENTS_FETCH_ERROR', () => {
    const errorText = 'Ошибка';

    expect(
      resetPasswordReducer(initialState, { type: types.INGREDIENTS_FETCH_ERROR, errors: errorText })
    ).toEqual({
      ...initialState,
      error: errorText,
    })
  })
})
