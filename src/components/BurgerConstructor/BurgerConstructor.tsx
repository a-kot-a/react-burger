import BurgerConstructorStyles from './BurgerConstructor.module.css';
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import {
  Button,
  DragIcon,
  CurrencyIcon,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';

function BurgerConstructor({ ingredients }: { ingredients: Array<ingredientType> }) {
  const { isModalOpen, openModal, closeModal } = useModal();

  const bun = ingredients.find(i => i.type === 'bun') || {};

  return (
    <section className={ `${ BurgerConstructorStyles.burgerConstructor } mt-25` }>
      <div className={ BurgerConstructorStyles.body }>
        <div className="mb-4 ml-8 pl-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={ `${ bun.name } (верх)` }
            price={ bun.price || 0 }
            thumbnail={ bun.image || '' }
          />
        </div>
        <div className={ `${ BurgerConstructorStyles.scroll } pl-4 pr-2 mt-4` }>
        {
          ingredients
          .filter(i => i.type !== 'bun')
          .map((i, key) => (
            <div className={ `${ BurgerConstructorStyles.item } mt-4` } key={ key }>
              <div className="mr-2" >
                <DragIcon type="primary"/>
              </div>
              <ConstructorElement
                key={ key }
                text={ i.name || ''}
                price={ i.price || 0}
                thumbnail={ i.image || '' }
              />
            </div>
          ))
        }
      </div>
      <div className="mt-4 ml-8 pl-4">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={ `${ bun.name } (низ)` }
          price={ bun.price || 0 }
          thumbnail={ bun.image || '' }
        />
      </div>
      </div>
      <div className={ `${ BurgerConstructorStyles.nav } mt-10 pr-4` }>
        <div className={ `${ BurgerConstructorStyles.total } mr-10` }>
          <p className={ `${ BurgerConstructorStyles.count } text text_type_digits-medium mr-2` }>610</p>
          <div className={ BurgerConstructorStyles.icon }>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={ openModal }>
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
