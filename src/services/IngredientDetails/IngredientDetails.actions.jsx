export const INGREDIENT_DETAILS_ADD = 'INGREDIENT_DETAILS_ADD';
export const INGREDIENT_DETAILS_DELETE = 'INGREDIENT_DETAILS_DELETE';

export const addIngredientDetails = ingredient => ({
  type: INGREDIENT_DETAILS_ADD,
  ingredient,
});

export const deleteIngredientDetails = () => ({
  type: INGREDIENT_DETAILS_DELETE,
});
