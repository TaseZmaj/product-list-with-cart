/* eslint-disable react/prop-types */
import styles from "./CartItem.module.css";

function CartItem({ dessert, type, children }) {
  const { name, price, quantity } = dessert;

  return (
    <li className={styles.cartItem}>
      <div className={styles.info}>
        <div>
          <p>{name}</p>
        </div>
        <div>
          <span className={styles.amount}>x{quantity}</span>
          <span className={styles.singularPrice}>@ ${price.toFixed(2)}</span>
          {type === "cart" && (
            <span className={styles.total}>
              ${Number(price * quantity).toFixed(2)}
            </span>
          )}
        </div>
      </div>
      <div className={styles.btnContainer}>{children}</div>
    </li>
  );
}

export default CartItem;
