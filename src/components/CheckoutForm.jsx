import { useRef } from "react";
import "./CheckoutForm.scss";

export default function CheckoutForm({ onBack, onSubmit }) {
  const fullName = useRef();
  const email = useRef();
  const street = useRef();
  const postalCode = useRef();
  const city = useRef();

  function handleSubmit() {
    onSubmit({
      name: fullName.current.value,
      email: email.current.value,
      street: street.current.value,
      "postal-code": postalCode.current.value,
      city: city.current.value,
    });
  }

  return (
    <div className='checkout-form'>
      <div className='checkout-form__header'>Checkout</div>
      <div className='checkout-form__amount'>Total Amount: $34.10</div>
      <div className='checkout-form__input'>
        <div className='input-group'>
          <label className='input-group__label'>Full Name</label>
          <input className='input-group__input' type='text' ref={fullName} />
        </div>
        <div className='input-group'>
          <label className='input-group__label'>E-Mail Address</label>
          <input className='input-group__input' type='text' ref={email} />
        </div>
        <div className='input-group'>
          <label className='input-group__label'>Street</label>
          <input className='input-group__input' type='text' ref={street} />
        </div>
        <div className='checkout-form__two-cols'>
          <div className='input-group'>
            <label className='input-group__label'>Postal Code</label>
            <input
              className='input-group__input'
              type='number'
              ref={postalCode}
            />
          </div>
          <div className='input-group'>
            <label className='input-group__label'>City</label>
            <input className='input-group__input' type='text' ref={city} />
          </div>
        </div>
      </div>

      <div className='checkout-form__actions'>
        <button onClick={onBack} className='btn back'>
          Back
        </button>
        <button onClick={handleSubmit} className='btn submit'>
          Submit Order
        </button>
      </div>
    </div>
  );
}
