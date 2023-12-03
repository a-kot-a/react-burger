import React from 'react';
import { useSelector } from 'Services/store';
import { Dna } from 'react-loader-spinner';
import { Link, useLocation } from 'react-router-dom';
import BurgerIngredient from 'Components/BurgerIngredient/BurgerIngredient';
import BurgerIngredientsStyles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients() {
  const location = useLocation();

  const { request, ingredients } = useSelector(state => state.burgerIngredients);
  const [ currentTab, setСurrentTab ] = React.useState('bun');

  const handleTabClick = (elem: HTMLDivElement | null) => {
    elem?.scrollIntoView({ behavior: 'smooth' });
  }

  const bodyRef = React.useRef<HTMLDivElement>(null);
  const bunRef = React.useRef<HTMLDivElement>(null);
  const sauceRef = React.useRef<HTMLDivElement>(null);
  const mainRef = React.useRef<HTMLDivElement>(null);

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
    const body = bodyRef.current?.getBoundingClientRect().y || 0;
    const bun = bunRef.current?.getBoundingClientRect().y || 0;
    const sauce = sauceRef.current?.getBoundingClientRect().y || 0;
    const main = mainRef.current?.getBoundingClientRect().y || 0;

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

    body?.addEventListener('scroll', handleActiveTab);

    return () => {
      body?.removeEventListener('scroll', handleActiveTab);
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
                    <Link
                      key={ ingredient._id }
                      to={ `/ingredients/${ingredient._id}` }
                      state={{ backgroundLocation: location }}
                      className={ BurgerIngredientsStyles.card }
                    >
                      <BurgerIngredient ingredient={ ingredient } />
                    </Link>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default BurgerIngredients;
