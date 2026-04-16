import styles from "./Fallback.module.css";

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div className={styles.errorContainer} role="alert">
      <p className={styles.text}>Что то пошло не так:</p>
      <pre className={styles.errorMsg}>{error.message}</pre>
      <button className={styles.tryAgainBtn} onClick={resetErrorBoundary}>
        Попытайтесь снова
      </button>
    </div>
  );
}

export default Fallback;
