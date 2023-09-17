import React from 'react';
import BurgerIngredientsStyles from './BurgerIngredients.module.css';
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import {
  Tab,
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';

function BurgerIngredients({ ingredients }: { ingredients: Array<ingredientType> }) {
  const [ingredient, setIngredient] = React.useState({});
  const [currentTab, setСurrentTab] = React.useState('bun');
  const { isModalOpen, openModal, closeModal } = useModal();

  if(!ingredients.length) {
    return null;
  }

  const handleOpenModal = (id?: string) => {
    if(!id) {
      return  null;
    }

    setIngredient(ingredients.find(i => i._id === id) || {});
    openModal();
  }

  const ingredientsTypes = [
    {
      type: 'bun',
      name: 'Булки',
    },
    {
      type: 'sauce',
      name: 'Соусы',
    },
    {
      type: 'main',
      name: 'Начинки',
    },
  ];

  return (
    <section>
      <h1 className={ `${ BurgerIngredientsStyles.topic } text text_type_main-large mt-10 mb-5` }>
        Соберите бургер
      </h1>
      <div className={ BurgerIngredientsStyles.tabs }>
        {
          ingredientsTypes.map((i, key) => (
            <Tab
              key={ key }
              value={ i.type }
              active={currentTab === i.type }
              onClick={ setСurrentTab }
            >
              { i.name }
            </Tab>
          ))
        }
      </div>
      <div className={ `${ BurgerIngredientsStyles.scroll } mt-10` }>
        {
          ingredientsTypes.map((i, key) => (
            <div key={ key } className={ `${ BurgerIngredientsStyles.group} mt-10`}>
              <h2 className={ `${ BurgerIngredientsStyles.category } text text_type_main-medium mb-6` }>
                { i.name }
              </h2>
              <div className={ `${ BurgerIngredientsStyles.list } pl-4 pr-2` }>
                {
                  ingredients
                  .filter(j => j.type === i.type)
                  .map(i => (
                    <div className={ BurgerIngredientsStyles.card } key={ i._id } onClick={ () => handleOpenModal(i._id) }>
                      <div className="pl-4 pr-4">
                        <img src={ i.image } alt={ i.name } />
                      </div>
                      <Counter count={1} size="default" />
                      <div className={ `${ BurgerIngredientsStyles.price } mt-1` }>
                        <p className="text text_type_digits-default mr-2">{ i.price }</p>
                        <CurrencyIcon type="primary" />
                      </div>
                      <p className={ `${ BurgerIngredientsStyles.title } text text_type_main-default mt-2` }>{ i.name }</p>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      {
        isModalOpen &&
          <Modal topic={'Детали ингредиента'} close={ closeModal }>
            <IngredientDetails ingredient={ ingredient } />
          </Modal>
      }
    </section>
  );
}

export default BurgerIngredients;
