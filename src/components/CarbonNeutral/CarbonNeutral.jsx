import styles from "./CarbonNeutral.module.css";

function CarbonNeutral() {
  return (
    <div className={styles.carbonContainer}>
      <img src="../../../public/assets/images/icon-carbon-neutral.svg" />
      <p>
        This is a <b>carbon neutral</b> delivery
      </p>
    </div>
  );
}

export default CarbonNeutral;
