import { useCartStore } from "../store/cartStore";

export default function MealItem({ data }) {
  const { addItem } = useCartStore();

  return (
    <div className='meal-item'>
      <img src={`http://localhost:3000/${data.image}`} alt='Sample' />
      <div className='meal-item__body'>
        <h3>{data.name}</h3>
        <div className='meal-item__price'>${data.price}</div>
        <div className='meal-item__description'>{data.description}</div>
        <div className='meal-item__actions'>
          <button
            onClick={() =>
              addItem({
                id: data.id,
                name: data.name,
                price: data.price,
                image: data.image,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
