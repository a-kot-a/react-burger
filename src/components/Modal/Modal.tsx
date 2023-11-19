import React from 'react';
import ReactDOM from 'react-dom';
import ModalStyles from './Modal.module.css';
import ModalOverlay from 'Components/ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('react-modals')!;

function Modal({
  children,
  topic,
  close
} : {
  children: JSX.Element,
  topic?: string,
  close: () => void
}) {
  React.useEffect(() => {
    const modalClose = (e: KeyboardEvent) => {
      const { key, keyCode } = e;

      if(key === 'Escape' || keyCode === 27) {
        close();
      }
    };

    document.addEventListener('keydown', modalClose);

    return () => {
      document.removeEventListener('keydown', modalClose);
    }
  }, [close])

  return ReactDOM.createPortal(
    (
      <>
        <ModalOverlay close={ close } />
        <section className={ `${ ModalStyles.modal } pt-10 pr-10 pb-15 pl-10` }>
          <div className={ `${ ModalStyles.head } pt-3 pb-3` }>
            {
              topic &&
                <h2 className={ `${ ModalStyles.topic} text text_type_main-large` }>
                  { topic }
                </h2>
            }
            <button className={ ModalStyles.close } onClick={ close }>
              <CloseIcon type="primary" />
            </button>
          </div>
          <div>
            { children }
          </div>
        </section>
      </>
    ),
    modalRoot
  );
}

export default Modal;
