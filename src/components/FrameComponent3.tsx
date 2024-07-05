import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.hallList, className].join(" ")}>
      <div className={styles.hallItem}>
        <div className={styles.hallDetails}>
          <div className={styles.div}>Наименование зала</div>
          <div className={styles.hallRating}>
            <div className={styles.ratingStars}>
              <div className={styles.emptyStar}>4,97</div>
            </div>
            <div className={styles.reviewCount}>
              <img
                className={styles.svgStarsIcon}
                alt=""
                src="/svg-stars.svg"
              />
            </div>
            <div className={styles.review}>
              <div className={styles.div1}>124 отзыва</div>
            </div>
          </div>
        </div>
        <div className={styles.div2}>
          <p className={styles.p}>Самый большой зал с большим бассейном,</p>
          <p className={styles.p1}>бильярдным залом, для большой компании</p>
        </div>
        <div className={styles.hallCapacity}>
          <div className={styles.capacityIcons}>
            <img className={styles.capacityIcon} alt="" src="/vector1.svg" />
            <div className={styles.capacityValue}>
              <div className={styles.div3}>До 10 человек</div>
            </div>
          </div>
          <div className={styles.hallPrice}>
            <img className={styles.priceIcon} alt="" src="/vector11.svg" />
            <div className={styles.priceValue}>
              <div className={styles.div4}>3 500 ₽ - час</div>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.div5}>ЗАБРОНИРОВАТЬ</div>
        </div>
      </div>
      <div className={styles.hallGallery}>
        <div className={styles.imgContent}>
          <img
            className={styles.imgContentIcon}
            alt=""
            src="/img-content@2x.png"
          />
          <img className={styles.flippingIcon} alt="" src="/-flipping@2x.png" />
          <img
            className={styles.flippingIcon1}
            alt=""
            src="/-flipping1@2x.png"
          />
        </div>
      </div>
      <div className={styles.hallItem1}>
        <div className={styles.parent}>
          <div className={styles.div6}>Наименование зала</div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.emptyWrapper}>
                <div className={styles.empty}>4,97</div>
              </div>
              <img
                className={styles.svgStarsIcon1}
                alt=""
                src="/svg-stars.svg"
              />
            </div>
            <div className={styles.wrapper}>
              <div className={styles.div7}>124 отзыва</div>
            </div>
          </div>
        </div>
        <div className={styles.div8}>
          <p className={styles.p2}>Самый большой зал с большим бассейном,</p>
          <p className={styles.p3}>бильярдным залом, для большой компании</p>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <div className={styles.container}>
              <div className={styles.div9}>До 10 человек</div>
            </div>
          </div>
          <div className={styles.vectorGroup}>
            <img className={styles.vectorIcon1} alt="" src="/vector11.svg" />
            <div className={styles.frame}>
              <div className={styles.div10}>3 500 ₽ - час</div>
            </div>
          </div>
        </div>
        <div className={styles.button1}>
          <div className={styles.div11}>ЗАБРОНИРОВАТЬ</div>
        </div>
      </div>
      <div className={styles.imgContent1}>
        <img
          className={styles.imgContentIcon1}
          alt=""
          src="/img-content1@2x.png"
        />
        <img className={styles.flippingIcon2} alt="" src="/-flipping@2x.png" />
        <img className={styles.flippingIcon3} alt="" src="/-flipping1@2x.png" />
      </div>
    </div>
  );
};

export default FrameComponent3;
