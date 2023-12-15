import "./CheckoutForm.scss";

export default function CheckoutForm({ onBack, onSubmit }) {
  return (
    <div className='checkout-form'>
      <div className='checkout-form__header'>Checkout</div>
      <div className='checkout-form__amount'>Total Amount: $34.10</div>
      <div className='checkout-form__input'>
        <div className='input-group'>
          <label className='input-group__label'>Full Name</label>
          <input className='input-group__input' type='text' />
        </div>
        <div className='input-group'>
          <label className='input-group__label'>E-Mail Address</label>
          <input className='input-group__input' type='text' />
        </div>
        <div className='input-group'>
          <label className='input-group__label'>Street</label>
          <input className='input-group__input' type='text' />
        </div>
        <div className='checkout-form__two-cols'>
          <div className='input-group'>
            <label className='input-group__label'>Postal Code</label>
            <input className='input-group__input' type='number' />
          </div>
          <div className='input-group'>
            <label className='input-group__label'>City</label>
            <input className='input-group__input' type='text' />
          </div>
        </div>
      </div>

      <div className='checkout-form__actions'>
        <button onClick={onBack} className='btn back'>
          Back
        </button>
        <button onClick={onSubmit} className='btn submit'>
          Submit Order
        </button>
      </div>
    </div>
  );
}
