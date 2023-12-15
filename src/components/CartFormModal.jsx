import { useState } from "react";
import CartForm from "./CartForm";
import CheckoutForm from "./CheckoutForm";
import Modal from "./Modal";

export default function CartFormModal({ modalRef }) {
  const [step, setStep] = useState(1);

  async function postNewOrder(data) {
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        order: {
          customer: data,
        },
      }),
    });

    if (response.ok) {
      console.log("Order added successfully");
      modalRef.current.close();
      setStep(1);
    } else {
      console.error("Failed to add order");
    }
  }

  return (
    <Modal ref={modalRef}>
      {step === 1 && (
        <CartForm
          onSubmit={() => setStep(2)}
          onClose={() => modalRef.current.close()}
        />
      )}
      {step === 2 && (
        <CheckoutForm
          onBack={() => setStep((prev) => prev - 1)}
          onSubmit={(data) => postNewOrder(data)}
        />
      )}
    </Modal>
  );
}
