import { FunctionComponent } from "react";
import styles from "./FrameComponent21.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.galleryNavigation, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.parent}>
            <div className={styles.div}>
              <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
            </div>
            <div className={styles.div1}>
              <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
            </div>
          </div>
        </div>
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
    </div>
  );
};

export default FrameComponent2;
