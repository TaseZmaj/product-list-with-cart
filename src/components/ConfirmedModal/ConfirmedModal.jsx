/* eslint-disable react/prop-types */
import Button from "../Button/Button.jsx";
import OrderTotalList from "../OrderTotalList/OrderTotalList.jsx";
import { motion } from "motion/react";

import styles from "./ConfirmedModal.module.css";

function ConfirmedModal({ handleConfirmOrder, selectedDesserts }) {
  //for animations
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.15,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };
  const modalVariants = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.22,
        ease: "easeOut",
      },
    },
    exit: {
      y: 200,
      opacity: 0,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      className={styles.backdrop}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        className={styles.confirmedContainer}
      >
        <div>
          <img src="../../../public/assets/images/icon-order-confirmed.svg" />
          <h1>Order Confirmed</h1>
          <p>We hope you enjoy your food!</p>
        </div>
        <OrderTotalList type="modal" selectedDesserts={selectedDesserts}>
          <Button type="wide" handleConfirmOrder={handleConfirmOrder}>
            Start New Order
          </Button>
        </OrderTotalList>
      </motion.div>
    </motion.div>
  );
}

export default ConfirmedModal;
