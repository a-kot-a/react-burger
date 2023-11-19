import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  burgerConstructorAdd,
  burgerConstructorDelete,
  burgerConstructorAddBun,
  burgerConstructorSort,
} from 'Services/BurgerConstructor/BurgerConstructor.actions';
import { orderDetailsFetch } from 'Services/OrderDetails/OrderDetails.fetch';
import BurgerConstructorIngredient from 'Components/BurgerConstructorIngredient/BurgerConstructorIngredient';
import BurgerConstructorStyles from './BurgerConstructor.module.css';
import { useModal } from 'Hooks/useModal';
import Modal from 'Components/Modal/Modal';
import OrderDetails from 'Components/OrderDetails/OrderDetails';
import {
  Button,
  CurrencyIcon,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { IIngredientTypes } from 'Utils/types';

function BurgerConstructor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bun, ingredients} = useSelector((state: any) => state.burgerConstructor).toJS();
  const { user } = useSelector((state: any) => state.profile).toJS();

  const { isModalOpen, openModal, closeModal } = useModal();

  const handleOpenModal = () => {
    if(!user) {
      navigate('/login');

      return null;
    }

    dispatch(orderDetailsFetch(ingredients.map((i: IIngredientTypes) => i._id)) as any);

    openModal();
  }

  const handleDeleteIngredient = (id: string) => {
    dispatch(burgerConstructorDelete(id));
  }

  const [{ isOverBun, canDropBun, isOverIngredient, canDropIngredient }, dropRef] = useDrop({
    accept: 'ingredient.add',
    drop(ingredient: IIngredientTypes) {
      const uniqueIngredient = {
        ...ingredient,
        id: uuidv4(),
      };

      ingredient.type === 'bun'
      ? dispatch(burgerConstructorAddBun(uniqueIngredient))
      : dispatch(burgerConstructorAdd(uniqueIngredient));
    },
    collect: monitor => ({
      isOverBun: monitor.isOver() && monitor.getItem().type === 'bun',
      canDropBun: !!monitor.canDrop() && monitor.getItem().type === 'bun',
      isOverIngredient: monitor.isOver() && monitor.getItem().type !== 'bun',
      canDropIngredient: !!monitor.canDrop() && monitor.getItem().type !== 'bun',
    }),
  });

  const renderBun = (type: 'top' | 'bottom') => {
    if(!bun) {
      return (
        <div
          className={`
            constructor-element constructor-element_pos_${ type }
            ${ BurgerConstructorStyles.bun }
            ${ canDropBun ? BurgerConstructorStyles.emptyBun_canDrop : '' }
            ${ isOverBun ? BurgerConstructorStyles.emptyBun_isOver : '' }
          `}
        >
          <span className={`constructor-element__text ${ BurgerConstructorStyles.bunText }`}>Выберите булки</span>
        </div>
      )
    }

    return (
      <ConstructorElement
        type={ type }
        isLocked={true}
        text={ `${ bun.name } (${ type === 'top' ? 'верх' : 'низ' })` }
        price={ bun.price }
        thumbnail={ bun.image }
      />
    )
  }

  const totalPrice = ingredients.reduce((acc: number, i: IIngredientTypes) => acc + (i.price || 0), bun?.price * 2 || 0);

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    dispatch(burgerConstructorSort(dragIndex, hoverIndex));
  }, [dispatch])

  return (
    <section ref={ dropRef } className={ `${ BurgerConstructorStyles.burgerConstructor } mt-25` }>
      <div className={ BurgerConstructorStyles.body }>
        <div className="mb-4 ml-8 pl-4">
          { renderBun('top') }
        </div>
        <div className={ `${ BurgerConstructorStyles.scroll } pl-4 pr-2 mt-4` }>
        {
          !ingredients.length &&
            <div className={`
              ${ BurgerConstructorStyles.empty }
              ${ canDropIngredient ? BurgerConstructorStyles.empty_canDrop : '' }
              ${ isOverIngredient ? BurgerConstructorStyles.empty_isOver : '' }
              ml-8
            `}>
              <p className='text text_type_main-default'>Выберите начинку</p>
            </div>
        }
        {
          ingredients
          .map((ingredient: IIngredientTypes, index: number) => (
            <BurgerConstructorIngredient
              key={ ingredient.id }
              id={ ingredient.id }
              index={ index }
              moveCard={ moveCard }
              handleClose={ handleDeleteIngredient }
              name={ ingredient.name }
              price={ ingredient.price }
              image={ ingredient.image }
            />
          ))
        }
      </div>
      <div className="mt-4 ml-8 pl-4">
        { renderBun('bottom') }
      </div>
      </div>
      <div className={ `${ BurgerConstructorStyles.nav } mt-10 pr-4` }>
        <div className={ `${ BurgerConstructorStyles.total } mr-10` }>
          <p className={ `${ BurgerConstructorStyles.count } text text_type_digits-medium mr-2` }>
            { totalPrice }
          </p>
          <div className={ BurgerConstructorStyles.icon }>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={ handleOpenModal }
          disabled={!(bun && ingredients.length)}
        >
          Оформить заказ
        </Button>
      </div>
      {
        isModalOpen &&
          <Modal close={ closeModal }>
            <OrderDetails />
          </Modal>
      }
    </section>
  );
}

export default BurgerConstructor;