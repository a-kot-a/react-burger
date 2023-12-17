import * as types from './IngredientDetails.actions';
import ingredientDetailsReducer, { initialState } from './IngredientDetails.reducers';
import { ingredient } from './../../tests';

describe('IngredientDetails reducer', () => {
  it('should return the initial state', () => {
    expect(ingredientDetailsReducer(undefined, {})).toEqual(initialState);
  })

  it('should handle INGREDIENT_DETAILS_ADD', () => {
    expect(
      ingredientDetailsReducer(initialState, { type: types.INGREDIENT_DETAILS_ADD, ingredient })
    ).toEqual({
      ...initialState,
      ingredient,
    })
  })

  it('should handle INGREDIENT_DETAILS_DELETE', () => {
    expect(ingredientDetailsReducer(initialState, { type: types.INGREDIENT_DETAILS_DELETE })).toEqual(initialState);
  })
})
