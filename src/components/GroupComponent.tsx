import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.advantagesCardsParent, className].join(" ")}>
      <img
        className={styles.advantagesCardsIcon}
        loading="lazy"
        alt=""
        src="/frame-4.svg"
      />
      <div className={styles.advantagesContent}>
        <div className={styles.div3}>
          <p className={styles.p}>Современный</p>
          <p className={styles.p1}>ремонт</p>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
