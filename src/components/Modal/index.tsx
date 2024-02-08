
import * as C from '../Modal/style';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}


const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <C.ModalOverlay isOpen={isOpen} onClick={handleOverlayClick}>
      <C.ModalContent>
        <button className='btnClose' onClick={onClose}>Fechar</button>
        {children}
      </C.ModalContent>
    </C.ModalOverlay>
  );
};

export default Modal;
