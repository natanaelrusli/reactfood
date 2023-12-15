import { useState } from "react";
import CartForm from "./CartForm";
import CheckoutForm from "./CheckoutForm";
import Modal from "./Modal";

export default function CartFormModal({ modalRef }) {
  const [step, setStep] = useState(1);

  return (
    <Modal ref={modalRef}>
      {step === 1 && (
        <CartForm
          onSubmit={() => setStep(2)}
          onClose={() => modalRef.current.close()}
        />
      )}
      {step === 2 && (
        <CheckoutForm onBack={() => setStep((prev) => prev - 1)} />
      )}
    </Modal>
  );
}
