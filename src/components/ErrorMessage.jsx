import styles from "./ErrorMessage.module.css";

function ErrorMessage({ type, message }) {
  return (
    <div className={styles.container}>
      <span className={styles.text}>
        Ошибка {type}! {message}
      </span>
    </div>
  );
}

export default ErrorMessage;
