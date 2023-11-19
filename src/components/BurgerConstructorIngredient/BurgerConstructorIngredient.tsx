import { useRef } from 'react';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import type { Identifier, XYCoord } from 'dnd-core'
import BurgerConstructorIngredient from './BurgerConstructorIngredient.module.css';
import {
  DragIcon,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';

interface IBurgerConstructorProps {
  id: string,
  index: number,
  name: string,
  price: number,
  image: string,
  moveCard: (dragIndex: number, hoverIndex: number) => void,
  handleClose: (id: string) => void,
}

interface DragItem {
  index: number
  id: string
  type: string
}

function BurgerConstructor({ id, index, name, price, image, moveCard, handleClose }: IBurgerConstructorProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: 'ingredient.sort',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: DragItem, monitor: DropTargetMonitor) {
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

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

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

export default BurgerConstructor;
