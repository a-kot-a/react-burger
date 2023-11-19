export const BURGER_CONSTRUCTOR_ADD = 'BURGER_CONSTRUCTOR_ADD';
export const BURGER_CONSTRUCTOR_DELETE = 'BURGER_CONSTRUCTOR_DELETE';
export const BURGER_CONSTRUCTOR_ADD_BUN = 'BURGER_CONSTRUCTOR_ADD_BUN';
export const BURGER_CONSTRUCTOR_SORT = 'BURGER_CONSTRUCTOR_SORT';
export const BURGER_CONSTRUCTOR_CLEAR = 'BURGER_CONSTRUCTOR_CLEAR';

export const burgerConstructorAdd = ingredient => ({
  type: BURGER_CONSTRUCTOR_ADD,
  ingredient,
});

export const burgerConstructorAddBun = ingredient => ({
  type: BURGER_CONSTRUCTOR_ADD_BUN,
  ingredient,
});

export const burgerConstructorDelete = id => ({
  type: BURGER_CONSTRUCTOR_DELETE,
  id,
});

export const burgerConstructorSort = (dragIndex, hoverIndex) => ({
  type: BURGER_CONSTRUCTOR_SORT,
  dragIndex,
  hoverIndex,
});

export const burgerConstructorClear = () => ({
  type: BURGER_CONSTRUCTOR_CLEAR,
});
