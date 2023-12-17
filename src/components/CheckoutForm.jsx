import "./CheckoutForm.scss";

export default function CheckoutForm({ onBack, onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());

    console.log(customerData);
    onSubmit(customerData);
  }

  return (
    <form className='checkout-form' onSubmit={handleSubmit}>
      <div className='checkout-form__header'>Checkout</div>
      <div className='checkout-form__amount'>Total Amount: $34.10</div>

      <div className='checkout-form__input'>
        <div className='input-group'>
          <label className='input-group__label'>Full Name</label>
          <input
            className='input-group__input'
            type='text'
            id='name'
            name='name'
          />
        </div>
        <div className='input-group'>
          <label className='input-group__label'>E-Mail Address</label>
          <input
            className='input-group__input'
            type='text'
            id='email'
            name='email'
          />
        </div>
        <div className='input-group'>
          <label className='input-group__label'>Street</label>
          <input
            className='input-group__input'
            type='text'
            id='street'
            name='street'
          />
        </div>
        <div className='checkout-form__two-cols'>
          <div className='input-group'>
            <label className='input-group__label'>Postal Code</label>
            <input
              className='input-group__input'
              type='number'
              id='postal-code'
              name='postal-code'
            />
          </div>
          <div className='input-group'>
            <label className='input-group__label'>City</label>
            <input
              className='input-group__input'
              type='text'
              id='city'
              name='city'
            />
          </div>
        </div>
      </div>

      <div className='checkout-form__actions'>
        <button onClick={onBack} className='btn back'>
          Back
        </button>
        <button type='submit' className='btn submit'>
          Submit Order
        </button>
      </div>
    </form>
  );
}
