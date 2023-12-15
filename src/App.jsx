import { useEffect, useRef, useState } from "react";
import MealItem from "./components/MealItem";
import Navbar from "./components/Navbar";
import CartFormModal from "./components/CartFormModal";

function App() {
  const [meals, setMeals] = useState([]);
  const modal = useRef(null);

  async function getMeals() {
    const response = await fetch("http://localhost:3000/meals");
    const data = await response.json();
    setMeals(data);
  }

  async function addOrder() {
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        order: {
          customer: {
            email: "john.doe@example.com",
            name: "John Doe",
            street: "123 Main St",
            "postal-code": "12345",
            city: "Sample City",
          },
          items: [
            {
              id: "m1",
              name: "Sample Meal",
              price: "9.99",
              description: "A delicious sample meal",
              image: "path/to/image.jpg",
            },
            {
              id: "m2",
              name: "Another Sample Meal",
              price: "12.99",
              description: "Another tasty sample meal",
              image: "path/to/another-image.jpg",
            },
          ],
        },
      }),
    });

    if (response.ok) {
      const orderData = await response.json();

      if (orderData && orderData.items && orderData.items.length > 0) {
        console.log("Order added successfully");
      } else {
        console.error("Failed to add order: Missing or empty 'items' property");
      }
    } else {
      console.error("Failed to add order");
    }
  }

  useEffect(() => {
    getMeals();
  }, []);

  function handleShowCartModal() {
    modal.current.open();
  }

  return (
    <>
      <Navbar handleShowCart={handleShowCartModal} />
      <CartFormModal modalRef={modal} />
      <div id='meals'>
        {meals.map((meal) => (
          <MealItem key={meal.id} data={meal} />
        ))}
      </div>
    </>
  );
}

export default App;
