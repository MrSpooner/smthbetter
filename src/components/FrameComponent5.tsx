import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.homeInfo, className].join(" ")}>
      <div className={styles.socialLinks}>
        <div className={styles.logoContainer}>
          <b className={styles.logotip}>LOGOTIP</b>
        </div>
        <div className={styles.contacts}>
          <div className={styles.address}>
            <div className={styles.wa}>
              <img className={styles.whatsappIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.telegram}>
              <div className={styles.tg}>
                <img
                  className={styles.telegramIcon}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <div className={styles.onlineContainer}>
              <p className={styles.online}>
                <span className={styles.online1}>
                  <span className={styles.online2}>Online,</span>
                </span>
                <span>
                  <span className={styles.span}>{` `}</span>
                  <span>пишите</span>
                </span>
              </p>
              <p className={styles.p}>
                <span>
                  <span>ответим сразу</span>
                </span>
              </p>
            </div>
          </div>
          <div className={styles.location}>
            <div className={styles.div}>Софьи Перовской, 13/5, Уфа</div>
            <div className={styles.locationLabel}>
              <div className={styles.div1}>Наше местоположение</div>
            </div>
          </div>
          <div className={styles.workingHours}>
            <div className={styles.empty}>
              <div className={styles.empty1}>8 904 739-19-75</div>
            </div>
            <div className={styles.div2}>Круглосуточная работа</div>
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.navItems}>
          <div className={styles.navLinks}>
            <div className={styles.div3}>ГЛАВНАЯ</div>
          </div>
          <div className={styles.navLinks1} />
          <div className={styles.navLinks2}>
            <div className={styles.div4}>О САУНЕ</div>
          </div>
          <div className={styles.navLinks3} />
          <div className={styles.navLinks4}>
            <div className={styles.div5}>АКЦИИ</div>
          </div>
          <div className={styles.navLinks5} />
          <div className={styles.navLinks6}>
            <div className={styles.div6}>КОНТАКТЫ</div>
          </div>
          <div className={styles.navLinks7} />
          <div className={styles.navLinks8}>
            <div className={styles.div7}>БРОНЬ САУН</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
