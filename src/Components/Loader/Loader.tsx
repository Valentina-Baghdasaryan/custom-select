import styles from "./Loader.module.scss";
import loadingGif from "../../assets/gifs/loading.gif"

const Loader = function () {
  return (
    <div className={styles.loaderWrapper}>
      <img src={loadingGif} alt="loading gif"/>
    </div>
  );
};

export default Loader;
