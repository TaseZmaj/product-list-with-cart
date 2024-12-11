/* eslint-disable react/prop-types */
import styles from "./Button.module.css";

function Button({
  active,
  dessert,
  handleSelectDessert,
  type,
  children,
  handleIncrementQuantity,
  handleDecrementQuantity,
  handleConfirmOrder,
  quantity,
}) {
  if (type === "addCart" && active) {
    return (
      <button
        className={`${styles.btn} ${styles.addCart} ${styles.quantityBtn}`}
      >
        <img
          onClick={() => handleDecrementQuantity(dessert)}
          src="../../../public/assets/images/icon-decrement-quantity.svg"
        />
        <p>{quantity}</p>
        <img
          onClick={() => handleIncrementQuantity(dessert)}
          src="../../../public/assets/images/icon-increment-quantity.svg"
        />
      </button>
    );
  }

  if (type === "addCart" && !active) {
    return (
      <button
        onClick={() => handleSelectDessert(dessert, quantity)}
        className={`${styles.btn} ${styles.addCart}`}
      >
        <img src="../../../public/assets/images/icon-add-to-cart.svg" />
        <p className={styles.add}>Add to Cart</p>
      </button>
    );
  }

  if (type === "wide") {
    return (
      <button
        onClick={() => handleConfirmOrder()}
        className={`${styles.btn} ${styles.wide}`}
      >
        <p className={styles.counter}>{children}</p>
      </button>
    );
  }
}

export default Button;
