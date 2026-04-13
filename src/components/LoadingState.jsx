import styles from "./LoadingState.module.css";

function Loading() {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Загрузка...</span>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loading;
