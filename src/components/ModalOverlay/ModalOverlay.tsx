import ModalOverlayStyles from './ModalOverlay.module.css';

function ModalOverlay({ close }: { close: () => void }) {
  return (
    <section className={ ModalOverlayStyles.modalOverlay } onClick={ close } />
  );
}

export default ModalOverlay;
