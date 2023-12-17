import { useRef } from "react";
import MealItem from "./components/MealItem";
import Navbar from "./components/Navbar";
import CartFormModal from "./components/CartFormModal";
import useHttp from "./hooks/useHttp";

const requestConfig = {};

function App() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);
  const modal = useRef(null);

  function handleShowCartModal() {
    modal.current.open();
  }

  if (isLoading) {
    return <p>Fetching the meals...</p>;
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
