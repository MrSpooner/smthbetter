import { FunctionComponent } from "react";
import styles from "./Component2.module.css";

const Component2: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.div, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.div1}>НАША ФОТОГАЛЕРЕЯ</div>
      </div>
      <div className={styles.content}>
        <img className={styles.imgIcon} alt="" src="/img@2x.png" />
        <img className={styles.imgIcon1} alt="" src="/img@2x.png" />
        <img className={styles.imgIcon2} alt="" src="/img@2x.png" />
        <div className={styles.div2}>
          <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
        </div>
        <img className={styles.icon} alt="" src="/@2x.png" />
      </div>
      <div className={styles.div3}>“</div>
      <div className={styles.div4}>“</div>
    </div>
  );
};

export default Component2;
