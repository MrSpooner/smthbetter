import { FunctionComponent } from "react";
import styles from "./Frame7.module.css";

const Frame7: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.div1}>
        <div className={styles.header}>
          <div className={styles.div2}>НАШИ ЗАЛЫ</div>
        </div>
      </div>
      <img className={styles.lineIcon} alt="" src="/line.svg" />
      <div className={styles.div3}>
        <div className={styles.div4}>“</div>
      </div>
      <div className={styles.div5}>
        <div className={styles.header1}>
          <div className={styles.div6}>
            <p className={styles.p}>
              <span className={styles.span}>{`У НАС ЕСТЬ - `}</span>
              <span>ПРИНАДЛЕЖНОСТИ</span>
            </p>
            <p className={styles.p1}>
              <span>ДЛЯ УДОБСТВА</span>
              <span className={styles.span1}> ПОСЕЩЕНИЯ ЗАЛОВ</span>
            </p>
          </div>
        </div>
        <div className={styles.div7}>
          <div className={styles.imgContent}>
            <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          </div>
        </div>
        <div className={styles.div8}>
          <div className={styles.imgContent1}>
            <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          </div>
        </div>
        <div className={styles.div9}>
          <div className={styles.imgContent2}>
            <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
          </div>
        </div>
        <div className={styles.title}>
          <div className={styles.div10}>
            <p className={styles.p2}>
              <span>{`У нас есть принадлежности для удобства посещения залов - разовые: `}</span>
              <span className={styles.span2}>тапочки,</span>
            </p>
            <p className={styles.p3}>
              <span className={styles.span3}>чистые полотенца и простыни</span>
              <span>. Они не навязываются, вы можете прийти со своим!</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.contentCard2}>
        <div className={styles.imgContent3}>
          <img
            className={styles.imgContentIcon}
            alt=""
            src="/img-content@2x.png"
          />
          <img
            className={styles.flippingIcon}
            alt=""
            src="/-flipping1@2x.png"
          />
          <img
            className={styles.flippingIcon1}
            alt=""
            src="/-flipping@2x.png"
          />
        </div>
        <div className={styles.header2}>
          <div className={styles.div11}>Наименование зала</div>
        </div>
        <div className={styles.title1}>
          <div className={styles.div12}>
            <p className={styles.p4}>Самый большой зал с большим бассейном,</p>
            <p className={styles.p5}>бильярдным залом, для большой компании</p>
          </div>
        </div>
        <div className={styles.reviews}>
          <div className={styles.div13}>4,97</div>
          <div className={styles.div14}>124 отзыва</div>
          <img className={styles.svgStarsIcon} alt="" src="/svg-stars.svg" />
        </div>
        <div className={styles.contentInf}>
          <div className={styles.people}>
            <div className={styles.div15}>До 10 человек</div>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </div>
          <div className={styles.price}>
            <div className={styles.div16}>3 500 ₽ - час</div>
            <img className={styles.vectorIcon1} alt="" src="/vector11.svg" />
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.div17}>ЗАБРОНИРОВАТЬ</div>
        </div>
      </div>
      <div className={styles.contentCard3}>
        <div className={styles.imgContent4}>
          <img
            className={styles.imgContentIcon1}
            alt=""
            src="/img-content1@2x.png"
          />
          <img
            className={styles.flippingIcon2}
            alt=""
            src="/-flipping1@2x.png"
          />
          <img
            className={styles.flippingIcon3}
            alt=""
            src="/-flipping@2x.png"
          />
        </div>
        <div className={styles.header3}>
          <div className={styles.div18}>Наименование зала</div>
        </div>
        <div className={styles.title2}>
          <div className={styles.div19}>
            <p className={styles.p6}>Самый большой зал с большим бассейном,</p>
            <p className={styles.p7}>бильярдным залом, для большой компании</p>
          </div>
        </div>
        <div className={styles.reviews1}>
          <div className={styles.div20}>4,97</div>
          <div className={styles.div21}>124 отзыва</div>
          <img className={styles.svgStarsIcon1} alt="" src="/svg-stars.svg" />
        </div>
        <div className={styles.contentInf1}>
          <div className={styles.people1}>
            <div className={styles.div22}>До 10 человек</div>
            <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
          </div>
          <div className={styles.price1}>
            <div className={styles.div23}>3 500 ₽ - час</div>
            <img className={styles.vectorIcon3} alt="" src="/vector11.svg" />
          </div>
        </div>
        <div className={styles.button1}>
          <div className={styles.div24}>ЗАБРОНИРОВАТЬ</div>
        </div>
      </div>
      <div className={styles.div25}>
        <div className={styles.div26}>
          <img className={styles.vectorIcon4} alt="" src="/vector2.svg" />
        </div>
        <div className={styles.div27}>
          <img className={styles.vectorIcon5} alt="" src="/vector3.svg" />
        </div>
      </div>
    </div>
  );
};

export default Frame7;
