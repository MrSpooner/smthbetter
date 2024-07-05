import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponentType = {
  className?: string;
  image10?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  image10,
  prop,
  prop1,
  prop2,
}) => {
  return (
    <div className={[styles.promotionCardItems, className].join(" ")}>
      <div className={styles.promotionCardComponents}>
        <img className={styles.image10Icon} alt="" src={image10} />
        <div className={styles.div}>
          <p className={styles.p}>{prop}</p>
          <p className={styles.p1}>{prop1}</p>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.div1}>{prop2}</div>
      </div>
    </div>
  );
};

export default FrameComponent;
