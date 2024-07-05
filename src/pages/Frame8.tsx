import { FunctionComponent } from "react";
import Home1 from "./Home1";
import Frame7 from "./Frame7";
import Component6 from "../components/Component6";
import Component5 from "../components/Component5";
import Component4 from "../components/Component4";
import Component3 from "../components/Component3";
import Component2 from "../components/Component2";
import Component1 from "../components/Component1";
import Component from "../components/Component";
import styles from "./Frame8.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.desktop}>
      <div className={styles.home}>
        <Home1 />
        <Frame7 />
      </div>
      <Component6 />
      <Component5 />
      <Component4 />
      <Component3 />
      <Component2 />
      <Component1 />
      <Component />
    </div>
  );
};

export default Frame;
