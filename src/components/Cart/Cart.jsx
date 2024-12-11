/* eslint-disable react/prop-types */
import Button from "../Button/Button.jsx";
import CarbonNeutral from "../CarbonNeutral/CarbonNeutral.jsx";
import OrderTotalList from "../OrderTotalList/OrderTotalList.jsx";
import { motion } from "motion/react";

import styles from "./Cart.module.css";

function Cart({ handleConfirmOrder, handleDeselectDesert, selectedDesserts }) {
  const totalDesserts = selectedDesserts.reduce(
    (sum, dessert) => (sum += dessert.quantity),
    0
  );

  //for animations
  const cartVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.div
        variants={cartVariants}
        initial="hidden"
        animate="visible"
        className={styles.cartContainer}
      >
        {selectedDesserts.length > 0 ? (
          //Filled Cart
          <>
            <h2>Your Cart ({totalDesserts})</h2>
            <OrderTotalList
              type="cart"
              selectedDesserts={selectedDesserts}
              handleDeselectDesert={handleDeselectDesert}
            >
              <CarbonNeutral />
              <Button type="wide" handleConfirmOrder={handleConfirmOrder}>
                Confirm Order
              </Button>
            </OrderTotalList>
          </>
        ) : (
          //Empty Cart
          <>
            <h2>Your Cart (0)</h2>
            <div className={styles.imgContainer}>
              <img src="../../../public/assets/images/illustration-empty-cart.svg" />
            </div>
            <p className={styles.empty}>Your added items will appear here</p>
          </>
        )}
      </motion.div>
    </>
  );
}

export default Cart;
