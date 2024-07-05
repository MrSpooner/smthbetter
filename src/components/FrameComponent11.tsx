import { FunctionComponent } from "react";
import styles from "./FrameComponent11.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.amenities, className].join(" ")}>
      <div className={styles.amenitiesContent}>
        <div className={styles.amenitiesHeading}>
          <div className={styles.parent}>
            <div className={styles.div}>
              <p className={styles.p}>
                <span className={styles.span}>{`У НАС ЕСТЬ - `}</span>
                <span>ПРИНАДЛЕЖНОСТИ</span>
              </p>
              <p className={styles.p1}>
                <span>ДЛЯ УДОБСТВА</span>
                <span className={styles.span1}> ПОСЕЩЕНИЯ ЗАЛОВ</span>
              </p>
            </div>
            <div className={styles.div1}>
              <p className={styles.p2}>
                <span>{`У нас есть принадлежности для удобства посещения залов - разовые: `}</span>
                <span className={styles.span2}>тапочки,</span>
              </p>
              <p className={styles.p3}>
                <span className={styles.span3}>
                  чистые полотенца и простыни
                </span>
                <span>. Они не навязываются, вы можете прийти со своим!</span>
              </p>
            </div>
          </div>
          <div className={styles.div2}>“</div>
        </div>
        <div className={styles.amenityImages}>
          <div className={styles.imageTrio}>
            <div className={styles.imgContent}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
            </div>
          </div>
          <div className={styles.imageTrio1}>
            <div className={styles.imgContent1}>
              <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
            </div>
          </div>
          <div className={styles.imageTrio2}>
            <div className={styles.imgContent2}>
              <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
