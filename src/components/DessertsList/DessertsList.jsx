/* eslint-disable react/prop-types */
import DessertItem from "../DessertItem/DessertItem";
import { motion } from "motion/react";

import styles from "./DessertsList.module.css";

function DessertsList({
  handleDeselectDesert,
  selectedDesserts,
  handleSelectDessert,
  desserts,
  resetDessertQuantity,
}) {
  //for animations
  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const headerVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 100,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={styles.dessertsContainer}>
      <motion.h1 variants={headerVariants} initial="hidden" animate="visible">
        Desserts
      </motion.h1>
      <motion.ul
        variants={ulVariants}
        viewport={{ once: true, amount: 0.5 }}
        initial="hidden"
        animate="visible"
      >
        {desserts.map((dessert) => (
          <DessertItem
            resetDessertQuantity={resetDessertQuantity}
            variants={itemVariants}
            selectedDesserts={selectedDesserts}
            handleSelectDessert={handleSelectDessert}
            handleDeselectDesert={handleDeselectDesert}
            dessert={dessert}
            key={dessert.name}
          >
            <img src={dessert.image.desktop} alt={dessert.name} />
          </DessertItem>
        ))}
      </motion.ul>
    </div>
  );
}

export default DessertsList;
