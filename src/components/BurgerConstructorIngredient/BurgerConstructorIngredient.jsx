import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import BurgerConstructorIngredient from './BurgerConstructorIngredient.module.css';
import {
  DragIcon,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

function BurgerConstructor({ id, index, moveCard, name, price, image, handleClose }) {

  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'ingredient.sort',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveCard(dragIndex, hoverIndex)

      item.index = hoverIndex
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'ingredient.sort',
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <div
      ref={ ref }
      data-handler-id={handlerId}
      className={ `${ BurgerConstructorIngredient.item } mt-4` }
      style={{ opacity }}
    >
      <div className="mr-2" >
        <DragIcon type="primary"/>
      </div>
      <ConstructorElement
        key={ id }
        text={ name}
        price={ price}
        thumbnail={ image }
        handleClose={ () => handleClose(id) }
      />
    </div>
  );
}

BurgerConstructor.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  moveCard: PropTypes.func,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  handleClose: PropTypes.func,
};

export default BurgerConstructor;
