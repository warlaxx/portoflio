// components/Preloader.js

import React from "react";
import styles from "./Preloader.module.css";

const Preloader: React.FC = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.loader1}>
        <p className="text-gray">Abdallah Abdallaoui-maane</p>
      </div>
      <div className={styles.loader}>
        <p className="text-greenlight">Développeur Vue.js</p>
      </div>
    </div>
  );
};

export default Preloader;
