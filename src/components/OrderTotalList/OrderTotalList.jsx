/* eslint-disable react/prop-types */
import CartItem from "../CartItem/CartItem.jsx";

import styles from "./OrderTotalList.module.css";

function OrderTotalList({
  handleDeselectDesert,
  selectedDesserts,
  type,
  children,
}) {
  const totalPrice = selectedDesserts.reduce(
    (sum, dessert) => sum + dessert.price * dessert.quantity,
    0
  );

  return (
    <div className={styles.orderTotalContainer}>
      <ul className={`${type === "modal" && styles.cartList}`}>
        {selectedDesserts.map((dessert) => (
          <CartItem type={type} key={dessert.name} dessert={dessert}>
            {type === "cart" && (
              <img
                onClick={() => handleDeselectDesert(dessert.name)}
                src="../../../public/assets/images/icon-remove-item.svg"
              />
            )}
            {type === "modal" &&
              `$${(dessert.price * dessert.quantity).toFixed(2)}`}
          </CartItem>
        ))}
      </ul>
      <div>
        <div
          className={`${type === "modal" && styles.cartList} ${styles.info}`}
        >
          <p>Order Total</p>
          <h2>${totalPrice.toFixed(2)}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}

export default OrderTotalList;
