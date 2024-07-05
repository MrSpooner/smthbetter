import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.hero, className].join(" ")}>
      <div className={styles.atmosphere}>
        <div className={styles.slogan}>
          <div className={styles.div}>СПОКОЙНАЯ АТМОСФЕРА</div>
          <div className={styles.description}>
            <div className={styles.div1}>
              Для ценителей высокого сервиса и максимального комфорта
            </div>
          </div>
        </div>
        <div className={styles.booking}>
          <div className={styles.bookingButtons}>
            <div className={styles.button}>
              <b className={styles.b}>ЗАБРОНИРОВАТЬ ЗАЛ</b>
            </div>
            <div className={styles.button1}>
              <div className={styles.div2}>ЗАКАЗАТЬ ЗВОНОК</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
