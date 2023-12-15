import { useCartStore } from "../store/cartStore";

export default function CartForm({ onClose, onSubmit }) {
  const { items, totalPrice, addItem, decreaseItem } = useCartStore();

  return (
    <div className='cart-form'>
      <div className='cart-form__header'>
        <h1>Your Cart</h1>
      </div>
      <div className='cart-form__body'>
        <div className='cart-form__data-list'>
          {items.map((item) => (
            <div className='cart-form__data-row' key={item.id}>
              <p>
                {item?.name} -{" "}
                <span style={{ fontWeight: "bold" }}>${item?.price}</span> -{" "}
                <span>{item?.quantity}</span>
              </p>
              <div className='cart-form__data-quantity'>
                <button onClick={() => decreaseItem(item.id)}>-</button>
                <div>{item.quantity}</div>
                <button
                  onClick={() =>
                    addItem({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: item.image,
                    })
                  }
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className='cart-form__total-price'>
          <p>${totalPrice}</p>
        </div>
      </div>
      <div className='cart-form__actions'>
        <button className='cart-form__close-btn' onClick={onClose}>
          Close
        </button>
        <button className='cart-form__checkout-btn' onClick={onSubmit}>
          Go to Checkout
        </button>
      </div>
    </div>
  );
}
