import { fromJS, List } from 'immutable';
import {
  BURGER_CONSTRUCTOR_ADD,
  BURGER_CONSTRUCTOR_DELETE,
  BURGER_CONSTRUCTOR_ADD_BUN,
  BURGER_CONSTRUCTOR_SORT,
  BURGER_CONSTRUCTOR_CLEAR,
} from './BurgerConstructor.actions';

const initialState = fromJS({
  bun: null,
  ingredients: [],
});

const handleBurgerConstructorAdd = (state, action) =>
  state.update('ingredients', arr => arr.push(action.ingredient));

const handledBurgerConstructorDelete = (state, action) =>
  state.update('ingredients', arr => arr.filter(i => i.id !== action.id));

const handleBurgerConstructorAddBun = (state, action) =>
  state.set('bun', action.ingredient);

const handledBurgerConstructorSort = (state, action) => {
  const { dragIndex, hoverIndex } = action;
  const ingredients = state.get('ingredients').toJS();

  ingredients.splice(hoverIndex, 0, ingredients.splice(dragIndex, 1)[0]);

  return state.set('ingredients', List(ingredients));
}

const handledBurgerConstructorClear = () => initialState;

const burgerConstructorReducer = (state = initialState, action) => {
  const handlers = {
    [BURGER_CONSTRUCTOR_ADD]: handleBurgerConstructorAdd,
    [BURGER_CONSTRUCTOR_DELETE]: handledBurgerConstructorDelete,
    [BURGER_CONSTRUCTOR_ADD_BUN]: handleBurgerConstructorAddBun,
    [BURGER_CONSTRUCTOR_SORT]: handledBurgerConstructorSort,
    [BURGER_CONSTRUCTOR_CLEAR]: handledBurgerConstructorClear,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default burgerConstructorReducer;
