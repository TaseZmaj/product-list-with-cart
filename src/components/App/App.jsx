import Cart from "../Cart/Cart.jsx";
import DessertsList from "../DessertsList/DessertsList.jsx";
import ConfirmedModal from "../ConfirmedModal/ConfirmedModal.jsx";
import data from "../../data.json";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

import styles from "./App.module.css";

function App() {
  const desserts = data;
  const [selectedDesserts, setSelectedDesserts] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [resetDessertQuantity, setResetDessertQuantity] = useState(false);

  function handleSelectDessert(dessert, quantity) {
    const exists = selectedDesserts.some(
      (currDes) => currDes.name === dessert.name
    );
    //if it doesn't exist -> add it
    if (!exists) {
      setSelectedDesserts([
        ...selectedDesserts,
        { ...dessert, quantity: quantity },
      ]);
    }
    //if it exists -> update it
    else {
      const filterredSelectedDesserts = selectedDesserts.filter(
        (currDes) => currDes.name !== dessert.name
      );
      setSelectedDesserts([
        ...filterredSelectedDesserts,
        { ...dessert, quantity: quantity },
      ]);
    }
  }

  function handleDeselectDesert(delName) {
    setSelectedDesserts(
      selectedDesserts.filter((dessert) => dessert.name !== delName)
    );
  }

  //if the function is not async, the handleResetDessertQuantity will not trigger as intended ->
  //the resetDessertQuantity is a state which triggers a rerender of all the DessertItem components,
  //if the handleResetDessertQuantity is not async, the handleResetDessertQuantity will not work as expected,
  //the quantities will not be reset because the value of resetDessertQuantity will change from
  //false to true to false "too fast".  At least this is how I interprit what's happening
  async function handleResetDessertQuantity() {
    setResetDessertQuantity((v) => !v);
  }

  async function handleConfirmOrder() {
    //"confirm order" button
    if (!showConfirmModal) {
      setShowConfirmModal(true);
    }
    //"start new order" button
    else {
      setShowConfirmModal(false);
      setSelectedDesserts([]);
      await handleResetDessertQuantity();
      handleResetDessertQuantity();
    }
  }

  return (
    <>
      <AnimatePresence>
        {showConfirmModal && (
          <ConfirmedModal
            selectedDesserts={selectedDesserts}
            handleConfirmOrder={handleConfirmOrder}
          />
        )}
      </AnimatePresence>
      <div className={styles.container}>
        <div>
          <DessertsList
            desserts={desserts}
            selectedDesserts={selectedDesserts}
            resetDessertQuantity={resetDessertQuantity}
            handleSelectDessert={handleSelectDessert}
            handleDeselectDesert={handleDeselectDesert}
          />
        </div>
        <div>
          <Cart
            selectedDesserts={selectedDesserts}
            handleConfirmOrder={handleConfirmOrder}
            handleDeselectDesert={handleDeselectDesert}
          />
        </div>
      </div>
    </>
  );
}

export default App;
