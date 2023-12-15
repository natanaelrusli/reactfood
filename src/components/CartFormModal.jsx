import CartForm from "./CartForm";
import Modal from "./Modal";

export default function CartFormModal({ modalRef }) {
  return (
    <Modal ref={modalRef}>
      <CartForm onClose={() => modalRef.current.close()} />
    </Modal>
  );
}
