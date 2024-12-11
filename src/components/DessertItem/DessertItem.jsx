/* eslint-disable react/prop-types */
import Button from "../Button/Button.jsx";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

import styles from "./DessertItem.module.css";

function DessertItem({
  selectedDesserts,
  handleSelectDessert,
  handleDeselectDesert,
  dessert,
  children,
  variants,
  resetDessertQuantity,
}) {
  const { name, category, price } = dessert;
  const [quantity, setQuantity] = useState(1);

  const activeCheck = selectedDesserts.some(
    (currDes) => currDes.name === dessert.name
  );

  useEffect(() => {
    if (resetDessertQuantity) setQuantity(1);
  }, [resetDessertQuantity]);

  //Because javascript is asynchronous, handleSelectDessert and handleSelectDessert
  //DON'T wait for the setQuantity to finish, hence - the bug that occurs -> the
  //counter was 1 increment too late
  function handleIncrementQuantity(dessert) {
    const newQuantity = quantity + 1;
    handleSelectDessert(dessert, newQuantity); //update the selected Desserts
    setQuantity(newQuantity);

    //WON'T WORK
    // setQuantity((q) => q + 1);
    // handleSelectDesert(dessert, quantity);
  }
  function handleDecrementQuantity(dessert) {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      handleSelectDessert(dessert, newQuantity);
      setQuantity(newQuantity);

      //WON'T WORK
      // setQuantity((q) => q - 1);
      // handleSelectDesert(dessert, quantity);
    } else {
      handleDeselectDesert(dessert.name); //if quantity is 0 -> remove from selected
    }
  }

  return (
    <motion.li
      variants={variants}
      className={`${styles.dessertItem} ${activeCheck ? "active" : ""}`}
    >
      <div className={styles.imgContainer}>{children}</div>

      <div className={styles.info}>
        <p className={styles.category}>{category}</p>
        <h2>{name}</h2>
        <p className={styles.price}>${Number(price).toFixed(2)}</p>
        <Button
          type="addCart"
          active={activeCheck}
          handleSelectDessert={handleSelectDessert}
          dessert={dessert}
          quantity={quantity}
          handleIncrementQuantity={handleIncrementQuantity}
          handleDecrementQuantity={handleDecrementQuantity}
        />
      </div>
    </motion.li>
  );
}

export default DessertItem;
