import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dna } from 'react-loader-spinner';
import { ingredientsFetch } from '../../services/BurgerIngredients/BurgerIngredients.fetch';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import { addIngredientDetails, deleteIngredientDetails } from '../../services/IngredientDetails/IngredientDetails.actions';
import BurgerIngredientsStyles from './BurgerIngredients.module.css';
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients() {
  const dispatch = useDispatch();

  const { request, ingredients } = useSelector(state => state.burgerIngredients).toJS();
  const [ currentTab, setСurrentTab ] = React.useState('bun');
  const { isModalOpen, openModal, closeModal } = useModal();

  React.useEffect(() => {
    dispatch(ingredientsFetch())
  }, [dispatch]);

  const handleOpenModal = ingredient => {
    dispatch(addIngredientDetails(ingredient));

    openModal();
  }

  const handleCloseModal = () => {
    dispatch(deleteIngredientDetails());

    closeModal();
  }

  const handleTabClick = elem => {
    elem.scrollIntoView({ behavior: 'smooth' });
  }

  const bodyRef = React.useRef(null);
  const bunRef = React.useRef(null);
  const sauceRef = React.useRef(null);
  const mainRef = React.useRef(null);

  const ingredientsTypes = React.useMemo(
    () => [
      {
        type: 'bun',
        name: 'Булки',
        ref: bunRef,
      },
      {
        type: 'sauce',
        name: 'Соусы',
        ref: sauceRef,
      },
      {
        type: 'main',
        name: 'Начинки',
        ref: mainRef,
      },
    ],
    []
  );

  const handleActiveTab = React.useCallback(() => {
    const body = bodyRef.current.getBoundingClientRect().y;
    const bun = bunRef.current.getBoundingClientRect().y;
    const sauce = sauceRef.current.getBoundingClientRect().y;
    const main = mainRef.current.getBoundingClientRect().y;

    const arr = [
      Math.abs(body - bun),
      Math.abs(body - sauce),
      Math.abs(body - main),
    ];

    const min = Math.min(...arr);
    const index = arr.indexOf(min);

    setСurrentTab(ingredientsTypes[index].type);
  }, [ingredientsTypes]);

  React.useEffect(() => {
    const body = bodyRef.current;

    body.addEventListener('scroll', handleActiveTab);

    return () => {
      body.removeEventListener('scroll', handleActiveTab);
    };
  }, [handleActiveTab]);

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
              onClick={ () => { handleTabClick(i.ref.current) } }
            >
              { i.name }
            </Tab>
          ))
        }
      </div>
      <div ref={ bodyRef } className={ `${ BurgerIngredientsStyles.scroll } mt-10` }>
        {
          request &&
            <Dna
              height="120"
              width="120"
              ariaLabel="loading"
              wrapperClass={ BurgerIngredientsStyles.loader }
            />
        }
        {
          ingredientsTypes.map((i, key) => (
            <div key={ key } className={ `${ BurgerIngredientsStyles.group} mt-10`}>
              <h2 ref={ i.ref } className={ `${ BurgerIngredientsStyles.category } text text_type_main-medium mb-6` }>
                { i.name }
              </h2>
              <div className={ `${ BurgerIngredientsStyles.list } pl-4 pr-2` }>
                {
                  ingredients
                  .filter(j => j.type === i.type)
                  .map(ingredient => (
                    <BurgerIngredient
                      key={ ingredient._id }
                      ingredient={ ingredient }
                      onClick={ handleOpenModal }
                    />
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      {
        isModalOpen &&
          <Modal topic={'Детали ингредиента'} close={ handleCloseModal }>
            <IngredientDetails />
          </Modal>
      }
    </section>
  );
}

export default BurgerIngredients;
