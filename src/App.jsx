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
