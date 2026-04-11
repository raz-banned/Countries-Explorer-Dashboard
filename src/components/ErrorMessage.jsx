import "./Error.css";

function ErrorMessage({ type, message }) {
  return (
    <div className="error-container">
      <span className="error-message">
        Ошибка {type}! {message}
      </span>
    </div>
  );
}

export default ErrorMessage;
