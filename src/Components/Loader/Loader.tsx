import loadingGif from "../../assets/gifs/loading.gif";

import styles from "./Loader.module.scss";

const Loader = function () {
  return (
    <div className={styles.loaderWrapper}>
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
};

export default Loader;
